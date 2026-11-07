---
title: التثبيت والتحديث
description: نزّل MaterialCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو شغّله في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها MaterialCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة MaterialCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/materialcraft/releases/latest) من MaterialCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/materialcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

تأتي مع كل إصدار لسطح المكتب أداة سطر الأوامر `materialcraft-cli`، بجانب التطبيق. أما على macOS فتُنزَّل منفصلة.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `materialcraft-<ver>-windows-x64.msi` | `materialcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `materialcraft-<ver>-windows-arm64.msi` | `materialcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `materialcraft-<ver>-windows-x86.msi` | `materialcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت MaterialCraft لكل مستخدمي الحاسوب، في `Program Files`، لذا يطلب Windows موافقة المسؤول. ويضيف MaterialCraft إلى قائمة ابدأ. أما النسخة المحمولة فلا تحتاج إلى تثبيت: فكّ ضغطها وشغّل `materialcraft.exe`.

### macOS

نزّل `materialcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **MaterialCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel.

أداة سطر الأوامر هي `materialcraft-cli-<ver>-macos-universal.zip`.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `materialcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `materialcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `materialcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `materialcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `materialcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `materialcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات RISC-V (`riscv64`) بصيغة `.deb` و`.rpm` وأرشيف tar. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

### FreeBSD

نزّل `materialcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`materialcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. يمر الفتح والحفظ والتصدير عبر تنزيلات متصفحك.

## التحديث

لا يبحث MaterialCraft عن التحديثات بنفسه.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث MaterialCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

:::caution
غيّر الإصدار 0.2 ملفات MaterialCraft. فهو يحفظ حزم <bdi>.sbs</bdi>، ولم يعد يفتح حزم <bdi>.mcraft</bdi> من الإصدار 0.1. ولا تُفتح أيضاً مواد <bdi>.mcmat</bdi> المحمولة من الإصدار 0.1.
:::

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن MaterialCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **MaterialCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.materialcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس حزمك. وتبقى النسخ المحفوظة تلقائياً في `Documents/MaterialCraft`، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
