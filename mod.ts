#!/usr/bin/env -S deno run --allow-read --allow-write

import { add, list, done, deleteTask } from "./src/commands/mod.ts";

const args = Deno.args;

if (args.length === 0) {
  console.log("❌ لا توجد أوامر. استخدم: deno run  help - mod.ts:8");
  Deno.exit(1);
}

const command = args[0];

switch (command) {
  case "add":
    if (!args[1]) {
      console.log("❌ يرجى إدخال نص المهمة: deno run  add 'المهمة' - mod.ts:17");
      Deno.exit(1);
    }
    add(args.slice(1).join(" "));
    break;
  case "list":
    list();
    break;
  case "done":
    if (!args[1]) {
      console.log("❌ يرجى تحديد رقم المهمة: deno run  done 1 - mod.ts:27");
      Deno.exit(1);
    }
    done(parseInt(args[1]));
    break;
  case "delete":
    if (!args[1]) {
      console.log("❌ يرجى تحديد رقم المهمة: deno run  delete 1 - mod.ts:34");
      Deno.exit(1);
    }
    deleteTask(parseInt(args[1]));
    break;
  case "--version":
    console.log("denotodo v1.0.0 - mod.ts:40");
    break;
  case "--help":
    console.log(`
📝 deno-todo — أداة إدارة المهام بسطر الأوامر

الاستخدام:
  deno run mod.ts add "نص المهمة"     → إضافة مهمة
  deno run mod.ts list                → عرض جميع المهام
  deno run mod.ts done <رقم>          → إكمال مهمة
  deno run mod.ts delete <رقم>        → حذف مهمة
  deno run mod.ts --version           → عرض الإصدار
  deno run mod.ts --help              → عرض هذا المساعد

💡 البيانات تُخزن في tasks.json في المجلد الحالي.

`);
    break;
  default:
    console.log(`❌ أمر غير معروف: ${command}. استخدم help - mod.ts:59`);
    Deno.exit(1);
}