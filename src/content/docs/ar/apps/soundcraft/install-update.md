---
title: التثبيت والتحديث
description: نزّل SoundCraft لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها SoundCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة SoundCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/soundcraft/releases/latest) من SoundCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/soundcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `soundcraft-<ver>-windows-x64.msi` | `soundcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `soundcraft-<ver>-windows-arm64.msi` | `soundcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `soundcraft-<ver>-windows-x86.msi` | `soundcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت SoundCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

المثبّتات والبرامج موقّعة رقمياً.

لا تحتاج النسخة المحمولة إلى تثبيت. وهي تحفظ إعداداتها في ملف تعريف المستخدم الخاص بك، كالتطبيق المثبّت. ولتحفظها بجانب التطبيق بدلاً من ذلك، ضع ملفاً فارغاً اسمه `portable.txt` بجانب `soundcraft.exe`. فيستخدم SoundCraft حينها مجلد `SoundCraftData` هناك.

### macOS

نزّل `soundcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **SoundCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel بنظام macOS 11 (إصدار Big Sur) أو أحدث، وهو موقّع وموثّق من Apple.

في أول مرة تسجّل فيها، يسألك macOS هل يُسمح لـ SoundCraft باستخدام الميكروفون. اسمح له، وإلا فلن يسمع التسجيل ما تدخله.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `soundcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `soundcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `soundcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `soundcraft-<ver>-linux-x86_64.rpm` | |
| Arch | `soundcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `soundcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. ولمعالجات RISC-V، التي تحمل `riscv64`، حزمة `.deb` وحزمة `.rpm` وأرشيف tar، لنظام Ubuntu 24.04 وما بعده. وباستثناء Flatpak، تحتاج الإصدارات الأخرى إلى Ubuntu 22.04 أو توزيعة بالعمر نفسه أو أحدث.

وللتحديث عبر مدير الحزم، يمكنك أيضاً إضافة [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

### FreeBSD

نزّل `soundcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64`) وفكّ ضغطه. ولا يدعم SoundCraft التسجيل على FreeBSD بعد.

### في المتصفح

`soundcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. وهو يبدأ بالأغنية التجريبية.

لا تستطيع نسخة الويب تحميل المكوّنات الإضافية من جهات خارجية، ولا تدعم بعد التسجيل واختيار جهاز الصوت. وليست فيها مجلدات، لذا تحفظ الجلسة وصوتها في ملف `.scraftz` واحد، وكل عملية حفظ أو دمج أو تصدير تصلك تنزيلاً. ولا تبدأ المتصفحات تشغيل الصوت إلا بعد أن تنقر، لذا قد تحتاج إلى النقر مرة قبل أن تسمع أي شيء.

## التحديث

يبحث SoundCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. وعلى Windows وLinux يمكنك أيضاً البحث بنفسك باستخدام **SoundCraft › Check for Updates**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث SoundCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم. وإذا كنت تستخدم `portable.txt`، فانقل مجلد `SoundCraftData` إلى جانب النسخة الجديدة.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن SoundCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **SoundCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.soundcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس جلساتك. وتبقى الإعدادات ونسخ الحفظ التلقائي والإعدادات المسبقة للمكوّنات الإضافية والسجلات في مجلد إعدادات SoundCraft (راجع [العثور على السجل](/ar/apps/soundcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
