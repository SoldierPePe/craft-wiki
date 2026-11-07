---
title: التثبيت والتحديث
description: نزّل TextureCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو شغّله في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها TextureCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة TextureCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/texturecraft/releases/latest) من TextureCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/texturecraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

تأتي مع كل إصدار لسطح المكتب أداة سطر الأوامر `texturecraft-cli`، بجانب التطبيق. أما على macOS فتُنزَّل منفصلة.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `texturecraft-<ver>-windows-x64.msi` | `texturecraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `texturecraft-<ver>-windows-arm64.msi` | `texturecraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `texturecraft-<ver>-windows-x86.msi` | `texturecraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت TextureCraft لكل مستخدمي الحاسوب، في `Program Files`، لذا يطلب Windows موافقة المسؤول. ويضيف TextureCraft إلى قائمة ابدأ ويجعله التطبيق الذي يفتح ملفات <bdi>.tcraft</bdi>. أما النسخة المحمولة فلا تحتاج إلى تثبيت: فكّ ضغطها وشغّل `texturecraft.exe`.

### macOS

نزّل `texturecraft-<ver>-macos-universal.dmg` وافتحه، واسحب **TextureCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel.

أداة سطر الأوامر هي `texturecraft-cli-<ver>-macos-universal.zip`.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `texturecraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `texturecraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `texturecraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `texturecraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `texturecraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `texturecraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات RISC-V (`riscv64`) بصيغة `.deb` و`.rpm` وأرشيف tar. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

### FreeBSD

نزّل `texturecraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`texturecraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث يدعم WebGPU أو WebGL2. في المتصفح، ينزّل **حفظ** مشروعك، وتُنزَّل الخامات المصدّرة في ملف zip.

## التحديث

لا يبحث TextureCraft عن التحديثات بنفسه.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث TextureCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

تُحفظ إعداداتك ومجلد بياناتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن TextureCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **TextureCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.texturecraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس مشاريعك. وتبقى النسخ المحفوظة تلقائياً والمواد الذكية والإعدادات المسبقة والقوالب والتخطيطات المحفوظة في مجلد البيانات، وهو `Documents/TextureCraft` افتراضياً، فاحذفه إن أردت إزالتها أيضاً.
