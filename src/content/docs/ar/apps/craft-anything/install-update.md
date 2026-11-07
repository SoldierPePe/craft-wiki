---
title: التثبيت والتحديث
description: نزّل Craft Anything لنظام Windows أو macOS أو Linux أو FreeBSD، وأبقِه محدّثاً.
---

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) كل تطبيقات Craft App Suite ويحدّثها ويفتحها، ومنها Craft Anything. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة Craft Anything.

## يدوياً

كل الإصدارات موجودة في صفحة [أحدث إصدار](https://github.com/storytold/craft-anything/releases/latest)، وفي صفحة [كل الإصدارات](https://github.com/storytold/craft-anything/releases) النسخ السابقة وملاحظاتها. في أسماء الملفات أدناه، `<ver>` هو رقم الإصدار. ويضم `SHA256SUMS.txt` مجموعاً اختبارياً لكل ملف.

### Windows

| الإصدار | المثبّت | النسخة المحمولة |
|---|---|---|
| x64 (معالجات Intel أو AMD بـ 64 بت) | `craft-anything-<ver>-windows-x64.msi` | `craft-anything-<ver>-windows-x64-portable.zip` |
| arm64 (حواسيب Snapdragon وغيرها من حواسيب ARM) | `craft-anything-<ver>-windows-arm64.msi` | `craft-anything-<ver>-windows-arm64-portable.zip` |
| x86 (إصدار 32 بت) | `craft-anything-<ver>-windows-x86.msi` | `craft-anything-<ver>-windows-x86-portable.zip` |

المثبّتات والبرامج موقّعة رقمياً. يثبّت المثبّت Craft Anything لكل مستخدمي الحاسوب، في `C:\Program Files\Craft Anything`، لذا يطلب Windows موافقة المسؤول. أما النسخة المحمولة فلا تحتاج إلى تثبيت، وتحفظ إعداداتها بجانب التطبيق، في `CraftAnythingData`.

### macOS

| الإصدار | الملف |
|---|---|
| التطبيق، إصدار شامل (لمعالجات Apple silicon وIntel) | `craft-anything-<ver>-macos-universal.dmg` |
| أداة سطر الأوامر وحدها، إصدار شامل | `craft-anything-cli-<ver>-macos-universal.zip` |

كلاهما موقّع وموثّق، ويحتاج إلى macOS 11 (إصدار Big Sur) أو أحدث. ويتضمن التطبيق أداة سطر الأوامر، لذا لا تحتاج إلى ملف zip إلا لاستخدام سطر الأوامر دون التطبيق.

إذا قال macOS «Apple could not verify craft-anything-cli» عن الأداة التي في ملف zip، فاضغط **Done** وراجع [يحظر macOS أداة سطر الأوامر](/ar/apps/craft-anything/troubleshooting/#يحظر-macos-أداة-سطر-الأوامر).

### Linux

| الصيغة | الملفات (لمعماريتي x86_64 وaarch64) | ملاحظات |
|---|---|---|
| AppImage | `craft-anything-<ver>-linux-<arch>.AppImage` | يعمل دون تثبيت، ويُحدَّث باستخدام [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) |
| Debian وUbuntu | `craft-anything-<ver>-linux-<arch>.deb` | |
| Fedora وRHEL وopenSUSE | `craft-anything-<ver>-linux-<arch>.rpm` | |
| Arch | `craft-anything-<ver>-linux-<arch>.pkg.tar.zst` | |
| Flatpak | `craft-anything-<ver>-linux-<arch>.flatpak` | التثبيت: `flatpak install --user <file>`؛ ولا يستطيع دراسة مواقع الويب (راجع ما يلي) |
| أرشيف tar | `craft-anything-<ver>-linux-<arch>.tar.gz` | فكّ ضغطه في أي مكان |

لمعالجات RISC-V (معمارية riscv64) حزمة `.deb` وحزمة `.rpm` وأرشيف tar. وباستثناء Flatpak، تحتاج إصدارات Linux إلى glibc 2.35 أو أحدث: أي Ubuntu 22.04 أو أحدث، أو توزيعة من العمر نفسه.

:::note
حزمة Flatpak معزولة (sandboxed)، لذا لا تستطيع تشغيل متصفح على حاسوبك، ودراسة موقع ويب تحتاج إلى متصفح. استخدم حزمة أخرى لمواقع الويب.
:::

ويحمل AppImage أداة سطر الأوامر أيضاً: شغّل `<AppImage> --cli <command>`، أو أنشئ رابطاً إلى ملف AppImage باسم `craft-anything-cli`.

للتحديث عبر مدير الحزم، أضف [مستودعات ArtCraft لنظام Linux](https://getartcraft.com/linux) (وهي تشمل Flatpak وDebian وUbuntu وFedora وRHEL وopenSUSE وArch).

### FreeBSD

الملفان `craft-anything-<ver>-freebsd-x86_64.tar.gz` و`craft-anything-<ver>-freebsd-aarch64.tar.gz`.

### في المتصفح

`craft-anything-web-<ver>.zip` عارض صغير يخبرك ما هو الملف، دون أن يغادر الملف متصفحك. استضف المجلد على أي خادم ويب ثابت.

## التحقق من التثبيت

```bash
craft-anything-cli doctor
```

يتحقق من التثبيت، ومن وكلاء البرمجة التي يمكنه استخدامها، ومن المحركات. ويوضح [استكشاف الأخطاء وإصلاحها](/ar/apps/craft-anything/troubleshooting/) أين تجد `craft-anything-cli` إذا لم تجده الطرفية.

## التحديث

يحفظ Craft Anything المثبّت إعداداته خارج مجلد التطبيق، ومشاريعك موجودة في `Documents/Craft Anything`، لذا يبقي التحديث على الاثنين:

- **ArtCraft Launcher**: يخبرك حين يصدر إصدار جديد ويحدّثه نيابة عنك.
- **المثبّت وDMG و`.deb` و`.rpm`**: ثبّت الإصدار الجديد فوق القديم، أو حدّث من [مستودعات Linux](https://getartcraft.com/linux).
- **النسخة المحمولة**: إعداداتها في مجلدها الخاص `CraftAnythingData`؛ فكّ ضغط الإصدار الجديد وانقل ذلك المجلد إلى جانبه.
- **AppImage**: شغّل عليه AppImageUpdate، أو نزّل الإصدار الجديد.

## إلغاء التثبيت

1. إذا ربطت Craft Anything بتطبيقات وكلاء البرمجة بالأمر `craft-anything-cli setup`، فأزل تلك الروابط:

   ```bash
   craft-anything-cli uninstall
   ```

2. مفاتيح API التي أضفتها محفوظة في سلسلة مفاتيح النظام. لإزالتها، اختر **Remove it and its key** لكل منها في **Settings → AI**.
3. أزل التطبيق بالطريقة المعتادة لنظامك:
   - **Windows**: في **الإعدادات → التطبيقات**، ابحث عن Craft Anything واختر **إلغاء التثبيت**. أما النسخة المحمولة فاحذف مجلدها.
   - **macOS**: انقل **Craft Anything** من مجلد التطبيقات إلى سلة المهملات.
   - **Linux**: أزل الحزمة بمدير الحزم، أو شغّل `flatpak uninstall ai.storyteller.craft-anything` لنسخة Flatpak، أو احذف ملف AppImage أو أرشيف tar الذي فككته.
4. تبقى إعداداتك ومشاريعك. لإزالتها أيضاً، احذف مجلد الإعدادات (راجع [العثور على السجل](/ar/apps/craft-anything/troubleshooting/#العثور-على-السجل) لتعرف مكانه) ومجلد مشاريعك، وهو `Documents/Craft Anything` ما لم تغيّره.

## البناء من المصدر

تحتاج إلى Rust 1.97 أو أحدث (`rustup update`). وعلى Debian أو Ubuntu، يحتاج تطبيق سطح المكتب أيضاً إلى:

```bash
sudo apt-get install libxkbcommon-dev libwayland-dev libx11-dev libxrandr-dev libxi-dev libgl1-mesa-dev libgtk-3-dev
```

ثم:

```bash
git clone https://github.com/storytold/craft-anything && cd craft-anything
cargo run --release -p craft-anything             # تطبيق سطح المكتب
cargo install --path apps/craft-anything-cli      # أداة سطر الأوامر
```
