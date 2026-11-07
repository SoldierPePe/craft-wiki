---
title: التثبيت والتحديث
description: نزّل EffectCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو شغّله في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها EffectCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة EffectCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/effectcraft/releases/latest) من EffectCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/effectcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

يأتي كل إصدار لسطح المكتب ومعه أداة سطر الأوامر `effectcraft-cli` بجانب التطبيق. أما على macOS فتُنزَّل منفصلة.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `effectcraft-<ver>-windows-x64.msi` | `effectcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `effectcraft-<ver>-windows-arm64.msi` | `effectcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `effectcraft-<ver>-windows-x86.msi` | `effectcraft-<ver>-windows-x86-portable.zip` |

يسألك المثبّت لمن تريد تثبيت EffectCraft:

- **Only for me** يثبّته في `%LOCALAPPDATA%\Programs\ArtCraft\EffectCraft` ولا يحتاج إلى صلاحيات المسؤول. وهذا هو الخيار الافتراضي.
- **Everyone on this computer** يثبّته في `C:\Program Files\ArtCraft\EffectCraft` ويطلب موافقة المسؤول.

ويعرض عليك أيضاً اختصاراً على سطح المكتب. وتُثبَّت الإصدارات اللاحقة في المجلد نفسه. أما النسخة المحمولة فلا تحتاج إلى تثبيت: فكّ ضغطها وشغّل `effectcraft.exe`.

### macOS

نزّل `effectcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **EffectCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel.

أداة سطر الأوامر هي `effectcraft-cli-<ver>-macos-universal.zip`.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `effectcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `effectcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `effectcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `effectcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `effectcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `effectcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات لمعالجات RISC-V، تحمل `riscv64`، بصيغة `.deb` و`.rpm` وأرشيف tar، وتحتاج إلى Ubuntu 24.04 أو Debian 13 أو ما بعدهما. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

**Gentoo:** في [طبقة ::snakebyte](https://github.com/switch87/snakebyte-overlay) التي يديرها المجتمع الحزمة `media-video/effectcraft-bin`. ولا يتولى فريق EffectCraft صيانتها.

### FreeBSD

نزّل `effectcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`effectcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. وتبقى مشاريعك ووسائطك وإعداداتك في مساحة تخزين المتصفح على حاسوبك.

## التحديث

يبحث EffectCraft عن إصدار جديد حين يبدأ، ويخبرك حين يصدر. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث EffectCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن EffectCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **EffectCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.effectcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس مشاريعك ولقطاتك.
