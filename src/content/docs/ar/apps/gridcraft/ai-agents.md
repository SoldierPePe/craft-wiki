---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو أي مساعد ذكاء اصطناعي آخر يقرأ المصنفات ويحررها ويبنيها باستخدام GridCraft.
sidebar:
  order: 4
---

صُمم GridCraft ليستخدمه مساعدو الذكاء الاصطناعي كما يستخدمه الناس. فكل زر في الشريط وكل عنصر في القوائم وكل مربع حوار هو أمر، ويستطيع أي مساعد يدعم [Model Context Protocol](https://modelcontextprotocol.io) (MCP) تشغيلها. فيقرأ الخلايا ويكتبها، ويُدخل الصيغ، وينسق النطاقات، وينشئ الجداول والمخططات، ويفرز ويصفّي، ويحفظ النتيجة بصيغة <bdi>.xlsx</bdi> أو CSV.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع GridCraft عبر أداة سطر الأوامر الخاصة به، `gridcraft-cli`:

- **Windows**: تجد `gridcraft-cli.exe` بجانب `gridcraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **Linux بحزم `.deb` و`.rpm` وحزمة Arch وأرشيف tar، وFreeBSD**: تُثبَّت مع التطبيق.
- **Flatpak**: شغّلها بالأمر `flatpak run --command=gridcraft-cli ai.storyteller.gridcraft`.
- **AppImage**: استخدم أرشيف tar بدلاً منه، ففيه الأداة.
- **macOS**: لا يتضمنها التطبيق. ابحث عن `gridcraft-cli-<ver>-macos-universal.zip` في [صفحة الإصدارات](https://github.com/storytold/gridcraft/releases)؛ فليس في كل إصدار ملف منها.

كل المساعدين أدناه يشغّلون GridCraft بالأمر نفسه: `gridcraft-cli mcp`. إذا لم يجد المساعد `gridcraft-cli`، فاستخدم مسارها الكامل، مثلاً `C:\Users\you\AppData\Local\Programs\ArtCraft\GridCraft\gridcraft-cli.exe`. كثيراً ما تحتاج تطبيقات سطح المكتب إلى المسار الكامل حتى حين لا تحتاجه الطرفية.

## ربط مساعدك

### Claude Code

```bash
claude mcp add gridcraft -- gridcraft-cli mcp
```

### Claude Desktop والمساعدون الآخرون

يأخذ معظم المساعدين ملف إعدادات JSON فيه قائمة بخوادم MCP. في Claude Desktop، اختر **Settings › Developer › Edit Config**، وأضف GridCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude:

```json
{
  "mcpServers": {
    "gridcraft": {
      "command": "gridcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

أما المساعدون الآخرون، فابحث عن «MCP servers» في إعداداتهم، وأضف خادماً محلياً (stdio) بالأمر `gridcraft-cli` والوسيطة `mcp`.

لتبدأ ومصنف مفتوح بالفعل، أضف `--in` والمسار الكامل للملف: `"args": ["mcp", "--in", "/Users/you/Documents/budget.xlsx"]`.

## طلب مصنف

بعد الربط، اطلب ما تريد بكلمات بسيطة، مثلاً *«أنشئ ميزانية شهرية في budget.xlsx فيها صف للإجمالي ومخطط شريطي للإنفاق حسب الفئة»*. يعمل GridCraft في الخلفية، دون نافذة، ويستطيع المساعد قراءة الخلايا وحساب الصيغ ليتحقق من عمله بنفسه.

:::caution
يستطيع المساعد أن يفتح الملفات ويحفظها في أي مكان تستطيعه أنت. اطلب منه أن يعمل في مجلد واحد، واحتفظ بنسخ من المصنفات التي تهمك.
:::

## مشاهدة عمله داخل التطبيق

لترى تغييرات المساعد وهو يجريها، شغّل GridCraft ومنفذ التحكم فيه مفتوح:

```bash
gridcraft --control 7979
```

ثم استخدم `gridcraft-cli mcp --connect 7979` أمراً للمساعد. يجد رمز الوصول إلى التطبيق من تلقاء نفسه، ما دام الاثنان يعملان باسم حسابك على الحاسوب نفسه. وداخل التطبيق، يستطيع المساعد أيضاً أن ينقر، ويضغط المفاتيح، ويفتح مربعات الحوار، ويلتقط لقطات شاشة.

يعرض **Automate › Agent Control** في التطبيق هذه الأوامر. ويسرد **Automate › Action Journal** كل أمر شُغّل في الجلسة، سواء شغّلته أنت أو المساعد.

## من سطر الأوامر

تعمل `gridcraft-cli` أيضاً وحدها، دون مساعد:

```bash
gridcraft-cli convert book.xlsx data.csv --sheet Sales   # تحويل إلى xlsx أو csv أو tsv أو json أو html
gridcraft-cli cat book.xlsx --range A1:F20               # عرض الخلايا في جدول
gridcraft-cli eval '=PMT(5%/12,360,-300000)'             # حساب صيغة
```

لكتابة سكربتات لأوامر GridCraft، راجع [وثائق المطورين على GitHub](https://github.com/storytold/gridcraft/blob/main/docs/mcp.md).
