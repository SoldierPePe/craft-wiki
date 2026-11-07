---
title: التثبيت والتحديث
description: نزّل LightCraft لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها LightCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة LightCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/lightcraft/releases/latest) من LightCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/lightcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `lightcraft-<ver>-windows-x64.msi` | `lightcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `lightcraft-<ver>-windows-arm64.msi` | `lightcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `lightcraft-<ver>-windows-x86.msi` | `lightcraft-<ver>-windows-x86-portable.zip` |

يسألك المثبّت لمن تريد تثبيت LightCraft. الخيار الافتراضي هو **Only for me**: لا يحتاج إلى صلاحيات المسؤول، ويثبّت في `%LOCALAPPDATA%\Programs\ArtCraft\LightCraft`. أما **Everyone on this computer** فيطلب موافقة المسؤول، ويثبّت في `C:\Program Files\ArtCraft\LightCraft`. وتبقى التحديثات في المجلد الذي اخترته.

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `lightcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **LightCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، وهو موقّع وموثّق من Apple.

أداة سطر الأوامر `lightcraft-cli` تُنزَّل منفصلة على Mac: `lightcraft-cli-<ver>-macos-universal.zip`. لا تحتاجها إلا [لوكلاء الذكاء الاصطناعي](/ar/apps/lightcraft/ai-agents/) وكتابة السكربتات.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `lightcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `lightcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `lightcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `lightcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `lightcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `lightcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات لمعالجات RISC-V (`riscv64`)، على شكل أرشيف tar وحزمة `.deb` وحزمة `.rpm`، لنظامي Ubuntu 24.04 وDebian 13 وما بعدهما.

**Nix:** يشغّل الأمر `nix run github:storytold/lightcraft` تطبيق سطح المكتب. ويشرح ملف README في المستودع كيف تضيفه إلى إعدادات NixOS أو home-manager.

### FreeBSD

نزّل `lightcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`lightcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. تحفظ نسخة الويب مكتبتها في المتصفح، ولا تستطيع استيراد كتالوج Lightroom.

## التحديث

يبحث LightCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **Help › Check for Updates…**. وبحسب طريقة تثبيته، إما أن يحدّث LightCraft نفسه ويعيد التشغيل، أو يعرض عليك التنزيل.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث LightCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم.
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

تُحفظ مكتبتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي. وإذا كان بجانب نسخة محمولة مجلد `LightCraftData`، فهو يحمل إعدادات تلك النسخة: احتفظ به حين تستبدل البرنامج.

:::note
بعد التحديث، لا تتغير وحدها الصور التي فُتحت بوضع **Preview only**. حددها واختر **Photo › Reload from Disk**. راجع [استكشاف الأخطاء وإصلاحها](/ar/apps/lightcraft/troubleshooting/#صورة-خام-تظهر-عليها-عبارة-preview-only).
:::

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن LightCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **LightCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.lightcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس صورك ولا مكتبتك. وتبقى الإعدادات في مجلد إعدادات LightCraft (راجع [العثور على السجل](/ar/apps/lightcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
