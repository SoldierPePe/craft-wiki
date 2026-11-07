---
title: التثبيت والتحديث
description: نزّل VectorCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو استخدمه في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها VectorCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة VectorCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/vectorcraft/releases/latest) من VectorCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/vectorcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `vectorcraft-<ver>-windows-x64.msi` | `vectorcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `vectorcraft-<ver>-windows-arm64.msi` | `vectorcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `vectorcraft-<ver>-windows-x86.msi` | `vectorcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت VectorCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

تعمل النسخة المحمولة من أي مجلد. وما دام ملف `portable.txt` بجانب `vectorcraft.exe`، يحفظ VectorCraft إعداداته ونسخ الاسترداد والسجلات في مجلد `VectorCraftData` بجانبه، فيمكنك نقل المجلد كله إلى حاسوب آخر.

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `vectorcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **VectorCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel التي تعمل بنظام macOS 11 أو أحدث، وهو موقّع وموثّق من Apple.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `vectorcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `vectorcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `vectorcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `vectorcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `vectorcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `vectorcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. ولمعالجات RISC-V هناك حزمة `.deb` وحزمة `.rpm` وأرشيف tar، تحمل `riscv64` في أسمائها.

### FreeBSD

نزّل `vectorcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`vectorcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. قدّمه عبر `https://` (أو من `localhost`) ليتمكن من استخدام بطاقة الرسومات والحافظة.

في نسخة الويب، يؤدي الحفظ والتصدير إلى تنزيل الملف، وتمر الطباعة عبر مربع حوار الطباعة في المتصفح. ولا تبحث عن التحديثات.

## التحديث

يبحث VectorCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **Help › Check for Updates**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث VectorCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم.
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم. وفي النسخة المحمولة، احتفظ بمجلد `VectorCraftData` لتبقى إعداداتك.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن VectorCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **VectorCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.vectorcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس رسوماتك. وتبقى الإعدادات في مجلد إعدادات VectorCraft (راجع [العثور على السجل](/ar/apps/vectorcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
