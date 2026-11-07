---
title: البدء
description: ثبّت Craft Anything، واربط Claude Code، وأعد بناء أول موقع ويب لك.
---

يأخذك هذا الدليل من تثبيت Craft Anything حتى نسختك الخاصة من موقع صغير، `example.com`، أُعيد بناؤه في وضع Clean room. وبعد أن يبدأ البناء، يجري وحده.

## 1. ثبّت Craft Anything

نزّل الإصدار المناسب لحاسوبك من [أحدث إصدار](https://github.com/storytold/craft-anything/releases/latest) وثبّته. ويوضح [التثبيت والتحديث](/ar/apps/craft-anything/install-update/) أي ملف تختار.

وتحتاج دراسة موقع ويب أيضاً إلى Chrome أو Edge أو Brave أو متصفح آخر مبني على Chromium على حاسوبك.

## 2. ثبّت Claude Code وسجّل الدخول

يبني Craft Anything باستخدام وكيل برمجة على حاسوبك. يستخدم هذا الدليل Claude Code، الذي يحظى بالدعم أولاً؛ ويسرد [سير العمل](/ar/apps/craft-anything/workflows/#البناء-بذكاء-اصطناعي-آخر) الوكلاء الآخرين.

1. ثبّت Claude Code باتباع [دليل الإعداد من Anthropic](https://code.claude.com/docs/en/setup).
2. سجّل الدخول مرة واحدة من الطرفية:

   ```bash
   claude auth login
   ```

يشغّل Craft Anything برنامج `claude` الخاص بك بتسجيل دخولك أنت، ولا يرى حسابك أبداً ولا يخزنه.

## 3. افتح Craft Anything

في أول مرة تشغّله، تُعدّه بضع شاشات ترحيب:

1. اختر **I'm new to this**.
2. يجب أن تذكر شاشة **Who builds what you make** اسم Claude Code. اضغط **Continue**.
3. تطلب منك شاشة **What brings you here?** سطراً واحداً بكلمات بسيطة، ويبقى على حاسوبك. اضغط **Continue**.
4. في شاشة **You're all set**، اضغط **Let's go**.

إذا لم تجد الشاشة الثانية Claude Code، فراجع [استكشاف الأخطاء وإصلاحها](/ar/apps/craft-anything/troubleshooting/#رسالة-nothing-can-build-yet).

## 4. ابدأ مشروعاً

1. في شاشة **What do you want to make?**، اختر **A website**.
2. اكتب `https://example.com` في خانة العنوان.
3. أبقِ **Clean room** محدداً. فهو يعمل مما يراه الزائر ولا يقرأ شيفرة الموقع أبداً.
4. اكتب «Recreate this website» واضغط **Start**.

![شاشة Make على تبويب Make my own version: الخيار A website محدد، والعنوان https://example.com مكتوب، وClean room محدد، وعبارة «Recreate this website» في مربع الطلب، وحقل Built by يعرض Automatic (Claude Code) بجانب زر Start](/assets/uploads/craft-anything/make.png)

تُفتح صفحة المشروع. وتمتلئ خطواتها، **Study** و**Build** و**Check** و**Ready**، مع تقدم التشغيل، ويذكر موجز الأحداث بكلمات بسيطة ما يفعله الباني.

## 5. تابع التشغيل

يواصل الباني العمل وحده: حين يكون أمامه خيار، يقرر ويذكر ما اختاره. ولا يحذف أبداً أي شيء خارج مشروعه، ولا يغيّر إعدادات النظام، ولا ينشر أي شيء.

للتوقف مؤقتاً، اضغط **Pause** بجانب **Send**؛ فيُحفظ كل ما أُنجز حتى الآن، ويستأنف **Continue** من حيث توقف.

## 6. افتح نسختك

حين يصل التشغيل إلى **Ready**، يذكر **Likeness** في اللوحة الجانبية مدى قرب نسختك من الأصل، ويعطيه آخر فحص في الموجز صفحةً صفحة. اضغط **Open the website** لترى نسختك، أو **Open folder** لترى ملفاتها.

## 7. اطلب تغييراً

اكتب تغييراً في المربع في الأسفل، مثلاً «اجعل العنوان الرئيسي أزرق»، وأرسله. يغيّر الباني المشروع ويفحصه من جديد.

## الخطوات التالية

- [سير العمل](/ar/apps/craft-anything/workflows/): أعد إنشاء التطبيقات والألعاب، وابدأ من لا شيء، واختر ما يمكن للباني فعله دون أن يسأل.
- [استكشاف الأخطاء وإصلاحها](/ar/apps/craft-anything/troubleshooting/): إذا لم ينجح شيء ما.
