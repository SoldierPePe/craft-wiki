---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو أي مساعد ذكاء اصطناعي آخر يبني العروض التقديمية ويحررها باستخدام DeckCraft، واكتب سكربتات لـ DeckCraft من سطر الأوامر.
sidebar:
  order: 5
---

كل زر في DeckCraft يشغّل أمراً، ويستطيع مساعدو الذكاء الاصطناعي تشغيل الأوامر نفسها. فأي مساعد يدعم [Model Context Protocol](https://modelcontextprotocol.io) (MCP) يستطيع أن ينشئ الشرائح ويملأها وينسقها، ويحفظ النتيجة بصيغة <bdi>.pptx</bdi> أو <bdi>.deckcraft</bdi> أو PDF.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع DeckCraft عبر أداة سطر الأوامر الخاصة به، `deckcraft-cli`:

- **Windows**: تجد `deckcraft-cli.exe` بجانب `deckcraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **macOS**: نزّل `deckcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/deckcraft/releases/latest).
- **Linux بحزم `.deb` و`.rpm` و`.pkg.tar.zst` وأرشيف tar، وFreeBSD**: تُثبَّت مع التطبيق.
- **Flatpak**: شغّلها بالأمر `flatpak run --command=deckcraft-cli ai.storyteller.deckcraft`.
- **AppImage**: استخدم أرشيف tar بدلاً منه، ففيه الأداة.

إذا لم يجد المساعد `deckcraft-cli`، فاستخدم مسارها الكامل، مثلاً `C:\Users\you\AppData\Local\Programs\ArtCraft\DeckCraft\deckcraft-cli.exe`. كثيراً ما تحتاج تطبيقات سطح المكتب إلى المسار الكامل حتى حين لا تحتاجه الطرفية.

## ربط مساعدك

كل المساعدين يشغّلون DeckCraft بالأمر نفسه: `deckcraft-cli mcp`. ثم يعمل DeckCraft في الخلفية، دون نافذة.

### Claude Code

```bash
claude mcp add deckcraft -- deckcraft-cli mcp
```

### Claude Desktop

اختر **Settings › Developer › Edit Config**، وأضف DeckCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude:

```json
{
  "mcpServers": {
    "deckcraft": {
      "command": "deckcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### المساعدون الآخرون

ابحث عن «MCP servers» في إعدادات مساعدك، وأضف خادماً محلياً (stdio) بالأمر `deckcraft-cli` والوسيطة `mcp`.

## طلب عرض تقديمي

بعد الربط، اطلب ما تريد بكلمات بسيطة، مثلاً *«أنشئ عرضاً من خمس شرائح عن نتائج الربع الثالث، فيه مخطط في الشريحة 3، واحفظه باسم q3.pptx»*.

## مشاهدة عمله داخل التطبيق

لترى تغييرات المساعد وهو يجريها، شغّل DeckCraft ومنفذ التحكم فيه مفتوح:

```bash
deckcraft --control 7990
```

ثم استخدم `deckcraft-cli mcp --connect 7990` أمراً للمساعد. لا يقبل منفذ التحكم إلا الاتصالات من حاسوبك أنت.

## حصر المساعد في مجلدات معيّنة

لتمنع مساعداً يعمل في الخلفية من قراءة الملفات أو كتابتها خارج مجلد واحد، أضف مجلداً للقراءة ومجلداً للكتابة بعد `deckcraft-cli mcp`:

```bash
deckcraft-cli mcp --automation-read-root ~/Decks/project --automation-write-root ~/Decks/project/out
```

في ملف إعدادات JSON، ضع كل خيار ومجلده في `args`، بمسارات كاملة، لأن `~` لا يُوسَّع هناك:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Decks/project",
         "--automation-write-root", "/Users/you/Decks/project/out"]
```

عندها لا يستطيع المساعد أن يفتح إلا الملفات الموجودة داخل مجلد القراءة، ولا أن يحفظ إلا داخل مجلد الكتابة. وإذا حذفت مجلد الكتابة فلن يستطيع الحفظ على القرص إطلاقاً.

:::caution
لا تعمل حدود المجلدات هذه إلا في الخلفية. فلا يمكن استخدامها مع `--connect`، والمساعد المتصل بالتطبيق وهو يعمل يستطيع أن يفتح ويحفظ في أي مكان تستطيعه أنت.
:::

## من سطر الأوامر

تعمل `deckcraft-cli` أيضاً وحدها، دون مساعد:

```bash
deckcraft-cli convert deck.deckcraft deck.pptx            # أو .pdf أو .txt أو .md أو .png أو .jpg أو .gif
deckcraft-cli render deck.pptx --all slides/              # كل شريحة صورةً بصيغة PNG
deckcraft-cli info deck.pptx                              # محتويات العرض التقديمي
deckcraft-cli commands format.                            # سرد الأوامر
```

لكتابة سكربتات لأوامر DeckCraft، شغّل `deckcraft-cli help run`، أو راجع [وثائق المطورين على GitHub](https://github.com/storytold/deckcraft/blob/main/docs/mcp.md).
