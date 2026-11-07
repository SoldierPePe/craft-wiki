---
title: سير العمل
description: اللقطات وتسلسلات الصور، والإطارات المفتاحية، والمؤثرات، والتصيير، وLottie، والمكوّنات الإضافية في EffectCraft.
sidebar:
  order: 3
---

على Mac، استخدم **⌘** بدلاً من **Ctrl**، و**Option** بدلاً من **Alt**.

## اللوحات ومساحات العمل

لوحات EffectCraft على نهج After Effects: **Project** و**Composition** و**Timeline** و**Effect Controls** و**Effects & Presets** و**Properties** و**Preview** و**Character** و**Paragraph** و**Align** و**Info** و**Audio** و**Render Queue**، وغيرها. افتح أياً منها من قائمة **Window**.

تعيد أزرار مساحات العمل في أعلى اليمين (**Default** و**Animation** و**Standard** و**Small Screen** وغيرها) ترتيب اللوحات لمهام مختلفة.

## استيراد اللقطات

اختر **File › Import › File...** (**Ctrl+I**) لتختار ملفاً، أو **File › Import › Multiple Files...** لعدة ملفات. ويمكنك أيضاً إفلات الملفات أو المجلدات على النافذة. والملفات التي تفلتها على لوحة Composition تصبح طبقات فيها.

تسألك ملفات Photoshop وPDF وIllustrator هل تستوردها لقطاتٍ أم تركيبة (composition). ويتصفح **Window › Media Browser** مجلداتك ويستورد ما تختاره.

### تسلسلات الصور

الصور الثابتة المرقّمة، مثل `shot_0001.png` و`shot_0002.png` وهكذا، يمكن استيرادها مقطعاً واحداً:

1. اختر **File › Import › File...** واختر أي ملف من السلسلة.
2. في نافذة **Import Image Sequence**، حدد خيار التسلسل. ويحمل اسم نوع الملف، مثل **PNG Sequence**، وهو غير محدد افتراضياً.
3. اضبط **Frame rate (fps)**، ثم أكّد.

إذا نقص إطار، يعرض EffectCraft مكانه أشرطة ألوان. أضف الملف الناقص واختر **File › Reload Footage** (**Ctrl+Alt+L**).

### تغيير طريقة قراءة اللقطات

حدد اللقطات في لوحة Project واختر **File › Interpret Footage › Main...** (**Ctrl+Alt+G**) لتغيير قناة ألفا أو معدل الإطارات أو رمز الوقت (timecode) الذي تبدأ به. ويوجّه **File › Replace Footage › File...** (**Ctrl+H**) العنصر إلى ملف آخر.

## التحريك

- انقر ساعة الإيقاف بجانب خاصية لتبدأ تحريكها. غيّر القيمة عند وقت آخر فيظهر إطار مفتاحي (keyframe) جديد.
- يطبّق **F9** تنعيم **Easy Ease** على الإطارات المفتاحية المحددة. وينعّم **Shift+F9** الدخول، و**Ctrl+Shift+F9** الخروج. وهي موجودة في **Animation › Keyframe Assistant**.
- يجعل **Animation › Toggle Hold Keyframe** الإطار المفتاحي يقفز إلى قيمته بدلاً من الانتقال إليها بسلاسة.
- يضبط **Animation › Keyframe Interpolation...** و**Keyframe Velocity...** المنحنى بدقة.
- يعرض **Graph Editor** منحنيات القيمة والسرعة مع مقابض يمكنك سحبها. شغّله بزر **Graph Editor** أعلى Timeline.
- انقر ساعة إيقاف مع الضغط على **Alt** لإضافة تعبير برمجي (expression). والتعابير البرمجية مكتوبة بلغة JavaScript، وفيها دوال مألوفة مثل `wiggle` و`loopOut`.

### إظهار خاصية واحدة في Timeline

حدد الطبقات واضغط مفتاحاً لإظهار تلك الخاصية وحدها:

| المفتاح | يُظهر |
| --- | --- |
| **P** | Position |
| **S** | Scale |
| **R** | Rotation |
| **T** | Opacity |
| **A** | Anchor Point |
| **E** | Effects |
| **M** | Masks |
| **F** | Mask Feather |
| **L** | Audio Levels (اضغطه مرتين لإظهار الموجة الصوتية) |

## إضافة المؤثرات

حدد طبقة، ثم اختر مؤثراً من قائمة **Effect**، وفيها المؤثرات مجمّعة حسب الفئة. أو افتح **Window › Effects & Presets** (**Ctrl+5**)، وابحث، ثم انقر المؤثر نقراً مزدوجاً أو اسحبه إلى طبقة.

غيّر إعداداته في **Effect Controls** (**F3**).

![انفجار من الخطوط الصفراء بمؤثر CC Particle World في لوحة Composition، ولوحة Effect Controls على اليسار تسرد إعدادات نظام الجسيمات، مثل Birth Rate وLongevity وVelocity وGravity](/assets/uploads/effectcraft/effects.webp)

- يطبّق **Effect › Last Effect** آخر مؤثر استخدمته.
- يزيل **Effect › Remove All** كل المؤثرات من الطبقات المحددة.
- في **Effects & Presets**، انقر النجمة بجانب مؤثر لتضيفه إلى المفضلة. وتُسرد أيضاً المؤثرات المستخدمة مؤخراً.

للظلال المسقطة والتوهج والحواف المشطوفة، استخدم **Layer › Layer Styles**. ففيها **Drop Shadow** و**Inner Shadow** و**Outer Glow** و**Inner Glow** و**Bevel and Emboss** و**Satin**، وغيرها.

## التصيير

1. حدد تركيبة واختر **Composition › Add to Render Queue** (**Ctrl+M**). ويمكنك أيضاً سحب التركيبات إلى لوحة **Render Queue** (من **Window › Render Queue**، **Ctrl+Alt+0**).
2. وسّع العنصر. انقر **Output Module:** لتختار الصيغة، وانقر اسم الملف بجانب **Output To:** لتختار مكان حفظه.
3. انقر **Render Settings:** لتصيير منطقة العمل وحدها أو التركيبة كلها، بأفضل جودة أو بجودة المسودة، أو بالدقة الكاملة أو بنصفها أو ثلثها أو ربعها.
4. تأكد أن مربع **Render** الخاص بالعنصر محدد، ثم اختر **Render**. ويلغي **Stop** التصيير.

حدد **Notify** ليصلك إشعار حين تنتهي قائمة الانتظار.

![لوحة Render Queue وفيها تركيبتان في قائمة الانتظار، EffectCraft Intro و3D Showcase، لكل منهما مربع Render محدد، وزر Render في أعلى اليمين](/assets/uploads/effectcraft/render-queue.webp)

### الصيغ

| صيغة Output Module | الملف |
| --- | --- |
| H.264 | `.mp4` |
| HEVC (H.265) | `.mp4` |
| AV1 | `.mp4` |
| QuickTime (ProRes) | `.mov` |
| QuickTime (Uncompressed) | `.mov` |
| WebM (VP9 + Opus) | `.webm` |
| تسلسل PNG أو JPEG أو TIFF أو Targa أو OpenEXR | صورة لكل إطار |
| GIF متحرك | `.gif` |
| WAV وAIFF | الصوت وحده |

للحفاظ على الشفافية، اختر **Channels: RGB + Alpha** في قائمة **Output Module:**. ويظهر هذا الخيار للصيغ التي تستطيع تخزينها، مثل ProRes وPNG Sequence. أما H.264 وHEVC وAV1 فلا تستطيع.

يرمّز EffectCraft كل شيء بنفسه، فلا تحتاج إلى FFmpeg أو أي برنامج آخر.

## Lottie

اختر **File › Export › Lottie JSON...** لتحفظ تركيبة رسماً متحركاً بصيغة Lottie (بامتداد `.json` أو `.lottie`) للمواقع والتطبيقات. ويسرد EffectCraft كل ما لا تستطيع Lottie التعبير عنه. ويفتح **File › Import › Lottie...** ملف Lottie تركيبةً جديدة.

## المكوّنات الإضافية

لا يستطيع EffectCraft تشغيل المكوّنات الإضافية (plug-ins) الخاصة بـ After Effects، لكن لديه مكوّناته الخاصة:

- يتيح لك **Effect › Plug-in Library...** البحث عن مؤثرات المجتمع وتثبيتها وتحديثها.
- يثبّت **Effect › Install Effect Plug-in...** ملف مكوّن إضافي نزّلته.

## الإعدادات والاختصارات

اختر **Edit › Preferences** على Windows وLinux، أو **EffectCraft › Settings...** على Mac. ومن صفحاتها **General** و**Startup & Repair** و**Import** و**Previews** و**Appearance** و**Audio**.

يمكن أن تستخدم Roto Brush وتتبع الوجه نماذج مدرَّبة اختيارية، تنزّلها من نافذة الإعدادات.

ويعرض **Help › Keyboard Shortcuts...** كل الاختصارات.
