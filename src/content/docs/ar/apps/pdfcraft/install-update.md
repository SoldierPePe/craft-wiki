---
title: التثبيت والتحديث
description: نزّل PdfCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو استخدمه في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها PdfCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة PdfCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/pdfcraft/releases/latest) من PdfCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/pdfcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `pdfcraft-<ver>-windows-x64.msi` | `pdfcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `pdfcraft-<ver>-windows-arm64.msi` | `pdfcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `pdfcraft-<ver>-windows-x86.msi` | `pdfcraft-<ver>-windows-x86-portable.zip` |

تسألك الصفحة الأولى من المثبّت لمن تريد تثبيت PdfCraft. الخيار **Only for me** هو الافتراضي ولا يحتاج إلى صلاحيات المسؤول. أما **Everyone on this computer** فيطلب موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

يضيف المثبّت **Edit with PdfCraft** إلى قائمة النقر بزر الماوس الأيمن لملفات PDF، و**Create PDF with PdfCraft…** إلى قائمة النقر بزر الماوس الأيمن للصور، في مستكشف الملفات. وعلى Windows 11 تجدهما تحت **إظهار المزيد من الخيارات**. ولا يغيّر التطبيق الذي يفتح ملفات PDF حين تنقر عليها نقراً مزدوجاً.

تعمل النسخة المحمولة من أي مجلد، ومنها ذاكرة USB. وتحتفظ بإعداداتها وسجلاتها والعمل المستعاد في مجلد `PdfCraftData` بجانب `pdfcraft.exe`.

### macOS

نزّل `pdfcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **PdfCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `pdfcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `pdfcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `pdfcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `pdfcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `pdfcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `pdfcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات لمعالجات RISC-V: حزمة `.deb`، وحزمة `.rpm`، وأرشيف tar، تحمل `riscv64`. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

تحتاج الإصدارات إلى glibc 2.35 أو أحدث، كما في Ubuntu 22.04 وما بعده. وتحتاج إصدارات RISC-V إلى glibc 2.39 أو أحدث. وللطباعة، ثبّت أدوات سطر الأوامر الخاصة بـ CUPS (الحزمة `cups-client` على Debian وUbuntu)؛ ومن دونها يبقى PdfCraft قادراً على الحفظ بصيغة PDF من نافذة الطباعة.

**Gentoo:** في [الطبقة الإضافية ::snakebyte](https://github.com/switch87/snakebyte-overlay) (overlay) التي يصونها المجتمع الحزمة `app-text/pdfcraft-bin`. ولا يصونها فريق PdfCraft.

### FreeBSD

نزّل `pdfcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64`) وفكّ ضغطه.

### في المتصفح

`pdfcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. لا تستطيع البحث عن التحديثات، ولا استعادة العمل غير المحفوظ بعد الانهيار.

## التحديث

يبحث PdfCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **مساعدة › التحقق من التحديثات…**. ولإيقاف البحث عند البدء، أوقف **Check for updates when PdfCraft starts** في **تحرير › التفضيلات…**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث PdfCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` و`.pkg.tar.zst`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم. وفي النسخة المحمولة، أبقِ مجلد `PdfCraftData` لتحتفظ بإعداداتك.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن PdfCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **PdfCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.pdfcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس ملفات PDF الخاصة بك. وتبقى الإعدادات في مجلدات PdfCraft (راجع [العثور على السجل](/ar/apps/pdfcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانها)، فاحذفها إن أردت إزالة إعداداتك أيضاً.
