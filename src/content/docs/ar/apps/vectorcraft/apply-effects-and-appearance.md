---
title: تطبيق التأثيرات والمظهر
description: كدّس التعبئات والحدود والتأثيرات الحية على كائن واحد، وغيّرها لاحقاً في لوحة Appearance، واحفظ الهيئة كنمط رسومي.
sidebar:
  order: 17
---

يمكن أن يكون للكائن في VectorCraft أكثر من تعبئة وحد، وتأثيرات حية مثل الظلال والزوايا المدورة والالتواءات. يشرح هذا الدليل كيف تبني هذا التراكب في لوحة Appearance، وتطبّق التأثيرات وتحررها من قائمة Effect، وتحفظ النتيجة كنمط رسومي (graphic style) تطبّقه على كائنات أخرى بنقرة واحدة.

## بناء الهيئة في لوحة Appearance

يسرد **Window → Appearance** (Shift+F6) كل ما يلوّن الكائن المحدد: حدوده وتعبئاته، والتأثيرات على كل منها وعلى الكائن كله، وعتامته. الصف العلوي في اللوحة يُرسم أخيراً، أمام الصفوف التي تحته.

1. حدد كائناً واضغط Shift+F6 لفتح لوحة Appearance.
2. اضغط **Ctrl+/** (**Cmd+/** على macOS) لإضافة تعبئة جديدة، أو **Ctrl+Alt+/** (**Cmd+Option+/** على macOS) لإضافة حد جديد. والزران أسفل اللوحة يفعلان الشيء نفسه: **Add New Stroke** و**Add New Fill**.
3. انقر عينة اللون في صف لتختار إحدى عينات ألوان المستند، أو انقرها مع الضغط على Shift لتمزج لوناً في لوحة Color. ولصف الحد أيضاً حقل **Weight**.
4. اسحب صفاً لأعلى أو لأسفل لتغيير الترتيب. وأبقِ **Alt** مضغوطاً (**Option** على macOS) أثناء السحب لتنسخ الصف بدلاً من نقله.
5. انقر العين على يسار الصف لتخفي ذلك الصف دون حذفه. وانقرها مرة أخرى لإظهاره.

تُظهر لقطة الشاشة التالية شارة خضراء مزرقة بحد داكن رفيع، وخلفه حد أصفر عريض، وظل مسقط، كما تسردها لوحة Appearance.

![شارة خضراء مزرقة مكتوب عليها OPEN LATE بحد داكن رفيع، وخلفه حد أصفر عريض، وظل مسقط. الشارة محددة، وتسرد لوحة Appearance حديها وتعبئتها وتأثير Drop Shadow وعتامتها](/assets/uploads/vectorcraft/appearance-panel.webp)

تعمل الأزرار أسفل اللوحة على الكائن أو الصف المحدد:

| الزر | ما يفعله |
|---|---|
| **Add New Stroke** | يضيف حداً في أعلى تراكب الكائن |
| **Add New Fill** | يضيف تعبئة في أعلى تراكب الكائن |
| **Add New Effect** | يفتح قائمة بالتأثيرات لتطبيق أحدها |
| **Clear Appearance** | يترك للكائن تعبئة واحدة وحداً واحداً، كلاهما على None، ويعيد تعيين عتامته |
| **Duplicate Selected Item** | ينسخ صف التعبئة أو الحد المحدد مع تأثيراته، أو صف التأثير المحدد |
| **Delete Selected Item** | يزيل صف التعبئة أو الحد أو التأثير المحدد |

وفي قائمة اللوحة **Reduce to Basic Appearance**، الذي يُبقي تعبئة واحدة وحداً واحداً ويزيل كل التأثيرات.

:::tip
انقر الصفوف مع الضغط على Ctrl (على Cmd في macOS) أو على Shift لتحدد عدة تعبئات وحدود، ثم انقر **Duplicate Selected Item** أو **Delete Selected Item** مرة واحدة لها كلها.
:::

## تطبيق تأثير حي

تبقى التأثيرات في VectorCraft حية. يحتفظ الكائن بمساره الأصلي، ويرسم VectorCraft التأثير من ذلك المسار كلما أُعيد رسم مساحة الرسم. ويمكنك تغيير التأثير أو إزالته في أي وقت.

1. حدد كائناً.
2. اختر تأثيراً من قائمة **Effect**، مثل **Effect → Stylize → Drop Shadow…**.
3. غيّر الإعدادات في النافذة. يكون **Preview** مفعّلاً حين تُفتح النافذة، فتعرض مساحة الرسم النتيجة أثناء تغييرك للقيم.
4. اضغط **OK**.

لتغيير تأثير لاحقاً، حدد الكائن وانقر صف التأثير في لوحة Appearance نقراً مزدوجاً، أو انقر اسمه. تُفتح النافذة بالقيم الحالية.

لتطبيق تأثير على تعبئة واحدة أو حد واحد فقط، انقر ذلك الصف في لوحة Appearance أولاً، ثم اختر التأثير. وإن لم يكن أي صف محدداً، يُطبَّق التأثير على الكائن كله.

:::note
إن اخترت تأثيراً موجوداً على الكائن من قبل، يسألك VectorCraft هل تحرّر التأثير المطبّق أم تضيف تأثيراً آخر. يفتح **Edit** التأثير الموجود، ويطبّق **Add New** نسخة ثانية منه.
:::

تُظهر الصورة التالية النجمة نفسها بستة تأثيرات حية مختلفة. ولا تزال كل نجمة تحتفظ بمسارها الأصلي ذي الرؤوس الخمسة.

![ست نسخ من النجمة المرجانية نفسها في سماء ليلية، على كل منها تسمية بتأثيرها الحي الوحيد: ظل مسقط، وزوايا مدورة، وحافة متعرجة، وشكل منتفخ، والتواء قوسي، وتمويه غاوسي. النجمة المتعرجة محددة، وتسرد لوحة Appearance تأثيرها](/assets/uploads/vectorcraft/effects-gallery.webp)

### قائمة Effect

في أعلى قائمة Effect ثلاثة أوامر:

- يطبّق **Apply Last Effect** آخر تأثير مرة أخرى بالإعدادات نفسها.
- يفتح **Last Effect…** نافذة آخر تأثير، وفيها تغيّر الإعدادات قبل تطبيقه.
- يضبط **Document Raster Effects Settings…** الدقة وخيارات أخرى للتأثيرات النقطية.

تحت عنوان **Vector Effects**، تسرد القائمة 3D and Materials وColor Adjustments وColor Effects وConvert to Shape وCrop Marks وDistort & Transform وPath وPath Effects وPathfinder و<bdi>Rasterize…</bdi> وStylize وSVG Filters وWarp. وتحت عنوان **Raster Effects**، تسرد <bdi>Effect Gallery…</bdi> ومجموعات قائمة على البكسلات مثل Artistic وBlur وSketch.

تضم مجموعة **Stylize** تحت Vector Effects الأوامر **Round Corners…** و**Scribble…** و**Drop Shadow…** و**Inner Glow…** و**Outer Glow…** و**Feather…**.

### التأثيرات الشائعة

حين تضيف أحد هذه التأثيرات، تُفتح نافذته بهذه القيم. وبعد أن تؤكد التواءً مرة واحدة، تُفتح نافذة Arc بإعدادات الالتواء التي أكدتها آخر مرة.

| التأثير | مسار القائمة | القيم الافتراضية |
|---|---|---|
| **Drop Shadow** | **Effect → Stylize → Drop Shadow…** | الوضع Multiply، والعتامة 75%، وإزاحة X وY بمقدار 7 pt، والتمويه 5 pt، واللون أسود |
| **Round Corners** | **Effect → Stylize → Round Corners…** | نصف القطر 10 pt |
| **Outer Glow** | **Effect → Stylize → Outer Glow…** | الوضع Screen، والعتامة 75%، والتمويه 5 pt، واللون أصفر |
| **Feather** | **Effect → Stylize → Feather…** | نصف القطر 5 pt |
| **Offset Path** | **Effect → Path → Offset Path…** | الإزاحة 10 pt، ووصلات Miter، وحد Miter يساوي 4 |
| **Zig Zag** | **Effect → Distort & Transform → Zig Zag…** | الحجم 10 pt، و4 نتوءات في كل مقطع، ونقاط ناعمة |
| **Pucker & Bloat** | **Effect → Distort & Transform → Pucker & Bloat…** | 0%؛ القيم السالبة تقلّص والقيم الموجبة تنفخ، من <bdi dir="ltr">-200%</bdi> إلى 200% |
| **Arc** | **Effect → Warp → Arc…** | الانحناء 50%، أفقي |
| **Gaussian Blur** | **Effect → Blur → Gaussian Blur…** (تحت Raster Effects) | نصف القطر 5 pt |

:::note
حين تصدّر ملف PDF أو توسّع المظهر، يرسم VectorCraft تأثيرات Drop Shadow وOuter Glow وFeather وGaussian Blur كصور. ويضبط **Effect → Document Raster Effects Settings…** الدقة التي تستخدمها: Screen (72 ppi)، أو Medium (150 ppi)، أو High (300 ppi)، أو Other لأي قيمة من 1 إلى 2400 ppi.
:::

## مزج الكائنات وتكرارها وتشويهها

تبقى عمليات المزج والتكرار والأغلفة حية كما تبقى التأثيرات: يمكنك تغيير الكائنات الأصلية في أي وقت فتتحدّث النتيجة.

- يملأ **Object → Blend → Make** (**Ctrl+Alt+B**، أو **Cmd+Option+B** على macOS) المسافة بين كائنين محددين بخطوات تتغير بنعومة من أحدهما إلى الآخر. ويضبط **Object → Blend → Blend Options…** قيمة **Spacing**: **Smooth Color** أو **Specified Steps** أو **Specified Distance**.
- يكرر **Object → Repeat** التحديد بنمط **Radial** أو **Grid** أو **Mirror** يتحدّث كلما حرّرت الأصل.
- يحني **Object → Envelope Distort** العمل الفني، بما فيه النص، بالأمر **Make with Warp…** أو **Make with Mesh…** أو **Make with Top Object**، الذي يستخدم الشكل العلوي.

تُظهر لقطة الشاشة التالية ثلاثة أشرطة مصنوعة بالمزج. أحدها محدد ويظهر مساراه الأساسيان.

![ثلاثة أشرطة عريضة تمتزج من الأصفر إلى الوردي ومن الأخضر المزرق إلى البنفسجي. أحد المزجات محدد ويظهر مساراه الأساسيان، وتسرد لوحة Layers مجموعة القص والمزجات والخلفية](/assets/uploads/vectorcraft/blends.webp)

## إضافة تأثير ثلاثي الأبعاد

يضم **Effect → 3D and Materials** الأوامر **Extrude & Bevel…** و**Revolve…** و**Inflate…** و**Rotate…**. يدير **Revolve…** مقطعاً جانبياً (profile) حول محور، فيصبح محيط نصف مزهرية مزهرية كاملة. وما دامت النافذة مفتوحة، اسحب الحلقات على مساحة الرسم لتدير الكائن، واستخدم تبويب **Lighting** لإضاءته.

![طبيعة صامتة من مزهرية ووعاء وكرة وقنينة صُنعت بالأمر Revolve. المزهرية محددة وفوقها حلقات التدوير، وتعرض نافذة Revolve تبويب Rotation وفيه إعدادات زاوية الدوران وجهة المحور والإزاحة والغطاء والعرض](/assets/uploads/vectorcraft/revolve.webp)

## جعل المظهر دائماً

يحوّل **Object → Expand Appearance** مظهر الكائن المحدد إلى كائنات عادية:

- تصبح كل تعبئة وكل حد كائناً مستقلاً، مجمّعة بترتيب الرسم.
- تُطبَّق التأثيرات التي تغيّر الشكل، مثل Zig Zag أو Round Corners، على المسارات.
- تصبح التأثيرات النقطية مثل الظلال والتوهجات والتمويه صوراً مضمّنة.
- تُسقط التعبئات والحدود والتأثيرات المخفية.

:::caution
بعد Expand Appearance، لا تعود التأثيرات حية، ولا يمكنك تغيير إعداداتها في لوحة Appearance. احتفظ بنسخة من الكائن، على طبقة مخفية مثلاً، إن احتجت إلى تحرير التأثيرات لاحقاً.
:::

## حفظ نمط رسومي وإعادة استخدامه

يخزن النمط الرسومي مظهر الكائن كله: تعبئاته وحدوده وتأثيراته وعتامته ووضع مزجه. ويسرد **Window → Graphic Styles** (Shift+F5) الأنماط الموجودة في المستند.

1. حدد كائناً له الهيئة التي تريد الاحتفاظ بها.
2. في لوحة Graphic Styles، اضغط **New Graphic Style**. وانقر الزر مع الضغط على Alt (على Option في macOS) لتسمّي النمط وأنت تنشئه.
3. حدد كائناً آخر وانقر النمط في اللوحة لتطبيقه.

يبقى الكائن الذي تطبّق عليه نمطاً مرتبطاً بذلك النمط. وانقر نمطاً مع الضغط على Alt (على Option في macOS) لتضيف تعبئاته وحدوده وتأثيراته فوق مظهر الكائن الحالي بدلاً من ذلك؛ وهذا يفك ارتباط الكائن بالنمط. وانقر نمطاً نقراً مزدوجاً لفتح **Graphic Style Options…**.

تُظهر الصورة التالية نمطاً حُفظ من مستطيل وطُبّق على المستطيلين الآخرين.

![ثلاثة أزرار خضراء مزرقة عليها Tickets وMap وFood تحت العنوان Harbor Night Market، تتشارك الحدود والظل نفسها. زر Food محدد، وتعرض لوحة Graphic Styles النمط الجديد في آخر صورة مصغرة، وهي مميزة](/assets/uploads/vectorcraft/graphic-styles.webp)

يفتح **Window → Graphic Style Libraries** مجموعات الأنماط المرفقة بالتطبيق. وفي قائمة اللوحة أيضاً **Open Graphic Style Library** و**Save Graphic Style Library…**.

:::tip
إن نقرت نمطاً ولا شيء محدد، يستخدم VectorCraft ذلك النمط للكائن التالي الذي ترسمه.
:::

## اختصارات لوحة المفاتيح

| الأمر | Windows وLinux | macOS |
|---|---|---|
| لوحة Appearance | Shift+F6 | Shift+F6 |
| Add New Fill | <bdi>Ctrl+/</bdi> | <bdi>Cmd+/</bdi> |
| Add New Stroke | <bdi>Ctrl+Alt+/</bdi> | <bdi>Cmd+Option+/</bdi> |
| Apply Last Effect | Ctrl+Shift+E | Cmd+Shift+E |
| <bdi>Last Effect…</bdi> | Ctrl+Alt+Shift+E | Cmd+Option+Shift+E |
| لوحة Graphic Styles | Shift+F5 | Shift+F5 |
| Blend → Make | Ctrl+Alt+B | Cmd+Option+B |

يغيّرها **Edit → Keyboard Shortcuts…**.

## ذات صلة

- [التعبئة والحد واللون](/ar/apps/vectorcraft/fill-stroke-and-color/)
- [دمج الأشكال وقصها](/ar/apps/vectorcraft/combine-and-cut-shapes/)
- [التنظيم بالطبقات والرموز](/ar/apps/vectorcraft/organize-with-layers-and-symbols/)
- [التصدير للشاشات والويب](/ar/apps/vectorcraft/export-for-screens-and-the-web/)
- [طباعة عملك الفني](/ar/apps/vectorcraft/print-your-artwork/)
- [كل سير العمل في VectorCraft](/ar/apps/vectorcraft/workflows/)
