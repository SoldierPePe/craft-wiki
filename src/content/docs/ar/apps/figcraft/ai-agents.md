---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو أي مساعد ذكاء اصطناعي آخر يصمم باستخدام FigCraft عبر خادم MCP الخاص به، واكتب سكربتات لـ FigCraft من سطر الأوامر.
sidebar:
  order: 5
---

كل عنصر في القوائم وكل أداة وكل سحب في FigCraft يشغّل أمراً، ويستطيع مساعدو الذكاء الاصطناعي تشغيل الأوامر نفسها. فأي مساعد يدعم [Model Context Protocol](https://modelcontextprotocol.io) (MCP) يستطيع إنشاء الطبقات وتحريرها، وتشغيل أوامر القوائم، وفحص النتيجة والنظر إليها صورةً.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع FigCraft عبر أداة سطر الأوامر الخاصة به، `figcraft-cli`:

- **Windows**: الملف `figcraft-cli.exe` موجود بجانب `figcraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **macOS**: نزّل `figcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/figcraft/releases/latest).
- **حزم `.deb` و`.rpm` و`.pkg.tar.zst` وأرشيف tar على Linux، وFreeBSD**: تُثبَّت الأداة مع التطبيق.
- **AppImage**: شغّلها بالأمر `/path/to/FigCraft.AppImage cli`، فيصبح `figcraft-cli mcp` هو `/path/to/FigCraft.AppImage cli mcp`.
- **Flatpak**: شغّلها بالأمر `flatpak run --command=figcraft-cli ai.storyteller.figcraft`.

إذا لم يجد المساعد `figcraft-cli`، فاستخدم مسارها الكامل، مثلاً `C:\Users\you\AppData\Local\Programs\ArtCraft\FigCraft\figcraft-cli.exe`. وكثيراً ما تحتاج تطبيقات سطح المكتب إلى المسار الكامل حتى حين لا تحتاجه الطرفية.

## ربط مساعدك

كل المساعدين يشغّلون FigCraft بالأمر نفسه: `figcraft-cli mcp`. ثم يعمل FigCraft في الخلفية، دون نافذة.

### Claude Code

```bash
claude mcp add figcraft -- figcraft-cli mcp
```

### Claude Desktop

اختر **Settings › Developer › Edit Config**، وأضف FigCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude:

```json
{
  "mcpServers": {
    "figcraft": {
      "command": "figcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### مساعدون آخرون

ابحث عن «MCP servers» في إعدادات مساعدك، وأضف خادماً محلياً (stdio) بالأمر `figcraft-cli` والوسيط `mcp`.

## اطلب تصميماً

بعد الاتصال، اطلب ما تريد بكلمات بسيطة، مثلاً: *«أنشئ شاشة تسجيل دخول لهاتف، بتخطيط تلقائي، واحفظها باسم signin.figcraft»*. ويستطيع المساعد أيضاً أن يبدأ من أحد القوالب المدمجة.

## شاهده يعمل في التطبيق

لترى تغييرات المساعد وهو يجريها، شغّل FigCraft ومنفذ التحكم فيه مفتوح:

```bash
figcraft --control 7979
```

ثم استخدم `figcraft-cli mcp --attach 7979` أمراً للمساعد. يظهر المساعد في التطبيق كأنه شخص في جلسة مباشرة، بصورته الرمزية الخاصة، ويحيط FigCraft بإطار الطبقات التي غيّرها للتو. ولا يقبل منفذ التحكم اتصالات إلا من حاسوبك أنت.

## حصر المساعد في مجلدات معينة

لتمنع مساعداً يعمل في الخلفية من قراءة الملفات أو كتابتها خارج مجلد واحد، أضف مجلداً للقراءة ومجلداً للكتابة بعد `figcraft-cli mcp`:

```bash
figcraft-cli mcp --automation-read-root ~/Designs/project --automation-write-root ~/Designs/project/out
```

وفي ملف إعدادات JSON، ضع كل خيار ومجلده في `args`، بمسارات كاملة، لأن `~` لا يُوسَّع هناك:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Designs/project",
         "--automation-write-root", "/Users/you/Designs/project/out"]
```

عندها لا يستطيع المساعد فتح الملفات إلا من داخل مجلد القراءة، ولا الحفظ إلا داخل مجلد الكتابة. وإذا حذفت مجلد الكتابة فلن يستطيع الحفظ على القرص أبداً.

لا تعمل هذه الخيارات مع `--attach`. ولتقييد مساعد يعمل داخل التطبيق، شغّل التطبيق نفسه بها: `figcraft --control 7979 --automation-read-root … --automation-write-root …`.

## من سطر الأوامر

تعمل `figcraft-cli` أيضاً وحدها، دون مساعد:

```bash
figcraft-cli render landing.figcraft -o landing.png --scale 2   # رسم صفحة صورةً
figcraft-cli export landing.figcraft -o out/ --format svg       # التصدير بإعدادات التصدير الخاصة بالطبقات
figcraft-cli convert design.fig design.figcraft                 # التحويل بحسب امتداد الملف
figcraft-cli commands --filter autoLayout                       # سرد الأوامر ومعاملاتها
```

لكتابة سكربتات لأوامر FigCraft، راجع [وثائق المطورين على GitHub](https://github.com/storytold/figcraft/blob/main/docs/cli.md).
