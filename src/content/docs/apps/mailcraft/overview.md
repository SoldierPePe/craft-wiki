---
title: MailCraft
description: Independent open-source mail, calendar, contacts and tasks program for the Craft ecosystem.
sidebar:
  order: 0
---

:::note[Third-Party Application]
MailCraft is an independent, community-developed application created and maintained by **UCS Care Group** and the MailCraft contributors. It is not developed or officially maintained by ArtCraft, but follows the architecture and conventions of the Craft apps.
:::

MailCraft is an open-source mail, calendar, contacts and tasks program written from scratch in Rust. It has the layout people already know from desktop mail programs: a ribbon, a folder pane, a message list with a reading pane, conversations, flags, categories, rules, a calendar with recurring meetings, people and to-dos. It is a native, GPU-rendered app with no Electron or web view. It also runs in a browser tab through WebAssembly.

![MailCraft desktop mail application showing ribbon, folder navigation, message list, and reading pane](/assets/uploads/mailcraft/hero.webp)

## Features

- **Mail:** nested folders and favourites, conversations, pinning, flags with due dates, colour categories, junk and archive, and undo and redo for all of it.
- **Search:** a query language in the search box, such as `budget from:ada has:attachment after:2026-10-01 is:unread`.
- **Writing:** rich text sent as HTML with a plain-text part, attachments, drafts, signatures with a logo, and several messages open at once.
- **Calendar:** day, work-week, week and month views, meetings with attendees, recurrence, reminders and Find a Time.
- **Accounts:** IMAP and SMTP, Microsoft 365 and Outlook.com sign-in, Gmail and Google Workspace sign-in, and Exchange Server accounts as a preview.
- **Files:** `.eml`, `.mbox`, `.ics` and `.vcf` in and out, and Outlook `.pst` mail and contacts import as a preview.
- **Signed and encrypted mail:** S/MIME and OpenPGP.
- **Safe reading:** nothing in a message runs, and web pictures load only when you ask.
- **Automation and AI agents:** every action is a command you can run from the CLI, a JSON control channel or an MCP server.

## Status

MailCraft is in beta. Windows release signing with Microsoft is in progress, and macOS signing will follow later. Until then, Windows shows a SmartScreen warning when you install it (see [Install and update](/apps/mailcraft/install-update/)). Google's OAuth verification of MailCraft is also in progress, which affects signing in with Google (see [Troubleshooting](/apps/mailcraft/troubleshooting/#google-sign-in-shows-a-warning-or-is-refused)). What MailCraft can't do yet is listed in [Where MailCraft falls short](https://github.com/UCS-Care-Group/mailcraft/blob/main/docs/gaps.md).

## Documentation guides

- [Getting started](/apps/mailcraft/getting-started/): try the sample mailbox and add your first account.
- [Install and update](/apps/mailcraft/install-update/): installers for Windows, macOS, Linux, FreeBSD and the browser.
- [Workflows](/apps/mailcraft/workflows/): search, rules, calendar, importing mail and automation.
- [Security](/apps/mailcraft/security/): how MailCraft is built and checked to ship safe code.
- [Troubleshooting](/apps/mailcraft/troubleshooting/): installer warnings, sign-in approval and known limits.

## Project links

- [MailCraft website](https://mailcraft.work/)
- [MailCraft on GitHub](https://github.com/UCS-Care-Group/mailcraft)
- [Issue tracker](https://github.com/UCS-Care-Group/mailcraft/issues)

MailCraft is not affiliated with Microsoft. Outlook is a trademark of Microsoft Corporation.
