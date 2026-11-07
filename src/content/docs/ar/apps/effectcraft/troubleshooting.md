---
title: استكشاف الأخطاء وإصلاحها
description: حل مشكلات بطاقة الرسومات، واللقطات المفقودة، والسحب والإفلات على Linux، والعمل الضائع في EffectCraft.
sidebar:
  order: 6
---

على Mac، استخدم **⌘** بدلاً من **Ctrl**، و**Option** بدلاً من **Alt**. وحيث تذكر هذه الصفحة **Edit › Preferences**، اختر على Mac **EffectCraft › Settings...**.

## EffectCraft لا يستخدم بطاقة الرسومات

اختر **Help › System Compatibility Report...** وانظر إلى سطري **GPU:** و**Window graphics:**. إذا ظهر **GPU: none (CPU compositing)**، فهذا يعني أن مركِّب بطاقة الرسومات لم يبدأ، ويظهر السبب بجانبه. ويظل EffectCraft يعمل، لكن المعاينات تكون أبطأ.

وفي صفحة **Previews** من **Edit › Preferences** زر **GPU Information...** فيه تفاصيل أكثر.

### جرّب وضع الرسومات المتوافق

1. اختر **Edit › Preferences**، ثم صفحة **Startup & Repair**.
2. اضبط **Window Graphics** على **OpenGL (compatibility)**. والقيمة الافتراضية **Automatic**.
3. أعد تشغيل EffectCraft.

يجري OpenGL التركيب دائماً على المعالج، لذا يساعد هذا على فتح النافذة بثبات لكنه لن يسرّع المعاينات.

:::note
إذا انهار برنامج تشغيل الرسومات، يتحول EffectCraft إلى OpenGL من تلقاء نفسه في المرة القادمة التي يبدأ فيها.
:::

### بطاقات NVIDIA على Windows 11

على بعض حواسيب Windows 11 التي فيها بطاقات NVIDIA، يفشل المركِّب في البدء على DirectX 12 لكنه يعمل على Vulkan. وهذه [مشكلة معروفة](https://github.com/storytold/effectcraft/issues/613).

## اللقطات مفقودة أو غير متصلة

تُفقد اللقطات حين يُنقل ملفها أو يُعاد تسميته أو يُحذف، أو حين تفتح مشروعاً من حاسوب آخر.

- يحدد **File › Dependencies › Find Missing Footage** كل العناصر المفقودة في لوحة Project.
- يوجّه **File › Dependencies › Relink Missing Footage...** العناصر المفقودة إلى مجلدها الجديد. ولا يوجد في نسخة المتصفح.
- يوجّه **File › Replace Footage › File...** (**Ctrl+H**) عنصراً واحداً إلى ملف آخر.
- يقرأ **File › Reload Footage** (**Ctrl+Alt+L**) الملف من جديد بعد أن تغيّره.

## لا أستطيع سحب الملفات إلى النافذة على Linux

لا يعمل إفلات الملفات حين يعمل EffectCraft على Wayland مباشرة. استخدم **File › Import › File...** بدلاً من ذلك، أو شغّل EffectCraft عبر XWayland:

```bash
env -u WAYLAND_DISPLAY effectcraft
```

## انهار EffectCraft وضاع عملي

يحفظ EffectCraft مشاريعك تلقائياً. اضبط ذلك في صفحة **Project** من **Edit › Preferences**، تحت **Auto-Save**:

- يشغّل **Automatically Save Projects** الحفظ التلقائي أو يوقفه.
- يحدد **Save Every** عدد مرات الحفظ، بالدقائق.
- يحدد **Maximum Project Versions** عدد نسخ الحفظ التلقائي التي يحتفظ بها.
- يحفظ **Auto-Save Location** النسخ في **Next to Project** أو في **Custom Location**.
- يحفظ **Save When Starting Render Queue** المشروع قبل كل تصيير.

بعد الانهيار، يعرض EffectCraft فتح آخر نسخة حفظ تلقائي. شغّل ذلك أو أوقفه بالخيار **Offer to Open the Latest Auto-Save After a Crash** في صفحة **Startup & Repair**.

## الحصول على سجل لبلاغ الخطأ

اختر **Help › Enable Logging**، ثم كرر ما تسبب في المشكلة. ويُظهر **Help › Reveal Logging File** مكان السجل.

## ما زلت عالقاً؟

اسأل على [Discord](https://discord.gg/artcraft)، أو [افتح بلاغاً](https://github.com/storytold/effectcraft/issues) على GitHub. وأرفق النص الذي يعرضه **Help › System Compatibility Report...**، والسجل إن كان لديك.
