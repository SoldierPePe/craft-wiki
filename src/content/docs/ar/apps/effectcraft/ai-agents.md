---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو مساعد ذكاء اصطناعي آخر يبني التركيبات ويحرّكها ويصيّرها باستخدام EffectCraft.
sidebar:
  order: 5
---

صُمم EffectCraft ليستخدمه مساعدو الذكاء الاصطناعي كما يستخدمه الناس. فأي مساعد يدعم [بروتوكول MCP](https://modelcontextprotocol.io) (اختصار Model Context Protocol) يستطيع إنشاء التركيبات، وإضافة الطبقات، وضبط الإطارات المفتاحية، وتطبيق المؤثرات، والنظر إلى الإطارات المصيَّرة، والتصيير عبر Render Queue.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع EffectCraft عبر أداة سطر الأوامر الخاصة به، `effectcraft-cli`:

- **Windows**: الملف `effectcraft-cli.exe` بجانب `effectcraft.exe` في مجلد التثبيت، وهو افتراضياً `%LOCALAPPDATA%\Programs\ArtCraft\EffectCraft`. وهي ليست في `PATH` لديك، لذا استخدم مسارها الكامل.
- **macOS**: نزّل `effectcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/effectcraft/releases/latest).
- **حزم `.deb` و`.rpm` على Linux**: تُثبَّت باسم `/usr/bin/effectcraft-cli`.

## توصيل مساعدك

### Claude Code

على Windows، في PowerShell:

```powershell
claude mcp add effectcraft -- "$env:LOCALAPPDATA\Programs\ArtCraft\EffectCraft\effectcraft-cli.exe" mcp
```

على Linux، أو على macOS والأداة في `PATH` لديك:

```bash
claude mcp add effectcraft -- effectcraft-cli mcp
```

### مساعدون آخرون

يشغّل Claude Desktop وCursor وغيرهما من عملاء MCP الأمر نفسه: `effectcraft-cli` مع المعامل `mcp`. استخدم المسار الكامل إلى `effectcraft-cli`.

## تحديد المجلدات التي يستطيع استخدامها

افتراضياً يستطيع المساعد قراءة الملفات وكتابتها في أي مكان يستطيع حساب المستخدم الخاص بك الوصول إليه. ولحصره في مجلدات معينة، أضف هذه الخيارات إلى الأمر `mcp`. يأخذ كل منها مساراً كاملاً، ويمكنك تكرارها:

- `--automation-read-root <folder>`: المجلدات التي يُسمح له بالقراءة منها.
- `--automation-write-root <folder>`: المجلدات التي يُسمح له بالكتابة فيها. ودون هذا الخيار لا يستطيع كتابة أي شيء.

وما دام محصوراً بهذه الطريقة، لا يستطيع تشغيل السكربتات أيضاً.

## مشاهدته يعمل داخل التطبيق

افتراضياً يعمل المساعد على نسخة خاصة به من EffectCraft، دون نافذة. ولترى تغييراته مباشرة في التطبيق بدلاً من ذلك:

1. شغّل EffectCraft بمنفذ تحكم: `effectcraft --control 9877`.
2. أوصل المساعد بالأمر `effectcraft-cli mcp --bridge 9877`.

ويستطيع المساعد حينها أيضاً أن يلتقط لقطات شاشة وأن يستخدم قوائم التطبيق ولوحاته.

## ماذا تطلب منه

مثلاً:

- «أنشئ تركيبة بدقة 1080p ومدتها 4 ثوانٍ، يدخل فيها العنوان 'Hello' منزلقاً من اليسار مع Easy Ease.»
- «أضف Gaussian Blur إلى العنوان وحرّكه من 20 إلى 0.»
- «صيّر تركيبة Intro بصيغة ProRes مع قناة ألفا.»

## استخدامها دون مساعد

تعمل `effectcraft-cli` أيضاً وحدها. شغّل `effectcraft-cli --help` لترى ما تستطيع فعله. مثلاً، لتصيير تركيبة من مشروع محفوظ:

```bash
effectcraft-cli render main.ecproj --comp Main --out main.mp4
```
