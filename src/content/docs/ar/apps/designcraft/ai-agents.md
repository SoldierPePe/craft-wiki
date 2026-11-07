---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو Codex أو Cursor أو أي مساعد ذكاء اصطناعي آخر يخطط المستندات ويحررها باستخدام DesignCraft.
sidebar:
  order: 5
---

صُمم DesignCraft ليستخدمه مساعدو الذكاء الاصطناعي كما يستخدمه الناس. فأي مساعد يدعم [Model Context Protocol](https://modelcontextprotocol.io) (MCP) يستطيع إنشاء المستندات، ورسم الإطارات، وكتابة النص، وتطبيق الأنماط، ووضع الصور، والنظر إلى الصفحات التي أنشأها. ومن هؤلاء Claude، وCodex من OpenAI، وCursor، وGitHub Copilot في VS Code.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع DesignCraft عبر أداة سطر الأوامر الخاصة به، `designcraft-cli`:

- **Windows**: الملف `designcraft-cli.exe` موجود بجانب `designcraft.exe` في مجلد التثبيت أو في النسخة المحمولة. ومجلد التثبيت الافتراضي هو `%LOCALAPPDATA%\Programs\ArtCraft\DesignCraft\`.
- **macOS**: الأداة داخل التطبيق، في `/Applications/DesignCraft.app/Contents/MacOS/designcraft-cli`. ويمكنك أيضاً تنزيلها وحدها باسم `designcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/designcraft/releases/latest).
- **حزمتا `.deb` و`.rpm` على Linux**: تُثبَّت الأداة في `/usr/bin/designcraft-cli`.
- **أرشيف tar على Linux، وFreeBSD**: الأداة في مجلد `bin`، بجانب `designcraft`.

كل المساعدين أدناه يشغّلون DesignCraft بالأمر نفسه: `designcraft-cli mcp`. إذا لم يجد المساعد `designcraft-cli`، فاستخدم مساره الكامل بدلاً من ذلك. وكثيراً ما تحتاج تطبيقات سطح المكتب إلى المسار الكامل حتى حين لا تحتاجه الطرفية.

## ربط مساعدك

### Claude Code

```bash
claude mcp add designcraft -- designcraft-cli mcp
```

### Claude Desktop

اختر **Settings › Developer › Edit Config**، وأضف DesignCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude:

```json
{
  "mcpServers": {
    "designcraft": {
      "command": "designcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### OpenAI Codex وتطبيق ChatGPT لسطح المكتب

```bash
codex mcp add designcraft -- designcraft-cli mcp
```

تتشارك أداة Codex لسطر الأوامر، وإضافة Codex لبيئات التطوير، وتطبيق ChatGPT لسطح المكتب هذا الإعداد، فلا تضيفه إلا مرة واحدة. أما ChatGPT على الويب فلا يستطيع الاتصال بالبرامج على حاسوبك.

### Cursor

أضف DesignCraft إلى `~/.cursor/mcp.json` (أو إلى `.cursor/mcp.json` داخل مشروع):

```json
{
  "mcpServers": {
    "designcraft": {
      "type": "stdio",
      "command": "designcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### VS Code مع GitHub Copilot

افتح لوحة الأوامر، وشغّل **MCP: Add Server**، واختر **Command (stdio)**، وأدخل `designcraft-cli mcp`. وسمّه `designcraft`.

### مساعدون آخرون

ابحث عن «MCP servers» في إعدادات مساعدك، وأضف خادماً محلياً (stdio) بالأمر `designcraft-cli` والوسيط `mcp`.

## اطلب تخطيطاً

بعد الاتصال، اطلب ما تريد بكلمات بسيطة، مثلاً: *«أنشئ ملصقاً بمقاس A4 لمعرض صيفي، فيه عنوان كبير، وصورة من <bdi>~/Pictures/park.jpg</bdi>، والتفاصيل تحتها، واحفظه باسم fair.designcraft»*. يعمل DesignCraft في الخلفية، دون نافذة. ويستطيع المساعد أن يرسم كل صفحة صورةً ليتحقق من عمله بنفسه.

## حصر المساعد في مجلدات معينة

لتمنع المساعد من قراءة الملفات أو كتابتها خارج مجلد واحد، أضف مجلداً للقراءة ومجلداً للكتابة بعد `designcraft-cli mcp`:

```bash
designcraft-cli mcp --automation-read-root ~/Documents/project --automation-write-root ~/Documents/project/out
```

وفي ملف إعدادات JSON، ضع كل خيار ومجلده في `args`:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Documents/project",
         "--automation-write-root", "/Users/you/Documents/project/out"]
```

عندها لا يستطيع المساعد فتح الملفات ووضعها إلا من داخل مجلد القراءة، ولا الحفظ والتصدير إلا داخل مجلد الكتابة. وإذا حذفت مجلد الكتابة فلن يستطيع الكتابة على القرص أبداً. ويمكنك تمرير أي من الخيارين أكثر من مرة. واستخدم المسارات الكاملة في ملفات JSON، لأن `~` لا يُوسَّع هناك.

## شاهده يعمل في التطبيق

لترى تغييرات المساعد وهو يجريها، شغّل DesignCraft ومنفذ التحكم فيه مفتوح، واربط المساعد بالنافذة بدلاً من ذلك:

```bash
designcraft --control 7979
```

ثم استخدم `designcraft-cli mcp --connect 7979` أمراً للمساعد. وفي التطبيق، يستطيع المساعد أيضاً أن ينقر ويسحب ويملأ النوافذ ويلتقط صوراً للشاشة.

:::caution
حدود المجلدات أعلاه لا تعمل مع `--connect`. فالمساعد المتصل يستطيع الفتح والحفظ في أي مكان تستطيعه أنت.
:::

## من سطر الأوامر

تعمل `designcraft-cli` أيضاً وحدها، دون مساعد:

```bash
designcraft-cli run --in brochure.designcraft --export brochure.pdf   # التصدير إلى .pdf أو .idml أو .epub أو .pptx أو .png
designcraft-cli run --sample --all-pages out/                          # رسم كل صفحات النموذج بصيغة PNG
designcraft-cli commands                                               # سرد كل الأوامر
```

لكتابة سكربتات لأوامر DesignCraft، راجع [وثائق المطورين على GitHub](https://github.com/storytold/designcraft/blob/main/docs/mcp.md).
