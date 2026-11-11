---
title: Getting started
description: Try MailCraft with the sample mailbox and add your first mail account.
sidebar:
  order: 1
---

:::note[Third-Party Application]
MailCraft is an independent open-source application maintained by UCS Care Group. For upstream documentation, see the [MailCraft repository](https://github.com/UCS-Care-Group/mailcraft).
:::

## Try it without your own mail

Start MailCraft with the sample mailbox to try things on:

```bash
mailcraft --sample
```

The sample is invented people and invented mail. Nothing you do in it is kept. In the browser build, add `?sample` to the address.

## Add an account

1. Open **Send / Receive → Add Account**.
2. Enter your email address. MailCraft recognises the provider from the address. For a company's own domain, it checks who handles the domain's mail.
3. Sign in:
   - **Outlook.com and Microsoft 365:** sign in on Microsoft's page.
   - **Gmail and Google Workspace:** choose **Sign in with Google**. Google's OAuth verification of MailCraft is still in progress, so you can use an [app password](/apps/mailcraft/google-app-password/) for now.
   - **Other providers:** enter your IMAP and SMTP details.
4. Mail starts downloading, Inbox first. Send/Receive then runs by itself.

Sign-ins are remembered by your system's credential store: Windows Credential Manager, the macOS keychain, or GNOME Keyring or KWallet on Linux and FreeBSD.

## Find your way around

- **Rail** (far left): switch between Mail, Calendar, People and Tasks.
- **Folder pane:** your accounts, folders and favourites. Drag a message onto a folder to move it.
- **Message list:** grouped by date. Click a row's left edge to switch it between read and unread.
- **Reading pane:** on the right, at the bottom, or off. Double-click a message to open it in its own window.
- **Ribbon:** one row by default. The classic three-row ribbon is available.

## Make MailCraft your mail program

On Windows and Linux, choose MailCraft as your mail program in the system's settings (on Windows, **Settings › Default apps**). `mailto:` links clicked anywhere then open a new message in MailCraft. The installers never make MailCraft the default for you. On macOS, `mailto:` links aren't supported yet.

## Next steps

- Read [Workflows](/apps/mailcraft/workflows/) for search, rules, the calendar and importing mail.
- Want to test it on your own mail? [Sign up as a tester](https://github.com/UCS-Care-Group/mailcraft/issues/new?template=tester-signup.yml).
