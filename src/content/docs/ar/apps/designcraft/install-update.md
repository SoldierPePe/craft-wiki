---
title: التثبيت والتحديث
description: نزّل DesignCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو شغّله في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها DesignCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة DesignCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/designcraft/releases/latest) من DesignCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/designcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `designcraft-<ver>-windows-x64.msi` | `designcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `designcraft-<ver>-windows-arm64.msi` | `designcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `designcraft-<ver>-windows-x86.msi` | `designcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت DesignCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

تحفظ النسخة المحمولة إعداداتها وسجلاتها وبيانات الاسترداد في مجلد `DesignCraftData` بجانب البرنامج، فيمكنك أن تحملها على ذاكرة USB. احذف الملف `portable.txt` الموجود بجانب البرنامج لتستخدم مجلد إعداداتك المعتاد بدلاً من ذلك.

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `designcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **DesignCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، وهو موقّع وموثّق من Apple.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `designcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `designcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `designcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `designcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux وManjaro | `designcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `designcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. ولمعالجات RISC-V حزمة `.deb` وحزمة `.rpm` وأرشيف tar، وفي أسمائها `riscv64`. ويحتاج إصدار RISC-V إلى Ubuntu 24.04، أو أي نظام آخر فيه glibc 2.39 أو أحدث.

**Gentoo:** في مستودع المجتمع [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) الحزمتان `media-gfx/designcraft-bin` و`media-gfx/designcraft`. ولا يتولى فريق DesignCraft صيانته.

### FreeBSD

نزّل `designcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`designcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. يستخدم WebGPU، أو WebGL2 حيث لا يتوفر WebGPU. يستخدم **فتح** و**وضع** أداة اختيار الملفات في المتصفح، أما **حفظ** والتصدير فينزّلان الملف. ولا يمكن لمساعدي الذكاء الاصطناعي التحكم به.

## التحديث

يبحث DesignCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **مساعدة › Check for Updates…** (وعلى Mac **DesignCraft › Check for Updates…**). تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث DesignCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم.
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم. وفي النسخة المحمولة، أبقِ مجلد `DesignCraftData` الخاص بها.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن DesignCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **DesignCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.designcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس مستنداتك. وتبقى الإعدادات في مجلد إعدادات DesignCraft (راجع [العثور على السجل](/ar/apps/designcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
