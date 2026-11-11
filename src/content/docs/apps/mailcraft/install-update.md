---
title: Install and update
description: How to install and update MailCraft on Windows, macOS, Linux, FreeBSD and the web.
sidebar:
  order: 2
---

:::note[Third-Party Application]
MailCraft is independently distributed by UCS Care Group. ArtCraft Launcher does not distribute third-party applications.
:::

Every release is on the [MailCraft Releases page](https://github.com/UCS-Care-Group/mailcraft/releases/latest) with a `SHA256SUMS.txt` file to check your download against.

:::caution[Releases are not yet signed by the operating systems]
Windows release signing with Microsoft is in progress, and macOS signing will follow later. Until then, Windows and macOS warn you before running MailCraft. Each release is still signed by MailCraft's own release key and comes with build provenance (see [Security](/apps/mailcraft/security/#check-your-download)).
:::

## Windows

Download the `.msi` installer or the portable `.zip` for your processor: x64, x86 or ARM64.

### Windows SmartScreen warning

Windows Defender SmartScreen will warn you when you open the installer, because the release isn't signed yet. This is expected. To continue:

1. [Check your download](/apps/mailcraft/security/#check-your-download) against `SHA256SUMS.txt`.
2. Open the `.msi`. Windows shows **Windows protected your PC**.
3. Click **More info**.
4. Check that the file name is the one you downloaded, then click **Run anyway**.

Your browser may also flag the download as uncommon. Choose **Keep** to keep it.

:::danger
Only click **Run anyway** for a file you downloaded from the [MailCraft Releases page](https://github.com/UCS-Care-Group/mailcraft/releases). If you got MailCraft from anywhere else, delete it.
:::

## macOS

Download the `.dmg` disk image. It is universal and runs on Apple silicon and Intel. Drag **MailCraft** into your Applications folder.

macOS builds are not notarized yet, so the first time you open MailCraft, macOS will say it can't check the app. Open **System Settings › Privacy & Security**, then click **Open Anyway** next to the MailCraft message.

## Linux

Packages are available for x86_64 and aarch64: `.AppImage`, `.deb`, `.rpm`, `.flatpak` and `.tar.gz`. They need glibc 2.35 or later.

### Flatpak

```bash
flatpak install --user mailcraft-*.flatpak
flatpak run io.github.billsecond.mailcraft
```

### AppImage

```bash
chmod +x mailcraft-*-linux-x86_64.AppImage
./mailcraft-*-linux-x86_64.AppImage
```

## FreeBSD

Download the FreeBSD x86_64 tarball.

## Web

`mailcraft-web-*.zip` is a static site you can host yourself. The browser build runs MailCraft through WebAssembly, with three limits:

- It reaches only JMAP mail servers, read only for now. Use the desktop app for IMAP and SMTP.
- Your mailbox lives in the browser's storage.
- Saving downloads a file.

## Updating

MailCraft checks for new releases and tells you in **File › About** and the status bar.

- **Windows and AppImage:** MailCraft downloads the update and installs it when you click **Restart to update**, or when you quit. It installs a download only if the release key's signature and SHA-256 checksum both match.
- **macOS:** MailCraft tells you a new version is out and links to it. Download it and install it the same way as before.
- **Other Linux packages and Flatpak:** download the new release and install it the same way as before.

Organisations can turn off automatic updates for everyone on a computer by installing the `.msi` with `DISABLEAUTOMATICUPDATES=1`.

## Building from source

MailCraft needs Rust 1.95 or later.

```bash
git clone https://github.com/UCS-Care-Group/mailcraft
cd mailcraft
cargo run --release -p mailcraft -- --sample
```
