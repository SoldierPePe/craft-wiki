---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو أي مساعد ذكاء اصطناعي آخر يرسم ويحرر ويصدّر في VectorCraft عبر خادم MCP الخاص به.
sidebar:
  order: 30
---

يأتي VectorCraft مع خادم [MCP](https://modelcontextprotocol.io)، فيستطيع مساعد ذكاء اصطناعي مثل Claude Code أن يرسم مستندات VectorCraft ويحررها ويفحصها ويصدّرها. ويستخدم المساعد الأوامر نفسها التي تستخدمها قوائم VectorCraft وأدواته ولوحاته.

لا يضم VectorCraft ذكاءً اصطناعياً خاصاً به، ولا يتصل بأي خدمة ذكاء اصطناعي. أنت تأتي بالمساعد، وVectorCraft يعطيه الأدوات.

## طريقتان للعمل

- **والتطبيق مفتوح**: يتحكم المساعد في نافذة VectorCraft، وتشاهد الرسم يتغير أثناء عمله.
- **دون نافذة**: يعمل المساعد على المستندات في الخلفية. كل شيء يعمل ما عدا ما يحتاج إلى النافذة، مثل لقطات شاشة الواجهة والرد على مربعات الحوار.

يحاول خادم MCP حين يبدأ أن يتصل بنسخة VectorCraft قيد التشغيل. وإن لم يجد أياً منها، يعمل دون نافذة.

## العثور على vectorcraft-cli

خادم MCP جزء من `vectorcraft-cli`، التي تأتي مع VectorCraft:

| طريقة تثبيتك لـ VectorCraft | مكان `vectorcraft-cli` |
| --- | --- |
| مثبّت Windows | `%LOCALAPPDATA%\Programs\ArtCraft\VectorCraft\vectorcraft-cli.exe` (أو داخل `C:\Program Files\ArtCraft\VectorCraft\` إذا ثبّته لكل المستخدمين) |
| النسخة المحمولة لـ Windows | بجانب `vectorcraft.exe` |
| حزمة `.deb` أو `.rpm` على Linux | `/usr/bin/vectorcraft-cli` |
| macOS | تُنزَّل منفصلة من صفحة الإصدار: `vectorcraft-cli-<ver>-macos-universal.zip` |

## ربط Claude Code

على Linux، أو على macOS بعد أن تفك ضغط `vectorcraft-cli` في مكان ما ضمن `PATH`:

```sh
claude mcp add vectorcraft -- vectorcraft-cli mcp
```

على Windows، في PowerShell، مع مجلد التثبيت الافتراضي:

```powershell
claude mcp add vectorcraft -- "$env:LOCALAPPDATA\Programs\ArtCraft\VectorCraft\vectorcraft-cli.exe" mcp
```

وتستخدم عملاء MCP الأخرى الأمر نفسه في ملف إعداداتها:

```json
{"mcpServers": {"vectorcraft": {"command": "vectorcraft-cli", "args": ["mcp"]}}}
```

## دع المساعد يتحكم في النافذة

لا يستمع VectorCraft لأي مساعد إلا إذا شغّلته بالخيار `--control` ورقم منفذ. شغّل التطبيق بهذه الطريقة أولاً، وانتظر حتى تُفتح نافذته، ثم شغّل مساعدك.

```sh
# Linux
vectorcraft --control 7979
# macOS (أغلق VectorCraft أولاً)
open -a VectorCraft --args --control 7979
```

```powershell
# Windows، مجلد التثبيت الافتراضي
& "$env:LOCALAPPDATA\Programs\ArtCraft\VectorCraft\vectorcraft.exe" --control 7979
```

لا يقبل المنفذ إلا الاتصالات من حاسوبك أنت. وتشغيل VectorCraft من قائمة ابدأ أو من Dock أو من مشغّل على سطح المكتب لا يفتحه.

:::note
يبحث خادم MCP عن التطبيق مرة واحدة، حين يبدأ. إذا فتحت VectorCraft بعد مساعدك، فأعد تشغيل المساعد ليتصل به.
:::

## حصر المساعد في مجلد واحد

لتمنع المساعد من قراءة الملفات أو كتابتها خارج مشروع ما، أعطه المجلدات التي يُسمح له باستخدامها:

```sh
claude mcp add vectorcraft -- vectorcraft-cli mcp --automation-read-root /work/project --automation-write-root /work/project
```

يحدد `--automation-read-root` مجلداً يُسمح له بالقراءة منه، و`--automation-write-root` مجلداً يُسمح له بالكتابة فيه. ويمكنك تمرير كل منهما أكثر من مرة. ومع هذين الخيارين يعمل الخادم دائماً دون نافذة. ولتقييد التطبيق بدلاً من ذلك، شغّله بالخيارات نفسها بعد `--control 7979`.

## مهام جاهزة

يقدّم الخادم خمس مطالبات جاهزة قد يعرضها مساعدك كأوامر: **poster** و**icon-set** و**recolor** و**trace-and-style** و**export-set**.

## مزيد من التفاصيل

القائمة الكاملة للأدوات والأوامر والخيارات موجودة في [توثيق MCP](https://github.com/storytold/vectorcraft/blob/main/docs/mcp.md) الخاص بـ VectorCraft على GitHub. وتشرح صفحة [أتمتة VectorCraft](/ar/apps/vectorcraft/automate-vectorcraft/) أوضاع اتصال الخادم، وتشغيل الأوامر بـ `vectorcraft-cli`، وتسجيل الإجراءات.
