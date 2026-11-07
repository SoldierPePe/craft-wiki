---
title: التثبيت والتحديث
description: نزّل FigCraft لنظام Windows أو macOS أو Linux أو FreeBSD، أو استخدمه في المتصفح، وأبقِه محدّثاً.
sidebar:
  order: 2
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها FigCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة FigCraft.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/figcraft/releases/latest) من FigCraft، وفي صفحة [كل الإصدارات](https://github.com/storytold/figcraft/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| حاسوبك | المثبّت | النسخة المحمولة |
| --- | --- | --- |
| معظم الحواسيب، بمعالجات Intel أو AMD بـ 64 بت | `figcraft-<ver>-windows-x64.msi` | `figcraft-<ver>-windows-x64-portable.zip` |
| حواسيب ARM، مثل Snapdragon | `figcraft-<ver>-windows-arm64.msi` | `figcraft-<ver>-windows-arm64-portable.zip` |
| Windows بـ 32 بت | `figcraft-<ver>-windows-x86.msi` | `figcraft-<ver>-windows-x86-portable.zip` |

تسألك الصفحة الأولى من المثبّت لمن تريد تثبيت FigCraft. الخيار **Only for me** هو الافتراضي ولا يحتاج إلى صلاحيات المسؤول. أما **Everyone on this computer** فيطلب موافقة المسؤول. لا يمكن تثبيت إلا نسخة واحدة، لذا ألغِ تثبيت النسخة الحالية قبل التبديل بين الطريقتين.

تحفظ النسخة المحمولة إعداداتها في مجلد `config` بجانب `figcraft.exe`، فيمكنك أن تحملها على ذاكرة USB.

### macOS

نزّل `figcraft-<ver>-macos-universal.dmg` وافتحه، واسحب **FigCraft** إلى مجلد التطبيقات. يعمل على أجهزة Mac بمعالجات Apple silicon وIntel، بنظام macOS 11 أو أحدث.

### Linux

| الصيغة | الملف | ملاحظات |
| --- | --- | --- |
| AppImage | `figcraft-<ver>-linux-x86_64.AppImage` | يعمل على معظم التوزيعات، ولا يحتاج إلى تثبيت |
| Flatpak | `figcraft-<ver>-linux-x86_64.flatpak` | ثبّته بالأمر `flatpak install --user <file>` |
| Debian وUbuntu | `figcraft-<ver>-linux-x86_64.deb` | |
| Fedora وRHEL وopenSUSE | `figcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `figcraft-<ver>-linux-x86_64.pkg.tar.zst` | ثبّته بالأمر `sudo pacman -U <file>` |
| أرشيف tar | `figcraft-<ver>-linux-x86_64.tar.gz` | فكّ ضغطه في أي مكان |

لكل صيغة أيضاً إصدار ARM64، يحمل `aarch64` بدلاً من `x86_64`. وهناك أيضاً إصدارات لمعالجات RISC-V: حزمة `.deb` وحزمة `.rpm` وأرشيف tar، وفي أسمائها `riscv64`. ويمكنك كذلك التثبيت والتحديث من [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux).

تحتاج هذه الإصدارات إلى glibc 2.35 أو أحدث، كما في Ubuntu 22.04 وما بعده.

### FreeBSD

نزّل `figcraft-<ver>-freebsd-x86_64.tar.gz` (أو `freebsd-aarch64`) وفكّ ضغطه في `/usr/local`:

```bash
tar -xzf figcraft-<ver>-freebsd-x86_64.tar.gz --strip-components 1 -C /usr/local
```

### في المتصفح

`figcraft-web-<ver>.zip` هو نسخة الويب. فكّ ضغطه على أي خادم ويب وافتحه في متصفح حديث. لا تستطيع نسخة الويب البحث عن التحديثات، ولا تصل إلى خطوط النظام، لذا تستخدم الخطوط المدمجة في FigCraft.

### خادم التعاون

`figcraft-server-<ver>-linux-x86_64.tar.gz` (وإصدار `aarch64`) هو الخادم الذي تستضيف به ملفات فريقك المشتركة بنفسك. لا تحتاج إليه لتستخدم FigCraft أو لتشارك الملفات. راجع [الجلسات المباشرة](/ar/apps/figcraft/live-sessions/#تشغيل-خادمك-الخاص).

## التحديث

يبحث FigCraft عن التحديثات حين يبدأ، ويخبرك حين يصدر تحديث. للبحث بنفسك، انقر **?** في أسفل يمين لوحة الرسم واختر **التحقق من التحديثات…**. تُحفظ إعداداتك خارج مجلد التطبيق، لذا يبقيها التحديث كما هي.

- **ArtCraft Launcher**: يخبرك بالإصدارات الجديدة ويحدّث FigCraft نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm` و`.pkg.tar.zst`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **AppImage**: شغّل عليه [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)، أو نزّل الإصدار الجديد.
- **Flatpak وأرشيف tar والنسخة المحمولة**: نزّل الإصدار الجديد وضعه مكان القديم. وفي النسخة المحمولة، أبقِ مجلد `config` لتحتفظ بإعداداتك.

## إلغاء التثبيت

- **Windows**: في **الإعدادات › التطبيقات**، ابحث عن FigCraft واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
- **macOS**: انقل **FigCraft** من مجلد التطبيقات إلى سلة المهملات.
- **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.figcraft` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.

لا تُمس ملفات تصميمك. وتبقى الإعدادات في مجلد إعدادات FigCraft (راجع [أين يحفظ FigCraft إعداداته](/ar/apps/figcraft/troubleshooting/#أين-يحفظ-figcraft-إعداداته))، فاحذف ذلك المجلد إن أردت إزالتها أيضاً.
