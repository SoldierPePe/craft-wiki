---
title: التثبيت والتحديث
description: نزّل FilmCraft لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها FilmCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة FilmCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/filmcraft/releases/latest) من FilmCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/filmcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `filmcraft-<ver>-windows-x64.msi` | `filmcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `filmcraft-<ver>-windows-arm64.msi` | `filmcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `filmcraft-<ver>-windows-x86.msi` | `filmcraft-<ver>-windows-x86-portable.zip` |

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `filmcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **FilmCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، وهو موقّع وموثّق من Apple.

أداة سطر الأوامر `filmcraft-cli` تُنزَّل منفصلة على Mac: `filmcraft-cli-<ver>-macos-universal.zip`. لا تحتاجها إلا [لوكلاء الذكاء الاصطناعي](/ar/apps/filmcraft/ai-agents/) والسكربتات.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `filmcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `filmcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `filmcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `filmcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `filmcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `filmcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه، ثم شغّل `./install.sh` |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات لمعالجات RISC-V، تحمل `riscv64`، بصيغة أرشيف tar و`.deb` و`.rpm`، لنظامي Ubuntu 24.04 وDebian 13 وما بعدهما.

يثبّت `install.sh` الموجود في أرشيف tar تطبيق FilmCraft لحسابك في `~/.local`، دون صلاحيات المسؤول. ولتثبيته لكل المستخدمين، شغّل `sudo ./install.sh --prefix /usr/local` بدلاً من ذلك.

**Gentoo:** في [طبقة ::snakebyte](https://github.com/switch87/snakebyte-overlay) التي يديرها المجتمع الحزمة `media-video/filmcraft-bin`. لا يتولى فريق FilmCraft صيانتها، لذا أبلغ عن مشكلات التحزيم هناك.

### FreeBSD

نزّل `filmcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM) وفكّ ضغطه.

### في المتصفح

`filmcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث.

## التحديث

يبحث FilmCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، اختر **Help › Check for Updates…**. وبحسب طريقة تثبيته، إما أن يحدّث FilmCraft نفسه ويعيد التشغيل، وإما أن يعرض عليك التنزيل.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث FilmCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم.
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **أرشيف tar**: شغّل `install.sh` من الإصدار الجديد، فيحدّث النسخة المثبّتة.
- **Flatpak**: نزّل الإصدار الجديد وثبّته.
- **النسخة المحمولة بصيغة zip**: تحفظ النسخة المحمولة بياناتها في مجلد `data` بجانب البرنامج. فكّ ضغط الإصدار الجديد، ثم انسخ إليه مجلد `data` ذاك.

باستثناء النسخة المحمولة، يحفظ FilmCraft بياناته خارج مجلد التطبيق، لذا يبقيها التحديث كما هي. أما مشاريعك فهي حيث حفظتها.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن FilmCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **FilmCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.filmcraft` لنسخة Flatpak، أو احذف ملف AppImage.

لا تُمس مشاريعك ووسائطك. وتبقى بيانات FilmCraft نفسه (نسخ الحفظ التلقائي للمشاريع غير المحفوظة، ونسخ الاستعادة، والإعدادات المسبقة، والسجلات) في مجلد بياناته، وراجع [العثور على السجل](/ar/apps/filmcraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه.
