---
title: Troubleshooting
description: Common problems with MailCraft and how to solve them.
sidebar:
  order: 5
---

:::note[Third-Party Application]
To report a bug in MailCraft, open an issue on the [MailCraft issue tracker](https://github.com/UCS-Care-Group/mailcraft/issues).
:::

## Windows SmartScreen says "Windows protected your PC"

- **Cause:** release signing with Microsoft is still in progress, so SmartScreen doesn't know MailCraft yet.
- **Fix:** [check your download](/apps/mailcraft/security/#check-your-download), then click **More info** and **Run anyway**. See [Windows SmartScreen warning](/apps/mailcraft/install-update/#windows-smartscreen-warning).

## macOS says it can't check MailCraft

- **Cause:** macOS builds are not notarized yet.
- **Fix:** open **System Settings › Privacy & Security** and click **Open Anyway**.

## "Need admin approval" when signing in with Microsoft

- **Cause:** your organisation lets only an administrator approve a new program.
- **Fix:** MailCraft explains what to do while Microsoft's page is still open. An administrator approves MailCraft once. Anyone else can copy a short message to send to their administrator. After approval, sign in again.

## Google sign-in shows a warning or is refused

- **Cause:** Google's OAuth verification of MailCraft is still in progress. Until it finishes, Google may warn that it hasn't verified the app, or let only approved testers sign in.
- **Fix:** add the account with a [Google app password](/apps/mailcraft/google-app-password/) instead. A Google Workspace administrator may also need to allow MailCraft for the organisation.

## The browser version can't connect to my mail server

- **Cause:** browsers can't open the connections IMAP and SMTP need. The browser build reaches only JMAP servers, read only for now.
- **Fix:** use the desktop app, or bring mail in with **File › Import**.

## Linux asks me to sign in again after a restart

MailCraft keeps sign-ins in the desktop's Secret Service (GNOME Keyring or KWallet). Make sure one of them is running and unlocked. Remembering sign-ins across a restart on Linux isn't fully proven yet.

## Something Outlook does is missing

MailCraft doesn't have every Outlook feature yet. Printing and `.ost`, `.msg` and `.olm` files are not supported. The full list is in [Where MailCraft falls short](https://github.com/UCS-Care-Group/mailcraft/blob/main/docs/gaps.md).

## Getting help

- [MailCraft issue tracker](https://github.com/UCS-Care-Group/mailcraft/issues)
- [MailCraft on GitHub](https://github.com/UCS-Care-Group/mailcraft)
