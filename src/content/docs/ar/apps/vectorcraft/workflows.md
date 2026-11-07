---
title: سير العمل
description: أدلة خطوة بخطوة للرسم والتلوين والنص والتأثيرات والطبقات والتتبع والتصدير والطباعة والأتمتة في VectorCraft، مع الاختصارات.
sidebar:
  order: 3
---

في VectorCraft، كل شكل وخط وحرف هو مسار: مخطط خارجي يبقى حاداً مهما كان حجمه. تبدأ الأدلة أدناه بمستند جديد وتنتهي بالأتمتة، ويمكنك قراءة كل منها وحده.

تُكتب الاختصارات لنظامي Windows وLinux أولاً، ثم لنظام macOS: **Ctrl+G** (**Cmd+G** على macOS). ويمكنك تغيير كل اختصار من **Edit → Keyboard Shortcuts…** (**Ctrl+Alt+Shift+K**، أو **Cmd+Option+Shift+K** على macOS). ويعثر **Help → Search Commands…** (**Ctrl+Shift+/**، أو **Cmd+Shift+/** على macOS) على أي أمر في القوائم باسمه.

:::note
بعض عناصر القوائم رمادية. هذه الميزات غير منفذة بعد؛ وهي مدرجة لترى ما هو قادم.
:::

## الأدلة

| الدليل | ما يتناوله |
|---|---|
| [إعداد المستند وألواح الرسم](/ar/apps/vectorcraft/set-up-documents-and-artboards/) | الإعدادات المسبقة في New Document، وألواح الرسم، والوحدات، ومنطقة النزف (bleed)، ووضع الألوان، والتنقل في مساحة الرسم |
| [رسم الأشكال وتحويلها](/ar/apps/vectorcraft/draw-and-transform-shapes/) | أدوات الأشكال، والزوايا الحية، والتحديد، والنقل، والتدوير، والتحجيم، وتكرار التحويل |
| [رسم المسارات وتحريرها](/ar/apps/vectorcraft/draw-and-edit-paths/) | أدوات Pen وCurvature وPencil وPaintbrush وBlob Brush، وتحرير نقاط الارتكاز، وأوامر **Object → Path** |
| [التعبئة والحد واللون](/ar/apps/vectorcraft/fill-stroke-and-color/) | التعبئة والحد، وعينات الألوان، ولوحة Stroke، والتدرجات اللونية، وشبكات التدرج اللوني، والنقوش، وإعادة التلوين |
| [إضافة النص وتنسيقه](/ar/apps/vectorcraft/add-and-style-type/) | نص النقطة، ونص المساحة، والنص على مسار، وتسلسل النص، ولوحتا Character وParagraph |
| [الترتيب والتجميع والمحاذاة](/ar/apps/vectorcraft/arrange-group-and-align/) | ترتيب التكديس، والمجموعات، والقفل والإخفاء، وتحديد الكائنات المتشابهة، ولوحة Align |
| [دمج الأشكال وقصها](/ar/apps/vectorcraft/combine-and-cut-shapes/) | Pathfinder وShape Builder، والمسارات المركبة، وأقنعة القص، وLive Paint |
| [تطبيق التأثيرات والمظهر](/ar/apps/vectorcraft/apply-effects-and-appearance/) | لوحة Appearance، والتأثيرات الحية، والمزج، وRepeat، وEnvelope Distort، والتأثيرات ثلاثية الأبعاد، والأنماط الرسومية |
| [التنظيم بالطبقات والرموز](/ar/apps/vectorcraft/organize-with-layers-and-symbols/) | الطبقات، والطبقات الفرعية، وطبقات القالب، والرموز القابلة لإعادة الاستخدام |
| [تتبع صورة](/ar/apps/vectorcraft/trace-an-image/) | وضع صورة وتحويلها إلى مسارات باستخدام Image Trace |
| [التصدير للشاشات والويب](/ar/apps/vectorcraft/export-for-screens-and-the-web/) | Export for Screens، والأصول، وخيارات SVG وPNG |
| [فتح الملفات وحفظها](/ar/apps/vectorcraft/open-and-save-files/) | صيغة VectorCraft، وصيغ Save As، وفتح الملفات الأخرى ووضعها في المستند |
| [طباعة عملك الفني](/ar/apps/vectorcraft/print-your-artwork/) | مربع حوار Print، والعلامات ومنطقة النزف، والتحجيم، وفصل الألوان، وإعدادات الطباعة المسبقة |
| [طباعة ملصق كبير](/ar/apps/vectorcraft/print-tiling/) | تبليط الرسم على عدة أوراق |
| [أتمتة VectorCraft](/ar/apps/vectorcraft/automate-vectorcraft/) | البحث عن الأوامر، واختصارات لوحة المفاتيح، ولوحة Actions، وأداة سطر الأوامر، وخادم بروتوكول سياق النموذج (MCP) |
| [وكلاء الذكاء الاصطناعي](/ar/apps/vectorcraft/ai-agents/) | ربط عميل MCP بـ VectorCraft وحصره في مجلد واحد |

## الرسم بالمنظور

أظهر الشبكة من **View → Perspective Grid → Show Grid** (**Ctrl+Shift+I**، أو **Cmd+Shift+I** على macOS). واختر **One Point Perspective** أو **Two Point Perspective** أو **Three Point Perspective** من القائمة نفسها. وما دامت الشبكة ظاهرة، ترسم أدوات Rectangle وEllipse وPolygon وStar وLine على مستواها النشط. واستخدم **Perspective Selection Tool** (**Shift+V**) لتحريك الرسم على مستواه.

![واجهتا مبنيين مضاءتان مرسومتان على المستويين الأيسر والأيمن لشبكة منظور ثنائية النقطة عند الغروب، وأداة Perspective Selection نشطة، وأداة اختيار المستوى في الزاوية العلوية اليسرى](/assets/uploads/vectorcraft/perspective.webp)

## القياس والأبعاد

تضيف **Dimension Tool** الأطوال والزوايا وأنصاف الأقطار إلى الرسومات التقنية. اختر **Linear** أو **Angular** أو **Radial** في شريطها، ثم اسحب انطلاقاً من حافة أو انقر نقطتين. ويتبع البُعد الرسمَ حين تغيّره. واضبط الوحدات والدقة والنمط في لوحة **Properties**.

![رسم لقطعة تثبيت بالسمة الفاتحة، فيه أبعاد خطية وزاوية وأبعاد للقطر ونصف القطر بالمليمتر. يعرض شريط أداة Dimension الخيارات Linear وAngular وRadial، وتعرض لوحة Properties وحدات البُعد المحدد ودقته وسماكة خطه ونمط أسهمه](/assets/uploads/vectorcraft/dimensions.webp)

## تغيير مظهر VectorCraft

- اختر **Edit → Preferences…** (**Ctrl+K**) وافتح صفحة **User Interface**. وعلى macOS، اختر **VectorCraft → Settings → User Interface…**. تضبط هذه الصفحة **Brightness** (**Dark** أو **Medium Dark** أو **Medium Light** أو **Light**)، و**Accent Color**، و**Canvas Color**، وحجم الواجهة تحت **UI Scaling**.
- ويغيّر **Language** في الصفحة نفسها لغة الواجهة. ويتبع VectorCraft لغة نظامك افتراضياً.
- ويبدّل **Window → Workspace** بين تخطيطات اللوحات، ويحفظ تخطيطاتك الخاصة.

## اختصارات لوحة المفاتيح

| الأمر | Windows وLinux | macOS |
|---|---|---|
| Selection وDirect Selection | V, A | V, A |
| Pen وType | P, T | P, T |
| Rectangle وEllipse | M, L | M, L |
| Hand وZoom | H, Z | H, Z |
| جديد، فتح، حفظ | Ctrl+N, Ctrl+O, Ctrl+S | Cmd+N, Cmd+O, Cmd+S |
| حفظ باسم | Ctrl+Shift+S | Cmd+Shift+S |
| تراجع، إعادة | Ctrl+Z, Ctrl+Shift+Z | Cmd+Z, Cmd+Shift+Z |
| نسخ، قص، لصق | Ctrl+C, Ctrl+X, Ctrl+V | Cmd+C, Cmd+X, Cmd+V |
| لصق في المقدمة، لصق في الخلف | Ctrl+F, Ctrl+B | Cmd+F, Cmd+B |
| تجميع، فك التجميع | Ctrl+G, Ctrl+Shift+G | Cmd+G, Cmd+Shift+G |
| تقديم خطوة، إرجاع خطوة | <bdi>Ctrl+], Ctrl+[</bdi> | <bdi>Cmd+], Cmd+[</bdi> |
| تكرار التحويل | Ctrl+D | Cmd+D |
| تكبير، تصغير | <bdi>Ctrl+=, Ctrl+-</bdi> | <bdi>Cmd+=, Cmd+-</bdi> |
| ملاءمة لوح الرسم في النافذة | Ctrl+0 | Cmd+0 |
| تشغيل عرض Outline أو إيقافه | Ctrl+Y | Cmd+Y |
| إظهار المساطر أو إخفاؤها | Ctrl+R | Cmd+R |
| تشغيل Smart Guides أو إيقافها | Ctrl+U | Cmd+U |
| التفضيلات | Ctrl+K | Cmd+K |

## قبل أن تبدأ

- تسرد صفحة [التثبيت والتحديث](/ar/apps/vectorcraft/install-update/) أماكن تنزيل VectorCraft لنظامك.
- وتتناول صفحة [البدء](/ar/apps/vectorcraft/getting-started/) أول مستند، من لوح رسم فارغ حتى ملفي PNG وSVG مُصدَّرين.
- وتتناول صفحة [استكشاف الأخطاء وإصلاحها](/ar/apps/vectorcraft/troubleshooting/) المشكلات الشائعة ومكان العثور على السجل.
