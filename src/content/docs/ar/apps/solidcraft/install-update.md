---
title: التثبيت والتحديث
description: كيف تثبّت SolidCraft وتبقيه محدّثاً على Linux وmacOS وWindows.
---

:::note[تطبيق من جهة خارجية]
SolidCraft تطبيق CAD مستقل ومفتوح المصدر تتولى صيانته Tangency Labs ومساهمو SolidCraft.
:::

## باستخدام ArtCraft Launcher

يثبّت [ArtCraft Launcher](https://github.com/storytold/craft-launcher) تطبيقات منظومة Craft ويحدّثها ويفتحها، ومنها SolidCraft. يختار الإصدار المناسب لنظامك ومعالجك، ويتحقق منه بمطابقة مجاميع SHA-256 الاختبارية للإصدار قبل تثبيته، ويخبرك حين يصدر تحديث.

نزّله من [أحدث إصدار](https://github.com/storytold/craft-launcher/releases/latest) له، ثم اضغط **Install** على بطاقة SolidCraft.

## يدوياً

يتوفر SolidCraft لأنظمة Linux وmacOS وWindows، وكذلك في المتصفح، وكأداة سطر أوامر تعمل دون واجهة رسومية.

## Linux

### Flatpak (موصى به)

يتوفر SolidCraft حزمةَ Flatpak على Flathub:

```bash
flatpak install flathub io.tangencylabs.solidcraft
flatpak run io.tangencylabs.solidcraft
```

للتحديث عبر Flatpak:

```bash
flatpak update io.tangencylabs.solidcraft
```

### AppImage

تتوفر ملفات AppImage مستقلة لنظام Linux على معالجات x86_64 وAArch64 في صفحة [الإصدارات على GitHub](https://github.com/bherbruck/solidcraft/releases):

1. نزّل `SolidCraft-x86_64.AppImage`.
2. اجعله قابلاً للتنفيذ: `chmod +x SolidCraft-x86_64.AppImage`.
3. شغّله مباشرة أو ادمجه مع بيئة سطح المكتب لديك.

### Snap

```bash
sudo snap install solidcraft --classic
```

## macOS

نزّل صورة القرص (`.dmg`) من [أحدث إصدار](https://github.com/bherbruck/solidcraft/releases/latest):

1. افتح `SolidCraft-macos-universal.dmg`.
2. اسحب **SolidCraft.app** إلى مجلد `Applications`.
3. يمكن ربط الملف التنفيذي `solidcraft-cli` المضمَّن من حزمة التطبيق إلى `$PATH` لديك، أو تنزيله منفصلاً.

## Windows

نزّل مثبّت `.msi` أو ملف `.zip` المحمول من [الإصدارات على GitHub](https://github.com/bherbruck/solidcraft/releases/latest).

## البناء من المصدر

SolidCraft مكتوب بلغة Rust. ستحتاج إلى سلسلة أدوات Rust حديثة (`rustup`) وأدوات البناء القياسية للغتي C و<bdi>C++</bdi>:

```bash
git clone https://github.com/bherbruck/solidcraft.git
cd solidcraft
cargo build --release
./target/release/solidcraft
```
