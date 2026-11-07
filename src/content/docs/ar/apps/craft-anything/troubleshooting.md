---
title: استكشاف الأخطاء وإصلاحها
description: حل المشكلات الشائعة في Craft Anything، والعثور على سجله حين يحدث خلل.
---

ابدأ بتشغيل الفحص الذي يأتي مع التطبيق. فهو يذكر ما إذا كان التثبيت ووكلاء البرمجة والمحركات جاهزة، وما الذي ينقص:

```bash
craft-anything-cli doctor
```

إذا لم تجد الطرفية `craft-anything-cli`، فشغّله من المجلد الذي ثُبّت فيه Craft Anything:

- **Windows** (المثبّت): `C:\Program Files\Craft Anything\craft-anything-cli.exe`
- **macOS**: `/Applications/Craft Anything.app/Contents/MacOS/craft-anything-cli`
- **AppImage**: `<AppImage> --cli doctor`

## رسالة «Nothing can build yet»

لم يعثر Craft Anything على وكيل برمجة.

1. ثبّت Claude Code باتباع [دليل الإعداد من Anthropic](https://code.claude.com/docs/en/setup).
2. سجّل الدخول إليه مرة واحدة: `claude auth login`.
3. اضغط **Look again** في شاشة الترحيب، أو **Detect** في **Settings → AI**.

إذا كان Claude Code مثبتاً في مكان لا يبحث فيه Craft Anything، فافتح **Settings → AI** واستخدم **Choose…** بجانب برنامجه لتحدده. وللبناء بمفتاح API بدلاً من ذلك، أضف مفتاحاً في **Settings → AI**.

## تطبيق Claude لسطح المكتب مثبت، لكن لا شيء يُبنى

ثبّت Claude Code وحده وسجّل الدخول إليه مرة واحدة في الطرفية، ثم اضغط **Detect** في **Settings → AI**. البناء يحتاج إلى Claude Code، أداة سطر الأوامر، وهي غير مضمّنة في تطبيق Claude لسطح المكتب.

## رسالة «Claude Code isn't signed in on this computer»

شغّل أمر تسجيل الدخول في الطرفية (ينسخه **Copy the command** في البطاقة)، ثم اضغط **Try again**:

```bash
claude auth login
```

## رسالة «This build stopped part-way»

اضغط **Continue**. أُغلق التطبيق أو الحاسوب أثناء البناء؛ وكل ما أُنجز حتى الآن محفوظ، ويستأنف **Continue** من حيث توقف.

## رسالة «The build still isn't working after … checks»

توقف البناء بعد أن وجدت 10 فحوص متتالية أنه لا يعمل. اقرأ ملاحظة آخر فحص في الموجز لتعرف ما وجده، ثم أرسل طلباً جديداً بتصحيح محدد. لا يعيد **Try again** ضبط العدّاد؛ أما الطلب الجديد فيعيده.

## تعذّر دراسة موقع ويب

ثبّت Chrome أو Edge أو Brave أو متصفحاً آخر مبنياً على Chromium. يستخدمه Craft Anything ليرى الموقع كما يراه الزائر.

مع Flatpak، لا يمكن دراسة مواقع الويب إطلاقاً: فالبيئة المعزولة لا تستطيع تشغيل متصفح على حاسوبك. استخدم AppImage أو `.deb` أو `.rpm` أو أرشيف tar بدلاً منه ([التثبيت والتحديث](/ar/apps/craft-anything/install-update/#linux)). وتحت Flatpak، يُسجَّل الدخول إلى Claude Code أيضاً بشكل منفصل عن النسخة الموجودة على حاسوبك؛ وتعطيك رسالة تسجيل الدخول الأمر الذي تشغّله.

## النافذة لا تُفتح على Windows

شغّل التطبيق مرة أخرى. فكل تشغيل يفشل ينتقل إلى طريقة الرسم التالية (أولاً DX12، ثم WARP، ثم Vulkan، ثم OpenGL) ويحتفظ بالطريقة التي تنجح.

إذا ظلت لا تُفتح:

1. حدّث برنامج تشغيل الرسومات.
2. للرسم دون بطاقة الرسومات (وهو أبطأ)، اضبط متغير البيئة `CRAFT_ANYTHING_RENDERER=software` وشغّل التطبيق مرة أخرى.

## اختيار بطاقة الرسومات على Linux

يرسم Craft Anything على بطاقة الرسومات التي تشغّل شاشتك، وهذا أسرع في الفتح على حاسوب محمول فيه بطاقتان. لاستخدام بطاقة أخرى، اضبط `WGPU_ADAPTER_NAME` (مثلاً `nvidia`) أو `WGPU_POWER_PREF=high`. ويذكر [السجل](#العثور-على-السجل) البطاقة التي اختارها ولماذا.

## يحظر macOS أداة سطر الأوامر

قد تظهر رسالة «Apple could not verify craft-anything-cli» للأداة التي في ملف zip المنفصل. اضغط **Done** (وليس **Move to Trash**)، ثم افعل أحد الأمرين:

- شغّل `xattr -d com.apple.quarantine <path to craft-anything-cli>`.
- اسمح بها في **System Settings → Privacy & Security → Open Anyway**.

لا يستطيع برنامج منفرد أن يحمل توثيقه معه، لذا يبحث macOS عنه عبر الإنترنت. وتنزيل ملف zip من الطرفية يتجنب هذا الفحص؛ راجع [أوامر التنزيل لنظام macOS في ملف README](https://github.com/storytold/craft-anything#macos).

## أداة مرفوضة في وضع Clean room

إذا كان مسموحاً لك بالنظر داخل الأصل، فبدّل إلى **Deep** في شريط العنوان. لا يقرأ وضع Clean room أبداً ما بداخل الأصل، لذا تُرفض الأدوات التي قد تفعل ذلك.

## الباني يسأل قبل كل أمر

الخيار **Auto mode** معطّل. في البطاقة، اختر **Always for this project** لإيقاف الأسئلة عن هذا النوع من الأوامر، أو أعد تفعيل **Auto mode** في **Settings → Safety**.

:::caution
تثبيت الحزم يشغّل شيفرتها على حاسوبك، ويشغّل npm سكربتات التثبيت افتراضياً. لا تسمح بمدير حزم إلا لمشروع تثق باعتمادياته.
:::

## العثور على السجل

يكتب تطبيق سطح المكتب `desktop.log` في مجلد إعداداته:

| النظام | مجلد الإعدادات |
|---|---|
| Windows | `%APPDATA%\craft-anything` |
| macOS | `~/Library/Application Support/craft-anything` |
| Linux وFreeBSD | `~/.config/craft-anything` |
| Flatpak | `~/.var/app/ai.storyteller.craft-anything/config/craft-anything` |
| النسخة المحمولة | `CraftAnythingData`، بجانب التطبيق |

إذا كان متغير البيئة `CRAFT_ANYTHING_CONFIG_DIR` مضبوطاً، فمجلد الإعدادات هناك بدلاً من ذلك.

## ما زلت عالقاً؟

[أبلغ عن مشكلة على GitHub](https://github.com/storytold/craft-anything/issues) واذكر ما فعلته وما حدث وأرفق `desktop.log`، أو اسأل على [Discord](https://discord.gg/artcraft).
