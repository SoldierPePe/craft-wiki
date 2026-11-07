---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو أي مساعد ذكاء اصطناعي آخر يقرأ ملفات PDF وينظمها ويعلّق عليها ويعبئها باستخدام PdfCraft، واكتب سكربتات لـ PdfCraft من سطر الأوامر.
sidebar:
  order: 6
---

يستطيع مساعدو الذكاء الاصطناعي الذين يدعمون [Model Context Protocol](https://modelcontextprotocol.io) (MCP) استخدام أدوات PdfCraft: فتح ملفات PDF، وقراءة نصوصها، وإضافة التعليقات، وتعبئة النماذج، وتنظيم الصفحات، وحفظ النتيجة. هذه الميزة متوقفة ما لم تُعدّها بنفسك. لا يشغّلها PdfCraft من تلقاء نفسه أبداً، ولا يفتح أي منفذ شبكة.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع PdfCraft عبر أداة سطر الأوامر الخاصة به، `pdfcraft-cli`:

- **Windows**: الملف `pdfcraft-cli.exe` موجود بجانب `pdfcraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **macOS**: نزّل `pdfcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/pdfcraft/releases/latest).
- **حزم Linux من نوع `.deb` و`.rpm` و`.pkg.tar.zst` وأرشيف tar، وFreeBSD**: تُثبَّت مع التطبيق. وعلى Linux، يضم `pdfcraft-cli-<ver>-linux-x86_64.tar.gz` (أو `aarch64`) أداة سطر الأوامر وحدها، للخوادم.
- **Flatpak**: شغّلها بالأمر `flatpak run --command=pdfcraft-cli ai.storyteller.pdfcraft`.
- **AppImage**: استخدم أرشيف tar بدلاً منه، فهو يضمها.

إذا لم يجد المساعد `pdfcraft-cli`، فاستخدم مسارها الكامل، مثلاً `C:\Users\you\AppData\Local\Programs\ArtCraft\PdfCraft\pdfcraft-cli.exe`. وكثيراً ما تحتاج تطبيقات سطح المكتب إلى المسار الكامل حتى حين لا تحتاجه الطرفية.

## ربط مساعدك

كل المساعدين يشغّلون أدوات PdfCraft بالأمر نفسه: `pdfcraft-cli mcp`، يليه `--root` والمجلد الذي فيه ملفات PDF الخاصة بك. عندها لا يستطيع المساعد قراءة الملفات وكتابتها إلا في ذلك المجلد. تعمل الأدوات في الخلفية دون نافذة، وتتوقف حين ينقطع اتصال المساعد.

### Claude Code

```bash
claude mcp add pdfcraft -- pdfcraft-cli mcp --root ~/Documents/pdfs
```

### Claude Desktop

اختر **Settings › Developer › Edit Config**، وأضف PdfCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude. استخدم المسار الكامل للمجلد، لأن `~` لا يُوسَّع هنا:

```json
{
  "mcpServers": {
    "pdfcraft": {
      "command": "pdfcraft-cli",
      "args": ["mcp", "--root", "/Users/you/Documents/pdfs"]
    }
  }
}
```

### مساعدون آخرون

ابحث عن «MCP servers» في إعدادات مساعدك، وأضف خادماً محلياً (stdio) بالأمر `pdfcraft-cli` والوسائط `mcp` و`--root` ومجلدك.

أضف `--compact` بعد `mcp` لتعطي المساعد قائمة قصيرة من الأدوات يبدأ بها. يبقى قادراً على إيجاد كل أداة واستخدامها، والقائمة الأقصر تستهلك قدراً أقل من سياقه.

## اطلب ما تريد

بعد الربط، اطلب ما تريد بكلمات بسيطة، مثلاً *«ادمج الفواتير التي في هذا المجلد في ملف PDF واحد، الأقدم أولاً»* أو *«ميّز كل ذكر للموعد النهائي في contract.pdf واحفظه»*.

تبقى التغييرات في الذاكرة، ويمكن التراجع عنها، حتى يحفظ المساعد.

## الفصل بين القراءة والكتابة

لتسمح للمساعد بالقراءة من مجلد والحفظ في مجلد آخر فقط، استخدم مجلداً للقراءة ومجلداً للكتابة:

```bash
pdfcraft-cli mcp --automation-read-root ~/Documents/pdfs --automation-write-root ~/Documents/pdfs/out
```

عندها لا يستطيع المساعد فتح الملفات إلا داخل مجلد القراءة، ولا الحفظ إلا داخل مجلد الكتابة. تشمل هذه الحدود ما يفعله المساعد عبر `pdfcraft-cli`، ولا تنطبق على تطبيق PdfCraft نفسه.

## من سطر الأوامر

تعمل `pdfcraft-cli` أيضاً وحدها، دون مساعد:

```bash
pdfcraft-cli info form.pdf                                      # ما في ملف PDF
pdfcraft-cli text paper.pdf --page 3                            # نص الصفحة 3
pdfcraft-cli edit in.pdf --rotate 1,2:90 --delete 5 --out out.pdf
pdfcraft-cli combine report.pdf appendix.pdf --out combined.pdf
pdfcraft-cli tools                                              # كل أداة يستطيع المساعد استخدامها
```

لكتابة السكربتات، شغّل `pdfcraft-cli help`، أو راجع [وثائق المطورين على GitHub](https://github.com/storytold/pdfcraft/blob/main/docs/mcp.md).
