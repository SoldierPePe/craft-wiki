---
title: التثبيت والتحديث
description: نزّل CADCraft لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها CADCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة CADCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/cadcraft/releases/latest) من CADCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/cadcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

:::caution
لا تنزّل CADCraft إلا من [storytold/cadcraft](https://github.com/storytold/cadcraft/releases). وقبل أن تشغّل أي ملف نزّلته، تأكد أن مجموعه الاختباري يطابق سطره في `SHA256SUMS.txt`: الأمر `Get-FileHash <file>` في PowerShell، أو `shasum -a 256 <file>` على macOS، أو `sha256sum <file>` على Linux.
:::

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `cadcraft-<ver>-windows-x64.msi` | `cadcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `cadcraft-<ver>-windows-arm64.msi` | `cadcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `cadcraft-<ver>-windows-x86.msi` | `cadcraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت CADCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

يضيف المثبّت CADCraft إلى قائمة ابدأ. وحدد **Create a desktop shortcut** إذا أردت اختصاراً على سطح المكتب أيضاً.

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `cadcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **CADCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، وهو موقّع وموثّق من Apple.

أداة سطر الأوامر `cadcraft-cli` تُنزَّل منفصلة: `cadcraft-cli-<ver>-macos-universal.zip`. لا تحتاجها إلا [لأتمتة CADCraft](/ar/apps/cadcraft/automation/).

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `cadcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `cadcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `cadcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `cadcraft-<ver>-linux-x86_64.rpm` | |
| أرشيف tar | `cadcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً أرشيف tar لمعالجات RISC-V، لنظامي Ubuntu 24.04 وDebian 13 وما بعدهما. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

### FreeBSD

نزّل `cadcraft-<ver>-freebsd-x86_64.tar.gz` وفكّ ضغطه.

### في المتصفح

`cadcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. لا تستطيع نسخة الويب فتح ملفات DWG أو حفظها (استخدم DXF)، ولا تحفظ تلقائياً.

## التحديث

يبحث CADCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **مساعدة › التحقق من وجود تحديثات…**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث CADCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن CADCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **CADCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.cadcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس رسوماتك. وتبقى الإعدادات في مجلد إعدادات CADCraft (راجع [العثور على السجل](/ar/apps/cadcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
