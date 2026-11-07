---
title: الترتيب والتجميع والمحاذاة
description: غيّر الكائن الذي يظهر في المقدمة، وجمّع الكائنات واقفلها وأخفها، وحدد الكائنات التي تشترك في سمة، وحاذِ الكائنات بلوحة Align.
sidebar:
  order: 15
---

يوضح هذا الدليل كيف تغيّر أي الكائنات المتداخلة يظهر في المقدمة، وكيف تجمع الكائنات في مجموعة لتتحرك معاً، وكيف تقفل الكائنات التي لا تعمل عليها أو تخفيها. ثم يوضح كيف تحدد الكائنات التي تشترك في سمة، وكيف تحاذي الكائنات بلوحة Align.

## تغيير ترتيب التكديس

تُرسم الكائنات المتداخلة حسب ترتيب التكديس. والكائن الأعلى في الترتيب يغطي الكائنات التي تحته. في الصورة التالية، المربع الذي عليه التسمية Front هو الأعلى في ترتيب التكديس ويغطي المربعين الآخرين.

![ثلاثة مربعات مستديرة الزوايا متداخلة عليها التسميات Back وMiddle وFront، ويغطي Front المربعين الآخرين. المربع Middle محدد، والقائمة الفرعية Object → Arrange مفتوحة وBring Forward مميز](/assets/uploads/vectorcraft/stacking-order.webp)

1. حدد كائناً أو أكثر بأداة Selection (الاختصار V).
2. اختر **Object → Arrange**، أو انقر التحديد بزر الماوس الأيمن واختر Arrange.
3. اختر أحد الأوامر أدناه.

| الأمر | ما يفعله |
|---|---|
| **Bring to Front** | ينقل التحديد فوق كل الكائنات الأخرى في طبقته أو مجموعته |
| **Bring Forward** | ينقل التحديد مكاناً واحداً إلى الأعلى |
| **Send Backward** | ينقل التحديد مكاناً واحداً إلى الأسفل |
| **Send to Back** | ينقل التحديد تحت كل الكائنات الأخرى في طبقته أو مجموعته |
| **Send to Current Layer** | ينقل التحديد إلى أعلى الطبقة الحالية |

تنقل الأوامر الأربعة الأولى الكائنات داخل الطبقة أو المجموعة التي تضمها. ولنقل الكائنات إلى طبقة أخرى، اجعل تلك الطبقة هي الطبقة الحالية واختر Send to Current Layer.

:::note
في مجموعة القص، يبقى مسار القص في أسفل المجموعة. ولا تنقل أوامر Bring to Front وSend to Back وبقية أوامر Arrange أي عمل فني إلى ما تحته.
:::

:::caution
يتوقف Send to Current Layer بخطأ حين تكون الطبقة الحالية، أو طبقة تضمها، مخفية أو مقفلة. وتبقى الكائنات حيث كانت. أظهر الطبقة وألغِ قفلها، ثم اختر الأمر مجدداً.
:::

## تجميع الكائنات وفك تجميعها

تتحرك المجموعة ويتغير حجمها وتدور ككائن واحد.

1. حدد كائنين أو أكثر.
2. اختر **Object → Group** (**Ctrl+G**، أو **Cmd+G** على macOS).

لتفكيك مجموعة، حددها واختر **Object → Ungroup** (**Ctrl+Shift+G**، أو **Cmd+Shift+G** على macOS).

لتحديد كائن داخل مجموعة دون فك تجميعها، استخدم أداة Group Selection. النقرة الأولى تحدد الكائن الذي تحت المؤشر. وكل نقرة أخرى عليه تضيف المجموعة التالية التي تضمه.

### تحرير مجموعة في وضع العزل

في وضع العزل (isolation mode) تحرر محتويات مجموعة واحدة، ولا تستطيع تحديد بقية العمل الفني.

1. انقر المجموعة نقراً مزدوجاً بأداة Selection. ويمكنك أيضاً أن تنقر بزر الماوس الأيمن مجموعة واحدة محددة وتختار Isolate Selected Group.
2. حدد الكائنات داخل المجموعة وانقلها وحررها.
3. اضغط Esc، أو انقر بزر الماوس الأيمن واختر Exit Isolation Mode.

:::tip
يفعّل الإعداد **Double Click To Isolate** هذا النقر المزدوج أو يعطله. وهو مفعّل افتراضياً. تجده في **Edit → Preferences… → General** على Windows وLinux، وفي **VectorCraft → Settings → General…** على macOS.
:::

## قفل الكائنات وإخفاؤها

يبقى الكائن المقفل ظاهراً لكن لا يمكن تحديده. أما الكائن المخفي فلا يُرسم.

1. حدد الكائنات.
2. اختر **Object → Lock → Selection** (**Ctrl+2**، أو **Cmd+2** على macOS) أو **Object → Hide → Selection** (**Ctrl+3**، أو **Cmd+3** على macOS).

في القائمة الفرعية Lock أيضاً **All Artwork Above** و**Other Layers**. وفي القائمة الفرعية Hide هذان الأمران و**Unselected Artwork**.

لإعادة كل شيء، اختر **Object → Unlock All** (**Ctrl+Alt+2**، أو **Cmd+Option+2** على macOS) أو **Object → Show All** (**Ctrl+Alt+3**، أو **Cmd+Option+3** على macOS). بعد ذلك تكون الكائنات التي كانت مقفلة أو مخفية محددة.

## تحديد الكائنات التي تشترك في سمة

يحدد **Select → Same** كل كائن يطابق الكائن المحدد في سمة واحدة.

1. حدد كائناً فيه السمة التي تريد مطابقتها، لون التعبئة مثلاً.
2. اختر **Select → Same** ثم اختر السمة.

| المجموعة | الخيارات في **Select → Same** |
|---|---|
| **Objects** | Appearance، Appearance Attribute، Blending Mode، Fill & Stroke، Fill Color، Opacity، Stroke Color، Stroke Weight، Graphic Style، Shape، Symbol Instance، Link Block Series |
| **Type** | Font Family، Font Family & Style، Font Family, Style & Size، Font Size، Text Fill Color، Text Stroke Color، Text Fill & Stroke Color |

وتتيح قائمة Select أيضاً التنقل في التحديد وتغييره:

| الأمر | Windows وLinux | macOS |
|---|---|---|
| **Select → All** | Ctrl+A | Cmd+A |
| **Select → Deselect** | Ctrl+Shift+A | Cmd+Shift+A |
| **Select → Reselect** | Ctrl+6 | Cmd+6 |
| **Select → Next Object Above** | <bdi>Ctrl+Alt+]</bdi> | <bdi>Cmd+Option+]</bdi> |
| **Select → Next Object Below** | <bdi>Ctrl+Alt+[</bdi> | <bdi>Cmd+Option+[</bdi> |

## محاذاة الكائنات وتوزيعها

تصفّ لوحة Align الكائنات على حافة أو خط مركزي، وتباعد بينها بالتساوي. افتحها من **Window → Align** (Shift+F7).

في الصورة التالية، يصفّ Vertical Align Center الدوائر، ويباعد Horizontal Distribute Center بين مراكزها بالتساوي.

![نصفان عليهما التسميتان Before وAfter: أربع دوائر فوانيس متوهجة بأحجام مختلفة متناثرة على اليسار، والدوائر الأربع نفسها على اليمين مصفوفة على مراكزها ومتباعدة بالتساوي على طول خيط](/assets/uploads/vectorcraft/align-before-after.webp)

![أربع دوائر فوانيس محددة على سماء ليلية بجانب لوحة Align، التي تُظهر أزرار Align Objects وDistribute Objects وDistribute Spacing وخيار Align To، والمؤشر على Vertical Align Center](/assets/uploads/vectorcraft/align-panel.webp)

في اللوحة أربعة أقسام:

| القسم | الأزرار |
|---|---|
| **Align Objects** | Horizontal Align Left، Horizontal Align Center، Horizontal Align Right، Horizontal & Vertical Align Center، Vertical Align Top، Vertical Align Center، Vertical Align Bottom |
| **Distribute Objects** | Vertical Distribute Top، Vertical Distribute Center، Vertical Distribute Bottom، Horizontal Distribute Left، Horizontal Distribute Center، Horizontal Distribute Right |
| **Distribute Spacing** | Vertical Distribute Space، وHorizontal Distribute Space، وحقل للتباعد |
| **Align To** | Align to Selection، Align to Key Object، Align to Artboard |

### صفّ الكائنات

1. حدد الكائنات بأداة Selection.
2. في قسم Align To، اختر ما تُحاذى إليه الكائنات.
3. انقر زراً في قسم Align Objects.

| خيار Align To | تُحاذى الكائنات إلى |
|---|---|
| **Align to Selection** | حدود كل الكائنات المحددة |
| **Align to Key Object** | الكائن المرجعي (key object)، الذي يبقى في مكانه |
| **Align to Artboard** | حواف لوح الرسم أو مركزه |

حين يكون كائن واحد فقط محدداً، تحاذيه أزرار Align Objects إلى لوح الرسم. وتوجد أنواع المحاذاة نفسها في **Object → Align**.

### المباعدة بين الكائنات بالتساوي

1. حدد الكائنات. مع Align to Selection، حدد ثلاثة أو أكثر. ومع Align to Artboard، يكفي كائنان.
2. انقر زراً في قسم Distribute Objects.

يباعد Distribute Objects بالتساوي بين الحواف اليسرى للكائنات أو مراكزها أو حوافها اليمنى (أو حوافها العليا أو مراكزها أو حوافها السفلى). مع Align to Selection، يبقى الكائنان الأول والأخير في مكانيهما. ومع Align to Artboard، ينتقل الكائن الأول إلى الحافة اليسرى (أو العليا) للوح الرسم، وينتقل الكائن الأخير إلى حافته اليمنى (أو السفلى).

يجعل Horizontal Distribute Space وVertical Distribute Space الفراغات بين الكائنات المحددة متساوية. مع Align to Selection، تبقى الحافتان الخارجيتان للكائنين الأول والأخير في مكانيهما. ومع Align to Artboard، تنتقل هاتان الحافتان الخارجيتان إلى حواف لوح الرسم.

### استخدام كائن مرجعي

يبقى الكائن المرجعي في مكانه، وتُحاذى الكائنات المحددة الأخرى إليه أو تُوزَّع بدءاً منه.

1. حدد كائنين أو أكثر بأداة Selection.
2. انقر أحد الكائنات المحددة مرة أخرى. يصبح هو الكائن المرجعي ويُرسم بحدود أسمك.
3. انقر أحد أزرار Align Objects. تُحاذى الكائنات الأخرى إلى الكائن المرجعي.

لضبط فراغ دقيق بين الكائنات:

1. حدد الكائنات وانقر الكائن الذي يجب أن يبقى في مكانه، ليصبح الكائن المرجعي.
2. اكتب الفراغ في حقل Distribute Spacing. لا يقبل الحقل قيمة إلا حين يوجد كائن مرجعي.
3. انقر Horizontal Distribute Space أو Vertical Distribute Space. يبقى الكائن المرجعي في مكانه، وتوضع الكائنات الأخرى بتلك المسافة بين كل منها والذي يليه، بدءاً منه.

:::tip
لإلغاء الكائن المرجعي، انقره مرة أخرى، أو اختر **Cancel Key Object** من قائمة اللوحة، أو اختر **Align to Selection** أو **Align to Artboard**.
:::

### القياس مع الحدود

تقيس لوحة Align افتراضياً مسار كل كائن، دون حدّه. اختر **Use Preview Bounds** من قائمة اللوحة لتقيس الكائن كما يُرسم، بما فيه حدّه. ويوجد الإعداد نفسه في **Edit → Preferences… → General** على Windows وLinux، وفي **VectorCraft → Settings → General…** على macOS. وفي قائمة اللوحة أيضاً **Hide Options** الذي يخفي قسمَي Distribute Spacing وAlign To، و**Show Options** الذي يُظهرهما من جديد.

## الاختصارات

| الأمر | Windows وLinux | macOS |
|---|---|---|
| Bring to Front | <bdi>Ctrl+Shift+]</bdi> | <bdi>Cmd+Shift+]</bdi> |
| Bring Forward | <bdi>Ctrl+]</bdi> | <bdi>Cmd+]</bdi> |
| Send Backward | <bdi>Ctrl+[</bdi> | <bdi>Cmd+[</bdi> |
| Send to Back | <bdi>Ctrl+Shift+[</bdi> | <bdi>Cmd+Shift+[</bdi> |
| Group | Ctrl+G | Cmd+G |
| Ungroup | Ctrl+Shift+G | Cmd+Shift+G |
| **Lock → Selection** | Ctrl+2 | Cmd+2 |
| Unlock All | Ctrl+Alt+2 | Cmd+Option+2 |
| **Hide → Selection** | Ctrl+3 | Cmd+3 |
| Show All | Ctrl+Alt+3 | Cmd+Option+3 |
| **Window → Align** | Shift+F7 | Shift+F7 |

لتغيير هذه الاختصارات، اختر **Edit → Keyboard Shortcuts…**.

## ذات صلة

- [رسم الأشكال وتحويلها](/ar/apps/vectorcraft/draw-and-transform-shapes/)
- [دمج الأشكال وقصها](/ar/apps/vectorcraft/combine-and-cut-shapes/)
- [التنظيم بالطبقات والرموز](/ar/apps/vectorcraft/organize-with-layers-and-symbols/)
- [إعداد المستند وألواح الرسم](/ar/apps/vectorcraft/set-up-documents-and-artboards/)
- [كل أدلة سير العمل](/ar/apps/vectorcraft/workflows/)
