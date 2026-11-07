---
title: التثبيت والتحديث
description: نزّل PhotoCraft لنظام Windows أو macOS أو Linux أو FreeBSD أو للويب، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها PhotoCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة PhotoCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/photocraft/releases/latest) من PhotoCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/photocraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `photocraft-<ver>-windows-x64.msi` | `photocraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `photocraft-<ver>-windows-arm64.msi` | `photocraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `photocraft-<ver>-windows-x86.msi` | `photocraft-<ver>-windows-x86-portable.zip` |

يثبّت المثبّت PhotoCraft لحسابك وحده افتراضياً، ولا يحتاج إلى صلاحيات المسؤول. لتثبيته لكل مستخدمي الحاسوب، اختر **Everyone on this computer** في الصفحة الأولى، وسيطلب ذلك موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

تعمل النسخة المحمولة دون تثبيت. وتحفظ إعداداتها في مجلد `PhotoCraftData` بجانب البرنامج، فيمكنك حملها على ذاكرة USB.

المثبّتات والبرامج موقّعة رقمياً.

### macOS

نزّل `photocraft-<ver>-macos-universal.dmg` وافتحه، واسحب **PhotoCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، وهو موقّع وموثّق من Apple.

أداة سطر الأوامر تأتي منفصلة، باسم `photocraft-cli-<ver>-macos-universal.zip`. راجع [الأتمتة ووكلاء الذكاء الاصطناعي](/ar/apps/photocraft/automation/).

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `photocraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `photocraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `photocraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `photocraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `photocraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `photocraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. ولمعالجات RISC-V هناك حزمة `.deb` وحزمة `.rpm` وأرشيف tar بمعمارية `riscv64`. ويحتاج أرشيف tar لمعالجات RISC-V إلى glibc 2.39 أو أحدث، كما في Ubuntu 24.04.

في أول مرة تشغّل فيها ملف AppImage، يضيف أيقونة PhotoCraft وعنصره في القائمة تحت `~/.local/share`. اضبط `PHOTOCRAFT_NO_DESKTOP_INTEGRATION=1` لتتخطى ذلك.

تحتاج نسخة Flatpak إلى بيئة تشغيل freedesktop من [Flathub](https://flathub.org/setup)، ويعرض عليك `flatpak` تثبيتها. شغّلها بالأمر `flatpak run ai.storyteller.photocraft`.

**Gentoo:** يضم [مستودع ::snakebyte الإضافي](https://github.com/switch87/snakebyte-overlay) الذي يديره المجتمع الحزمة `media-gfx/photocraft-bin`. ولا يتولى فريق PhotoCraft صيانته.

### FreeBSD

نزّل `photocraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64` لمعالجات ARM). أرشيف tar مرتب مثل `/usr/local`. ثبّت المكتبات التي يحتاجها، ثم فكّ ضغطه هناك:

```bash
pkg install libxkbcommon wayland libX11 libXcursor libXrandr libXi libxcb mesa-libs vulkan-loader gtk3 fontconfig freetype2 alsa-lib
tar -xzf photocraft-<ver>-freebsd-x86_64.tar.gz --strip-components 1 -C /usr/local
```

### في المتصفح

`photocraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث.

## التحديث

يبحث PhotoCraft عن إصدار جديد حين يبدأ، ويخبرك حين يصدر واحد. لا يطلب إلا معلومات الإصدارات العامة، ولا يرسل شيئاً عنك أو عن مستنداتك. للبحث بنفسك، اختر **تعليمات › التحقق من وجود تحديثات…**. ولإيقاف البحث عند بدء التشغيل، أوقف **التحقق من وجود تحديثات تلقائيًا** في **تحرير › التفضيلات › إعدادات…** (وعلى Mac في **PhotoCraft › إعدادات**).

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث PhotoCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` وحزمة Arch**: ثبّت الإصدار الجديد فوق القديم.
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم.

تُحفظ إعداداتك خارج مجلد التطبيق (إلا في النسخة المحمولة)، لذا يبقيها التحديث كما هي.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن PhotoCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **PhotoCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.photocraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس صورك. وتبقى الإعدادات في مجلد إعدادات PhotoCraft (راجع [العثور على السجل](/ar/apps/photocraft/troubleshooting/#العثور-على-السجل) لتعرف مكانه)، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
