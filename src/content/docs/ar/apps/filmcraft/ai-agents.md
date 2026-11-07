---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو مساعد ذكاء اصطناعي آخر يحرّر ويدرّج الألوان ويمزج ويصدّر في FilmCraft عبر MCP.
sidebar:
  order: 4
---

كل ما تستطيع فعله بقوائم FilmCraft وأزراره ومنزلقاته هو أمر. ويستطيع مساعد الذكاء الاصطناعي تشغيل الأوامر نفسها عبر خادم MCP في FilmCraft، فيقطع التسلسل ويشذّبه ويدرّج ألوانه ويمزج صوته ويصدّره كما تفعل أنت. يعمل أي مساعد يدعم MCP (بروتوكول Model Context Protocol)، مثل Claude Code.

خادم MCP جزء من `filmcraft-cli`، أداة سطر الأوامر الخاصة بـ FilmCraft.

## العثور على filmcraft-cli

| طريقة التثبيت | مكانها |
| --- | --- |
| مثبّت Windows | `%LOCALAPPDATA%\Programs\ArtCraft\FilmCraft\filmcraft-cli.exe` (أو `C:\Program Files\ArtCraft\FilmCraft\` إذا ثبّته لكل المستخدمين). وهي ليست في `PATH` لديك. |
| حزمة `.deb` أو `.rpm` على Linux | `/usr/bin/filmcraft-cli` |
| macOS | تُنزَّل منفصلة: `filmcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/filmcraft/releases/latest) |

استخدم أداة سطر الأوامر من الإصدار نفسه الذي جاء منه التطبيق.

## دون نافذة

في هذا الوضع يعمل المساعد على مشروع دون أن يكون FilmCraft مفتوحاً. أضف الخادم إلى Claude Code هكذا:

```bash
claude mcp add filmcraft -- filmcraft-cli mcp --project /path/to/film.fcproj
```

على Windows، اكتب المسار الكامل إلى `filmcraft-cli.exe`. واحذف `--project` لتبدأ بمشروع فارغ، أو استخدم `--demo` لتجربته على المشروع التجريبي.

لا يحفظ الخادم من تلقاء نفسه: اطلب من المساعد حفظ المشروع حين ينتهي. ولا تفتح المشروع نفسه في FilmCraft في الوقت نفسه، فأيهما يحفظ أخيراً يستبدل عمل الآخر.

:::caution
يستطيع خادم MCP أن يقرأ ويكتب أي ملف يستطيع حسابك قراءته وكتابته. لا توصل إلا المساعدين الذين تثق بهم، واحتفظ بنسخة من مشاريعك المهمة.
:::

## مع فتح التطبيق

يستطيع المساعد أيضاً أن يتحكم في نافذة FilmCraft التي تنظر إليها، وأن يلتقط لقطات شاشة لها. ويحتاج ذلك إلى رمز مميز (token) خاص يتشاركه FilmCraft والمساعد:

1. أنشئ رمزاً من 64 حرفاً ست عشرياً عشوائياً، وضعه في متغير البيئة `FILMCRAFT_CONTROL_TOKEN`.
2. من الطرفية نفسها، شغّل FilmCraft بالأمر `filmcraft --control 9876`.
3. أوصل المساعد بالأمر `filmcraft-cli mcp --bridge 127.0.0.1:9876`، مشغَّلاً من بيئة فيها الرمز نفسه.

لا يستمع FilmCraft إلا على حاسوبك أنت، ولا يقبل إلا رمزاً صالحاً. أنشئ رمزاً جديداً لكل جلسة، ولا تحفظه في ملفات مشتركة.

## معلومات مفيدة

- يمكن التراجع عن التعديلات التي يجريها المساعد كما تتراجع عن تعديلاتك.
- القائمة الكاملة للأوامر في `filmcraft-cli commands`.
- المرجع التقني في [دليل الوكلاء](https://github.com/storytold/filmcraft/blob/main/docs/agents.md) و[بروتوكول التحكم](https://github.com/storytold/filmcraft/blob/main/docs/control-protocol.md) الخاصين بـ FilmCraft.
