---
title: وكلاء الذكاء الاصطناعي
description: دع Claude أو مساعد ذكاء اصطناعي آخر يبني الجلسات ويحرّرها ويمزجها ويدمجها في ملفات باستخدام SoundCraft.
sidebar:
  order: 4
---

صُمم SoundCraft ليستخدمه مساعدو الذكاء الاصطناعي كما يستخدمه الناس. فكل ما تستطيع النقر عليه هو أمر أيضاً، وأي مساعد يدعم [بروتوكول MCP](https://modelcontextprotocol.io) (اختصار Model Context Protocol) يستطيع تشغيل تلك الأوامر: إضافة المسارات، واستيراد الصوت، وتحرير المقاطع، وضبط المستويات، وإضافة المكوّنات الإضافية، وكتابة الأتمتة، والدمج في ملف، والحفظ. ويستطيع المساعد التحقق من عمله بقراءة ما في الجلسة بالضبط.

## الحصول على أداة سطر الأوامر

يتواصل المساعدون مع SoundCraft عبر أداة سطر الأوامر الخاصة به، `soundcraft-cli`:

- **Windows**: الملف `soundcraft-cli.exe` بجانب `soundcraft.exe` في مجلد التثبيت أو في النسخة المحمولة.
- **macOS**: نزّل `soundcraft-cli-<ver>-macos-universal.zip` من [صفحة الإصدار](https://github.com/storytold/soundcraft/releases/latest). فالتطبيق نفسه لا يتضمنها.
- **حزم `.deb` و`.rpm` وحزمة Arch وأرشيف tar على Linux، وFreeBSD**: تُثبَّت مع التطبيق.
- **Flatpak**: شغّلها بالأمر `flatpak run --command=soundcraft-cli ai.storyteller.soundcraft`.
- **AppImage**: استخدم أرشيف tar بدلاً منه، فهو يتضمنها.

إذا لم يجد المساعد `soundcraft-cli`، فاستخدم مسارها الكامل، مثل `C:\Users\you\AppData\Local\Programs\ArtCraft\SoundCraft\soundcraft-cli.exe`.

## توصيل مساعدك

### Claude Code

```bash
claude mcp add soundcraft -- soundcraft-cli mcp
```

أضف `--demo` بعد `mcp` ليبدأ المساعد على الأغنية التجريبية بدلاً من جلسة فارغة.

### مساعدون آخرون

ابحث عن «MCP servers» في إعدادات مساعدك، وأضف خادماً محلياً (stdio) بالأمر `soundcraft-cli` والمعامل `mcp`. وفي ملف إعدادات JSON الذي تستخدمه مساعدات كثيرة، يكون ذلك:

```json
{
  "mcpServers": {
    "soundcraft": {
      "command": "soundcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

## اطلب جلسة

بعد التوصيل، اطلب بكلمات بسيطة، مثلاً: *«افتح الأغنية التجريبية، واخفض مسار kick بمقدار 3 dB، وضع صدى plate على مسار snare، وادمج المزيج في الملف mix.wav»*. افتراضياً يعمل SoundCraft في الخلفية، دون نافذة ودون جهاز صوت. ولا يفتح أبداً مربع حوار للمساعد، ويمكن التراجع عن كل تغيير يجريه.

## حصر المساعد في مجلدات معينة

افتراضياً يستطيع المساعد فتح الملفات وحفظها في أي مكان تستطيع أنت الوصول إليه. ولحصره في مجلدات معينة، أعطه مجلداً يقرأ منه ومجلداً يكتب فيه:

```bash
soundcraft-cli mcp --automation-read-root ~/Music/project --automation-write-root ~/Music/project/out
```

يمكن إعطاء كل خيار أكثر من مرة. والقراءة والكتابة منفصلتان: فإذا أعطيته مجلد قراءة فقط، لا يستطيع المساعد حفظ أي شيء. ويُرفض أي ملف خارج المجلدات، ويُخبَر المساعد بالسبب.

## التحكم في التطبيق الذي تراه

ليعمل المساعد في نافذة SoundCraft المفتوحة أمامك، شغّل SoundCraft بمنفذ تحكم، ثم اتصل به:

```bash
soundcraft --control 7801
soundcraft-cli mcp --connect 7801
```

ويستطيع المساعد حينها أيضاً أن يلتقط لقطات شاشة للنافذة، وأن ينقر ويكتب فيها.

:::caution
لا تنطبق قيود المجلدات المذكورة أعلاه في هذا الوضع: فالتطبيق الذي شغّلته ليست فيه قيود كهذه بعد. لا توصل بتطبيق قيد التشغيل إلا المساعدين الذين تثق بهم.
:::

## السكربتات دون مساعد

تشغّل `soundcraft-cli` الأوامر وحدها أيضاً، مثلاً لمعالجة الجلسات دفعة واحدة:

```bash
soundcraft-cli run --demo \
  --cmd 'mix.volume={"track":"Kick","db":-6}' \
  --bounce mix.wav
```

يسرد `soundcraft-cli commands` كل الأوامر، ويسرد `soundcraft-cli --help` الأوامر الفرعية وخياراتها.
