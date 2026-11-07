---
title: التثبيت والتحديث
description: نزّل GridCraft لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها GridCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة GridCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/gridcraft/releases/latest) من GridCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/gridcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `gridcraft-<ver>-windows-x64.msi` | `gridcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `gridcraft-<ver>-windows-arm64.msi` | `gridcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `gridcraft-<ver>-windows-x86.msi` | `gridcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت GridCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

يستطيع المثبّت أيضاً إضافة اختصار على سطح المكتب، وهذا الخيار غير محدد ما لم تحدده بنفسك. المثبّتات والبرامج موقّعة رقمياً.

بعد التثبيت، يظهر GridCraft في **فتح باستخدام** لملفات <bdi>.xlsx</bdi> و<bdi>.xlsm</bdi> و<bdi>.csv</bdi> و<bdi>.tsv</bdi>. ولا يجعل نفسه التطبيق الافتراضي لها، فاختره في **الإعدادات › التطبيقات › التطبيقات الافتراضية** إن أردت ذلك.

### macOS

نزّل `gridcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **GridCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel بنظام macOS 11 أو أحدث، وهو موقّع وموثّق من Apple.

يظهر GridCraft في **فتح باستخدام** لملفات جداول البيانات، دون أن يحل محل التطبيق الذي يفتحها الآن.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `gridcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `gridcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `gridcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `gridcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `gridcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `gridcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. ولمعالجات RISC-V إصدارات `riscv64` بحزم `.deb` و`.rpm` وأرشيف tar. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

### FreeBSD

نزّل `gridcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

## التحديث

يبحث GridCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **Automate › Check for Updates…**، أو **Help › Check for Updates…** على Mac. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث GridCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن GridCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **GridCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.gridcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس مصنفاتك. وتبقى الإعدادات في مجلد إعدادات GridCraft (راجع [العثور على السجل](/ar/apps/gridcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
