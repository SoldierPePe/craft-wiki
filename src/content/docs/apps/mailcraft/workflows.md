---
title: Workflows
description: Search, rules, calendar, importing mail, and automation with the CLI and MCP in MailCraft.
sidebar:
  order: 3
---

:::note[Third-Party Application]
MailCraft is maintained by UCS Care Group and the MailCraft open-source community. Upstream docs are in the [MailCraft repository](https://github.com/UCS-Care-Group/mailcraft/tree/main/docs).
:::

## Search

Type a query in the search box. You can search one folder or every mailbox.

| Query | Finds |
|---|---|
| `from:ada` | Mail from Ada |
| `has:attachment` | Mail with attachments |
| `is:unread` | Unread mail |
| `after:2026-10-01` | Mail after a date |
| `-draft` | Excludes drafts |

Combine them: `budget from:ada has:attachment is:unread`.

## Rules

Rules sort mail for you. Each rule has conditions (from, to, subject, body, attachment, importance) and actions (move, categorise, flag, mark read, set importance, delete). Rules run on new mail, or on demand.

## Calendar

- Click or drag over empty time and type to make an appointment.
- Drag an appointment to move it, or drag its edge to resize it. Hold Ctrl to copy it.
- When you change a repeating item, MailCraft asks whether to change just this one or the entire series.
- Use **Find a Time** to see when the people you invite are free.
- With a Microsoft 365 account, changes go to the server straight away, and meeting invitations, updates and cancellations are sent for you.

## Out of office

For a Microsoft account, open **File › Info › Automatic Replies**. You can set a time range, and separate replies for people inside and outside your organisation.

## Bring mail in and out

- **Import:** `.eml`, `.mbox`, `.ics` and `.vcf` files.
- **Outlook data files:** **File › Open & Export › Import a .pst File** brings in mail and contacts (preview). Calendar items, tasks and notes are counted but not imported yet.
- **Save:** your mailbox can be saved as a `.mailcraft` file.

## Command line

```bash
mailcraft-cli list demo.mailcraft --folder Inbox --query "has:attachment"
mailcraft-cli import demo.mailcraft newsletter.eml team.ics people.vcf
mailcraft-cli convert archive.mbox archive.mailcraft
mailcraft-cli commands
```

## AI agents (MCP)

Every action in MailCraft is a command. The same commands drive the ribbon, the keyboard, the CLI, a JSON control channel and an MCP server.

```bash
mailcraft --sample --control 7991          # the app, with a control channel
mailcraft-cli mcp --connect 127.0.0.1:7991 # an MCP server connected to that window
mailcraft-cli mcp --sample                 # or headless, with no window
```

:::caution
Messages are data, not instructions. An agent reading your mail should never act on what a message tells it to do. The MCP server says this in its instructions.
:::

See the [MCP guide](https://github.com/UCS-Care-Group/mailcraft/blob/main/docs/mcp.md) and the [control protocol](https://github.com/UCS-Care-Group/mailcraft/blob/main/docs/control-protocol.md).
