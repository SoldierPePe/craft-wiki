---
title: الأتمتة ووكلاء الذكاء الاصطناعي
description: استخدم أداة سطر الأوامر في PhotoCraft لتحويل الصور وتحريرها على دفعات، واربط بها مساعد ذكاء اصطناعي عبر MCP.
sidebar:
  order: 5
---

كل عنصر قائمة وكل أداة وكل نافذة في PhotoCraft تشغّل أمراً. وأداة سطر الأوامر `photocraft-cli` تشغّل الأوامر نفسها دون أن تفتح نافذة. يمكنك استخدامها لتحويل الصور وتحريرها في السكربتات، أو لربط مساعد ذكاء اصطناعي بها عبر MCP (بروتوكول سياق النموذج)، فيستطيع المساعد أن يفتح الصور ويحرّرها ويحفظها نيابة عنك.

لا يتضمن PhotoCraft نموذج ذكاء اصطناعي، ولا يحتاج إلى واحد. فالمساعد تطبيق منفصل تختاره أنت، مثل Claude Code أو أي عميل MCP آخر.

## العثور على أداة سطر الأوامر

| طريقة التثبيت | مكان `photocraft-cli` |
| --- | --- |
| مثبّت Windows | `%LOCALAPPDATA%\Programs\ArtCraft\PhotoCraft\photocraft-cli.exe` (إذا ثُبّت لحسابك) أو `C:\Program Files\ArtCraft\PhotoCraft\photocraft-cli.exe` (إذا ثُبّت للجميع). ولا يُضاف إلى `PATH`. |
| النسخة المحمولة لنظام Windows | بجانب `photocraft.exe` |
| macOS | تنزيل منفصل: `photocraft-cli-<ver>-macos-universal.zip` في [أحدث إصدار](https://github.com/storytold/photocraft/releases/latest). وهو موقّع وموثّق. |
| حزم `.deb` و`.rpm` على Linux | `/usr/bin/photocraft-cli` |
| AppImage على Linux | شغّل ملف AppImage مع `--cli` أولاً، مثلاً `./photocraft-<ver>-linux-x86_64.AppImage --cli --help` |

شغّل `photocraft-cli --help` لترى كل الأوامر الفرعية، و`photocraft-cli <subcommand> --help` لترى خيارات أي منها.

## التحويل والتحرير من سطر الأوامر

| الأمر الفرعي | ما يفعله |
| --- | --- |
| `convert` | يفتح ملفاً واحداً ويحفظه بصيغة أخرى |
| `info` | يطبع حجم المستند ونمط ألوانه وعمقه وطبقاته |
| `run` | يفتح مستنداً أو ينشئه، ويشغّل عليه أوامر، ويحفظ النتيجة |
| `batch` | يطبّق إجراءً مسجّلاً على كل ملف في مجلد |
| `droplet` | يشغّل droplet من PhotoCraft على ملفات أو مجلدات |
| `commands` | يسرد كل الأوامر وإعداداتها |
| `mcp` | يشغّل خادم MCP لمساعد الذكاء الاصطناعي |

مثلاً، لزيادة حدة ملف PSD، وإضافة طبقة تعديل منحنيات، وحفظ النتيجة بصيغة PNG:

```bash
photocraft-cli run wave.psd \
  --cmd filter.sharpen.smartSharpen --params '{"amount":80}' \
  --cmd layer.newAdjustmentLayer.curves --params '{"points":[[0,0],[64,48],[192,212],[255,255]]}' \
  --out wave-final.png
```

لتعرف اسم أمر وإعداداته، شغّل `photocraft-cli commands`.

## ربط مساعد ذكاء اصطناعي

شغّل خادم MCP مع مجلد يُسمح للمساعد بالقراءة منه ومجلد يُسمح له بالكتابة فيه:

```bash
photocraft-cli mcp --automation-read-root /path/to/project --automation-write-root /path/to/project
```

معظم مساعدي الذكاء الاصطناعي يشغّلون الخادم بأنفسهم. مع Claude Code مثلاً:

```bash
claude mcp add photocraft -- photocraft-cli mcp --automation-read-root /path/to/project --automation-write-root /path/to/project
```

ويأخذ عملاء MCP الآخرون الأمر والمعاملات نفسها في ملفات إعداداتهم. على Windows، أعطِ المسار الكامل إلى `photocraft-cli.exe`، لأنه ليس في `PATH`.

يستطيع المساعد بعدها أن يسرد أوامر PhotoCraft، ويفتح المستندات، ويشغّل الأوامر، ويفحص الطبقات والسجل، ويصيّر معاينة ليتحقق من عمله.

:::caution
يستطيع المساعد قراءة أي ملف داخل مجلد القراءة، وإنشاء ملفات الصور والمستندات أو استبدالها داخل مجلد الكتابة. وقد تحتوي المستندات على نص، مثل أسماء الطبقات، يحاول توجيه المساعد. أعطه مجلداً مخصصاً بدلاً من مجلد المنزل كله، واحتفظ بنسخ من الملفات التي تهمك.
:::

دون `--automation-read-root` و`--automation-write-root` لا يستطيع المساعد قراءة أي ملف على حاسوبك ولا كتابته إطلاقاً.

## التحكم في التطبيق المفتوح

يستطيع المساعد أيضاً أن يعمل في نافذة PhotoCraft المفتوحة أمامك، عبر اتصال خاص على حاسوبك أنت. هذا الوضع مخصص للمطورين، فراجع [بروتوكول التحكم](https://github.com/storytold/photocraft/blob/main/docs/control-protocol.md) لتعرف كيف تضبطه.

لمنع الوكلاء من الاتصال بالتطبيق، أوقف **السماح بتحكم الوكيل** في **تحرير › التفضيلات › تكاملات الذكاء الاصطناعي…**. ويسري ذلك في المرة التالية التي تشغّل فيها PhotoCraft.

## تفاصيل أكثر

- [اصطلاحات MCP](https://github.com/storytold/photocraft/blob/main/docs/mcp.md): كل أداة يقدمها خادم MCP.
- [واجهة سطر الأوامر](https://github.com/storytold/photocraft/blob/main/book/src/automation/cli.md): الأوامر الفرعية وخياراتها.
