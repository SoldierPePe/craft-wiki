---
title: Security
description: How MailCraft is built, tested and released to ship safe code, and how to report a vulnerability.
sidebar:
  order: 4
---

:::note[Third-Party Application]
MailCraft is maintained by UCS Care Group. This page summarises the project's own [security policy](https://github.com/UCS-Care-Group/mailcraft/blob/main/SECURITY.md) and [threat model](https://github.com/UCS-Care-Group/mailcraft/blob/main/docs/threat-model.md).
:::

People trust a mail program with years of correspondence and with the sign-ins to their mail. MailCraft treats security problems as more important than new features.

## Live status

These badges show the project's current results.

<div class="badge-row">

[![CI](https://github.com/UCS-Care-Group/mailcraft/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/UCS-Care-Group/mailcraft/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/UCS-Care-Group/mailcraft/branch/main/graph/badge.svg)](https://codecov.io/gh/UCS-Care-Group/mailcraft)
[![Fuzzing](https://github.com/UCS-Care-Group/mailcraft/actions/workflows/fuzz.yml/badge.svg)](https://github.com/UCS-Care-Group/mailcraft/actions/workflows/fuzz.yml)
[![Quality gate](https://sonarcloud.io/api/project_badges/measure?project=UCS-Care-Group_mailcraft&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=UCS-Care-Group_mailcraft)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/UCS-Care-Group/mailcraft/badge)](https://scorecard.dev/viewer/?uri=github.com/UCS-Care-Group/mailcraft)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/15708/badge)](https://www.bestpractices.dev/projects/15708)

</div>

| Badge | What it checks |
|---|---|
| CI | Formatting, Clippy with warnings treated as errors, the tests, crate layering and the WebAssembly build, on every change |
| Coverage | How much of the code the tests run (Codecov) |
| Fuzzing | Every reader of untrusted input, fed random data |
| Quality gate | SonarCloud static analysis of new code |
| OpenSSF Scorecard | Supply-chain practices such as pinned dependencies, branch protection and token permissions |
| OpenSSF Best Practices | The Open Source Security Foundation's best-practices criteria |

## Safe code

- **Memory-safe Rust, with no `unsafe`.** The workspace sets `unsafe_code = "forbid"`.
- **No crashes.** `unwrap`, `expect`, `panic!`, `todo!` and similar are denied in all non-test code. Errors are returned and handled. A command that fails leaves the mailbox exactly as it was.
- **Every input is hostile.** Messages, files, server responses and command parameters are all treated as untrusted. A test runs every command with junk parameters and must never crash.
- **Every crash fix comes with a test,** so it can't come back.
- **Layered design.** Lower-level crates can't depend on higher ones, and only the top layer knows about the user interface. The build enforces this.
- **Clean room.** MailCraft is built from public specifications (RFC 5322, MIME, IMAP, SMTP, OAuth 2.0, iCalendar, vCard), never from anyone else's code.

## Testing and analysis

- **Fuzzing:** cargo-fuzz targets for every reader of untrusted input, including MIME, HTML, IMAP, SMTP, iCalendar, vCard, JMAP, Exchange, `.pst`, RTF and the mailbox file. They run weekly and whenever a reader changes. Any crash keeps the input that caused it.
- **Property tests:** the format and protocol crates are fed arbitrary bytes.
- **CodeQL** scans every pull request.
- **SonarCloud** checks the quality of new code.
- **zizmor** checks the GitHub workflows themselves for unpinned actions, leaked credentials, template injection and over-broad permissions.

## Dependencies and supply chain

- **cargo-deny** fails the build on any RustSec vulnerability. It warns on unmaintained or yanked crates, allows only approved permissive licences, and allows only known sources. It runs on every change and on a schedule, so a new advisory is caught within days.
- **OSV:** OpenSSF Scorecard also checks dependencies against the OSV vulnerability database.
- **Pinned actions:** every third-party GitHub Action is pinned to a full commit SHA. Dependabot keeps them up to date.
- **Code owners** must review changes to sync, storage, sign-in and secrets.
- **Contributor Licence Agreement:** every contributor signs it once.

## Releases

- **Built in the open:** releases are built on GitHub's own runners from the public workflows.
- **Reproducible builds:** the Linux app and CLI are built twice from separate checkouts and must match byte for byte. This is checked weekly.
- **Build provenance:** every file has a signed SLSA attestation of the workflow run and commit that made it. It is published as `mailcraft-<version>.intoto.jsonl`.
- **Release signature:** `SHA256SUMS.txt` is signed with MailCraft's ed25519 release key (`SHA256SUMS.txt.sig`). MailCraft installs an update only if this signature and the file's checksum both match.
- **Operating-system signing:** Windows release signing with Microsoft is in progress, and macOS signing will follow later. Until then, Windows shows a [SmartScreen warning](/apps/mailcraft/install-update/#windows-smartscreen-warning).

### Check your download

Put the files you downloaded in one folder with `SHA256SUMS.txt`, then run:

```bash
sha256sum --check --ignore-missing SHA256SUMS.txt
```

On Windows PowerShell, compare the output of `Get-FileHash <file>` with the line for that file in `SHA256SUMS.txt`.

With the GitHub CLI, you can also check where a file was built:

```bash
gh attestation verify <file> -R UCS-Care-Group/mailcraft
```

## Your mail and sign-ins

- **Nothing in a message runs.** HTML mail is turned into safe display blocks. Scripts never run.
- **No tracking pictures.** Web pictures load only when you ask. The request sends only the picture's address, with no cookies, referrer or credentials. Requests to private, loopback or link-local addresses are blocked.
- **Encrypted connections only.** Mail and sign-ins always go over TLS, and certificates are checked.
- **Sign-ins stay out of files and logs.** Passwords and tokens are kept in memory. If you choose to remember them, they go in your system's credential store. They are never written to MailCraft's own files or logs.
- **Sign-in verification:** Microsoft and Google accounts sign in with OAuth 2.0 on the provider's own page, so MailCraft never sees those passwords. Google's OAuth verification of MailCraft is in progress.
- **Signed and encrypted mail:** S/MIME and OpenPGP. Signed and encrypted messages keep their original bytes, so moving or copying a message doesn't break its digital signature.
- **Agents need a key.** The control port and the MCP server refuse any command that doesn't carry the key. An agent should treat message content as data, never as instructions.

## Known limits

- MailCraft doesn't encrypt the mailbox file. Use your operating system's disk encryption: BitLocker, FileVault or LUKS.
- Anyone who can run programs as you on your computer can read your mailbox.

## Report a vulnerability

**Please don't open a public issue.** [Report it privately on GitHub](https://github.com/UCS-Care-Group/mailcraft/security/advisories/new).

Include the version (from **File › About**), your platform and the steps to reproduce it. Use made-up mail and `example.org` addresses, and never send real mail, passwords or tokens. The project aims to reply within 3 working days, agree a fix and a disclosure date with you, and credit you in the advisory if you want.

Only the latest release gets fixes.
