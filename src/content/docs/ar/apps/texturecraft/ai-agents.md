---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو مساعد ذكاء اصطناعي آخر ينشئ المشاريع ويرسم ويخبز الخامات ويصدّرها باستخدام TextureCraft.
sidebar:
  order: 4
---

صُمم TextureCraft ليستخدمه مساعدو الذكاء الاصطناعي كما يستخدمه الناس. فأي مساعد يدعم [Model Context Protocol](https://modelcontextprotocol.io) (MCP) يستطيع إنشاء المشاريع، وإضافة الطبقات والأقنعة، ورسم الضربات، وخبز خرائط المجسم، وتصدير الخامات، وتصيير المعاينات.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع TextureCraft عبر أداة سطر الأوامر الخاصة به، `texturecraft-cli`:

- **Windows**: تجد `texturecraft-cli.exe` بجانب `texturecraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **macOS**: نزّل `texturecraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/texturecraft/releases/latest).
- **حزم Linux بصيغة `.deb` و`.rpm` وأرشيف tar، وFreeBSD**: تُثبَّت مع التطبيق.

## اختيار المجلدات التي يمكنه استخدامها

لا يستطيع المساعد قراءة الملفات وكتابتها إلا داخل المجلدات التي تعطيه إياها:

- `--read-root <folder>`: حيث يمكنه فتح المشاريع والنماذج والصور.
- `--write-root <folder>`: حيث يمكنه حفظ المشاريع وتصدير الخامات.

دون هذين الخيارين، يستطيع العمل على مشروع في الذاكرة، لكنه لا يستطيع فتح أي ملف أو حفظه.

## ربط مساعدك

### Claude Code

```bash
claude mcp add texturecraft -- texturecraft-cli mcp --read-root . --write-root .
```

يتيح له هذا استخدام المجلد الذي تشغّل فيه Claude Code.

### Claude Desktop

اختر **Settings › Developer › Edit Config**، وأضف TextureCraft إلى `claude_desktop_config.json`، ثم أعد تشغيل Claude. استخدم المسارات الكاملة:

```json
{
  "mcpServers": {
    "texturecraft": {
      "command": "C:\\Program Files\\TextureCraft\\texturecraft-cli.exe",
      "args": ["mcp", "--read-root", "C:\\Users\\you\\Texturing", "--write-root", "C:\\Users\\you\\Texturing"]
    }
  }
}
```

### مساعدون آخرون

يستطيع أي عميل MCP تشغيل الأمر نفسه: `texturecraft-cli mcp` مع خيارات المجلدات.

## مشاهدته يعمل في التطبيق

افتراضياً يعمل المساعد على نسخته الخاصة من TextureCraft، دون نافذة. لترى تغييراته مباشرة في التطبيق بدلاً من ذلك:

1. شغّل TextureCraft بمنفذ تحكم: `texturecraft --control 7878`.
2. اربط المساعد به:

```bash
claude mcp add texturecraft-app -- texturecraft-cli mcp --bridge 7878
```

ويستطيع المساعد حينها أيضاً أن يلتقط لقطات شاشة للنافذة وأن يستخدم القوائم. وفي هذا الوضع يفتح التطبيق ملفاته ويحفظها بنفسه.

## ماذا تطلب

مثلاً:

- «ابدأ مشروعاً من `crate.glb`، واخبز خرائط المجسم، واكسُه بمعدن مطلي صدئ.»
- «أضف تآكل الحواف إلى طبقة الطلاء وأرني تصييراً.»
- «صدّر الخامات لمحرك Unreal Engine إلى المجلد `textures`.»

## استخدامه دون مساعد

تعمل `texturecraft-cli` أيضاً وحدها، وهذا مفيد للسكربتات والمهام الدفعية. شغّل `texturecraft-cli --help` لترى ما يمكنها فعله. مثلاً:

```bash
texturecraft-cli new model.glb model.tcraft --resolution 2048
texturecraft-cli bake model.tcraft --resolution 2048
texturecraft-cli export model.tcraft textures --preset "Unreal Engine (Packed)" --format png
texturecraft-cli render model.tcraft preview.png --samples 256
```

يحفظ `bake` المشروع في مكانه. ويصيّر `render` مع `--samples` الصورة بتتبع المسار، كما يفعل نمط التصيير؛ أضف `--cpu` ليجري ذلك على المعالج.
