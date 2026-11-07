---
title: التثبيت والتحديث
description: نزّل WordCraft لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها WordCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة WordCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/wordcraft/releases/latest) من WordCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/wordcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `wordcraft-<ver>-windows-x64.msi` | `wordcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `wordcraft-<ver>-windows-arm64.msi` | `wordcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `wordcraft-<ver>-windows-x86.msi` | `wordcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت WordCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `wordcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **WordCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، وهو موقّع وموثّق من Apple.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `wordcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `wordcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `wordcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `wordcraft-<ver>-linux-x86_64.rpm` | |
| أرشيف tar | `wordcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً أرشيف tar لمعالجات RISC-V، لنظامي Ubuntu 24.04 وDebian 13 وما بعدهما. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

**Arch Linux:** يصون أعضاء من المجتمع حزماً في AUR. أسرعها `wordcraft-bin`، مثلاً `yay -S wordcraft-bin`. أما `wordcraft` فيبني أحدث إصدار من الشيفرة المصدرية، و`wordcraft-git` يبني أحدث شيفرة لم تصدر بعد.

**Gentoo:** في [الطبقة الإضافية ::snakebyte](https://github.com/switch87/snakebyte-overlay) (overlay) التي يصونها المجتمع الحزمتان `app-office/wordcraft-bin` و`app-office/wordcraft`.

حزم المجتمع لا يصونها فريق WordCraft.

### FreeBSD

نزّل `wordcraft-<ver>-freebsd-x86_64.tar.gz` وفكّ ضغطه.

### في المتصفح

`wordcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. لا تدقق نسخة الويب إلا الإملاء الإنجليزي، ولا تستطيع الاتصال بـ Zotero.

## التحديث

يبحث WordCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **مساعدة › البحث عن تحديثات**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث WordCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن WordCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **WordCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.wordcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس مستنداتك. وتبقى الإعدادات في مجلد إعدادات WordCraft (راجع [العثور على السجل](/ar/apps/wordcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
