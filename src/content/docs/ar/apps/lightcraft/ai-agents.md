---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو أي مساعد ذكاء اصطناعي آخر يفرز الصور ويحرّرها ويصدّرها في LightCraft عبر MCP.
sidebar:
  order: 5
---

كل ما يمكنك فعله في قوائم LightCraft وأشرطة التمرير والأدوات فيه هو في الأصل أمر. ويستطيع مساعد الذكاء الاصطناعي تشغيل الأوامر نفسها عبر خادم MCP في LightCraft، فيقيّم صور جلسة تصوير، ويطوّر الصور، ويضيف الأقنعة، ويصدّرها، ويرى النتيجة. يعمل معه أي مساعد يدعم MCP (بروتوكول سياق النموذج)، مثل Claude Code.

خادم MCP جزء من `lightcraft-cli`، أداة سطر الأوامر في LightCraft. يتضمنها مثبّت Windows وحزم `.deb` و`.rpm` على Linux (وهي على Linux في `/usr/bin/lightcraft-cli`). أما على Mac فتُنزَّل منفصلة، باسم `lightcraft-cli-<ver>-macos-universal.zip`، من [صفحة الإصدار](https://github.com/storytold/lightcraft/releases/latest). استخدم أداة سطر الأوامر من الإصدار نفسه الذي جاء منه التطبيق.

## دون نافذة

في هذا الوضع يعمل المساعد دون أن يكون LightCraft مفتوحاً. للعمل على مكتبة، كي تُحفظ تقييماتها وتعديلاتها:

```bash
claude mcp add lightcraft -- lightcraft-cli mcp --library "/path/to/LightCraft Library"
```

أو أعطه مجلد صور ليستوردها، مثل `lightcraft-cli mcp ~/Pictures/shoot`. واستخدم `--demo` لتجربته على الصور التجريبية.

لا يمكن فتح المكتبة إلا في برنامج واحد في الوقت نفسه. فإذا كانت المكتبة مفتوحة في LightCraft، فاستخدم الوضع التالي بدلاً من ذلك.

## والتطبيق مفتوح

يستطيع المساعد أيضاً أن يتحكم في نافذة LightCraft التي أمامك، وأن يلتقط صوراً للشاشة وينقر فيها.

1. شغّل LightCraft بالأمر `lightcraft --control 7980`.
2. اربط المساعد:

   ```bash
   claude mcp add lightcraft-app -- lightcraft-cli mcp --connect 127.0.0.1:7980
   ```

إذا لم يكن التطبيق يعمل بعد، يتصل الخادم في أول مرة يستخدمه فيها المساعد.

لا يستمع LightCraft إلا للاتصالات من حاسوبك أنت، لكنه لا يطلب كلمة مرور: ما دام يعمل مع `--control`، يستطيع أي برنامج على حاسوبك التحكم فيه. فلا تشغّله بهذه الطريقة إلا حين تحتاج إليها.

:::caution
يستطيع المساعد تغيير التقييمات والتعديلات والملفات في مكتبتك، وتصدير الملفات إلى أي مكان يستطيع حسابك الكتابة فيه. فلا تربط إلا المساعدين الذين تثق بهم. ويمكن التراجع عن تعديلاته بالأمر **Edit › Undo** كما تتراجع عن تعديلاتك.
:::

## المزيد

المرجع التقني موجود في [دليل MCP](https://github.com/storytold/lightcraft/blob/main/docs/mcp.md) و[بروتوكول التحكم](https://github.com/storytold/lightcraft/blob/main/docs/control-protocol.md) الخاصين بـ LightCraft.
