---
title: SoundCraft
description: محطة عمل صوتية رقمية مفتوحة المصدر لتسجيل الصوت وتحريره ومزجه ودمجه في ملفات.
sidebar:
  order: 0
---

![شعار SoundCraft](/assets/apps/soundcraft.webp)

SoundCraft محطة عمل صوتية رقمية (DAW) لتسجيل الصوت وتحريره ومزجه. وهو يتبع سير العمل الذي يعرفه مهندسو الصوت: نافذة **Edit** للترتيب والتحرير، ونافذة **Mix** لموازنة المستويات، وأوضاع التحرير، والأدوات، وقوائم التشغيل (playlists)، ومواقع الذاكرة (memory locations). يعمل على Windows وmacOS وLinux وFreeBSD وفي متصفح الويب. وهو مجاني ومفتوح المصدر (MIT أو Apache-2.0)، من صنع فريق ArtCraft.

:::caution[ما قبل ألفا]
SoundCraft في مرحلة ما قبل ألفا. التحرير والمزج والدمج في ملف (bounce) وحفظ الجلسات وإعادة فتحها كلها تعمل من البداية إلى النهاية، لكن بعض ما يعتمد عليه الاستوديو ما زال ناقصاً: تسجيل MIDI من لوحة مفاتيح موسيقية أو وحدة تحكم، وتبادل الجلسات مع محطات العمل الصوتية الأخرى (AAF وOMF). وتظهر عناصر كثيرة في القوائم باهتة حتى تُبنى. احتفظ بنسخ من أعمالك المهمة، وأخبرنا بما يتعطل على [GitHub](https://github.com/storytold/soundcraft/issues) أو [Discord](https://discord.gg/artcraft).
:::

![نافذة Edit تشغّل الأغنية التجريبية المدمجة Midnight Groove: مسارات صوت Kick وSnare وHats وBass وPad، ومساري آلات Keys وLead فيهما نوتات MIDI، ومسار aux باسم Verb، ومنزلق خرج رئيسي (master fader)، وفوقها علامات Intro وVerse وChorus](/assets/uploads/soundcraft/edit.webp)

## ماذا يفعل

- **التحرير**: أوضاع Shuffle وSlip وSpot وGrid؛ وأدوات Zoom وTrim وSelector وGrabber وScrubber وPencil؛ والفصل، والمضاعفة، والتكرار، والإصلاح (heal)، والتجميع في مقطع واحد (consolidate)، وإزالة الصمت؛ والتلاشي والتلاشي المتقاطع (crossfades)؛ وقوائم التشغيل؛ والتراجع عن كل شيء.
- **المزج**: منزلقات مستوى الصوت (faders)، والتوزيع بين القناتين (pan)، والإرسالات (sends)، والناقلات (busses)، والمدخلات المساعدة (aux inputs)، ومنزلقات الخرج الرئيسي، ووحدات VCA، والمجلدات، مع تعويض تلقائي عن تأخير المكوّنات الإضافية.
- **الأتمتة**: مستوى الصوت، والتوزيع، والكتم، والإرسالات، ومعاملات المكوّنات الإضافية، ترسمها يدوياً أو تسجّلها من المنزلقات.
- **المكوّنات الإضافية**: المعادلات (EQ)، ومعالجات الديناميكية، والصدى (reverb)، والتأخير (delay)، والتعديل (modulation) وغيرها، وكلها مدمجة. ويحمّل أيضاً المكوّنات الإضافية (plug-ins) بصيغتي CLAP وVST3، وAudio Units على Mac.
- **الآلات وMIDI**: مركِّب صوت طرحي (subtractive synth)، ومركِّب طبول، ومشغّل عيّنات (sampler)؛ ومحرر MIDI فيه مسار لشدة العزف (velocity)، وعرض للنوتة الموسيقية، والتكميم (quantise)، ونقل الطبقة (transpose)؛ واستيراد ملفات Standard MIDI File وتصديرها.
- **التسجيل**: التسجيل المقطعي (punch in)، والتشغيل قبل التسجيل وبعده (pre-roll وpost-roll)، والتسجيل الحلقي، ومراقبة الإدخال.
- **الفيديو**: مسار فيديو مع صور مصغرة، ونافذة **Video** تتبع مؤشر التشغيل.
- **الدمج في ملف**: دمج المزيج في ملف WAV أو AIFF أو FLAC، مع عرض مستوى الذروة والجهارة (LUFS) عند الانتهاء.
- **الوكلاء والسكربتات**: يمكن أيضاً تشغيل كل أمر من سطر الأوامر أو بواسطة [مساعد ذكاء اصطناعي](/ar/apps/soundcraft/ai-agents/).

## ملفاتك

يحفظ SoundCraft الجلسة في ملف `.scraft` داخل مجلد خاص بها، ويضع صوتها في مجلد `Audio Files` بجانبه.

يستورد الصوت بصيغ WAV (ومنها BWF وRF64) وAIFF وFLAC وMP3 وOgg Vorbis وAAC وALAC وCAF، وملفات MIDI. ويدمج المزيج في ملفات WAV وAIFF وFLAC. ويصدّر ملفات MIDI وMusicXML لبرامج تدوين النوتة الموسيقية. وتشغّل مسارات الفيديو أفلام MP4 وQuickTime (بامتداد MOV) بترميز H.264 أو ProRes أو Motion JPEG.

كل شيء يعمل على حاسوبك، وتبقى جلساتك عليه.

## ما تحتاجه

- نظام Windows بإصدار 64 بت أو ARM أو 32 بت، أو macOS 11 أو أحدث على Apple silicon أو Intel، أو Linux، أو FreeBSD.
- أو متصفح ويب حديث، لنسخة الويب.

## الأدلة

- [البدء](/ar/apps/soundcraft/getting-started/): افتح الأغنية التجريبية، وأنشئ جلسة وادمجها في ملف.
- [التثبيت والتحديث](/ar/apps/soundcraft/install-update/): نزّل SoundCraft لنظامك.
- [سير العمل](/ar/apps/soundcraft/workflows/): التحرير، والتسجيل، والمزج، والمكوّنات الإضافية، والأتمتة، وMIDI.
- [وكلاء الذكاء الاصطناعي](/ar/apps/soundcraft/ai-agents/): دع مساعد ذكاء اصطناعي يبني الجلسات ويمزجها.
- [استكشاف الأخطاء وإصلاحها](/ar/apps/soundcraft/troubleshooting/): حل المشكلات الشائعة.

[SoundCraft على GitHub](https://github.com/storytold/soundcraft) · [صفحة المنتج](https://getartcraft.com/apps/soundcraft)
