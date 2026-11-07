---
title: استكشاف الأخطاء وإصلاحها
description: حل المشكلات الشائعة في WordCraft، والعثور على سجله حين يحدث خطأ.
sidebar:
  order: 8
---

## النافذة لا تفتح على Windows

إذا ظهر WordCraft لحظة في إدارة المهام ثم أُغلق قبل ظهور نافذته، فقد يكون السبب برنامج تشغيل بطاقة الرسومات. شغّله بنظام رسومات آخر. في PowerShell، ومن المجلد الذي فيه `wordcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\wordcraft.exe
Remove-Item Env:WGPU_BACKEND   # يعيد الإعداد الافتراضي لمرات التشغيل القادمة
```

إذا لم ينفع ذلك، فجرّب `"dx12"` بدلاً من `"vulkan"`.

## يغلق مع رسالة «Parent device is lost»

إذا أُغلق WordCraft مباشرة بعد ظهور نافذته، وكان في السجل **Parent device is lost**، فشغّله مع ضبط `WGPU_BACKEND` على `"vulkan"`، كما سبق. فهذا يتجنب DirectX 12 تماماً.

## بطيء على حاسوب Windows قديم

على بعض شرائح الرسومات القديمة، لا توفر DirectX 12 إلا عارضاً برمجياً يرسم كل شيء على المعالج. ويتحول WordCraft عادة إلى OpenGL من تلقاء نفسه. إذا بقي بطيئاً، فابحث في [السجل](#العثور-على-السجل) عن الأسطر التي تبدأ بـ `graphics:` لتعرف أي نظام اختار، وجرّب ضبط `WGPU_BACKEND` على `"gl"` أو `"dx12"`، كما سبق.

## النص ضبابي على Linux، أو لا يمكن سحب الملفات إلى النافذة

على سطح مكتب Wayland، يعمل WordCraft افتراضياً عبر XWayland، لأنها الطريقة الوحيدة التي يعمل بها سحب الملفات إلى النافذة. للحصول على نص أوضح مع التحجيم الكسري، انتقل إلى Wayland الأصلي: اختر **ملف › الخيارات › متقدم › Linux display server › Wayland**، ثم أعد تشغيل WordCraft. لن يعمل سحب الملفات إلى النافذة ما دام يستخدم Wayland. اختر **X11 (XWayland)** أو **تلقائي** للعودة.

## القراءة بصوت عال صامتة على Linux

تستخدم القراءة بصوت عالٍ برنامج نطق مثبتاً على نظامك: `espeak-ng` أو `espeak` أو Speech Dispatcher. تثبّت حزمتا `.deb` و`.rpm` واحداً منها لك. أما مع AppImage أو أرشيف tar، فثبّته بنفسك:

```bash
sudo apt install espeak-ng      # Debian, Ubuntu
sudo dnf install espeak-ng      # Fedora
sudo pacman -S espeak-ng        # Arch
```

لا تستطيع نسخة Flatpak النطق بعد.

## لغة يظهر بجانبها «(بلا قاموس)»

يُظهر شريط الحالة لغة النص مع **(بلا قاموس)** حين لا يستطيع WordCraft تدقيق إملائها. ثبّت حزمة تلك اللغة: راجع [اللغات والإملاء](/ar/apps/wordcraft/languages/).

## مستند لا يبدو كما يبدو في تطبيق آخر

WordCraft في مرحلة ألفا. قد تتوزع بعض التخطيطات على الصفحات بشكل مختلف، ولا تُحفظ المخططات وعناصر SmartArt عند الحفظ بعد. إذا احتجت إلى نسخة مطابقة تماماً، فاحتفظ بالملف الأصلي. ونرجو أن [تبلغ عن المستند](https://github.com/storytold/wordcraft/issues) إن أمكنك مشاركته: فبالملفات الحقيقية نكتشف هذه المشكلات.

## توقف WordCraft وضاع عملي

افتح WordCraft من جديد. إذا احتفظ بنسخة من عملك غير المحفوظ، فسيعرضها في **ملف › استعادة**. راجع [استرداد المستندات](/ar/apps/wordcraft/recovery/).

## العثور على السجل

يكتب WordCraft سجلاً يمكنك إرفاقه ببلاغ الخطأ. يسجل فيه أجزاء المستند التي لم يستطع قراءتها، والصور أو الخطوط التي اضطر إلى تركها خارج ملف PDF، والأخطاء التي تعافى منها. ولا يحتوي أبداً على نص مستندك.

| النظام | مجلد السجل |
| --- | --- |
| Windows | `%APPDATA%\WordCraft\logs\` |
| macOS | `~/Library/Application Support/WordCraft/logs/` |
| Linux | `~/.config/wordcraft/logs/` |

السجل الحالي هو `wordcraft.log`. وسجل التشغيل السابق هو `wordcraft.1.log`، فإذا انهار WordCraft فأرفقه أيضاً.

المجلد الذي فوق `logs` هو مجلد إعدادات WordCraft.

## ما زلت عالقاً؟

- اسأل في [Discord الخاص بـ ArtCraft](https://discord.gg/artcraft).
- [أبلغ عن خطأ على GitHub](https://github.com/storytold/wordcraft/issues)، وأرفق السجل.
