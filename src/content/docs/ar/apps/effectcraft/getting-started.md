---
title: البدء
description: ثبّت EffectCraft، وأنشئ تركيبة، وحرّك عنواناً، وأضف مؤثراً، وصيّرها فيديو.
sidebar:
  order: 1
---

على Mac، استخدم **⌘** بدلاً من **Ctrl**، و**Option** بدلاً من **Alt**.

## 1. ثبّت EffectCraft

أسرع طريقة هي [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): ثبّته، ثم اضغط **Install** على بطاقة EffectCraft. لتنزيل EffectCraft وحده، راجع [التثبيت والتحديث](/ar/apps/effectcraft/install-update/).

## 2. افتح EffectCraft

يفتح EffectCraft على شاشة **Home**. ومنها تستطيع أن تبدأ **New Composition**، أو تختار **Open Demo Project** أو **Import Footage…**، أو تبدأ **New from Template**، أو تفتح مشروعاً حديثاً.

لتتجول قبل أن تصنع أي شيء، اختر **Open Demo Project**. ففيه عنوان متحرك ومشهد ثلاثي الأبعاد.

## 3. أنشئ تركيبة

1. اختر **Composition › New Composition...** (**Ctrl+N**)، أو **New Composition** في شاشة Home.
2. اكتب **Composition Name**.
3. اختر **Preset**، مثل `HDTV 1080 24` أو `UHD 4K 25`، أو اضبط **Width** و**Height** و**Frame Rate** و**Duration** بنفسك.
4. اختر **OK**. تُفتح التركيبة (composition) في لوحة Composition وفي Timeline.

لتغيير هذه الإعدادات لاحقاً، اختر **Composition › Composition Settings...**.

## 4. أضف طبقة

اختر **Layer › New › Text** واكتب نصك. والطبقات الأخرى في القائمة نفسها: **Solid...** و**Shape Layer** و**Null Object** و**Adjustment Layer** و**Light...** و**Camera...**.

لاستخدام الفيديو أو الصور الخاصة بك، اختر **File › Import › File...** (**Ctrl+I**)، أو أفلت الملفات على النافذة. ثم اسحبها من لوحة Project إلى التركيبة.

## 5. حرّكها

1. في Timeline، وسّع الطبقة بالنقر على السهم بجانبها، ثم افتح **Transform**.
2. اضبط **Position** للبداية، خارج الإطار مثلاً.
3. انقر ساعة الإيقاف بجانب **Position**. فتسجّل إطاراً مفتاحياً (keyframe) عند الوقت الحالي.
4. انقل مؤشر الوقت الحالي الأزرق إلى وقت لاحق، إلى الثانية الأولى مثلاً.
5. اسحب الطبقة إلى مكانها النهائي في لوحة Composition. فيظهر إطار مفتاحي ثانٍ من تلقاء نفسه.
6. حدد الإطارين المفتاحيين واضغط **F9** (**Easy Ease**)، لتنزلق الطبقة إلى مكانها وتستقر بنعومة.
7. اضغط **Space** لتشغيلها، واضغطه مرة أخرى للإيقاف.

![محرر المنحنيات (Graph Editor) تحت Timeline، يعرض منحنى منعَّماً بين إطارين مفتاحيين لمحرك نص العنوان، وفي أسفله أزرار Graph Editor للتثبيت والخطي وBezier التلقائي وEasy Ease](/assets/uploads/effectcraft/graph-editor.webp)

## 6. أضف مؤثراً

حدد الطبقة، ثم اختر مؤثراً من قائمة **Effect**، مثل **Effect › Blur & Sharpen › Gaussian Blur**. أو افتح **Window › Effects & Presets** (**Ctrl+5**)، وابحث عن المؤثر، وانقر عليه نقراً مزدوجاً.

تظهر إعدادات المؤثر في **Effect Controls** (**F3**). ولكل إعداد ساعة إيقاف، فتستطيع تحريكه كأي خاصية أخرى.

## 7. احفظ

اختر **File › Save** (**Ctrl+S**). يحفظ EffectCraft ملف مشروع بصيغة <bdi>.ecproj</bdi>.

## 8. صيّر فيديو

1. حدد التركيبة واختر **Composition › Add to Render Queue** (**Ctrl+M**).
2. في **Render Queue**، وسّع العنصر. انقر **Output Module:** لتختار صيغة. والصيغة الافتراضية H.264 (بامتداد <bdi>.mp4</bdi>).
3. انقر اسم الملف بجانب **Output To:** لتختار مكان حفظه.
4. اختر **Render**.

## الخطوات التالية

- [سير العمل](/ar/apps/effectcraft/workflows/): اللقطات، وتسلسلات الصور، والمؤثرات، وصيغ التصيير، وLottie.
- [استكشاف الأخطاء وإصلاحها](/ar/apps/effectcraft/troubleshooting/): إذا لم يستخدم EffectCraft بطاقة الرسومات، أو فُقدت اللقطات.

وفي **Help › In-App Tutorials...** دروس إرشادية داخل التطبيق.
