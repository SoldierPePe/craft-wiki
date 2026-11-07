---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو Codex أو Cursor أو أي مساعد ذكاء اصطناعي آخر يكتب المستندات ويحرّرها باستخدام WordCraft.
sidebar:
  order: 7
---

صُمم WordCraft ليستخدمه مساعدو الذكاء الاصطناعي كما يستخدمه الناس. فأي مساعد يدعم [Model Context Protocol](https://modelcontextprotocol.io) (MCP) يستطيع إنشاء المستندات وتحريرها وتنسيقها وحفظها بصيغة <bdi>.docx</bdi> أو PDF. ومن هؤلاء Claude، وCodex من OpenAI، وCursor، وGitHub Copilot في VS Code.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع WordCraft عبر أداة سطر الأوامر الخاصة به، `wordcraft-cli`:

- **Windows**: الملف `wordcraft-cli.exe` موجود بجانب `wordcraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **macOS**: نزّل `wordcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/wordcraft/releases/latest).
- **حزم Linux من نوع `.deb` و`.rpm` وأرشيف tar، وFreeBSD**: تُثبَّت مع التطبيق.
- **Flatpak**: شغّلها بالأمر `flatpak run --command=wordcraft-cli ai.storyteller.wordcraft`.
- **AppImage**: استخدم أرشيف tar بدلاً منه، فهو يضمها.

كل المساعدين أدناه يشغّلون WordCraft بالأمر نفسه: `wordcraft-cli mcp`. إذا لم يجد المساعد `wordcraft-cli`، فاستخدم مسارها الكامل، مثلاً `C:\Users\you\AppData\Local\Programs\ArtCraft\WordCraft\wordcraft-cli.exe`. وكثيراً ما تحتاج تطبيقات سطح المكتب إلى المسار الكامل حتى حين لا تحتاجه الطرفية.

## ربط مساعدك

### Claude Code

```bash
claude mcp add wordcraft -- wordcraft-cli mcp
```

### Claude Desktop

اختر **Settings › Developer › Edit Config**، وأضف WordCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude:

```json
{
  "mcpServers": {
    "wordcraft": {
      "command": "wordcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### OpenAI Codex وتطبيق ChatGPT المكتبي

```bash
codex mcp add wordcraft -- wordcraft-cli mcp
```

تتشارك أداة سطر أوامر Codex، وإضافة Codex لبيئات التطوير، وتطبيق ChatGPT المكتبي هذا الإعداد، فلا تضيفه إلا مرة واحدة. أما ChatGPT على الويب فلا يستطيع الاتصال بالبرامج التي على حاسوبك.

### Cursor

أضف WordCraft إلى `~/.cursor/mcp.json` (أو إلى `.cursor/mcp.json` داخل مشروع):

```json
{
  "mcpServers": {
    "wordcraft": {
      "type": "stdio",
      "command": "wordcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### VS Code مع GitHub Copilot

افتح لوحة الأوامر (Command Palette)، وشغّل **MCP: Add Server**، واختر **Command (stdio)**، وأدخل `wordcraft-cli mcp`. وسمّه `wordcraft`.

### مساعدون آخرون

ابحث عن «MCP servers» في إعدادات مساعدك، وأضف خادماً محلياً (stdio) بالأمر `wordcraft-cli` والوسيط `mcp`.

## اطلب مستنداً

بعد الربط، اطلب ما تريد بكلمات بسيطة، مثلاً *«اكتب ملخص مشروع من صفحة واحدة باسم brief.docx، مع عنوان لكل قسم»*. يعمل WordCraft في الخلفية دون نافذة، ويستطيع المساعد التحقق من عمله بنفسه دون لقطات شاشة.

## حصر المساعد في مجلدات معينة

لتمنع المساعد من قراءة الملفات أو كتابتها خارج مجلد واحد، أضف مجلداً للقراءة ومجلداً للكتابة بعد `wordcraft-cli mcp`:

```bash
wordcraft-cli mcp --automation-read-root ~/Documents/project --automation-write-root ~/Documents/project/out
```

وفي إعدادات JSON، ضع كل خيار وكل مجلد في `args`:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Documents/project",
         "--automation-write-root", "/Users/you/Documents/project/out"]
```

عندها لا يستطيع المساعد فتح الملفات إلا داخل مجلد القراءة، ولا الحفظ إلا داخل مجلد الكتابة. وإذا لم تحدد مجلد الكتابة، فلن يستطيع الحفظ على القرص إطلاقاً. استخدم المسارات الكاملة في ملفات JSON، لأن `~` لا يُوسَّع هناك.

## شاهده يعمل داخل التطبيق

لترى تغييرات المساعد وهو يجريها، شغّل WordCraft ومنفذ التحكم فيه مفتوح، واربط المساعد بالنافذة بدلاً من ذلك:

```bash
wordcraft --control 7981
```

ثم استخدم `wordcraft-cli mcp --connect 127.0.0.1:7981` أمراً للمساعد. داخل التطبيق، يستطيع المساعد أيضاً أن ينقر ويضغط المفاتيح ويلتقط لقطات شاشة. ولا تنطبق حدود المجلدات السابقة هنا، فيستطيع الفتح والحفظ في أي مكان تستطيعه أنت.

## تمييز تعديلاته عن تعديلاتك

تحمل التغييرات المتعقبة والتعليقات اسم كاتبها. أعطِ المساعد اسماً خاصاً به، ليرى المراجعون أي التعديلات أجراها، بإضافة `--author`:

```bash
wordcraft-cli mcp --author "Claude (copyedit)"
```

ثم اطلب منه تشغيل تتبع التغييرات قبل أن يحرّر.

## حزم اللغة

لا يستطيع المساعد تثبيت حزم اللغة إلا إذا شغّلت التنزيل في التطبيق بنفسك، بالنقر على **Install** أو **إضافة لغة…** في **ملف › الخيارات › اللغة**. ولا يستطيع تشغيل التنزيل من تلقاء نفسه.

## من سطر الأوامر

تعمل `wordcraft-cli` أيضاً وحدها، دون مساعد:

```bash
wordcraft-cli convert report.docx report.pdf   # يحوّل إلى docx أو pdf أو odt أو rtf أو html أو md أو tex أو txt أو png
wordcraft-cli text report.docx                 # يطبع النص
```

لكتابة سكربتات لأوامر WordCraft، راجع [وثائق المطورين على GitHub](https://github.com/storytold/wordcraft/blob/main/docs/mcp.md).
