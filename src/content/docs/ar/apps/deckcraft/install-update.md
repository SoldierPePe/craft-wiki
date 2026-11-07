---
title: التثبيت والتحديث
description: نزّل DeckCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو استخدمه في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها DeckCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة DeckCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/deckcraft/releases/latest) من DeckCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/deckcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `deckcraft-<ver>-windows-x64.msi` | `deckcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `deckcraft-<ver>-windows-arm64.msi` | `deckcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `deckcraft-<ver>-windows-x86.msi` | `deckcraft-<ver>-windows-x86-portable.zip` |

تسألك الصفحة الأولى من المثبّت لمن تثبّت DeckCraft. الخيار **Only for me** هو الافتراضي ولا يحتاج إلى صلاحيات المسؤول. أما **Everyone on this computer** فيطلب موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

### macOS

نزّل `deckcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **DeckCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، بنظام macOS 11 أو أحدث.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `deckcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `deckcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `deckcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `deckcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `deckcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `deckcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك إصدارات لمعالجات RISC-V أيضاً: حزمة `.deb` وحزمة `.rpm` وأرشيف tar، تحمل `riscv64`. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

تحتاج الإصدارات إلى glibc 2.35 أو أحدث، كما في Ubuntu 22.04 وما بعده. وإذا ثبّت أرشيف tar، فراجع [لا يبدأ على Linux](/ar/apps/deckcraft/troubleshooting/#لا-يبدأ-على-linux) لتعرف المكتبات التي يحتاجها.

**Gentoo:** في مستودع المجتمع [<bdi>::snakebyte overlay</bdi>](https://github.com/switch87/snakebyte-overlay) الحزمة `app-office/deckcraft-bin`. ولا يتولى فريق DeckCraft صيانتها.

### FreeBSD

نزّل `deckcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64`) وفكّ ضغطه.

### في المتصفح

`deckcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. ولا تستطيع نسخة الويب البحث عن التحديثات.

## التحديث

يبحث DeckCraft عن التحديثات حين يبدأ، ويعرض عليك التحديث وإعادة التشغيل حين يصدر تحديث. للبحث بنفسك، اضغط **Ctrl+Shift+P** (أو **⇧⌘P** على Mac) وشغّل **Check for Updates…**. وعلى Mac تجده أيضاً في قائمة **Help**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث DeckCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` و`.pkg.tar.zst`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن DeckCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **DeckCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.deckcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس عروضك التقديمية. وتبقى الإعدادات في مجلد إعدادات DeckCraft (راجع [العثور على السجل](/ar/apps/deckcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
