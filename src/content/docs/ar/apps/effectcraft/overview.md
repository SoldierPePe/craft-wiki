---
title: EffectCraft
description: تطبيق مجاني ومفتوح المصدر للرسومات المتحركة والعناوين المتحركة والمؤثرات البصرية، لوحاته واختصاراته على نهج After Effects.
sidebar:
  order: 0
---

![شعار EffectCraft](/assets/apps/effectcraft.webp)

EffectCraft تطبيق للعناوين المتحركة والرسومات المتحركة (motion graphics) والتركيب (compositing). تبني التركيبة (composition) من طبقات (طبقات لون ثابت، وأشكال، ونصوص، ولقطات، وتركيبات أخرى)، وتحرّك خصائصها بالإطارات المفتاحية (keyframes)، وتضيف المؤثرات، ثم تصيّر النتيجة فيديو. إذا استخدمت After Effects فستجده مألوفاً: فلوحاته وقوائمه واختصاراته على نهجه. يعمل على Windows وmacOS وLinux وFreeBSD وفي متصفح الويب. وهو مجاني ومفتوح المصدر (MIT أو Apache-2.0)، من صنع فريق ArtCraft.

:::note[ألفا]
EffectCraft في مرحلة ألفا. ميزاته كثيرة، لكن لا يُنصح به بعد لأعمال العملاء. وما زالت بعض الأشياء تتصرف بشكل مختلف عن After Effects، وواجه مستخدمو Linux وWindows أخطاء أكثر مما واجه مستخدمو Mac. احتفظ بنسخة من مشاريعك المهمة، وأخبرنا بما يتعطل على [GitHub](https://github.com/storytold/effectcraft/issues) أو [Discord](https://discord.gg/artcraft).
:::

![النافذة الرئيسية في EffectCraft: لوحة Project على اليسار، وتركيبة العنوان التجريبية وفيها عنوان EFFECTCRAFT متوهج في لوحة Composition، ولوحتا Preview وProperties على اليمين، وفي الأسفل Timeline فيه طبقات نص وأشكال ولون ثابت](/assets/uploads/effectcraft/hero.webp)

## ماذا يفعل

- **الطبقات**: طبقات اللون الثابت (solids)، والأشكال، والنصوص، واللقطات، والتركيبات المتداخلة، والكائنات الفارغة (nulls)، وطبقات الضبط (adjustment layers)، والكاميرات والأضواء، مع ربط الطبقات بطبقة أم (parenting)، وأقنعة المسار (track mattes)، وأوضاع المزج.
- **التحريك**: الإطارات المفتاحية مع التنعيم (easing)، ومحرر المنحنيات (Graph Editor)، وإعادة توقيت الزمن (time remapping)، والعلامات، والتعابير البرمجية (expressions) المكتوبة بلغة JavaScript، مثل `wiggle` و`loopOut`.
- **الأشكال والأقنعة والنص**: طبقات الأشكال مع قص المسارات (trim paths) والمكررات (repeaters)، والأقنعة المرسومة بالقلم، والنص مع محركات النص (animators).
- **المؤثرات**: أكثر من 300 مؤثر مدمج، من التمويه وتصحيح الألوان إلى الجسيمات والفصل اللوني (keying)، إضافة إلى أنماط الطبقات التسعة.
- **الأبعاد الثلاثة**: الطبقات ثلاثية الأبعاد، والكاميرات مع عمق الميدان، والأضواء مع الظلال.
- **التتبع والروتوسكوب**: تتبع الحركة، وWarp Stabilizer، ومتتبع كاميرا ثلاثي الأبعاد، وRoto Brush.
- **التصيير**: قائمة انتظار التصيير (Render Queue) التي تكتب H.264 وHEVC وAV1 وProRes وWebM وتسلسلات الصور وGIF والصوت، دون أي برنامج إضافي تثبّته.

## ملفاتك

تُحفظ المشاريع في ملفات **.ecproj**. وهي بصيغة JSON مقروءة، لذا تعمل أيضاً مع أنظمة التحكم بالإصدارات.

يستورد EffectCraft الفيديو والصوت والصور الثابتة، وتسلسلات الصور، وملفات Photoshop (بصيغة <bdi>.psd</bdi>) وPDF وIllustrator، ورسوم Lottie المتحركة. ويستطيع أيضاً استيراد مشاريع After Effects (بصيغتي <bdi>.aep</bdi> و<bdi>.aepx</bdi>)، مع بعض القيود: راجع [مشاريع After Effects](/ar/apps/effectcraft/after-effects/).

ويصدّر عبر قائمة انتظار التصيير، وكذلك بصيغة Lottie (بامتداد <bdi>.json</bdi> أو <bdi>.lottie</bdi>) للويب والتطبيقات.

## ما تحتاجه

- نظام Windows بإصدار 64 بت أو ARM أو 32 بت، أو macOS على Apple silicon أو Intel، أو Linux، أو FreeBSD.
- يُفضَّل وجود بطاقة رسومات تدعم DirectX 12 أو Vulkan أو Metal. فبدونها يجري EffectCraft التركيب على المعالج، وهذا أبطأ.
- أو متصفح ويب حديث، لنسخة الويب.

## الأدلة

- [البدء](/ar/apps/effectcraft/getting-started/): أنشئ أول تركيبة لك وحرّكها وصيّرها.
- [التثبيت والتحديث](/ar/apps/effectcraft/install-update/): نزّل EffectCraft لنظامك.
- [سير العمل](/ar/apps/effectcraft/workflows/): اللقطات، والإطارات المفتاحية، والمؤثرات، والتصيير، وLottie، والمكوّنات الإضافية.
- [مشاريع After Effects](/ar/apps/effectcraft/after-effects/): انقل المشاريع من After Effects وأعدها إليه.
- [وكلاء الذكاء الاصطناعي](/ar/apps/effectcraft/ai-agents/): دع مساعد ذكاء اصطناعي يبني التركيبات ويصيّرها.
- [استكشاف الأخطاء وإصلاحها](/ar/apps/effectcraft/troubleshooting/): حل المشكلات الشائعة.

[EffectCraft على GitHub](https://github.com/storytold/effectcraft) · [صفحة المنتج](https://getartcraft.com/apps/effectcraft)
