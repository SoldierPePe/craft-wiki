---
title: استكشاف الأخطاء وإصلاحها
description: حل المشكلات الشائعة في VectorCraft، والعثور على سجله حين يحدث خطأ ما.
sidebar:
  order: 32
---

## النافذة لا تُفتح، أو تبقى سوداء

في الحاسوب الذي فيه معالجا رسومات، مثل كثير من الحواسيب المحمولة، يختار VectorCraft أحدهما نيابة عنك. وإذا لم يستطع المعالج الذي اختاره عرض النافذة، يعيد VectorCraft التشغيل على المعالج التالي من تلقاء نفسه.

لتختار بنفسك، افتح **Edit › Preferences › Performance** (أو **VectorCraft › Settings** على Mac)، واضبط **Graphics Processor** على **Power Saving (integrated)** أو **High Performance (discrete)**، ثم أعد تشغيل VectorCraft. ويعيد **Automatic** الإعداد الافتراضي.

إذا لم يصل VectorCraft إلى حد فتح Preferences، فاختر معالج الرسومات حين تشغّله. مثلاً، في PowerShell، ومن المجلد الذي فيه `vectorcraft.exe`:

```powershell
$env:WGPU_POWER_PREF = "high"     # أو "low" للمعالج المدمج
& .\vectorcraft.exe
Remove-Item Env:WGPU_POWER_PREF   # يعيد الإعداد الافتراضي لمرات التشغيل القادمة
```

على Linux أو macOS، شغّله بالأمر `WGPU_POWER_PREF=high vectorcraft`. ويمكنك أيضاً ضبط `WGPU_ADAPTER_NAME` على جزء من اسم بطاقة الرسومات، مثل `nvidia` أو `intel`. ويسرد [السجل](#العثور-على-السجل) معالجات الرسومات التي وجدها VectorCraft والمعالج الذي استخدمه.

## لا يمكن سحب الملفات إلى النافذة على Linux

على سطح مكتب Wayland، لا يعمل إفلات الملفات على نافذة VectorCraft بعد. استخدم **File › Open** أو **File › Place**، أو انسخ الملف في مدير الملفات والصقه في المستند.

لسحب الملفات إلى النافذة، افتح **Edit › Preferences › Performance**، واضبط **Linux Display Server** على **X11 (XWayland)**، وأعد تشغيل VectorCraft.

## قلم اللوح الرقمي لا يفعل شيئاً على Linux

على Wayland، في KDE Plasma 6.3 أو أحدث وفي GNOME، لا يستطيع VectorCraft بعد استقبال مدخلات القلم. إذا كان القلم موصولاً حين يبدأ VectorCraft، يفتح VectorCraft نافذته عبر XWayland بدلاً من ذلك، حيث يعمل القلم ويُقرأ ضغطه.

إذا وصلت القلم لاحقاً، فاضبط **Edit › Preferences › Performance › Linux Display Server** على **X11 (XWayland)** وأعد تشغيل VectorCraft.

## عنصر في القائمة رمادي اللون

بعض العناصر موجودة في القوائم لكنها غير منفذة بعد. وبعضها لا يعمل إلا حين يكون هناك شيء محدد، أو حين يكون النوع المناسب من الكائنات محدداً. وإذا لم تجد أمراً على الإطلاق، فاختر **Help › Search Commands**.

## ملف لا يبدو كما يبدو في تطبيق آخر

VectorCraft في مرحلة ألفا، وبعض الأشياء لا تنتقل بين التطبيقات:

- **ملفات `.ai`**: يقرأ VectorCraft جزء PDF الذي تحتويه معظم ملفات `.ai`، ويقرأ ملفات `.ai` الأقدم أيضاً. ويحفظ ملفات `.ai` بالشكل نفسه المتوافق مع PDF، دون بيانات التحرير الخاصة بتطبيق آخر، لذا قد لا تكون بعض الأشياء قابلة للتحرير حين يُفتح الملف في مكان آخر.
- **مستندات Affinity**: كل ما لم يستطع VectorCraft جلبه، مثل التعديلات (adjustments) والتمويهات والفرش، يُسرد في تحذير حين يُفتح الملف. ولا يستطيع VectorCraft حفظ ملفات Affinity.
- **ملفات Photoshop** تُفتح صورةً واحدة مدمجة، دون طبقاتها.

تسرد صفحة [فتح الملفات وحفظها](/ar/apps/vectorcraft/open-and-save-files/) ما يفتحه VectorCraft وما يحفظه في كل صيغة. وإذا احتجت إلى نسخة مطابقة تماماً، فاحتفظ بالملف الأصلي. ونرجو أن [تبلغ عن الملف](https://github.com/storytold/vectorcraft/issues) إن كان بإمكانك مشاركته: فالملفات الحقيقية هي ما نكتشف به هذه المشكلات.

## توقف VectorCraft فجأة وضاع عملي

افتح VectorCraft من جديد. إذا احتفظ بنسخ من مستندات غير محفوظة، فسيسردها مربع الحوار **Recover Documents**. اختر **Restore** لفتحها، ثم احفظها لتبقيها، أو **Discard** لحذف النسخ.

يحفظ VectorCraft افتراضياً نسخ استرداد من المستندات التي تغيّرت كل دقيقتين. لتغيير عدد المرات أو مكان حفظها، افتح **Edit › Preferences › File Handling** وانظر تحت **Data Recovery**.

## نسخة الويب بطيئة أو لا تبدأ

تستخدم نسخة الويب بطاقة الرسومات عبر WebGPU، والمتصفحات لا تسمح بها إلا في الصفحات الآمنة. افتحها من عنوان `https://`، أو من `localhost`. أما عبر `http://` العادي في غير ذلك، فتعود إلى رسومات WebGL2 الأبطأ، ولا تعمل الحافظة.

## العثور على السجل

يكتب VectorCraft سجلاً يمكنك إرفاقه ببلاغ الخطأ. ويسجّل فيه معالج الرسومات الذي استخدمه، والملفات التي واجه مشكلة معها، والأخطاء التي تعافى منها.

| النظام | مجلد السجل |
| --- | --- |
| Windows | `%APPDATA%\VectorCraft\logs\` |
| macOS | `~/Library/Application Support/VectorCraft/logs/` |
| Linux | `~/.config/vectorcraft/logs/` |

في النسخة المحمولة لـ Windows، يكون السجل في مجلد `VectorCraftData\logs` بجانب `vectorcraft.exe`.

السجل الحالي هو `vectorcraft.log`. وسجل التشغيل السابق هو `vectorcraft.1.log`، فإذا انهار VectorCraft فأرفقه أيضاً.

المجلد الذي فوق `logs` هو مجلد إعدادات VectorCraft.

## ما زلت عالقاً؟

- اسأل في [Discord الخاص بـ ArtCraft](https://discord.gg/artcraft).
- [أبلغ عن خطأ على GitHub](https://github.com/storytold/vectorcraft/issues)، وأرفق السجل.
