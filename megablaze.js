const Discord = require('discord.js');
const client = new Discord.Client();
var ytdl = require('ytdl-core');
var opus = require('opusscript');
var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("$" + str);
}

function RucommandIs(str, msg){
    return msg.content.toLowerCase().startsWith("r$" + str);
}

function EncommandIs(str, msg){
    return msg.content.toLowerCase().startsWith("e$" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
client.on('ready', () => {
    console.log("==== MEGABLAZE ====");
});

client.on('message', message =>
{
    var fs = require("fs");
    if (message.content.toLowerCase().includes(":kappa"))
    {
        var kappa = parseInt(fs.readFileSync("kappa_megablaze.kappa", "utf8"));
        kappa += 1;
        fs.writeFileSync("kappa_megablaze.kappa", kappa.toString());
        message.channel.sendMessage("Карра bank: " + kappa.toString());
    }

    var date = new Date();
var currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  
  var args = message.content.split(/[ ]+/);
  var args2 = message.content.split(" | ");



if (message.guild.id === "347485269957672971")
{

    if (commandIs("help", message))
    {
        var help = "  **Справка по боту Нереальный Мегаблейз.**\n\nНа данном сервере список команд бота сильно ограничен, так как для ролевых игр они попросту не нужны.\n\n";
        help += " **$nsfw** - запрос на получение доступа в канал для PWP РП. Запрос должен быть подтверждён администрацией.\n";
        help += " **$delete [кол-во сообщений]** - чистка сообщений. Доступно только для администрации сервера. Все очистки будут записаны в #logs.";

        message.channel.sendMessage(help);
    }

if(commandIs("delete", message))
       {
          if(message.member.hasPermission("MANAGE_MESSAGES"))
          {
            if(args.length !== 2)
             {
                message.channel.sendMessage('Использование команды: `$delete [кол-во сообщений]`. Максимальное кол-во сообщений: 100. Старые сообщения удалить невозможно (максимальный срок - 14 дней)');
             }
             else
             {
                var msg;
                if(args.length === 1)
                {
                    msg=2;
                }
                else
                {
                    msg=parseInt(args[1]) + 2;
                }
                if (msg > 100)
                {
                    message.channel.sendMessage('Слишком много!');
                }
                else if (msg < 3)
                {
                    message.channel.sendMessage('Слишком мало, так результата не будет');
                }
                else
             {
                message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
                msg -= 2;
                message.channel.sendMessage("Успешно удалено **" + msg + "** сообщений! :ballot_box_with_check: ").then((msg) => {
                    setTimeout(function() { msg.delete() }, 3000);
                }
                )
                message.delete();
                message.guild.channels.filter(c => c.name.includes("log")).first().sendMessage(" ", {
  embed: {
    color: 16766976,
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    title: 'Удалено сообщений: ' + msg,
    description: 'В канале <#' + message.channel.id + '>',
    timestamp: new Date()
  }
});
             }
             }
          }
        else
         {
             message.reply("Не хватает прав на выполнение данной операции.")
         }
       }

       if (commandIs("nsfw", message))
       {
            if(message.guild.roles.filter(r=>r.name.toLowerCase().includes("замочную скважину")).first() !== undefined) {
  var foundRole = message.guild.roles.filter(r=>r.name.toLowerCase().includes("замочную скважину")).first();
  message.member.addRole(foundRole.id);  } else {}

  message.reply(":ballot_box_with_check: Теперь вы можете читать канал <#347683768330616834>! В ближайшее время вы также получите доступ там общаться, если администрация посчитает это нужным.");
  message.guild.channels.filter(c => c.name.includes("nsfw-req")).first().sendMessage(message.author.username + ' запросил доступ для общения в <#347683768330616834>');
       }



return;
}

    if (RucommandIs("help", message))
    {
        var help = "Помощь по боту **Нереальный Мегаблейз**\n";
        help += "Бот создан: **@Mineblaze#6804**\n\n";

        help += " **Разделы помощи:**\n";
        help += "  1. Базовые команды: **r$basichelp**\n";
        help += "  2. 'Wh'-команды: **r$whelp**\n";
        help += "  3. Математика: **r$mathhelp**\n";
        help += "  4. Файлы: **r$fhelp**\n";
        help += "  5. Кастомные миры: **r$bhelp**\n";
        help += "  6. Развлечения: **r$funhelp**";

        message.channel.sendMessage(help);
    }

    if (RucommandIs("basichelp", message))
    {
        var b = "**Помощь по базовым командам**\n\n";

        b += " **r$help** - помощь по боту\n";
        b += " **r$say [текст]** - сказать что-либо от лица бота. Ваше сообщение автоматически удаляется ботом **(не забудьте дать боту право 'Управление сообщениями')**.\n";
        b += " **r$reverse [текст]** - перевернуть текст.\n";
        b += " **r$uptime** - сколько времени бот находится в сети после прошлого перезапуска.\n";
        b += " **r$servers** - на скольки серверах сейчас присутствует бот.\n";
        b += " **r$poll yes_no [текст]** - создать опрос с вариантами ответа: 'да', 'нет', 'не знаю (отношусь нейтрально)'.\n";
        b += " **r$poll options [текст] | [вариант 1] | [варианты от 2 до 5 через |]** - создать опрос с выбором из 2-5 вариантов. Все варианты отделяйте **|**\n";
        b += " **r$write [текст]** - бот печатает сообщение (аналог **r$say**, но в чате пишется 'Нереальный Мегаблейз печатает...').";

        message.channel.sendMessage(b);
    }

    if (RucommandIs("whelp", message))
    {
        var w = "**Помощь по 'wh'-командам**\n\n";

        w += " **r$who [текст]** - кто.\n";
        w += " **r$where [текст]** - где.\n";
        w += " **r$when [текст]** - когда.\n";
        w += " **r$why [текст]** - почему.\n";

        message.channel.sendMessage(w);
    }

    if (RucommandIs("mathhelp", message))
    {
        var m = "**Помощь по математическим командам**\n\n";

        m += " **r$plus [число] [число]** - сложить числа.\n";
        m += " **r$minus [число] [число]** - вычесть числа.\n";
        m += " **r$multiply [число] [число]** - умножить числа.\n";
        m += " **r$divide [число] [число]** - разделить числа.\n";
        m += " **r$ost [число] [число]** - найти остаток от деления.\n";
        m += " **r$calc [число] [знак действия] [число]** - выполнить математическую операцию (альтернатива пяти предыдущим командам).\n";
        m += " **r$if [число] [знак действия] [число] [больше/меньше/равно] [число] sendMessage [текст (без пробелов)] <else> sendMessage <текст (без пробелов)>** - логическая операция 'если-иначе'. В угловых скобках <> - не обязательно.\n";
        m += "\n**Знаки действий:**\n";
        m += "Плюс +\nМинус -\nУмножить *\nРазделить /\nНайти остаток %";

        message.channel.sendMessage(m);
    }

    if (RucommandIs("fhelp", message))
    {
        var f = "**Помощь по файловым командам**\nВсе [текст] и [название] **одним словом!** (можно использовать **-** или **_**)\n\n";

        f += " **r$file new [название] [текст]** - создать файл. Если такой файл уже есть, он будет перезаписан (создан заново).\n";
        f += " **r$file read [название]** - прочитать файл.\n";
        f += " **r$file add [название] [текст]** - добавить одно слово в файл.\n";
        f += " **r$file exists [название]** - проверка на существование файла.\n";
        f += " **r$file import [название] [название 2]** - импортировать содержимое файла в другой файл.\n";
        f += " **r$file delete [название]** - удалить файл.\n";

        message.channel.sendMessage(f);
    }

    if (RucommandIs("funhelp", message))
    {
        var f = "**Помощь по развлекательным и игровым командам**\n\n";

        f += " **r$kill** - убить.\n";
        f += " **r$choose [варианты через |]** - выбрать один из вариантов. Максимум 10 вариантов.\n";
        f += " **r$random [максимальное число]** - выбрать случайное число от 0 до заданного.\n";
        f += " **r$cod3breaker** - одноимённый квест из Geometry Dash.\n";
        f += " **r$weather [текст]** - погода (случайные параметры).\n";
        f += " **r$weather ![число]** - установить температуру.\n";
        f += " **r$generate [размер мира 1-8] [тип мира]** - сгенерировать мир игры Polytopia.\n";
        f += " **r$texttoimage [текст]** - преобразовать текст в картинку.\n";
        f += " **r$showmeameme** - показать случайный мем.\n";
        f += " **r$gg** - поздравление от бота.\n";
        f += " **r$repeat [количество до 50] [текст]** - бот повторит указанный текст **(возбраняется на серверах, где нельзя флудить)**.\n";
        f += " **r$yandex [текст]** - поиск в Яндексе.\n";
        f += " **r$youtube [текст]** - поиск в YouTube.\n";
        f += " **r$createlvl** - 'создать' уровень в Geometry Dash.\n";
        f += " **r$createdslvl** - 'создать' уровень в Dashy Square.\n";
        f += " **r$channelwrite [название канала] [текст]** - написать текст в другом канале.\n";
        f += " **r$lvlparts [кол-во частей]** - генерация частей уровня Geometry Dash.\n";
        f += " **r$genlvl [название] [размер]** - случайная генерация обрывка уровня в Geometry Dash.\n"
        f += " **r$customgen [название] [размер] [тайлы (emoji или текст, каждый тайл разделяется пробелом)]** - кастомная генерация. Можно добавлять до 11 тайлов.";

        message.channel.sendMessage(f);
    }

        if (RucommandIs("prob", message))
    {
        var prob = Math.floor((Math.random() * 107) % 107) - 2;
        message.channel.sendMessage(prob.toString() + "%");
    }


    function acc_Register()
    {
       if (args.length !== 4)
       {
           message.channel.sendMessage("Использование команды: `$account register [имя (без пробелов)] [пароль]`");
           return;
       }
       else
       {
           var name = args[2];
           var pass = args[3];
           
           var currentid = parseInt(fs.readFileSync("current.id", "utf8"));
           var id = currentid + 1;
           fs.writeFileSync("current.id", id.toString());

           fs.writeFileSync(id + ".account", name + " " + pass + " 0 0 novice true 00/00/0000");
           fs.writeFileSync(id + ".stats", "100 5 0 2 50");
           // hp dmg def crit_multi money

           fs.appendFileSync("debug.js", "\n // ===== Зарегистрирован аккаунт ===== \n  //" + id + "\n  //" + name + "\n\n");

           message.channel.sendMessage("Регистрация...")
           setTimeout(function()
           {
               message.channel.sendMessage("Успешно зарегистрирован аккаунт!");
           }, 5000);
           setTimeout(function()
           {
               message.channel.sendMessage("Информация:\nИмя: **" + name + "**\nID: **" + id + "**");
           }, 2000)
           setTimeout(function()
           {
               message.channel.sendMessage("**$account info [id]** - информация об аккаунте, XP, уровень, ранг.\n**$account delete [id] [пароль]** - удалить аккаунт.");
           }, 5000)
       }
    }

    function acc_Info()
    {
        if (args.length !== 3)
        {
            message.channel.sendMessage("Использование команды: `$account info [id]`");
            return;
        }
        else
        {
            var id = args[2];

            fs.open(id + ".account", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
            {
    var filecontent = fs.readFileSync(id + ".account", "utf8");
    var info = filecontent.split(" ");

    var name = info[0];
    var exp = parseInt(info[2]);
    var lvl = parseInt(info[3]);
    var rank = info[4];
    var daily = info[5];

    var rank_text = "Новичок";          if (exp >= 5) lvl = 1;         if (exp >= 10) lvl = 2;         if (exp >= 15) lvl = 3;         if (exp >= 20) lvl = 4;         if (exp >= 25) lvl = 5;          if (exp >= 30) lvl = 6;         if (exp >= 40) lvl = 7;         if (exp >= 50) lvl = 8;         if (exp >= 60) lvl = 9;         if (exp >= 70) lvl = 10;          if (exp >= 80) lvl = 11;         if (exp >= 100) lvl = 12;         if (exp >= 120) lvl = 13;         if (exp >= 140) lvl = 14;         if (exp >= 160) lvl = 15;          if (exp >= 180) lvl = 16;         if (exp >= 210) lvl = 17;         if (exp >= 240) lvl = 18;         if (exp >= 270) lvl = 19;         if (exp >= 300) lvl = 20;          if (exp >= 340) lvl = 21;         if (exp >= 380) lvl = 22;         if (exp >= 420) lvl = 23;         if (exp >= 460) lvl = 24;         if (exp >= 500) lvl = 25;          if (exp >= 550) lvl = 26;         if (exp >= 600) lvl = 27;         if (exp >= 650) lvl = 28;         if (exp >= 700) lvl = 29;         if (exp >= 750) lvl = 30;          if (exp >= 800) lvl = 31;         if (exp >= 875) lvl = 32;         if (exp >= 950) lvl = 33;         if (exp >= 1025) lvl = 34;         if (exp >= 1100) lvl = 35;          if (exp >= 1200) lvl = 36;         if (exp >= 1300) lvl = 37;         if (exp >= 1400) lvl = 38;         if (exp >= 1500) lvl = 39;         if (exp >= 1600) lvl = 40;          if (exp >= 1750) lvl = 41;         if (exp >= 1900) lvl = 42;         if (exp >= 2050) lvl = 43;         if (exp >= 2100) lvl = 44;         if (exp >= 2350) lvl = 45;          if (exp >= 2500) lvl = 46;         if (exp >= 2750) lvl = 47;         if (exp >= 3000) lvl = 48;         if (exp >= 3250) lvl = 49;         if (exp >= 3500) lvl = 50;          if (exp >= 4000) lvl = 51;         if (exp >= 6000) lvl = 52;         if (exp >= 8000) lvl = 53;         if (exp >= 10000) lvl = 54;         if (exp >= 12000) lvl = 55;          if (lvl >= 6)         {             rank = "upgraded";             rank_text = "Улучшенный";         }         if (lvl >= 11)         {             rank = "master";             rank_text = "Мастер";         }         if (lvl >= 16)         {             rank = "grandmaster";             rank_text = "Грандмастер";         }         if (lvl >= 21)         {             rank = "champion";             rank_text = "Чемпион";         }         if (lvl >= 26)         {             rank = "bronze";             rank_text = "Бронзовая Лига";         }         if (lvl >= 31)         {             rank = "silver";             rank_text = "Серебряная Лига";         }         if (lvl >= 36)         {             rank = "gold";             rank_text = "Золотая Лига";         }         if (lvl >= 41)         {             rank = "platinum";             rank_text = "Платиновая Лига";         }         if (lvl >= 46)         {             rank = "diamond";             rank_text = "Бриллиант";         }         if (lvl >= 51)         {             rank = "king";             rank_text = "Король";         }         if (lvl >= 55)         {             rank = "god";             rank_text = "Бог";         };

    var daily_text;

    if (daily === "true") daily_text = "Можно собрать ежедневный бонус!"
    else daily_text = "Ежедневный бонус уже собран.";

    message.channel.sendMessage("Аккаунт найден! Загрузка информации...")
           setTimeout(function()
           {
               message.channel.sendMessage("Имя: **" + name + "**\nID: **" + id + "**\nXP: **" + exp + "**\nУровень: **" + lvl + "**\nРанг: **" + rank_text + "**\n" + daily_text);
           }, 5000)
            }
            else
            {
                message.channel.sendMessage("Аккаунт не найден!");
            }
        }
    });
        }
    }

    function acc_Stats()
    {
        if (args.length !== 3)
        {
            message.channel.sendMessage("Использование команды: `$account stats [id]`");
            return;
        }
        else
        {
            var id = args[2];

            fs.open(id + ".stats", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
            {
                 var filecontent = fs.readFileSync(id + ".account", "utf8");
    var info = filecontent.split(" ");

    var name = info[0];

        var statcontent = fs.readFileSync(id + ".stats", "utf8");
        var stats = statcontent.split(" ");

        var playerhp = parseInt(stats[0]);
        var playerdmg = parseInt(stats[1]);
        var playerdef = parseInt(stats[2]);
        var playercrit = parseInt(stats[3]);
        var playermoney = parseInt(stats[4]);

    message.channel.sendMessage("Аккаунт найден! Загрузка информации...")
           setTimeout(function()
           {
               message.channel.sendMessage("Статистика аккаунта " + name + " (" + id + ")\nЗдоровье: **" + playerhp + "**\nУрон: **" + playerdmg + "**\nЗащита: **" + playerdef + "**\nКритический урон: **x" + playercrit + "**\nЗвёзды: **" + playermoney + "** :star:");
           }, 5000)
            }
            else
            {
                message.channel.sendMessage("Аккаунт не найден!");
            }
        }
    });
        }
    }

    function acc_Delete()
    {
       if (args.length !== 4)
       {
           message.channel.sendMessage("Использование команды: `$account delete [id] [пароль]`");
           return;
       }
       else
       {
           var id = args[2];

           fs.open(id + ".account", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
           var pass_entered = args[3];
           
           var filecontent = fs.readFileSync(id + ".account", "utf8");
           var info = filecontent.split(" ");

           var pass_real = info[1];
           var name = info[0];

           if (pass_entered !== pass_real)            {                message.channel.sendMessage("Неверный пароль!");                return;            };

         fs.unlinkSync(id + ".account");
         fs.appendFileSync("debug.js", "\n // ===== Удалён аккаунт ===== \n  //" + id + "\n  //" + name + "\n\n");
               message.channel.sendMessage("Аккаунт **" + name + "** (" + id + ") успешно удалён.")
           setTimeout(function()
           {
               message.channel.sendMessage("Вы можете создать новый аккаунт с помощью команды: `$account register [имя] [пароль]`.");
           }, 5000)
    }
    else
    {
        message.channel.sendMessage("Аккаунт не найден!");
    }
               
           }
       });
    }
}


    if (RucommandIs("daily", message))
    {
    if (args.length !== 4)
    {
        message.channel.sendMessage("Использование команды: `$daily [ВАШ ID] [пароль] [ID того, кому хотите подарить XP]`");
        return;
    }

    var id1 = args[1];
    var pass_entered = args[2];
    var id2 = args[3];

    var filecontent1 = fs.readFileSync(id1 + ".account", "utf8");
    var info1 = filecontent1.split(" ");
    
    var filecontent2 = fs.readFileSync(id2 + ".account", "utf8");
    var info2 = filecontent2.split(" ");

    var name1 = info1[0];
    var pass_real1 = info1[1];
    var pass_real2 = info2[1];

    var lvl1 = parseInt(info1[3]);
    var rank1 = info1[4];

    var daily1 = info1[5];
    var daily2 = info2[5];

    var dailydate2 = info2[6];

    var exp1 = parseInt(info1[2]);
    var exp2 = parseInt(info2[2]);

    var lvl2 = parseInt(info2[3]);
    var rank2 = info2[4];

    var name2 = info2[0];

    var daily1 = info1[5];
    var daily_date1 = info1[6];

           if (daily_date1 !== currentDate)
           {
               fs.writeFileSync(id1 + ".account", name1 + " " + pass_real1 + " " + exp1 + " " + lvl1 + " " + rank1 + " true " + daily_date1);
           }

    if (pass_entered !== pass_real1)
           {
               message.channel.sendMessage("Неверный пароль!");
               return;
           }

    if (daily1 === "true")
       {
          var new_exp = Math.floor((Math.random() * 12) % 12);
          if (lvl >= 2) new_exp += Math.floor((Math.random() * 12) % 12);
          if (lvl >= 5) new_exp += Math.floor((Math.random() * 12) % 12);
          if (lvl >= 10) new_exp += 6;
          if (lvl >= 15) new_exp += 7;
          if (lvl >= 20) new_exp += 8;
          if (lvl >= 25) new_exp += 9;
          if (lvl >= 30) new_exp += 12;
          if (lvl >= 35) new_exp += 15;
          if (lvl >= 40) new_exp += 20;
          if (lvl >= 45) new_exp += 25;
          if (lvl >= 50) new_exp += 100;
          if (lvl >= 55) new_exp += Math.floor((Math.random() * 250) % 250);

          var newexp1 = Math.ceil(new_exp / 3);
          var newexp2 = Math.ceil(new_exp / 2);

          exp1 += newexp1;
          exp2 += newexp2;

          var id = id1;
          var exp = exp1;
          var lvl = lvl1;
          var rank = rank1;
          var pass_real = pass_real1;

          var rank_text = "Новичок";          if (exp >= 5) lvl = 1;         if (exp >= 10) lvl = 2;         if (exp >= 15) lvl = 3;         if (exp >= 20) lvl = 4;         if (exp >= 25) lvl = 5;          if (exp >= 30) lvl = 6;         if (exp >= 40) lvl = 7;         if (exp >= 50) lvl = 8;         if (exp >= 60) lvl = 9;         if (exp >= 70) lvl = 10;          if (exp >= 80) lvl = 11;         if (exp >= 100) lvl = 12;         if (exp >= 120) lvl = 13;         if (exp >= 140) lvl = 14;         if (exp >= 160) lvl = 15;          if (exp >= 180) lvl = 16;         if (exp >= 210) lvl = 17;         if (exp >= 240) lvl = 18;         if (exp >= 270) lvl = 19;         if (exp >= 300) lvl = 20;          if (exp >= 340) lvl = 21;         if (exp >= 380) lvl = 22;         if (exp >= 420) lvl = 23;         if (exp >= 460) lvl = 24;         if (exp >= 500) lvl = 25;          if (exp >= 550) lvl = 26;         if (exp >= 600) lvl = 27;         if (exp >= 650) lvl = 28;         if (exp >= 700) lvl = 29;         if (exp >= 750) lvl = 30;          if (exp >= 800) lvl = 31;         if (exp >= 875) lvl = 32;         if (exp >= 950) lvl = 33;         if (exp >= 1025) lvl = 34;         if (exp >= 1100) lvl = 35;          if (exp >= 1200) lvl = 36;         if (exp >= 1300) lvl = 37;         if (exp >= 1400) lvl = 38;         if (exp >= 1500) lvl = 39;         if (exp >= 1600) lvl = 40;          if (exp >= 1750) lvl = 41;         if (exp >= 1900) lvl = 42;         if (exp >= 2050) lvl = 43;         if (exp >= 2100) lvl = 44;         if (exp >= 2350) lvl = 45;          if (exp >= 2500) lvl = 46;         if (exp >= 2750) lvl = 47;         if (exp >= 3000) lvl = 48;         if (exp >= 3250) lvl = 49;         if (exp >= 3500) lvl = 50;          if (exp >= 4000) lvl = 51;         if (exp >= 6000) lvl = 52;         if (exp >= 8000) lvl = 53;         if (exp >= 10000) lvl = 54;         if (exp >= 12000) lvl = 55;          if (lvl >= 6)         {             rank = "upgraded";             rank_text = "Улучшенный";         }         if (lvl >= 11)         {             rank = "master";             rank_text = "Мастер";         }         if (lvl >= 16)         {             rank = "grandmaster";             rank_text = "Грандмастер";         }         if (lvl >= 21)         {             rank = "champion";             rank_text = "Чемпион";         }         if (lvl >= 26)         {             rank = "bronze";             rank_text = "Бронзовая Лига";         }         if (lvl >= 31)         {             rank = "silver";             rank_text = "Серебряная Лига";         }         if (lvl >= 36)         {             rank = "gold";             rank_text = "Золотая Лига";         }         if (lvl >= 41)         {             rank = "platinum";             rank_text = "Платиновая Лига";         }         if (lvl >= 46)         {             rank = "diamond";             rank_text = "Бриллиант";         }         if (lvl >= 51)         {             rank = "king";             rank_text = "Король";         }         if (lvl >= 55)         {             rank = "god";             rank_text = "Бог";         };

          fs.writeFileSync(id + ".account", name1 + " " + pass_real + " " + exp + " " + lvl + " " + rank + " false " + currentDate);

          var id = id2;
          var exp = exp2;
          var lvl = lvl2;
          var rank = rank2;
          var pass_real = pass_real2;

          var rank_text = "Новичок";          if (exp >= 5) lvl = 1;         if (exp >= 10) lvl = 2;         if (exp >= 15) lvl = 3;         if (exp >= 20) lvl = 4;         if (exp >= 25) lvl = 5;          if (exp >= 30) lvl = 6;         if (exp >= 40) lvl = 7;         if (exp >= 50) lvl = 8;         if (exp >= 60) lvl = 9;         if (exp >= 70) lvl = 10;          if (exp >= 80) lvl = 11;         if (exp >= 100) lvl = 12;         if (exp >= 120) lvl = 13;         if (exp >= 140) lvl = 14;         if (exp >= 160) lvl = 15;          if (exp >= 180) lvl = 16;         if (exp >= 210) lvl = 17;         if (exp >= 240) lvl = 18;         if (exp >= 270) lvl = 19;         if (exp >= 300) lvl = 20;          if (exp >= 340) lvl = 21;         if (exp >= 380) lvl = 22;         if (exp >= 420) lvl = 23;         if (exp >= 460) lvl = 24;         if (exp >= 500) lvl = 25;          if (exp >= 550) lvl = 26;         if (exp >= 600) lvl = 27;         if (exp >= 650) lvl = 28;         if (exp >= 700) lvl = 29;         if (exp >= 750) lvl = 30;          if (exp >= 800) lvl = 31;         if (exp >= 875) lvl = 32;         if (exp >= 950) lvl = 33;         if (exp >= 1025) lvl = 34;         if (exp >= 1100) lvl = 35;          if (exp >= 1200) lvl = 36;         if (exp >= 1300) lvl = 37;         if (exp >= 1400) lvl = 38;         if (exp >= 1500) lvl = 39;         if (exp >= 1600) lvl = 40;          if (exp >= 1750) lvl = 41;         if (exp >= 1900) lvl = 42;         if (exp >= 2050) lvl = 43;         if (exp >= 2100) lvl = 44;         if (exp >= 2350) lvl = 45;          if (exp >= 2500) lvl = 46;         if (exp >= 2750) lvl = 47;         if (exp >= 3000) lvl = 48;         if (exp >= 3250) lvl = 49;         if (exp >= 3500) lvl = 50;          if (exp >= 4000) lvl = 51;         if (exp >= 6000) lvl = 52;         if (exp >= 8000) lvl = 53;         if (exp >= 10000) lvl = 54;         if (exp >= 12000) lvl = 55;          if (lvl >= 6)         {             rank = "upgraded";             rank_text = "Улучшенный";         }         if (lvl >= 11)         {             rank = "master";             rank_text = "Мастер";         }         if (lvl >= 16)         {             rank = "grandmaster";             rank_text = "Грандмастер";         }         if (lvl >= 21)         {             rank = "champion";             rank_text = "Чемпион";         }         if (lvl >= 26)         {             rank = "bronze";             rank_text = "Бронзовая Лига";         }         if (lvl >= 31)         {             rank = "silver";             rank_text = "Серебряная Лига";         }         if (lvl >= 36)         {             rank = "gold";             rank_text = "Золотая Лига";         }         if (lvl >= 41)         {             rank = "platinum";             rank_text = "Платиновая Лига";         }         if (lvl >= 46)         {             rank = "diamond";             rank_text = "Бриллиант";         }         if (lvl >= 51)         {             rank = "king";             rank_text = "Король";         }         if (lvl >= 55)         {             rank = "god";             rank_text = "Бог";         };

          fs.writeFileSync(id + ".account", name2 + " " + pass_real + " " + exp + " " + lvl + " " + rank + " " + daily2 + " " + dailydate2);

          message.channel.sendMessage("Успешно использован ежедневный бонус!\nВы (" + name1 + ", " + id1 + ") получили: **" + newexp1 + "** XP\nУчастник **" + name2 + "** (" + id2 + ") получил **" + newexp2 + "** XP");
          message.delete();
       }
    }

    if (RucommandIs("account", message))
    {
        switch (args[1])
        {
            case "register":
            acc_Register();
            message.delete();
            break;
            
            case "info":
            acc_Info();
            break;

            case "delete":
            acc_Delete();
            message.delete();
            break;

            case "stats":
            acc_Stats();
            message.delete();
            break;

            default:
            message.channel.sendMessage("Неверный ввод команды.```bash\n$account register [имя] [пароль]\n$account info [id аккаунта]\n$account delete [id аккаунта] [пароль]```");
            return;
            break;
        }
    }


if (RucommandIs('texttoimage', message))
{
  if (args.length === 1)
  {
    message.channel.sendMessage("Использование команды: `$texttoimage [текст]`");
    return;
  }
  var text = message.content.substring(13);
  var Canvas = require('canvas-prebuilt'),
    canvas = new Canvas(500, 80),
    ctx = canvas.getContext('2d'),
    fs = require('fs');

var out = fs.createWriteStream(__dirname + '/image.png'), stream = canvas.createPNGStream();

  stream.on('data', function(chunk){
    out.write(chunk);
  });

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 500, 80);
  ctx.save();

  ctx.fillStyle = '#aaa'
  ctx.fillRect(0, 0, 0, 0);

  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText(text, 5, 20);

  ctx.beginPath();
  ctx.arc(0, 0, 0, 0, 0);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

message.channel.sendFile(__dirname + '/image.png', 'image.png');

}

    if (RucommandIs("game", message))
    {
          var game = message.content.substring(6);
          message.channel.sendMessage("", {
       embed: {
       color: 6482429,
       description: "Поставлена игра: **" + game + "**"
           }
       }
       );
       client.user.setGame(game + " | $help");
        }


if (RucommandIs("lvlparts", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$lvlparts [количество частей, от 2 до 100]`");
  }
  else
  {
    var count = parseInt(args[1]);
    var part = "";
    var level = "";
    var dualpart = "";
    var part2 = "";

    if (count > 100)
    {
      count = 100;
    }
    if (count < 2)
    {
      count = 2;
    }

    part = ["КБ", "КР", "Ш", "Н", "В", "Р", "П"];
     part = part[Math.floor(Math.random() * part.length)];
     level = level + part;

    for (var i = 1; i < count; i++)
    {
      level = level + ", ";
      part = "";
      part2 = "";
      dualpart = "";
       var chance = Math.floor((Math.random() * 5) % 5) + 1;
       if (chance === 2)
       {
         part = ["КБ", "КР", "Ш", "Н", "В", "Р", "П"];
          part = part[Math.floor(Math.random() * part.length)];
          part2 = ["КБ", "КР", "Ш", "Н", "В", "Р", "П"];
           part2 = part2[Math.floor(Math.random() * part2.length)];
           for (var c = 0; c < 20; c++)
           {
           if (part2 === part)
           {
             part2 = ["КБ", "КР", "Ш", "Н", "В", "Р", "П"];
              part2 = part2[Math.floor(Math.random() * part2.length)];
           }
         }
          dualpart = dualpart + part + "/" + part2;
          level = level + dualpart;
       }
       else
       {
         part = ["КБ", "КР", "Ш", "Н", "В", "Р", "П"];
          part = part[Math.floor(Math.random() * part.length)];
          level = level + part;
       }

    }

    level.substring(0, level.length - 2);
    message.channel.sendMessage(level);
  }
}

if (RucommandIs("bhelp", message))
{
  message.channel.sendMessage("```bash\n$build [название мира] - создать пустой мир\n$worldadd [название мира] [тайл] - добавить тайл в мир\n$worldn [название мира] - перейти на новую 'строку'\n$worldreset [название мира] - очистить мир\n$worldread [название мира] - просмотреть мир\n$worldbackup [название мира] - создать бэкап мира\n$loadbackup [название мира] - загрузить бэкап\n$addline [название мира] [строка тайлов]```")
}

if (RucommandIs("build", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$build [название мира]`");
  }
  else
  {
    var name = args[1];
    fs.writeFileSync(name + ".bwld", "");
    message.channel.sendMessage("Успешно создан пустой мир! Используйте команды:\n```bash\n$worldadd [название мира] [тайл] - добавить тайл в мир\n$worldn [название мира] - перейти на новую 'строку'\n$worldreset [название мира] - очистить мир```");
  }
}

if (RucommandIs("worldadd", message))
{
  if (args.length !== 3)
  {
    message.channel.sendMessage("Использование команды: `$worldadd [название мира] [тайл]`");
  }
  else
  {
    var name = args[1];
    var tile = args[2];

    fs.appendFileSync(name + ".bwld", tile);
    message.channel.sendMessage("Успешно добавлен тайл **" + tile + "** в мир **" + name + "**!\nИспользуйте команды:\n```bash\n$worldadd [название мира] [тайл] - добавить тайл в мир\n$worldn [название мира] - перейти на новую 'строку'\n$worldreset [название мира] - очистить мир\n$worldread [название мира] - просмотреть мир```")
  }
}

if (RucommandIs("addline", message))
{
  if (args.length < 3)
  {
    message.channel.sendMessage("Использование команды: `$addline [название мира] [несколько тайлов]`");
  }
  else
  {
    var name = args[1];
    var line = message.content.substring(10 + name.length);

    fs.appendFileSync(name + ".bwld", line);
    fs.appendFileSync(name + ".bwld", "\n");
    message.channel.sendMessage("Успешно добавлена строка **" + line + "** в мир **" + name + "**!\nИспользуйте команды:\n```bash\n$worldadd [название мира] [тайл] - добавить тайл в мир\n$worldn [название мира] - перейти на новую 'строку'\n$worldreset [название мира] - очистить мир\n$worldread [название мира] - просмотреть мир```")
  }
}


if (RucommandIs("worldn", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$worldn [название мира]`");
  }
  else
  {
    var name = args[1];
    fs.appendFileSync(name + ".bwld", "\n");
    message.channel.sendMessage("Готово!\n\nИспользуйте команды:\n```bash\n$worldadd [название мира] [тайл] - добавить тайл в мир\n$worldn [название мира] - перейти на новую 'строку'\n$worldreset [название мира] - очистить мир\n$worldread [название мира] - просмотреть мир```");
  }
}

if (RucommandIs("worldreset", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$worldreset [название мира]`");
  }
  else
  {
    var name = args[1];
    fs.writeFileSync(name + ".bwld", "");
    message.channel.sendMessage("Мир перезаписан!\n\nИспользуйте команды:\n```bash\n$worldadd [название мира] [тайл] - добавить тайл в мир\n$worldn [название мира] - перейти на новую 'строку'\n$worldreset [название мира] - очистить мир\n$worldread [название мира] - просмотреть мир```");
  }
}

if (RucommandIs("worldread", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$worldread [название мира]`");
  }
  else
  {
    var name = args[1];
    var world = fs.readFileSync(name + ".bwld", "utf8");
    message.channel.sendMessage("Мир **" + name + "**\n" + world);
  }
}

if (RucommandIs("worldbackup", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$worldbackup [название мира]`");
  }
  else
  {
    var name = args[1];
    var world = fs.readFileSync(name + ".bwld", "utf8");
    fs.writeFileSync(name + "--backup.bwld", world);
    message.channel.sendMessage("Создан бэкап мира **" + name + "**!");
  }
}

if (RucommandIs("loadbackup", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$loadbackup [название мира]`");
  }
  else
  {
    var name = args[1];
    var world = fs.readFileSync(name + "--backup.bwld", "utf8");
    fs.writeFileSync(name + ".bwld", world);
    message.channel.sendMessage("Загружен бэкап мира **" + name + "**!");
  }
}

if (RucommandIs("customgen", message))
{
  if (args.length < 4)
  {
    message.channel.sendMessage("Использование: `!customgen [название карты] [размер] [тайл 1] <тайлы от 2 до 11 по желанию>`");
  }
  else
  {
    var name = args[1];
    fs.writeFileSync(name + ".wld", "");
    var size = parseInt(args[2]);
    var tile1 = args[3];

    for (var y = 0; y < size; y++)
    {
      for (var x = 0; x < size; x++)
      {
        var tile = tile1;
        fs.appendFileSync(name + ".wld", tile);
      }
      fs.appendFileSync(name + ".wld", "\n");
    }
    if (args.length > 4)
    {
      var tile2 = args[4];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 5)
    {
      var tile3 = args[5];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 6)
    {
      var tile4 = args[6];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 7)
    {
      var tile5 = args[7];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 8)
    {
      var tile6 = args[8];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 9)
    {
      var tile7 = args[9];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 10)
    {
      var tile8 = args[10];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 11)
    {
      var tile9 = args[11];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }

    if (args.length > 12)
    {
      var tile10 = args[12];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }

    if (args.length > 13)
    {
      var tile11 = args[13];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }

    message.channel.sendMessage("", {
embed: {
 color: 16766976,
 title: "Кастомная карта `" + name + "`, размера " + size + "x" + size,
 description: fs.readFileSync(name + ".wld", "utf8")
     }
 }
);
  }
}


if (RucommandIs("generate", message))
{
  if (args.length !== 3)
  {
    message.channel.sendMessage("Использование команды: `!generate [размер] [тип]`");
  }
  else
  {
    fs.writeFileSync("world.txt", "");
    var size = parseInt(args[1]);
    var type = args[2];
    var world = " ";

    if (size < 2)
    {
      message.channel.sendMessage("Слишком маленький мир!");
      return;
    }
    if (size > 9)
    {
      message.channel.sendMessage("Слишком большой мир!");
      return;
    }

    if (type === "normal")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:w_:336588833040891904>", "<:m_:336588833925627904>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:f_:336588834022227968>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );


    }

    else if (type === "flat")
    {
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = ["<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );


    }

    else if (type === "mountain")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:m_:336588833925627904>", "<:m_:336588833925627904>", "<:m_:336588833925627904>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );


    }

    else if (type === "forest")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:f_:336588834022227968>", "<:f_:336588834022227968>", "<:m_:336588833925627904>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );

    }

    else if (type === "ocean")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:m_:336588833925627904>", "<:w_:336588833040891904>", "<:w_:336588833040891904>", "<:w_:336588833040891904>", "<:w_:336588833040891904>", "<:g_:336588833682358272>", "<:w_:336588833040891904>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );
    }

    else
    {
      message.channel.sendMessage("Типы миров:\nnormal\nflat\nmountain\nforest\nocean");
    }
  }
}

if (message.content === "thinking")
{
  message.delete();
  message.channel.sendMessage(":thinking:");
}

if (message.content === "babakappa")
{
  message.delete();
  message.channel.sendMessage("<:babaKappa:310069824355303424>");
}

if (message.content === "tHINKing")
{
  message.delete();
  message.channel.sendMessage("<:tHINKIng:333644899658235904>");
}

if (message.content === "spinthinking")
{
  message.delete();
  message.channel.sendMessage("<:thinkingspinned:333695701949218828>");
}

if (message.content === "thonk")
{
  message.delete();
  message.channel.sendMessage("<:thonk:333987270925484032>");
}

if (message.content.startsWith("$showmeameme") || message.content.startsWith("Бот, покажи мем") || message.content.startsWith("Бот, дай мем") || message.content.startsWith("Бот, я хочу мем") || message.content.startsWith("Нереальный Мегаблейз, мем пожалуйста") || message.content.startsWith("Мемы!"))
{
    var meme = [
        "https://cdn.discordapp.com/attachments/303554915375120384/311844744605073418/unknown.png\nЭто первый мем",
    "https://cdn.discordapp.com/attachments/303554915375120384/311843271632617474/unknown.png",
    "https://cdn.discordapp.com/attachments/303554915375120384/304594434580938752/unknown.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/305643606356525056/PkUgWrthdeU.png\nА разве не Вася?!",
    "https://cdn.discordapp.com/attachments/303544829516709888/306143257388122122/unknown.png\nПохоже, гм...",
    "https://cdn.discordapp.com/attachments/303544829516709888/305635461840240640/zLOEZdyiFEg.png\nЗубки наточили ребята",
    "https://cdn.discordapp.com/attachments/303544829516709888/305634178526085120/cU8XdcqF0-E.png\nЛетят они, ёжики пушистые!",
    "https://cdn.discordapp.com/attachments/303544829516709888/305405998997307393/unknown.png\nА если ты админ, то... образованный ли?",
    "https://cdn.discordapp.com/attachments/317551381227634688/331145998900396034/unknown.png\nУИИ!! Человечки xdddd",
    "https://cdn.discordapp.com/attachments/318002567047020545/327430947320365066/unknown.png\nМузон что надо!",
    "https://cdn.discordapp.com/attachments/318002567047020545/327429272950013953/unknown.png",
    "https://cdn.discordapp.com/attachments/318002567047020545/326782494005264385/r6VwZeXDgmw.jpg\nУгадайте страну",
    "https://cdn.discordapp.com/attachments/318002567047020545/326782493003087883/dCW0MKCEQCI.jpg\nУгадайте страну",
    "https://cdn.discordapp.com/attachments/318002567047020545/321894044336914432/unknown.png\nТомас уже не тот",
    "https://cdn.discordapp.com/attachments/318002567047020545/321160310964879361/unknown.png\nЧто ты такое...",
    "https://cdn.discordapp.com/attachments/318002567047020545/318008272323870720/unknown.png\nМастера Троува!",
    "https://cdn.discordapp.com/attachments/229608793678413824/328771800228036619/Screenshot_50.png\nПодождите ещё 9 секунд...",
    "https://cdn.discordapp.com/attachments/229608793678413824/328384136731557888/Screenshot_2017-05-02-22-21-46_1.jpg\n```md\n# Причины, чтобы жить```",
    "https://cdn.discordapp.com/attachments/229608793678413824/325956788656668672/unknown.png\nSatan",
    "https://cdn.discordapp.com/attachments/229608793678413824/319974981889032202/IMAG0601_1.jpg\nХорошая работа, Роберт",
    "https://cdn.discordapp.com/attachments/229608793678413824/316904306072879104/bandicam_2017-05-24_14-44-28-240.jpg\n```md\n> GG\n# Спасибо, мой любимый бот\n# Спасибо, мой любимый олень\n\n(игра слов 'dear' - 'дорогой' и 'deer' - 'олень')```",
    "https://cdn.discordapp.com/attachments/229608793678413824/315743909923913738/bandicam_2017-05-21_09-36-33-896.jpg\nЗабыл parseInt()",
    "https://cdn.discordapp.com/attachments/251819623622770690/331092761342377984/index.png\n```md\n> Потому что в Террарии вы можете убивать что угодно с помощью йо-йо```",
    "https://cdn.discordapp.com/attachments/303544829516709888/304999625126051840/unknown.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304650255020851200/-GDmUtBICHM.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304649906646155274/NMf6j1dBveI.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304647240482291722/QRZpW78kOG4.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304646930791923712/nbMlTvYzriI.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304646525345202177/I0MHQYljvnM.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304643279125741569/Oy9LdndPTI4.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/304642410867195906/yEvTmnoVuoM.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/303560668580282371/1412505447_251593218.png",
    "https://cdn.discordapp.com/attachments/303544829516709888/331150610378391553/bandicam_2017-06-19_15-23-01-939.jpg\nКогда случайно нажал B",
    "https://cdn.discordapp.com/attachments/303544829516709888/331150797092028416/bandicam_2017-06-14_18-46-12-894.jpg\nКто обзывается, тот... стоп.",
    "https://cdn.discordapp.com/attachments/303544829516709888/331150798471954432/bandicam_2017-06-14_18-43-00-711.jpg",
    "https://cdn.discordapp.com/attachments/303544829516709888/331150800069984256/bandicam_2017-06-14_18-35-26-068.jpg\nАга, если бы...",
    "https://cdn.discordapp.com/attachments/328332506321518592/331150544976478208/IMG-20170520-WA0017.jpg",
    "https://cdn.discordapp.com/attachments/303544829516709888/331151279781052416/bandicam_2017-06-09_23-19-05-535.jpg",
    "https://cdn.discordapp.com/attachments/295944090036469760/331371917229555712/43.PNG\nЧёт слишком много ментов...",
    "https://cdn.discordapp.com/attachments/317551381227634688/331372257949777922/bandicam_2017-07-03_12-54-50-603.jpg\nМЕМЫМЕМЫМЕМЫМЕМЫМЕМЫ",
    "https://cdn.discordapp.com/attachments/317551381227634688/331372376535203840/bandicam_2017-07-02_23-18-15-458.jpg\nЖиза",
    "https://cdn.discordapp.com/attachments/295944090036469760/331372610774368256/451.PNG\nhttps://cdn.discordapp.com/attachments/295944090036469760/331372974030585867/448.PNG\nДевушка, не лагайте, пожалуйста!",
    "https://cdn.discordapp.com/attachments/266630565636079616/331374478397407232/bandicam_2017-06-21_20-06-06-571.jpg",
    "https://cdn.discordapp.com/attachments/266630565636079616/331374479311896576/bandicam_2017-06-20_14-20-55-474.jpg",
    "https://cdn.discordapp.com/attachments/266630565636079616/331374483510394880/bandicam_2017-06-19_11-05-20-342.jpg\nСкрафтил с 1 раза",
    "https://cdn.discordapp.com/attachments/317551381227634688/331374264424988672/bandicam_2017-06-14_00-01-34-654.jpg\nСам хз",
    "https://cdn.discordapp.com/attachments/317551381227634688/331374133856305153/bandicam_2017-06-15_21-30-50-227.jpg\n#яжмать",
    "https://cdn.discordapp.com/attachments/317551381227634688/331374022820364289/bandicam_2017-06-14_19-00-13-110.jpg\nДЖООООООО... джой казино ру",
    "https://cdn.discordapp.com/attachments/317551381227634688/331373947348189195/bandicam_2017-06-14_20-05-15-593.jpg\nВаще сказанул, всё, УС",
    "https://cdn.discordapp.com/attachments/317551381227634688/331373910752886784/bandicam_2017-06-14_20-12-46-449.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331373884018262016/MineblazeServer_2017-06-15_14-30-47-035.jpg\nСлёзы СЧАСТЬЯ!!!",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375189340323841/bandicam_2017-06-09_22-34-48-157.jpg\nМаладез",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375191215046656/bandicam_2017-06-09_22-22-42-299.jpg\nКраткость - сестра таланта",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375192179867649/bandicam_2017-06-09_22-15-20-764.jpg\nНу ваще реал, отстань уже",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375193781960705/bandicam_2017-06-09_21-37-06-360.jpg\nПародия на УСатого Стартула",
    "https://cdn.discordapp.com/attachments/328804718430126080/331376253061824513/Screenshot_173.png",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375593792864256/v2.jpg\nЛылолелал_v2.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375595323916288/bandicam_2017-06-08_21-29-21-034.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331375597592772608/bandicam_2017-06-08_21-21-50-290.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331376852344242177/bandicam_2017-06-08_10-33-04-612.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331376890071875584/bandicam_2017-06-08_10-31-21-344.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331376915925434371/bandicam_2017-06-08_10-25-13-217.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331376946006982656/bandicam_2017-06-07_23-23-22-692.jpg\nРедкий случай",
    "https://cdn.discordapp.com/attachments/317551381227634688/331376979100041236/bandicam_2017-06-07_21-52-59-871.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377018199343105/bandicam_2017-06-07_21-13-14-798.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377037241483265/bandicam_2016-11-27_13-51-54-455.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377533385703425/bandicam_2017-06-14_19-54-01-203.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377562921992192/bandicam_2017-06-14_18-53-59-333.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377595822243841/bandicam_2017-06-13_21-14-21-777.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377642081091585/bandicam_2017-06-13_20-40-19-592.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377703120928769/bandicam_2017-06-13_20-39-17-959.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377739842191360/unknown.png\nА чо ита",
    "https://cdn.discordapp.com/attachments/317551381227634688/331377853104914433/unknown.png",
    "https://cdn.discordapp.com/attachments/317551381227634688/331378014233559040/unknown.png",
    "https://cdn.discordapp.com/attachments/317551381227634688/331378437187174400/unknown.png",
    "https://cdn.discordapp.com/attachments/315519786513858560/330759842614607872/a1fef3775db913bb.png",
    "https://cdn.discordapp.com/attachments/317551381227634688/331380593419878410/unknown.png",
    "https://cdn.discordapp.com/attachments/317551381227634688/331383220631371777/bandicam_2017-07-03_13-38-17-072.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331383887857188864/bandicam_2017-06-15_21-52-14-340.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331383923395395585/bandicam_2017-06-09_12-31-31-704.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331383947508580352/bandicam_2017-06-09_12-29-06-530.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331383971365781524/bandicam_2017-06-08_23-29-55-330.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331384010976657410/bandicam_2017-06-08_23-14-43-558.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331384046850539522/bandicam_2017-06-08_21-38-51-651.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331384072473542667/bandicam_2017-06-07_21-17-05-125.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331384097622720514/GeometryDash_2016-11-27_20-28-32-327.jpg\nНо кто из них кто...",
    "https://cdn.discordapp.com/attachments/317551381227634688/331384130560327680/bandicam_2016-11-26_22-09-30-466.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/331384158356242434/bandicam_2016-11-12_22-53-34-895.jpg",
    "```md\n# Сходство 100%```\nhttps://cdn.discordapp.com/attachments/317551381227634688/331384175351431168/bandicam_2016-11-08_15-05-20-221.jpg\nhttps://cdn.discordapp.com/attachments/317551381227634688/331384176425304064/bandicam_2016-11-08_15-04-56-692.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331387065805701120/unknown.png",
    "https://cdn.discordapp.com/attachments/280934256937795584/331387712927956993/bandicam_2017-05-11_20-55-23-634.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331388997483888640/bandicam_2017-03-25_09-05-42-639.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331388998528270336/bandicam_2017-03-25_09-04-10-269.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389002139566084/bandicam_2017-03-25_00-28-08-539.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389002152280065/bandicam_2017-03-23_21-19-14-108.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389002676699147/MineblazeServer_2017-03-24_23-23-05-902.jpg\nМамвик?",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389003548983296/bandicam_2017-03-23_20-17-13-267.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389006522875904/bandicam_2017-03-19_09-32-34-590.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389006631927808/bandicam_2017-03-18_21-40-12-453.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389008485548032/bandicam_2017-03-16_22-20-47-289.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389009932713984/bandicam_2017-03-16_21-38-50-514.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389042190974977/bandicam_2017-03-06_22-02-42-408.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389051993194496/bandicam_2017-03-05_19-46-14-455.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389053616390144/bandicam_2017-03-02_21-48-16-046.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389055206162432/bandicam_2017-03-02_19-48-58-545.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389056514523136/bandicam_2017-03-02_19-48-32-200.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389058448097281/bandicam_2017-03-02_18-21-08-174.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389059756720128/bandicam_2017-02-28_22-32-01-732.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389061757665282/bandicam_2017-02-25_20-12-07-026.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389064123252738/bandicam_2017-02-25_15-01-59-691.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389064995405826/bandicam_2017-02-24_23-53-24-168.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389092921212929/bandicam_2017-02-24_20-46-58-430.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389101926383617/bandicam_2017-02-21_16-32-06-210.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389101926383617/bandicam_2017-02-21_16-32-06-210.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389101439975424/bandicam_2017-02-23_14-17-50-636.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389099497881603/bandicam_2017-02-24_17-50-13-693.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389109190918154/bandicam_2017-02-20_20-50-11-529.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389110512123904/bandicam_2017-02-19_13-05-56-337.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389111489527818/bandicam_2017-02-19_11-34-24-438.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389113162924034/bandicam_2017-02-06_21-42-27-867.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389113162924034/bandicam_2017-02-06_21-42-27-867.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389115188903937/bandicam_2017-02-06_20-49-43-847.jpg\ncomIng",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389116870819840/bandicam_2017-02-06_20-29-26-323.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389139327123456/bandicam_2017-01-18_23-24-51-411.jpg\nо_О",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389140807450624/GeometryDash_2017-01-17_23-15-57-939.jpg\nБраво, маэстро!",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389144590843904/GeometryDash_2017-01-17_22-19-48-751.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389145899335682/bandicam_2017-01-07_00-24-37-026.jpg\nЭто всего лишь мечты...",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389144792301568/bandicam_2017-01-07_22-01-29-505.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389149070229505/bandicam_2016-12-31_22-42-48-304.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389166145241088/bandicam_2016-12-30_23-18-54-891.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389167218982923/bandicam_2016-12-30_19-52-09-589.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331389168787914762/bandicam_2016-12-24_21-17-30-105.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396147640008705/bandicam_2017-05-29_12-55-23-419.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396158469701632/bandicam_2017-05-27_18-19-37-845.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396160889683978/bandicam_2017-05-26_23-44-50-466.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396161963294720/bandicam_2017-05-26_23-31-31-586.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396160789020672/bandicam_2017-05-26_23-31-52-045.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396162278129667/bandicam_2017-05-26_22-39-24-269.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396164064641024/bandicam_2017-05-26_20-36-09-052.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396165553881088/bandicam_2017-05-26_19-54-13-754.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396176345694219/bandicam_2017-05-23_21-37-51-507.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396177868357643/bandicam_2017-05-21_15-39-46-269.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396207219965952/bandicam_2017-05-08_19-48-23-895.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396208461348866/bandicam_2017-05-08_16-46-35-203.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396209891606528/bandicam_2017-05-04_20-06-38-873.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396211858997248/bandicam_2017-05-04_00-25-34-019.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396212596932609/bandicam_2017-04-29_19-52-25-765.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396214937354241/bandicam_2017-04-29_19-51-06-585.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396216774459396/bandicam_2017-04-29_19-44-30-066.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396223699517458/bandicam_2017-04-24_22-57-29-480.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396267123015681/bandicam_2017-04-23_13-50-58-849.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396269706838028/bandicam_2017-04-23_11-14-38-412.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396269542998017/bandicam_2017-04-23_13-40-30-764.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396271162261504/bandicam_2017-04-23_10-24-29-070.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396272085008388/bandicam_2017-04-23_09-31-02-169.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396273678712842/bandicam_2017-04-22_23-35-14-949.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396313218416640/bandicam_2017-04-22_22-45-17-781.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396312014651413/bandicam_2017-04-22_23-28-06-393.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396315835531264/bandicam_2017-04-22_22-43-45-373.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396316729049090/bandicam_2017-04-22_21-26-07-734.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396318394318848/bandicam_2017-04-22_21-09-06-849.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396320319373322/bandicam_2017-04-22_19-40-00-704.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396319052693508/bandicam_2017-04-22_19-40-48-948.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396321594441728/bandicam_2017-04-22_19-28-26-649.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396323003596810/bandicam_2017-04-19_20-50-10-397.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396324090052619/bandicam_2017-04-19_20-19-32-735.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396402661818368/bandicam_2017-04-17_22-22-10-202.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396404008321035/bandicam_2017-04-17_22-18-49-627.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396401516773386/bandicam_2017-04-17_22-22-40-039.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396406042689536/bandicam_2017-04-17_21-35-14-455.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396407019962369/bandicam_2017-04-17_20-53-27-213.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396408626249728/bandicam_2017-04-17_17-44-37-212.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396409943130112/bandicam_2017-04-16_19-47-35-662.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396412824748032/bandicam_2017-04-16_19-47-29-729.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396414963974157/bandicam_2017-04-15_21-58-59-225.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396413999284224/bandicam_2017-04-16_12-31-20-947.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396481883832320/bandicam_2017-04-03_22-30-24-454.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396481112342529/bandicam_2017-04-05_18-06-05-227.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396483318546433/bandicam_2017-04-03_16-19-08-742.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396485805506570/bandicam_2017-04-02_19-03-24-784.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396511655002114/bandicam_2017-04-02_17-38-37-989.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396513202962433/bandicam_2017-04-02_16-39-34-009.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396515434070016/bandicam_2017-04-01_21-27-23-949.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396516545822720/bandicam_2017-04-01_12-28-53-244.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396517501992963/bandicam_2017-03-31_22-27-40-696.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396519523778561/bandicam_2017-03-31_21-26-43-653.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396588389793793/bandicam_2017-03-30_09-41-09-533.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396590302396417/bandicam_2017-03-29_17-50-50-790.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396592127180801/bandicam_2017-03-29_12-41-30-988.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396593783930880/bandicam_2017-03-29_11-23-53-574.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396596455440386/bandicam_2017-03-27_16-09-20-942.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396597185511424/MineblazeServer_2017-03-28_15-34-32-299.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396596854161411/bandicam_2017-03-27_19-46-58-549.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396605406085120/bandicam_2017-03-27_15-34-52-640.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396606131830785/bandicam_2017-03-26_21-01-28-538.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396610456027147/bandicam_2017-03-26_19-31-08-537.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396636817227778/bandicam_2017-03-26_13-14-33-836.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396637870260227/bandicam_2017-03-26_12-23-26-344.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396636938993665/MineblazeServer_2017-03-26_18-39-33-190.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396640009224192/bandicam_2017-03-26_12-21-04-962.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/331396640931840001/bandicam_2017-03-26_11-57-26-388.jpg",
    "https://cdn.discordapp.com/attachments/295944090036469760/331400821415739392/unknown.png",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194361481625612/bandicam_2017-07-05_19-12-31-157.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194410030956544/bandicam_2017-07-05_15-24-28-721.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194436803067907/bandicam_2017-07-05_12-29-08-032.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194471506608140/bandicam_2017-07-04_20-11-23-755.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194487034183691/bandicam_2017-07-04_19-23-30-196.jpg\nКогда указал на очевидную ошибку (а оказалось, что это так было задумано)",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194503261814785/bandicam_2017-07-04_18-45-29-970.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194531061530634/bandicam_2017-07-04_13-59-41-739.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194575932194818/bandicam_2017-07-03_23-21-44-806.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194609776164864/bandicam_2017-07-03_18-07-56-427.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332194625945337856/bandicam_2017-07-03_18-27-36-486.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/332199377110171650/bandicam_2017-07-05_19-39-48-224.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332227706521518080/bandicam_2017-06-22_11-03-17-025.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332228128636141568/unknown.png",
    "https://cdn.discordapp.com/attachments/280934256937795584/332228248224268288/bandicam_2017-07-05_20-25-41-052.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332228245816868867/unknown.png",
    "https://cdn.discordapp.com/attachments/280934256937795584/332226787926867978/bandicam_2017-07-05_19-44-30-227.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332226724366385152/bandicam_2017-07-05_19-36-26-238.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332226683727773717/bandicam_2017-07-05_20-37-06-752.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332226610495356930/bandicam_2017-07-05_21-03-32-698.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332226560570425354/bandicam_2017-07-05_20-54-42-016.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332228322761113611/unknown.png\nhttps://cdn.discordapp.com/attachments/280934256937795584/332228362300817408/unknown.png\nhttps://cdn.discordapp.com/attachments/280934256937795584/332228398283882499/unknown.png",
    "https://cdn.discordapp.com/attachments/329516095809781761/332234845730111491/29.PNG",
    "https://cdn.discordapp.com/attachments/329516095809781761/332235903588368384/513.PNG\nВот Вася, Сто працентов гарантирую, ТОЛЬКА ШТИЛЬ!",
    "https://cdn.discordapp.com/attachments/280934256937795584/332237188484038667/228.png\n```md\n# Это двести двадцать восьмой мем```",
    "https://cdn.discordapp.com/attachments/329516095809781761/332235104661536768/54.PNG",
    "https://cdn.discordapp.com/attachments/281070740118437889/332236311572512770/2017-05-26_23-42-21.png",
    "https://cdn.discordapp.com/attachments/329516095809781761/332235640299061249/345.PNG\nКогда пытался нормально улыбнуться, но получилась какая-то фигня",
    "https://cdn.discordapp.com/attachments/288767343432302594/332244552133902337/2.png",
    "https://cdn.discordapp.com/attachments/322340291962994689/332248788611629056/bandicam_2017-07-05_22-47-18-854.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332249674134192129/bandicam_2017-07-05_22-59-24-732.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332249675069390850/bandicam_2017-07-05_22-54-02-817.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332249675933679616/bandicam_2017-07-05_22-52-03-491.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332249677628047370/bandicam_2017-07-05_22-51-40-116.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332250391322427392/unknown.png",
    "https://cdn.discordapp.com/attachments/295884322924396545/332251771391049734/bandicam_2017-07-05_23-09-30-137.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332251772209070091/bandicam_2017-07-05_23-07-28-972.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332251773873946624/bandicam_2017-07-05_23-06-24-737.jpg",
    "https://cdn.discordapp.com/attachments/317551381227634688/332232712490582026/bandicam_2017-07-05_21-54-03-367.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332253018705625089/unknown.png",
    "https://cdn.discordapp.com/attachments/295884322924396545/332253670706118666/bandicam_2017-07-05_23-17-02-888.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332253991255670795/unknown.png",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259804926050314/bandicam_2017-07-05_23-40-30-391.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259815441170442/bandicam_2017-07-05_23-40-13-630.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259822831534082/bandicam_2017-07-05_23-40-04-736.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259827034357760/bandicam_2017-07-05_23-39-36-812.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259831895293953/bandicam_2017-07-05_23-39-26-912.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259837675044864/bandicam_2017-07-05_23-36-37-945.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259843391881216/bandicam_2017-07-05_23-35-00-402.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259853495959564/bandicam_2017-07-05_23-33-25-937.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259867949531136/bandicam_2017-07-05_23-33-03-791.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259875755130880/bandicam_2017-07-05_23-28-54-400.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332259881283485724/bandicam_2017-07-05_23-24-52-775.jpg\n256 юбилейный мем!",
    "https://cdn.discordapp.com/attachments/288767343432302594/332259980973572096/unknown.png",
    "https://cdn.discordapp.com/attachments/328172733919789056/332262795741626371/91k9v0BsYR4.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263206246416384/bandicam_2017-07-05_23-46-50-276.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263135970852864/bandicam_2017-07-05_23-48-12-969.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263134532468736/bandicam_2017-07-05_23-48-33-892.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263132439379968/bandicam_2017-07-05_23-49-56-143.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263131155791894/bandicam_2017-07-05_23-51-30-134.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263127427186689/bandicam_2017-07-05_23-52-19-319.jpg",
    "https://cdn.discordapp.com/attachments/295884322924396545/332263125627961344/bandicam_2017-07-05_23-53-57-259.jpg",
    "https://cdn.discordapp.com/attachments/328172733919789056/332263717574279168/c1b5da7adf88fb10.png",
    "https://cdn.discordapp.com/attachments/328172733919789056/332264073192407040/IMG_20170705_235824.JPG",
    "https://cdn.discordapp.com/attachments/288767343432302594/332472687261646848/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332474648564334593/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332475651426877442/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332477144653496321/f38c9de750b8941f.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332477144653496321/f38c9de750b8941f.png",
    "https://cdn.discordapp.com/attachments/295944090036469760/332478679496130562/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332478926687305730/unknown.png",
    "https://cdn.discordapp.com/attachments/266630565636079616/332483033380945920/unknown.png",
    "https://cdn.discordapp.com/attachments/266630565636079616/332483301967396865/bandicam_2017-07-06_14-24-08-253.jpg",
    "https://cdn.discordapp.com/attachments/266630565636079616/332483387421884416/bandicam_2017-07-06_14-21-37-583.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332483576929189890/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332483974373048320/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332484883152764929/unknown.png",
    "https://cdn.discordapp.com/attachments/266630565636079616/332485448825831424/unknown.png",
    "https://cdn.discordapp.com/attachments/332309684470153216/332563156079476739/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332588458218618880/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332589312333840397/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332589951860604928/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332590343956725761/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332590875140161548/unknown.png",
    "https://cdn.discordapp.com/attachments/332309684470153216/332591032996855822/bandicam_2017-07-06_21-37-34-937.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332591322684850186/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332591675291467777/bandicam_2017-07-06_21-40-13-038.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332588145755291659/thinkingspinned.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332591873111752725/bandicam_2017-07-06_21-41-12-445.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332592069807964172/unknown.png",
    "https://cdn.discordapp.com/attachments/280934256937795584/332592069807964172/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332592486285443074/bandicam_2017-07-06_21-43-32-237.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332592700681486336/bandicam_2017-07-06_21-44-28-280.jpg",
    "https://cdn.discordapp.com/attachments/332309684470153216/332592638119378944/S70706-224332.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332592624345022464/unknown.png",
    "https://cdn.discordapp.com/attachments/280934256937795584/332592912921526293/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332593313079230465/bandicam_2017-07-06_21-46-56-893.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332593700121346048/bandicam_2017-07-06_21-48-23-502.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332593702130286593/bandicam_2017-07-06_21-48-18-610.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332593725547085825/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332593947610316800/bandicam_2017-07-06_21-49-20-544.jpg",
    "https://cdn.discordapp.com/attachments/280934256937795584/332594022038241281/unknown.png",
    "https://cdn.discordapp.com/attachments/332309684470153216/332594295477501953/S70706-225038.jpg",
    "https://cdn.discordapp.com/attachments/295944090036469760/332594875168063494/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332595123294699520/bandicam_2017-07-06_21-54-05-966.jpg",
    "https://cdn.discordapp.com/attachments/295944090036469760/332595473309499394/unknown.png",
    "https://cdn.discordapp.com/attachments/295944090036469760/332595570784993291/unknown_5.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332596741511839765/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332597701655134216/bandicam_2017-07-06_22-04-23-065.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332597668373331968/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332597952671645697/bandicam_2017-07-06_22-05-20-466.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332598079159009289/bandicam_2017-07-06_22-05-52-497.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332598230774710273/bandicam_2017-07-06_22-06-28-611.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332600412450324481/unknown.png",
    "https://cdn.discordapp.com/attachments/280934256937795584/332600904765407235/bandicam_2017-07-06_22-17-01-908.jpg",
    "https://cdn.discordapp.com/attachments/288767343432302594/332600923140521985/unknown.png",
    "https://cdn.discordapp.com/attachments/295944090036469760/332602055107805184/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332611137147502592/unknown.png",
    "https://cdn.discordapp.com/attachments/288767343432302594/332613273553862657/x_4190612c.png",
    "https://cdn.discordapp.com/attachments/332309684470153216/332804202265051136/unknown.png",
    "https://cdn.discordapp.com/attachments/295944090036469760/332806224867229697/unknown.png",
    "https://cdn.discordapp.com/attachments/332577886479319048/332837580405997568/20170705_191842.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/332837846878781441/20170703_194700.jpg",
    "https://cdn.discordapp.com/attachments/279936514295857154/332443008127598592/the_walking_dead_meme__game__by_qewerka-d7ss8ve.png",
    "https://cdn.discordapp.com/attachments/279936514295857154/332441720342052876/6bmky.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333906106424360960/unknown.png",
    "https://cdn.discordapp.com/attachments/332309684470153216/333906382770405377/JPEG_20170710_124337.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333704198489112576/bandicam_2017-07-09_23-21-10-040.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333703453249634325/bandicam_2017-07-09_23-18-10-630.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333597386524065792/bandicam_2017-07-09_12-59-20-187.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333597383306772483/bandicam_2017-07-09_13-00-18-557.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333597382065258509/bandicam_2017-07-09_13-49-15-165.jpg",
    "https://cdn.discordapp.com/attachments/332577886479319048/333597380786257920/bandicam_2017-07-09_13-50-33-566.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240558540718080/bandicam_2017-07-28_00-14-16-478.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240273726504960/bandicam_2017-07-27_03-01-17-037.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240271038218252/bandicam_2017-07-27_13-07-05-739.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240262083117056/bandicam_2017-07-27_13-45-06-006.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240259222863874/bandicam_2017-07-27_14-32-01-710.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240250682998785/bandicam_2017-07-27_15-27-41-666.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240244928413696/bandicam_2017-07-27_18-10-33-876.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240233956376577/bandicam_2017-07-27_18-48-58-181.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240221947953153/bandicam_2017-07-27_19-21-55-395.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240211189432333/bandicam_2017-07-27_19-57-20-810.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240201521823748/bandicam_2017-07-27_20-22-34-202.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240190910103553/bandicam_2017-07-27_21-15-09-440.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240186107756544/bandicam_2017-07-27_21-31-40-233.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240175135457280/bandicam_2017-07-27_22-04-38-196.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240167543635970/bandicam_2017-07-27_23-01-33-287.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240156327936000/bandicam_2017-07-27_23-03-15-018.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240149503934466/bandicam_2017-07-27_23-23-39-625.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240139366432768/bandicam_2017-07-27_23-40-00-138.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240130831024138/bandicam_2017-07-27_23-41-15-387.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340240116108886016/bandicam_2017-07-27_23-42-15-929.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244115344064512/bandicam_2017-07-19_10-19-26-274.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244110659026944/bandicam_2017-07-19_12-53-49-114.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244106032840704/bandicam_2017-07-19_17-02-28-237.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244101943394304/bandicam_2017-07-19_19-59-35-063.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244097203961876/bandicam_2017-07-19_20-02-18-780.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244092158214144/bandicam_2017-07-19_21-05-57-349.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244087808589835/bandicam_2017-07-19_23-42-26-211.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244083803160577/bandicam_2017-07-19_23-55-07-911.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244078576795648/bandicam_2017-07-20_00-23-23-870.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244074265313280/bandicam_2017-07-20_13-54-25-376.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244068585963530/bandicam_2017-07-21_17-20-25-806.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244063385288714/bandicam_2017-07-21_17-40-26-062.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244058838401038/bandicam_2017-07-22_00-51-32-646.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244053964619788/bandicam_2017-07-22_01-25-42-308.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244049761927169/bandicam_2017-07-22_01-26-33-358.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244044435423232/bandicam_2017-07-22_01-31-53-758.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244039561510913/bandicam_2017-07-22_01-32-47-548.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244034813427714/bandicam_2017-07-22_01-36-52-760.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244029608427530/bandicam_2017-07-22_01-38-28-953.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244025359728660/bandicam_2017-07-22_01-39-57-606.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244020582154240/bandicam_2017-07-22_01-48-04-608.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244015091810334/bandicam_2017-07-22_10-10-25-806.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244010113171458/bandicam_2017-07-22_15-32-13-619.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244002563686411/bandicam_2017-07-22_18-13-35-088.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340244000621461506/bandicam_2017-07-22_19-30-40-957.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243990643343360/bandicam_2017-07-22_23-57-23-933.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243985522098176/bandicam_2017-07-23_01-05-51-872.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243975434797059/bandicam_2017-07-23_01-10-55-933.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243972398252033/bandicam_2017-07-23_01-14-01-727.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243972414767115/bandicam_2017-07-23_01-15-18-428.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243964978397186/bandicam_2017-07-23_01-34-05-249.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243961685999616/bandicam_2017-07-23_01-44-17-503.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243957248425995/bandicam_2017-07-23_01-49-03-251.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243952819109909/bandicam_2017-07-23_11-37-10-547.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243949602078720/bandicam_2017-07-23_12-04-51-995.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243945105915905/bandicam_2017-07-23_20-16-21-153.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243941787959296/bandicam_2017-07-23_21-46-55-044.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243937417756675/bandicam_2017-07-24_00-17-15-917.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243932992634892/bandicam_2017-07-24_00-37-05-417.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243928802656266/bandicam_2017-07-24_01-01-09-777.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243924713078804/bandicam_2017-07-24_10-12-44-862.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243920439083030/bandicam_2017-07-24_12-46-29-033.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243916366282754/bandicam_2017-07-24_16-41-22-656.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243911262076930/bandicam_2017-07-24_23-08-30-664.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243907356917761/bandicam_2017-07-24_23-49-51-656.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243902487461888/bandicam_2017-07-25_00-00-13-455.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243897622200342/bandicam_2017-07-25_00-11-50-554.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243893519908875/bandicam_2017-07-25_01-00-19-274.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243889690509314/bandicam_2017-07-25_13-37-12-711.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243884468600843/bandicam_2017-07-25_17-14-14-043.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243879767048204/bandicam_2017-07-25_17-34-11-866.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243871076319232/bandicam_2017-07-25_18-46-44-605.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243867616018432/bandicam_2017-07-25_21-28-54-655.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243862025142273/bandicam_2017-07-25_22-24-57-206.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243857968988161/bandicam_2017-07-25_22-54-31-476.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243852159877138/bandicam_2017-07-25_23-16-30-547.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243846879510529/bandicam_2017-07-26_18-21-38-412.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243837647716352/bandicam_2017-07-26_21-16-41-392.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243829196193793/bandicam_2017-07-27_02-48-52-992.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243819985502210/bandicam_2017-07-27_02-52-13-672.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/340243809386496013/bandicam_2017-07-28_00-17-51-605.jpg",
    "https://cdn.discordapp.com/attachments/279936514295857154/345224970508566530/Screenshot_4.png",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214365835853826/bandicam_2017-08-10_17-35-31-375.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214375415644160/bandicam_2017-08-10_17-33-21-176.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214382755545089/bandicam_2017-08-10_15-44-18-555.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214393673318401/bandicam_2017-08-10_15-17-45-488.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214401747484690/bandicam_2017-08-03_22-24-43-635.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214409192243201/bandicam_2017-08-03_16-18-28-656.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214420290502667/bandicam_2017-08-03_16-16-20-005.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214430033739787/bandicam_2017-07-31_16-17-59-949.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214440263909386/bandicam_2017-07-31_15-57-32-828.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214448299933696/bandicam_2017-07-28_22-31-09-373.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214456554586113/bandicam_2017-07-28_22-30-22-765.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214463114215434/bandicam_2017-07-28_22-17-50-197.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214473134538753/bandicam_2017-07-28_21-58-29-337.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214480822566912/bandicam_2017-07-28_20-54-55-613.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214490800816129/bandicam_2017-07-28_16-08-21-007.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214499277635587/bandicam_2017-07-28_14-59-57-841.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214505850109954/bandicam_2017-07-28_12-24-21-074.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214510442872846/bandicam_2017-07-28_02-26-25-075.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345214518076637185/bandicam_2017-07-28_00-17-51-605.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345215338465722369/bandicam_2017-08-10_17-42-23-068.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345287446906404874/bandicam_2017-08-10_22-27-59-181.jpg",
    "https://cdn.discordapp.com/attachments/300343866970734603/345288403769884682/bandicam_2017-08-10_22-32-38-326.jpg",/*
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",*/
    ];
    meme = meme[Math.floor(Math.random() * meme.length)];
    message.channel.sendMessage(meme);
}


       if (RucommandIs("uptime", message))
       {
           var timee = client.uptime / 1000;
           type = "секунд"
           timee.toFixed(1);
           console.log(timee);
           if (timee > 60)
           {
               timee /= 60;
               type = "минут";
               if (timee > 60)
               {
                   timee /= 60;
                   type = "часов";
               }
           }
           message.channel.sendMessage("```ml\nGeometrician в сети уже " + timee.toFixed(1).toString() + " " + type + "```");
       }

       if (RucommandIs("servers", message))
    {
        message.channel.sendMessage("```ml\nGeometrician был добавлен на " + client.guilds.size + " сервер (ов)```");
    }

       if (RucommandIs("weather", message))
       {
           if (args.length >= 2)
           {
           var minus = ["", "-"];
           var city = message.content.substring(9);
           var t = Math.floor((Math.random() * 100) % 100) - 50;
           var s = Math.floor((Math.random() * 10) % 10);
           var v = Math.floor((Math.random() * 50) % 50) + 40;
           var d = Math.floor((Math.random() * 60) % 60) + 720;
           var r = ["Солнечно :sunny:", "Ясно :sunny:", "Дожди :cloud_rain:", "Небольшой дождь :cloud_rain:", "Ливень :cloud_rain:", "Облачно :cloud:", "Переменная облачность :partly_sunny:"];
            if (args[1].startsWith("!"))
           {
               var t = parseInt(args[1].substring(1));
               city = "Задана температура: " + args[1].substring(1)
           }
           if (message.content.toLowerCase().includes("пукан") || message.content.toLowerCase().includes("блейз") || message.content.toLowerCase().includes("блазе") || message.content.toLowerCase().includes("комп") || message.content.toLowerCase().includes("ад") || message.content.toLowerCase().includes("ноут"))
           {
               t = Math.floor((Math.random() * 100) % 100);
           }
           if (message.content.toLowerCase().includes("макс") || message.content.toLowerCase().includes("maks") || message.content.toLowerCase().includes("лёд") || message.content.toLowerCase().includes("ледян"))
           {
               t = Math.floor((Math.random() * 120) % 120) - 100;
           }
           if (message.content.toLowerCase().includes("антаркти"))
           {
               t = Math.floor((Math.random() * 110) % 110) - 90;
           }
           if (message.content.toLowerCase().includes("санкт") || message.content.toLowerCase().includes("петербург") || message.content.toLowerCase().includes("спб"))
           {
               v += 10;
           }
           if (message.content.toLowerCase().includes("космос"))
           {
               t = Math.floor((Math.random() * 400) % 400) - 240;
           }
           if (message.content.toLowerCase().includes("венера") || message.content.toLowerCase().includes("меркурий") || message.content.toLowerCase().includes("солнц"))
           {
               t = Math.floor((Math.random() * 150) % 150) + 350;
           }

           if (t < -273) t = -273;
           if (t > 199)
           {
               r = ["Космос :black_large_square: ", "Космос :black_large_square: "]
               s = 0;
               v = 0;
               d = 1;
           }
           if (t < 200)
           {
               r = ["Огонь! :fire: ", "Огонь! :fire: "]
           }
           if (t < 51)
           {
               r = ["Солнечно :sunny:", "Ясно :sunny:", "Солнечно :sunny:", "Ясно :sunny:", "Гроза :cloud_lightning:", "Гроза :cloud_lightning:", "Гроза :cloud_lightning:"]
               s = Math.floor((Math.random() * 5) % 5);
               d = Math.floor((Math.random() * 6) % 6) + 770;
           }
           if (t < 30)
           {
               r = ["Солнечно :sunny:", "Ясно :sunny:", "Солнечно :sunny:", "Ясно :sunny:", "Гроза :cloud_lightning:"]
               s = Math.floor((Math.random() * 7) % 7);
               d = Math.floor((Math.random() * 12) % 12) + 765;
           }
           if (t < 20)
           {
               s = Math.floor((Math.random() * 9) % 9);
               d = Math.floor((Math.random() * 15) % 15) + 760;
               r = ["Солнечно :sunny:", "Ясно :sunny:", "Солнечно :sunny:", "Ясно :sunny:", "Небольшой дождь :cloud_rain:", "Переменная облачность :partly_sunny:", "Гроза :thunder_cloud_rain:"];
           }
           if (t < 0)
           {
               d = Math.floor((Math.random() * 17) % 17) + 760;
               s = Math.floor((Math.random() * 11) % 11);
               r = ["Ясно :sunny:", "Снег :cloud_snow: ", "Облачно :cloud:", "Переменная облачность :partly_sunny:", "Туман :wind_blowing_face: "];
           }
           if (t < -20)
           {
               d = Math.floor((Math.random() * 12) % 12) + 750;
               s = Math.floor((Math.random() * 17) % 17);
               r = ["Снег :cloud_snow: ", "Облачно :cloud:", "Переменная облачность :partly_sunny:", "Туман :wind_blowing_face: ", "Снег :cloud_snow: ", "Облачно :cloud:", "Переменная облачность :partly_sunny:"];
           }
           if (t < -32)
           {
               d = Math.floor((Math.random() * 16) % 16) + 740;
               s = Math.floor((Math.random() * 25) % 25);
               r = ["Ясно :sunny:", "Снег :cloud_snow: ", "Туман :wind_blowing_face: ", "Ясно :sunny:", "Снег :cloud_snow: "];
           }
           if (t < -41)
           {
               d = Math.floor((Math.random() * 23) % 23) + 730;
               s = Math.floor((Math.random() * 40) % 40);
               r = ["Ясно :sunny:", "Снег :cloud_snow: "]
           }
           if (t < -99)
           {
               r = ["Космос :black_large_square: ", "Космос :black_large_square: "]
               s = 0;
               v = 0;
               d = 1;
           }
           if (s > 15)
           {
               r = ["Сильный ветер :dash:", "Очень сильный ветер :dash:"]
           }
           if (s > 35)
           {
               r = ["Буря :cloud_tornado:", "Ураган :cloud_tornado:"]
           }
           var r = r[Math.floor(Math.random() * r.length)];
           message.channel.sendMessage("", {
  embed: {
    color: 16766976,
    description: "**" + city + "**\n" + r + "\n :thermometer: " + t + "°C\n :droplet: Влажность: **" + v + "%**\n :control_knobs: Давление: **" + d + "** мм. рт. ст.\n :dash: Скорость ветра: **" + s + "** м/с"
        }
    }
     );
        }
        else
        {
            message.channel.sendMessage("Использование команды: `$weather [населённый пункт]`")
        }
       }

    if (RucommandIs("reverse", message))
    {
        var text = args.join(" ").substring(9); // Make a string of the text after the command label
        text = text.split("").reverse().join(""); // Reverse the string
        message.channel.sendMessage(text);
    }

if (RucommandIs("calc", message))
{
    var n1 = parseInt(args[1]);
    var n2 = parseInt(args[3]);
    var n12;
    if (args.length !== 4)
    {
        message.channel.sendMessage("Что-то пошло не так...");
    }
    else
    {
    if (args[2] === "+")
    {
        n12 = n1 + n2;
    }
    else if (args[2] === "-")
    {
        n12 = n1 - n2;
    }
    else if (args[2] === "*")
    {
        n12 = n1 * n2;
    }
    else if (args[2] === "%")
    {
        n12 = n1 % n2;
    }
    else if (args[2] === "/")
    {
        n12 = n1 / n2;
        if (n2 === 0)
        {
          n12 = "Infinity";
        }
    }
    else { message.channel.sendMessage("Что-то пошло не так..."); }
    message.channel.sendMessage(n12);
}
}

if (RucommandIs("if", message))
{
    if (args.length < 8)
    {
        message.channel.sendMessage("Что-то пошло не так...");
    }
    var n1 = parseInt(args[1]);
    var n2 = parseInt(args[3]);
    var n3 = parseInt(args[5]);
    var n12;
    if (args[2] === "+")
    {
        n12 = n1 + n2;
    }
    else if (args[2] === "-")
    {
        n12 = n1 - n2;
    }
    else if (args[2] === "*")
    {
        n12 = n1 * n2;
    }
    else if (args[2] === "/")
    {
        n12 = n1 / n2;
    }
    else { message.channel.sendMessage("Что-то пошло не так...")}
    var operation = args[6];
    var text = args[7];
    if (operation === "sendMessage")
    {
    if (args[4] === "=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 != n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else { message.channel.sendMessage("Что-то пошло не так...")}
}
if (operation === "reply")
    {
    if (args[4] === "=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 != n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else { message.channel.sendMessage("Что-то пошло не так...")}
}

if (args.length > 8 && args[8] === "else")
{
    var operation2 = args[9];
    var text2 = args[10];
    if (operation2 === "sendMessage")
    {
        if (args[4] === "=")
    {
        if (n12 !== n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    }
    if (operation2 === "reply")
    {
        if (args[4] === "=")
    {
        if (n12 !== n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    }
}
}


    if (RucommandIs("cod3breaker", message))
    {
        var n1 = Math.floor((Math.random() * 20) % 20 + 1) + 1;
        var n2 = Math.floor((Math.random() * 50) % 50 + 2) + n1;
        var n3 = Math.floor((Math.random() * 70) % 70 + 3) + n2;
        var n4 = Math.floor((Math.random() * 90) % 90 + 4) + n3;
        var n5 = Math.floor((Math.random() * 130) % 130 + 5) + n4;
        var n6 = Math.floor((Math.random() * 160) % 160 + 6) + n5;

        var n11 = n2 - n1;
        var n12 = n3 - n2;
        var n13 = n4 - n3;
        var n14 = n5 - n4;
        var n15 = n6 - n5;
        var cod = n11.toString() + n12.toString() + n13.toString() + n14.toString() + n15.toString()
        message.channel.sendMessage(n1);
        message.channel.sendMessage(n2);
        message.channel.sendMessage(n3);
        message.channel.sendMessage(n4);
        message.channel.sendMessage(n5);
        message.channel.sendMessage("**" + n6 + "**");
        message.channel.awaitMessages(response => response.content.toLowerCase() === cod, {
                max: 1,
                time: 999999999,
                errors: ['time'],
                })
                .then((collected) => {
                //если ответ правильный
                message.channel.sendMessage("YOU HAVE DOOMED US ALL!");
            });
    }

        if (RucommandIs("repeat", message))
        {
            var times = parseInt(args[1]);
            var repeat;
            if (times > 50)
            {
                message.channel.sendMessage("Ты чо, сломать меня захотел? Лимит - 50. И точка.");
            }
            else
            {
            var len = 9 + args[1].length;
            message.channel.sendMessage("Подождите... я готовлюсь к атаке сообщениями...").then(m => {
           setTimeout(function(){   m.delete(); for (repeat = 0; repeat < times; repeat++)
        {
            message.channel.sendMessage(args.join(" ").substring(len));
        }  }, times * 200)});
            }
    }


    if (RucommandIs("file", message))
    {
        if (message.content.includes("1") || message.content.includes("2") || message.content.includes("3") || message.content.includes("4") || message.content.includes("5") || message.content.includes("6") || message.content.includes("7") || message.content.includes("8") || message.content.includes("9") || message.content.includes("0"))
        {
            message.channel.sendMessage("Не используйте числа");
        }
        else
        {
        var fs = require("fs");

        if(args[1] === "new")
        {
            if (args.length < 4)
            {
                message.channel.sendMessage("А что мне написать в файле-то?");
            }
            else
            {
        var fs = require("fs");
        var filename = args[2];
        var filetext = message.content.substring(7 + filename.length);
        fs.writeFile(filename, filetext);
        var data = fs.readFile(filename, "utf8");

        message.channel.sendMessage("Файл **" + filename + "** записан!");
    }
        }
    else if (args[1] === "read")
    {
         if (args.length < 3)
            {
                message.channel.sendMessage("А какой файл читать?");
            }
            else
            {
         var fs = require("fs");
         fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
         var fileContent = fs.readFileSync(args[2], "utf8");
         console.log(fileContent);
         message.channel.sendMessage("Содержимое файла **" + args[2] + "** ```" + fileContent + "```");
        }
    }
    else
    {
        message.channel.sendMessage("Такого файла не существует :c");
    }
});
    }
    }
    else if (args[1] === "add")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        fs.appendFile(args[2], " " + args[3], function(error){
                if(error) throw error; // если возникла ошибка
                var data = fs.readFileSync(args[2], "utf8");
        });
        message.channel.sendMessage("Файл **" + args[2] + "** изменён!");
    }
        }
        else
        {
             message.channel.sendMessage("Такого файла не существует :c");
        }
        });
    }
    else if (args[1] === "rename")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        var fileContent = fs.readFileSync(args[2], "utf8");
        fs.writeFile(args[3], fileContent);
        message.channel.sendMessage("Файл переименован!");
        fs.unlinkSync(args[2]);
    }
        }
        else
        {
            message.channel.sendMessage("Такого файла не существует :c");
        }
        });
    }
    else if (args[1] === "delete")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
            fs.unlinkSync(args[2]);
            message.channel.sendMessage("Файл **" + args[2] + "** удалён")
        }
    }
    else
    {
        message.channel.sendMessage("Такого файла не существует :c");
    }
        });
}
    else if (args[1] === "import")
    {
        var fs = require("fs");
        fs.open(args[4], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        var data = fs.readFileSync(args[4], "utf8");
        fs.writeFile(args[2], data);
        message.channel.sendMessage("Файл **" + args[2] + "** импортирован");
    }
        }
        else
        {
             message.channel.sendMessage("Такого файла не существует :c");
        }
        });
    }

    else if (args[1] === "exist")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        message.channel.sendMessage("Файл **" + args[2] + "** существует");
        }
        }
        else
        {
             message.channel.sendMessage("Такого файла не существует :c");
        }
        });
    }
        }
}


    if (RucommandIs("channelwrite", message))
    {
        try {
            if (args[1].includes("rules") || args[1].includes("news") || args[1].includes("info") || args[1].includes("log") || args[1].includes("announc"))
            {
                message.channel.sendMessage("Запрещено!");
            }
            else
            {
                message.guild.channels.filter(c => c.name === args[1]).first().sendMessage(args.join(" ").substring(14 + args[1].length));
                message.delete();
            }
            }
            catch(err)
            {
                message.channel.sendMessage("Канал не найден!");
            }
    }

    if (RucommandIs("gg", message))
    {
        var gg = ["GG! :D","Молодец! c:","Поздравляю :grin:", "Ну чё, круто!", "Классно, поздравляю! :DD", ":D"];
        var gg2 = gg[Math.floor(Math.random() * gg.length)];
        message.channel.sendMessage(gg2);
    }


    if (RucommandIs("response", message))
    {
        var res1 = args[1];
        var res2 = args[2];
        var res3 = parseInt(args[3]);
        var res4 = parseInt(args[4]);

        message.channel.awaitMessages(response => response.content.toLowerCase() === res1, {
                max: res4,
                time: res3 * 1000,
                errors: ['time'],
                })
                .then((collected) => {
                //если ответ правильный
                message.channel.sendMessage(res2);
            });
    }

    if (RucommandIs("yandex", message))
    {
        var texty = args.join("%20").substring(8);
        var texty2 = texty.substring(2);
        message.channel.sendMessage("https://yandex.ru/search/?text=" + texty2 + "&clid=1955453&banerid=6400000000%3A5785deae8b62710017b62395&win=237&lr=2");
    }

    if (RucommandIs("youtube", message))
    {
        var textyt = args.join("+").substring(9);
        message.channel.sendMessage("https://www.youtube.com/results?search_query=" + textyt);
    }

    if (RucommandIs("$yes", message))
    {
        message.delete();
        message.channel.sendMessage("^^ tru");
    }

    if (RucommandIs("$no", message))
    {
        message.delete();
        message.channel.sendMessage("^^ no");
    }

    if (RucommandIs("$lol", message))
    {
        message.delete();
        message.channel.sendMessage("^^ lol");
    }

    if (RucommandIs("$mehheh", message))
    {
        message.delete();
        message.channel.sendMessage(")0)");
    }

    if (RucommandIs("$ehohtrulala", message))
    {
        message.delete();
        message.channel.sendMessage(")0))00))");
    }

    if (RucommandIs("who", message))
     {
        var mbm = ["Mineblaze","GordonCMBrony","GordonHL2","Startul Rtural","Agmund","AlexFalcon","Shadow618","Zeavel","Ryu","Сиба","Красибит","TheFox","Dimas12345","Modnyak","MrReides","Stor","Реигок","Vlad17","Азри","DaBomber","Sheet0k","JerryMLGColumbus","Killhtf","MaksTheBest","Merise","Vlad Lemon","БП","Ден Моисеев","я","Стентер","Kofirs","SteepLord","TheMysticSword","Элдельвейс","Гигантский Харвестер", "Фантом", "Мстуториал", "Монтферрат", "Юми Хаташи", "Блейз", "Азя", "ты", "ты", "RobTop", "Джулуйо", "ГеоДашер", "Скайлэйк", "Ник"];
        var mbmc = mbm[Math.floor(Math.random() * mbm.length)];
        var mbmy = ["Я думаю, это ","Это точно ","Это определённо ","Я считаю, что это ","Это, наверное, ","Это скорее всего ","Это ","Это никто иной как ","", "Я уверен, что это ", "Да, официально, это конечно же ", "Ну конечно же ", "Так-с, сейчас, ответ куда-то под печку закатился... Ага! Это "];
        var mbmy2 = mbmy[Math.floor(Math.random() * mbmy.length)];
        message.channel.sendMessage(mbmy2 + mbmc);
    }

    if (RucommandIs("2who", message))
    {
        var mbm = ["Mineblaze","GordonCMBrony","GordonHL2","Startul Rtural","Agmund","AlexFalcon","Shadow618","Zeavel","Ryu","Сиба","Красибит","TheFox","Dimas12345","Modnyak","MrReides","Stor","Реигок","Vlad17","Азри","DaBomber","Sheet0k","JerryMLGColumbus","Killhtf","MaksTheBest","Merise","Vlad Lemon","БП","Ден Моисеев","я","Стентер","Kofirs","SteepLord","TheMysticSword","Элдельвейс","Гигантский Харвестер", "Фантом", "Мстуториал", "Монтферрат", "Юми Хаташи", "Блейз", "Азя"];
        var mbmc = mbm[Math.floor(Math.random() * mbm.length)];

        var mbm2 = ["Mineblaze","GordonCMBrony","GordonHL2","Startul Rtural","Agmund","AlexFalcon","Shadow618","Zeavel","Ryu","Сиба","Красибит","TheFox","Dimas12345","Modnyak","MrReides","Stor","Реигок","Vlad17","Азри","DaBomber","Sheet0k","JerryMLGColumbus","Killhtf","MaksTheBest","Merise","Vlad Lemon","БП","Ден Моисеев","я","Стентер","Kofirs","SteepLord","TheMysticSword","Элдельвейс","Гигантский Харвестер", "Фантом", "Мстуториал", "Монтферрат", "Юми Хаташи", "Блейз", "Азя", "ты!", "ты!"];
        var mbmc2 = mbm2[Math.floor(Math.random() * mbm2.length)];

        var mbmy = ["Я думаю, это ","Это точно ","Это определённо ","Я считаю, что это ","Это, наверное, ","Это скорее всего ","Это ","Это никто иной как ","", "Я уверен, что это ", "Да, официально, это конечно же ", "Ну конечно же ", "Так-с, сейчас, ответ куда-то под печку закатился... Ага! Это "];
        var mbmy2 = mbmy[Math.floor(Math.random() * mbmy.length)];

        var andor = [" и ", " или ", ", а также ", ", ну и конечно же ", ", а может быть и "];
        andor = andor[Math.floor(Math.random() * andor.length)];

        message.channel.sendMessage(mbmy2 + mbmc + andor + mbmc2);
    }

    if (RucommandIs("nor", message))
    {
         var nor = ["Убить","Пожаловать","Пожалеть","Казнить","Продать","Оставить","Пройти","Сжечь","Утопить","Убрать","Переместить","Удалить","Кинуть","Выкинуть","Забанить","Кикнуть","Выгнать","Застрелить","Отдать","Взять","Построить","Побить","Избить","Сделать","Скрафтить","Сочинить","Уничтожить"];
         var nor2 = nor[Math.floor(Math.random() * nor.length)];
         var nor3 = nor[Math.floor(Math.random() * nor.length)];
         message.channel.sendMessage(nor2 + ", нельзя " + nor3.toLowerCase());
    }


  if (RucommandIs("poll yes_no", message))
  {
      if (args.length < 2)
      {
          message.channel.sendMessage('Использование команды: `$poll yes_no [вопрос]`')
      }
      else
      {
    message.channel.sendMessage(args.join(" ").substring(12)).then((msg) => {
    msg.react("👎");
    msg.react("👍");
    msg.react("😐");
  });
  message.delete();
      }
}

 if (RucommandIs("poll options", message))
  {
      if (args2.length < 2)
      {
          message.channel.sendMessage('Использование команды: `$poll options [вопрос] | [вариант 1] | <варианты от 2 до 5>`')
      }
      else
      {
          var q = args2[0].substring(13);
          var one = args2[1];

          var final = q + "\n" + "Если **" + one + "**, поставьте :regional_indicator_a:";
          if (args2.length > 2)
          {
             var two = args2[2];
             final += "\n" + "Если **" + two + "**, поставьте :regional_indicator_b:";
          }
          if (args2.length > 3)
          {
             var three = args2[3];
             final += "\n" + "Если **" + three + "**, поставьте :regional_indicator_c:";
          }
          if (args2.length > 4)
          {
             var four = args2[4];
             final += "\n" + "Если **" + four + "**, поставьте :regional_indicator_d:";
          }
          if (args2.length > 5)
          {
             var five = args2[5];
             final += "\n" + "Если **" + five + "**, поставьте :regional_indicator_e:";
          }

          
    message.channel.sendMessage(final).then((msg) => {
    msg.react("🇦");
    if (args2.length > 2)
          {
             msg.react("🇧");
          }
          if (args2.length > 3)
          {
             msg.react("🇨");
          }
          if (args2.length > 4)
          {
             msg.react("🇩");
          }
          if (args2.length > 5)
          {
             msg.react("🇪");
          }
  });
  message.delete();
      }
}



        if (RucommandIs("choose", message))
    {
        if (message.content === "$choose help")
        {
            message.channel.sendMessage('Команда `$choose` выбирает одно из нескольких введённых значений. Использование: `$choose [слово 1] [слово 2] <слово 3> <слово 4> <слова от 5 до 10>`. В угловых скобках `<>` - не обязательно')
        }
        else if (args2.length === 2)
        {
            var choose3 = [args2[1], args2[2]];
            message.channel.sendMessage(choose3[Math.floor(Math.random() * choose3.length)]);
        }
        else if (args2.length === 3)
        {
            var choose4 = [args2[1], args2[2], args2[3]];
            message.channel.sendMessage(choose4[Math.floor(Math.random() * choose4.length)]);
        }
        else if (args2.length === 4)
        {
            var choose5 = [args2[1], args2[2], args2[3], args2[4]];
            message.channel.sendMessage(choose5[Math.floor(Math.random() * choose5.length)]);
        }
        else if (args2.length === 5)
        {
            var choose6 = [args2[1], args2[2], args2[3], args2[4], args2[5]];
            message.channel.sendMessage(choose6[Math.floor(Math.random() * choose6.length)]);
        }
        else if (args2.length === 6)
        {
            var choose7 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6]];
            message.channel.sendMessage(choose7[Math.floor(Math.random() * choose7.length)]);
        }
        else if (args2.length === 7)
        {
            var choose8 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7]];
            message.channel.sendMessage(choose8[Math.floor(Math.random() * choose8.length)]);
        }
        else if (args2.length === 8)
        {
            var choose9 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7], args2[8]];
            message.channel.sendMessage(choose9[Math.floor(Math.random() * choose9.length)]);
        }
        else if (args2.length === 9)
        {
            var choose10 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7], args2[8], args2[9]];
            message.channel.sendMessage(choose10[Math.floor(Math.random() * choose10.length)]);
        }
        else if (args2.length === 10)
        {
            var choose11 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7], args2[8], args2[9], args2[10]];
            message.channel.sendMessage(choose11[Math.floor(Math.random() * choose11.length)]);
        }

        else if (args2.length > 10)
        {
            message.channel.sendMessage('Слишком много аргументов. Использование: `$choose [слово 1] [слово 2] <до 10 слов>`');
        }
    }

        if (RucommandIs("kill", message))
    {
            message.channel.sendMessage("ok killed");
    }

    if (RucommandIs("stopshineysor", message))
    {
        message.channel.sendMessage("**ERROR 618!!! Can't stop Shiney's Or!!!**\nHere are the error details:\nCan't read properly: `nierjsoernsreozisshiney\454trTR45t6\Or;`\nAlso this: `www.shiney.lol/Rtrst56trt618Trtstgfst/or.html`\nCan't handle this error: `shiney.oret.Trtrj45`\n\n**Have a nice day!**");
    }

        if (RucommandIs("when", message))
    {
            var when = ["Завтра","Через день","Через 2 дня","Через 3 дня","Через 4 дня","Через 5 дня","Через 6 дней","Через неделю","Через 10 дней","Через 2 недели","Через 3 недели","Через месяц","Через 2 месяца","Через 3 месяца","Через 4 месяца","Через 5 месяцев","Через полгода","Через 10 месяцев","Через год","Через 2 года","Через 3 года","Через 4 года","Через 5 лет","Через 10 лет","Через 15 лет","Через 20 лет","Через 25 лет","Через 30 лет","Через 50 лет","Через 100 лет","В 3016 году","25 февраля","На Новый Год...\n\n... 3017 года","Через миллион лет","Через миллиард лет","После уничтожения Вселенной","Никогда"];
            message.channel.sendMessage(when[Math.floor(Math.random() * when.length)]);
    }

    if (RucommandIs("where", message))
    {
            var where = ["В Австралии","В Антарктиде","Прямо за тобой. Обернись!","На другой планете","В другой Галактике","В другой Вселенной","На планете гроксов","В Центре Галактики","В шахте","В школе, когда тебя вызовут к доске","На улице Леннишевского, дом 69","В Мухосранске","Я хз","Не знаю","Спроси у Агмунда","Спроси у другого бота... на другом сервере","Не мешай!","Под кроватью","В твоём новом уровне","В Bloodbath","На работе твоих родителей. Надеюсь, у них есть работа","В Америке","В Англии", "Внутри тебя!", "В Стириа Маднез))", "В доме Фантома", "В печке Блейза", "На кухне шелестит", "У тебя дома", "У себя дома", "Где-то там", "Где-то там, в горах", "Только что забрался на Эверест. Просил передать привет!", "Там же, где и все", "Как обычно, за гаражами пiво пьёт", "А ты сам не знаешь?", "Чо ты меня позвал", "Там где я хочу", "На небесах!", "На седьмом небе от счастья!", "idk lol", "Она ушла от тебя к другому..."];
            message.channel.sendMessage(where[Math.floor(Math.random() * where.length)]);
    }

        if (RucommandIs("why", message))
    {
            var why = ["Это было предсказано тысячи лет назад мудрейшими учёными","Звёзды сошлись","Предсказал Жириновский","Так надо","Нам пришла эта СМСка... от Разума","Надо, так надо","Не знаю","Спроси у Агмунда","Спроси у другого бота... на другом сервере","Не мешай!", "Как почему? Я так хочу!", "Хм... я думаю, что... а никак я не думаю", "Потому что ты вчера двойку получил, это тебе наказание!"];
            message.channel.sendMessage(why[Math.floor(Math.random() * why.length)]);
    }

        if (RucommandIs("how", message))
    {
            var how = ["На тебя шип упадёт","Тебе помогут друзья. У тебя же есть НАСТОЯЩИЕ друзья?","Не знаю","Спроси у Агмунда","Спроси у другого бота... на другом сервере","Не мешай!","BB пройдёшь", "FF пройдёшь"];
            message.channel.sendMessage(how[Math.floor(Math.random() * how.length)]);
    }

        if (RucommandIs("manyhow", message))
    {
            var h1 = Math.floor((Math.random() * 500) % 500 + 1);
            var h2 = h1 + Math.floor((Math.random() * 500) % 500 + 1);
            var howm = ["От " + h1 + " до " + h2 + ". Точно не помню","Вроде " + h1 + "?","Больше " + h1 + ", это точно","Не больше " + h2,"От " + h1 + " до " + h2 + " вроде... не помню","От " + h1 + " до " + h2 + "? Я угадал?",h1 + "!",h2 + "!",h1 + "-" + h2 + "где-то","Тебе это так важно знать?","Что? Я не услышал, скажи ещё раз","Не больше " + h2 + ", это я тебе гарантирую","Не больше " + h1 + ", это я тебе гарантирую"];
            message.channel.sendMessage(howm[Math.floor(Math.random() * howm.length)]);
    }


    if (RucommandIs("loadlvl", message))
    {
      if (args.length !== 2)
      {
        message.channel.sendMessage("Использование команды: `$loadlvl [уровень]`");
        return;
      }
      var name = args[1];

      fs.open(name + ".lvl", 'wx', (err, fd) => {
              if (err) {
                  if (err.code == "EEXIST") {
                      var world = fs.readFileSync(name + ".lvl", "utf8");

                message.channel.sendMessage("", {
            embed: {
             color: 16777215,
             title: "Уровень `" + name + "`",
             description: world
                 }
             }
            );
                  }
              }
              else {
                  message.channel.sendMessage("Не найден уровень!");
              }
          });

}

if (RucommandIs("loadmap", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Использование команды: `$loadmap [название карты]`");
    return;
  }
  var name = args[1];

  fs.open(name + ".wld", 'wx', (err, fd) => {
          if (err) {
              if (err.code == "EEXIST") {
                  var world = fs.readFileSync(name + ".wld", "utf8");

            message.channel.sendMessage("", {
        embed: {
         color: 16777215,
         title: "Карта `" + name + "`",
         description: world
             }
         }
        );
              }
          }
          else {
              message.channel.sendMessage("Не найдена карта!");
          }
      });

}

    if (RucommandIs("genlvl", message))
{
  var prob = 0;
  if (args.length !== 3)
  {
    message.channel.sendMessage("Использование команды: `$genlvl [название] [размер]`");
    return;
  }
  var name = args[1];
  var size = parseInt(args[2]);
  fs.writeFileSync(name + ".lvl", "");
        for (var y = 0; y < size; y++)
        {
          for (var x = 0; x < size; x++)
          {
            var tile = ["<:sp:336945353796485140>", "<:bl:336945353821782016>", "<:bl:336945353821782016>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>"];
            tile = tile[Math.floor(Math.random() * tile.length)];
            fs.appendFileSync(name + '.lvl', tile);
          }
          fs.appendFileSync(name + '.lvl', "\n");
        }

        message.channel.sendMessage("", {
    embed: {
     color: 16766976,
     title: name,
     description: fs.readFileSync(name + '.lvl', "utf8")
         }
     }
    );
}


        if (RucommandIs("plus", message))
    {
        if (message.content === "$plus")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$plus [число 1] [число 2]`');
        }
        else if (message.content === "$plus help")
        {
            message.channel.sendMessage('Использование команды `$plus`:\nДанная команда позволяет сложить 2 числа (`[число 1]` и `[число 2]`). Ввод команды: `$plus [число 1] [число 2]`')
        }
        else if (args[1] > 1000000000 || args[2] > 1000000000)
        {
            message.channel.sendMessage('Слишком огромное число');
        }
        else if (args.length === 3)
        {
        message.channel.sendMessage(parseInt(args[1]) + parseInt(args[2]));
        }
        else if (args.length === 4)
        {
        message.channel.sendMessage(parseInt(args[1]) + parseInt(args[2]) + parseInt(args[3]));
        }
        else if (args.length === 5)
        {
        message.channel.sendMessage(parseInt(args[1]) + parseInt(args[2]) + parseInt(args[3]) + parseInt(args[4]));
        }
    }

        if (RucommandIs("minus", message))
    {
        if (message.content === "$minus")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$minus [число 1] [число 2]`');
        }
        else if (message.content === "$minus help")
        {
            message.channel.sendMessage('Использование команды `$minus`:\nДанная команда позволяет вычитать 2 числа (`[число 1]` и `[число 2]`). Ввод команды: `$minus [число 1] [число 2]`')
        }
            else if (args[1] > 1000000000 || args[2] > 1000000000)
        {
            message.channel.sendMessage('Слишком огромное число');
        }
        else if (args.length === 3)
        {
        message.channel.sendMessage(parseInt(args[1]) - parseInt(args[2]));
        }
            else if (args.length === 4)
        {
        message.channel.sendMessage(parseInt(args[1]) - parseInt(args[2]) - parseInt(args[3]));
        }
            else if (args.length === 5)
        {
        message.channel.sendMessage(parseInt(args[1]) - parseInt(args[2]) - parseInt(args[3]) - parseInt(args[4]));
    }

    }

        if (RucommandIs("multiply", message))
    {
        if (message.content === "$multiply")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$multiply [число 1] [число 2]`');
        }
        else if (message.content === "$multiply help")
        {
            message.channel.sendMessage('Использование команды `$multiply`:\nДанная команда позволяет умножить 2 числа (`[число 1]` и `[число 2]`). Ввод команды: `$multiply [число 1] [число 2]`')
        }
        else if (args[1] > 1000000000 || args[2] > 1000000000)
        {
            message.channel.sendMessage('Слишком огромное число');
        }
        else if (args.length === 3)
        {
        message.channel.sendMessage(parseInt(args[1]) * parseInt(args[2]));
        }
            else if (args.length === 4)
        {
        message.channel.sendMessage(parseInt(args[1]) * parseInt(args[2]) * parseInt(args[3]));
        }
            else if (args.length === 5)
        {
        message.channel.sendMessage(parseInt(args[1]) * parseInt(args[2]) * parseInt(args[3]) * parseInt(args[4]));
    }
    }

        if (RucommandIs("divide", message))
    {
        if (message.content === "$divide")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$divide [число 1] [число 2]`');
        }
        else if (message.content === "$divide help")
        {
            message.channel.sendMessage('Использование команды `$divide`:\nДанная команда позволяет разделить одно число на другое (`[число 1]` и `[число 2]`). Ввод команды: `$divide [число 1] [число 2]`')
        }
        else if (args[1] > 1000000000 || args[2] > 1000000000)
        {
            message.channel.sendMessage('Слишком огромное число');
        }
        else if (args.length === 3)
        {
            if (args[2] === "0" && args[1] === "0")
            {
                message.channel.sendMessage("Infinity");
            }
            else
            if (args[2] === "0")
            {
                message.channel.sendMessage("Делить на 0 - преступление против человечности!");
            }
            else
            {
        message.channel.sendMessage(parseInt(args[1]) / parseInt(args[2]));
            }
        }
            else if (args.length === 4)
        {
        message.channel.sendMessage(parseInt(args[1]) / parseInt(args[2]) / parseInt(args[3]));
        }
            else if (args.length === 5)
        {
        message.channel.sendMessage(parseInt(args[1]) / parseInt(args[2]) / parseInt(args[3]) / parseInt(args[4]));
    }
    }

       if (RucommandIs("ost", message))
    {
        if (message.content === "$ost")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$ost [число 1] [число 2]`');
        }
        if (message.content === "$ost help")
        {
            message.channel.sendMessage('Использование команды `$ost`:\nДанная команда позволяет найти остаток от деления числа 1 на число 2 (`[число 1]` и `[число 2]`). Ввод команды: `$ost [число 1] [число 2]`')
        }
        else if (args[1] > 1000000000 || args[2] > 1000000000)
        {
            message.channel.sendMessage('Слишком огромное число');
        }
        else if (args.length === 3)
        {
        message.channel.sendMessage(parseInt(args[1]) % parseInt(args[2]));
        }
            else if (args.length === 4)
        {
        message.channel.sendMessage(parseInt(args[1]) % parseInt(args[2]) % parseInt(args[3]));
        }
            else if (args.length === 5)
        {
        message.channel.sendMessage(parseInt(args[1]) % parseInt(args[2]) % parseInt(args[3]) % parseInt(args[4]));
    }
    }

           if (RucommandIs("random", message))
    {
        if (message.content === "$random")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$random [число]`');
        }
        else if (message.content === "$random help")
        {
            message.channel.sendMessage('Команда `$random` позволяет найти случайное число от 1 до заданного (`[число]`). Использование: `$random [число]`');
        }
        else if (message.content.includes(',') || message.content.includes('.') || message.content.includes('^') || message.content.includes('?') || message.content.includes('!') || message.content.includes('%') || message.content.includes('#') || message.content.includes('@') || message.content.includes('*') || message.content.includes('+') || message.content.includes('/') || message.content.includes('=') || message.content.includes('(') || message.content.includes(')'))
        {
            message.channel.sendMessage('Используйте только числа');
        }
        else if (args[1] < 1)
        {
            message.channel.sendMessage('Используйте числа больше 0');
        }
        else if (args[1] > 999999999)
        {
            message.channel.sendMessage("Слишком большое число");
        }
        else
        {
           message.channel.sendMessage(Math.floor((Math.random() * 1000000000) % args[1] + 1));
        }
    }

    if (RucommandIs("createlvl", message))
    {
        if (message.content === "$createlvl help")
        {
            message.channel.sendMessage('Команда `$createlvl` позволяет создать уровень со случайными данными (он будет не настоящим). Использование: `$createlvl`');
        }
        else
        {
            var chance = Math.floor((Math.random() * 4) % 4);
            if (chance === 1)
            {
                var name = ['Afraid', 'Scientic Hell', 'Engine', 'Day', 'Summer', 'Night', 'Fight', 'Game', 'Step', 'Space', 'Jelly', 'Flight', 'Wall', 'Eye', 'World', 'Worlds ', 'Sign', 'Universe', 'Land', 'Lands', 'Hill', 'Mountain', 'Aether'];
            }
            else
            {
           var name1 = ['B', 'C', 'D', 'K', 'M', 'L', 'G', 'H', 'P', 'R', 'T', 'V', 'Z', 'X'];
           var name2 = ['a', 'e', 'u', 'o', 'y', 'i', '', ''];
           var name3 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'v', 'z', 'p', 't', 's', 'q', '', ''];
           var name4 = ['a', 'e', 'o', 'y', 'i', 'l', '', '', ''];
           var name = [name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)]];
            }
           var namepre = ['Shadow ', 'Fire ', 'The ', 'A ', 'An ', 'Absolete ', 'Dark ', 'The Great ', 'Double ', 'Triple ', 'Everlasting ', 'Alter ', 'Meow', 'Jelly ', 'Sunny ', ' Watching ', 'Burning ', 'The Eater of ', 'Multi ', 'Red ', 'Green ', 'Blue ', 'Black ', 'High ', 'Slimy ', 'Cursed '];
           var namepre2 = namepre[Math.floor(Math.random() * namepre.length)];
           var namepast = [' of Fire', ' Fire', 'ness', ' of the Dark', ' of Dark', 'ful', ' X', '', ''];
           var namepast2 = namepast[Math.floor(Math.random() * namepast.length)];
           var length1 = ['Medium', 'Long', 'XL'];
           var length2 = length1[Math.floor(Math.random() * length1.length)];
           var likes = Math.floor((Math.random() * 1000000) % 1000000);
           var id = Math.floor((Math.random() * 1000000000) % 100000000);
           var difficulty = ['Easy', 'Normal', 'Hard', 'Harder', 'Insane', 'Easy Demon', 'Medium Demon', 'Hard Demon', 'Insane Demon', 'Extreme Demon', 'Auto'];
           var lvlcreator = ['Viprin','Adiale','ZenthicAlpha','Tama_N','Serponge','FunnyGame','Cody','Dorabae','Michigun','Mineblaze','Shadow618','Sheet0k','LolDudex','JefryKawaii','MysticSword','haoN','Lemons','Danolex','Peton','Izhar','UserMatt18','BobRatchet','Rustam','God Of Music','CreatorJerkRat','Skitten','Findexi','F3lixsram','Optical','SirHadoken','Experience D','KFAOpitar','Pauze','Superopi','Tongii','Jayuff','Etzer','Dudex','TheRealDarnoc','Pipenashho','Mulpan','DarwinGD','Filaret','Namtar','OmegaFalcon','MrPPS','Thomartin','Jeyzor','Alkali','Nasgubb','Shockwing','Agmund','Startul','ZelLink','Glittershroom','Gelt','Minesap','Echonox','Pineapple','Water','VFG','Colon','TheRealDorami','Mazl','TriAxis','Rob Buck','RobTop','Ghostface','TrueNature','TrueChaos','Sumsar','ASonicMen','Noobas', 'RobTop', 'Parash', 'AlexFalcon', 'Torch121', 'FishAndrew'];
           var lvlcreator2 = lvlcreator[Math.floor(Math.random() * lvlcreator.length)];
           var name2 = namepre2 + name[Math.floor(Math.random() * name.length)] + namepast2;
           var difficulty2 = difficulty[Math.floor(Math.random() * difficulty.length)];

           message.channel.sendMessage(" ", {
  embed: {
    color: 16766976,
    title: 'Название уровня',
    description: name2,
    fields: [{
        name: 'ID уровня',
        value: id
      },
      {
        name: 'Автор',
        value: lvlcreator2
      },
      {
        name: 'Сложность',
        value: difficulty2
      },
      {
        name: 'Длина',
        value: length2
      },

      {
        name: 'Сколько лайков',
        value: likes
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Geometrician'
    }
  }
});
           console.log(lvlcreator2 + ' created a level ' + name2 + ' ' + id);
        }
    }

        if (RucommandIs("createdslvl", message))
    {
            var chance = Math.floor((Math.random() * 4) % 4);
            if (chance === 1)
            {
                var name = ['Afraid', 'Scientic Hell', 'Engine', 'Day', 'Summer', 'Night', 'Fight', 'Game', 'Step', 'Space', 'Jelly', 'Flight', 'Wall', 'Eye', 'World', 'Worlds ', 'Sign', 'Universe', 'Land', 'Lands', 'Hill', 'Mountain', 'Aether'];
            }
            else
            {
           var name1 = ['B', 'C', 'D', 'K', 'M', 'L', 'G', 'H', 'P', 'R', 'T', 'V', 'Z', 'X'];
           var name2 = ['a', 'e', 'u', 'o', 'y', 'i', '', ''];
           var name3 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'v', 'z', 'p', 't', 's', 'q', '', ''];
           var name4 = ['a', 'e', 'o', 'y', 'i', 'l', '', '', ''];
           var name = [name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)]];
            }
           var namepre = ['Shadow ', 'Fire ', 'The ', 'A ', 'An ', 'Absolete ', 'Dark ', 'The Great ', 'Double ', 'Triple ', 'Everlasting ', 'Alter ', 'Meow', 'Jelly ', 'Sunny ', ' Watching ', 'Burning ', 'The Eater of ', 'Multi ', 'Red ', 'Green ', 'Blue ', 'Black ', 'High ', 'Slimy ', 'Cursed '];
           var namepre2 = namepre[Math.floor(Math.random() * namepre.length)];
           var namepast = [' of Fire', ' Fire', 'ness', ' of the Dark', ' of Dark', 'ful', ' X', '', ''];
           var namepast2 = namepast[Math.floor(Math.random() * namepast.length)];
           var length1 = ['Short', 'Long', 'XL'];
           var length2 = length1[Math.floor(Math.random() * length1.length)];
           var likes = Math.floor((Math.random() * 1000000) % 1000000);
           var id = Math.floor((Math.random() * 1000000000) % 100000000);
           var difficulty = ['Easy', 'Normal', 'Hard', 'Harder', 'Insane', 'Angel', 'Ghost', "Extreme Ghost"];
           var lvlcreator = ['DubstepJoltik','KasSanity','Mineblaze','Tama_N','Vexinox','DSWiosna','LockedDBZ','cos8o','CryptJupiter','RyanR678','Oscartwinb','ValeMeroa','ChasePlayz10000','CitherYT','MysticSword','CrypticSpider','Greenhal77','FlashThunderYT','dexboss','IvRussia','Switch','Flameboy624','TinyBoris','Ruflosh','Leontic','Asri3L'];
           var lvlcreator2 = lvlcreator[Math.floor(Math.random() * lvlcreator.length)];
           var name2 = namepre2 + name[Math.floor(Math.random() * name.length)] + namepast2;
           var difficulty2 = difficulty[Math.floor(Math.random() * difficulty.length)];

           message.channel.sendMessage(" ", {
  embed: {
    color: 16766976,
    title: 'Название уровня',
    description: name2,
    fields: [{
        name: 'ID уровня',
        value: id
      },
      {
        name: 'Автор',
        value: lvlcreator2
      },
      {
        name: 'Сложность',
        value: difficulty2
      },
      {
        name: 'Длина',
        value: length2
      },

      {
        name: 'Сколько лайков',
        value: likes
      }
    ]
  }
});
           console.log(lvlcreator2 + ' created a DS level ' + name2 + ' ' + id);
        }

    if (message.content === "facepalm")
    {
        message.channel.sendMessage(":face_palm:");
        message.delete();
    }

    if (RucommandIs("write", message))
    {
        message.delete();
        message.channel.startTyping();
        setTimeout(function() { message.channel.sendMessage(args.join(" ").substring(7));  message.channel.stopTyping(); }, message.content.length * 100);
    }


    if (RucommandIs("say", message))
    {
        if (message.content === "$say")
        {
            message.channel.sendMessage('Слишком мало аргументов. Использование: `$say [текст]`');
        }
        else if(message.content === "$say help")
        {
            message.channel.sendMessage('**Использование команды `$say`**\n```$say [текст]```\nТекст - то, что бот вам ответит. Обязательно для заполнения')
        }
        else if(message.content.includes("$say $say $say"))
        {
            message.channel.sendMessage("Нет уж!");
        }
        else if (args[1] === "timeout")
        {
            if (args.length < 4)
            {
                 message.channel.sendMessage("Использование: `$say timeout [секунды] [сообщение]`");
            }
            else
            {
            var time = parseInt(args[2]) * 1000;
            var tile = args[2].length;
            var tisu = 13 + tile;
            message.delete();
            setTimeout(function() { message.channel.sendMessage(args.join(" ").substring(tisu)); }, time);
            }
        }
        else
        {
            message.channel.sendMessage(args.join(" ").substring(5));
            message.delete();
        }
    }



//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
// ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//


    if (EncommandIs("help", message))
    {
        var help = "You are reading the help text about the **Unreal Megablaze** bot\n";
        help += "Bot was created by: **@Mineblaze#6804**\n\n";

        help += " **Command types:**\n";
        help += "  1. Basic commands: **e$basichelp**\n";
        help += "  2. Math: **e$mathhelp**\n";
        help += "  3. File system: **e$fhelp**\n";
        help += "  4. Custom worlds: **e$bhelp**\n";
        help += "  5. Fun and games: **e$funhelp**\n\n";

        message.channel.sendMessage(help);
    }

    if (EncommandIs("basichelp", message))
    {
        var b = "**Basic commands**\n\n";

        b += " **e$help** - main help command\n";
        b += " **e$say [text]** - bot will say your text. Don't forget to add 'Manage Messages' permission to the bot.\n";
        b += " **e$reverse [text]** - reverse the text.\n";
        b += " **e$uptime** - how much time is the bot online after the last restart.\n";
        b += " **e$servers** - how much servers have this bot.\n";
        b += " **e$poll yes_no [text]** - create a 'yes/no' poll.\n";
        b += " **e$poll options [text] | [option 1] | [options from 2 to 5, separating with |]** - Create a poll with multiple answer options. Don't forget to separate options with **|** symbol.\n";
        b += " **e$write [text]** - make the bot 'Unreal Megablaze is typing...', then it will say your message like e$say.";

        message.channel.sendMessage(b);
    }


    if (EncommandIs("mathhelp", message))
    {
        var m = "**Math commands**\n\n";

        m += " **e$calc [number] [math option] [number]** - do a math operation. Use **/** to divide.\n";
        m += " **e$if [number] [math option] [number] [> < =] [number] sendMessage [text (without spaces)] <else> sendMessage <text (without spaces)>** - 'if-else' operation.\n";

        message.channel.sendMessage(m);
    }

    if (EncommandIs("fhelp", message))
    {
        var f = "**File commands\n\n";

        f += " **e$file new [name] [text]** - create a file. If it already exists, it will be overwritten.\n";
        f += " **e$file read [name]** - read the file.\n";
        f += " **e$file add [name] [text]** - add a word into the file.\n";
        f += " **e$file exists [name]** - if that file exists.\n";
        f += " **e$file delete [name]** - delete a file.\n";

        message.channel.sendMessage(f);
    }

    if (EncommandIs("funhelp", message))
    {
        var f = "**Fun and games**\n\n";

        f += " **e$kill** - kill smby or smth.\n";
        f += " **e$choose [options are separated with |]** - choose on of 2-10 options. Don't forget the **|**'s.\n";
        f += " **e$random [max number]** - choose a random number from 0 to entered max number.\n";
        f += " **e$cod3breaker** - Geometry Dash quest.\n";
        f += " **e$generate [world size 1-8] [world type]** - generate a Polytopia world.\n";
        f += " **e$texttoimage [text]** - turn the text into image.\n";
        f += " **e$gg** - GG man...\n";
        f += " **e$repeat [1-50] [text]** - repeat a message several times. Don't use that if spam is forbidden on a server.\n";
        f += " **e$youtube [text]** - search in YouTube.\n";
        f += " **e$createlvl** - 'create' a level in Geometry Dash.\n";
        f += " **e$createdslvl** - 'create' a level in Dashy Square.\n";
        f += " **e$channelwrite [channel name] [text]** - writes in another channel.\n";
        f += " **e$genlvl [name] [size]** - generate a 1-second Geometry Dash 'level'.\n"
        f += " **e$customgen [name] [size] [tiles (emoji or text, every tile in separated with a space)]** - custom generation. You can add up to 11 tiles.";

        message.channel.sendMessage(f);
    }


if (EncommandIs('texttoimage', message))
{
  if (args.length === 1)
  {
    message.channel.sendMessage("Usage: `e$texttoimage [text]`");
    return;
  }
  var text = message.content.substring(13);
  var Canvas = require('canvas-prebuilt'),
    canvas = new Canvas(500, 80),
    ctx = canvas.getContext('2d'),
    fs = require('fs');

var out = fs.createWriteStream(__dirname + '/image.png'), stream = canvas.createPNGStream();

  stream.on('data', function(chunk){
    out.write(chunk);
  });

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 500, 80);
  ctx.save();

  ctx.fillStyle = '#aaa'
  ctx.fillRect(0, 0, 0, 0);

  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText(text, 5, 20);

  ctx.beginPath();
  ctx.arc(0, 0, 0, 0, 0);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

message.channel.sendFile(__dirname + '/image.png', 'image.png');

}

    if (EncommandIs("game", message))
    {
          var game = message.content.substring(6);
          message.channel.sendMessage("", {
       embed: {
       color: 6482429,
       description: "Set the game to: **" + game + "**"
           }
       }
       );
       client.user.setGame(game + " | e$help");
        }


if (EncommandIs("bhelp", message))
{
  message.channel.sendMessage("```bash\ne$build [world name] - create an empty world\ne$worldadd [world name] [tile] - add tile into the world\ne$worldn [world name] - go to the next line\ne$worldreset [world name] - clear the world\ne$worldread [world name] - read the world\ne$worldbackup [world name] - create a backup of a world\ne$loadbackup [world name] - load a backup\ne$addline [world name] [several tiles]```")
}

if (EncommandIs("build", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$build [world name]`");
  }
  else
  {
    var name = args[1];
    fs.writeFileSync(name + ".bwld", "");
    message.channel.sendMessage("Successfully created a new world! Use these commands:\n```bash\ne$worldadd [world name] [tile] - add tile into the world\ne$worldn [world name] - go to the next line\ne$worldreset [world name] - clear the world```");
  }
}

if (EncommandIs("worldadd", message))
{
  if (args.length !== 3)
  {
    message.channel.sendMessage("Usage: `e$worldadd [world name] [tile]`");
  }
  else
  {
    var name = args[1];
    var tile = args[2];

    fs.appendFileSync(name + ".bwld", tile);
    message.channel.sendMessage("Successfully added tile **" + tile + "** в world **" + name + "**!\nUse these commands:\n```bash\ne$worldadd [world name] [tile] - add tile into the world\ne$worldn [world name] - go to the next line\ne$worldreset [world name] - clear the world\ne$worldread [world name] - read the world```")
  }
}

if (EncommandIs("addline", message))
{
  if (args.length < 3)
  {
    message.channel.sendMessage("Usage: `e$addline [world name] [several tiles]`");
  }
  else
  {
    var name = args[1];
    var line = message.content.substring(10 + name.length);

    fs.appendFileSync(name + ".bwld", line);
    fs.appendFileSync(name + ".bwld", "\n");
    message.channel.sendMessage("Successfully added a line **" + line + "** into the world **" + name + "**!\nUse these commands:\n```bash\ne$worldadd [world name] [tile] - add tile into the world\ne$worldn [world name] - go to the next line\ne$worldreset [world name] - clear the world\ne$worldread [world name] - read the world```")
  }
}


if (EncommandIs("worldn", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$worldn [world name]`");
  }
  else
  {
    var name = args[1];
    fs.appendFileSync(name + ".bwld", "\n");
    message.channel.sendMessage("Done!\n\nUse these commands:\n```bash\ne$worldadd [world name] [tile] - add tile into the world\ne$worldn [world name] - go to the next line\ne$worldreset [world name] - clear the world\ne$worldread [world name] - read the world```");
  }
}

if (EncommandIs("worldreset", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$worldreset [world name]`");
  }
  else
  {
    var name = args[1];
    fs.writeFileSync(name + ".bwld", "");
    message.channel.sendMessage("World recreated!\n\nUse these commands:\n```bash\ne$worldadd [world name] [tile] - add tile into the world\ne$worldn [world name] - go to the next line\ne$worldreset [world name] - clear the world\ne$worldread [world name] - read the world```");
  }
}

if (EncommandIs("worldread", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$worldread [world name]`");
  }
  else
  {
    var name = args[1];
    var world = fs.readFileSync(name + ".bwld", "utf8");
    message.channel.sendMessage("World **" + name + "**\n" + world);
  }
}

if (EncommandIs("worldbackup", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$worldbackup [world name]`");
  }
  else
  {
    var name = args[1];
    var world = fs.readFileSync(name + ".bwld", "utf8");
    fs.writeFileSync(name + "--backup.bwld", world);
    message.channel.sendMessage("Created a **" + name + "**'s backup!");
  }
}

if (EncommandIs("loadbackup", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$loadbackup [world name]`");
  }
  else
  {
    var name = args[1];
    var world = fs.readFileSync(name + "--backup.bwld", "utf8");
    fs.writeFileSync(name + ".bwld", world);
    message.channel.sendMessage("Loaded a backup of **" + name + "**!");
  }
}

if (EncommandIs("customgen", message))
{
  if (args.length < 4)
  {
    message.channel.sendMessage("Usage: `!customgen [name of the world] [size] [tile 1] <tiles from 2 to 11 (optional)>`");
  }
  else
  {
    var name = args[1];
    fs.writeFileSync(name + ".wld", "");
    var size = parseInt(args[2]);
    var tile1 = args[3];

    for (var y = 0; y < size; y++)
    {
      for (var x = 0; x < size; x++)
      {
        var tile = tile1;
        fs.appendFileSync(name + ".wld", tile);
      }
      fs.appendFileSync(name + ".wld", "\n");
    }
    if (args.length > 4)
    {
      var tile2 = args[4];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 5)
    {
      var tile3 = args[5];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 6)
    {
      var tile4 = args[6];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 7)
    {
      var tile5 = args[7];

      fs.writeFileSync(name + ".wld", "");

      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 8)
    {
      var tile6 = args[8];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 9)
    {
      var tile7 = args[9];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 10)
    {
      var tile8 = args[10];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }
    if (args.length > 11)
    {
      var tile9 = args[11];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }

    if (args.length > 12)
    {
      var tile10 = args[12];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }

    if (args.length > 13)
    {
      var tile11 = args[13];

      fs.writeFileSync(name + ".wld", "");
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync(name + ".wld", tile);
        }
        fs.appendFileSync(name + ".wld", "\n");
      }
    }

    message.channel.sendMessage("", {
embed: {
 color: 16766976,
 title: "Custom map `" + name + "`, size " + size + "x" + size,
 description: fs.readFileSync(name + ".wld", "utf8")
     }
 }
);
  }
}


if (EncommandIs("generate", message))
{
  if (args.length !== 3)
  {
    message.channel.sendMessage("Usage: `!generate [size] [world type]`");
  }
  else
  {
    fs.writeFileSync("world.txt", "");
    var size = parseInt(args[1]);
    var type = args[2];
    var world = " ";

    if (size < 2)
    {
      message.channel.sendMessage("Too small world!");
      return;
    }
    if (size > 9)
    {
      message.channel.sendMessage("Too big world!");
      return;
    }

    if (type === "normal")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:w_:336588833040891904>", "<:m_:336588833925627904>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:f_:336588834022227968>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );


    }

    else if (type === "flat")
    {
      for (var y = 0; y < size; y++)
      {
        for (var x = 0; x < size; x++)
        {
          var tile = ["<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );


    }

    else if (type === "mountain")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:m_:336588833925627904>", "<:m_:336588833925627904>", "<:m_:336588833925627904>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );


    }

    else if (type === "forest")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:f_:336588834022227968>", "<:f_:336588834022227968>", "<:m_:336588833925627904>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:g_:336588833682358272>", "<:f_:336588834022227968>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );

    }

    else if (type === "ocean")
    {
      for (var y = 0; y < size; y++)
      {
        // <:mountainimperius:336558089782427652>
        // <:water:336558089874702336>
        // <:grass:336558089941680128>
        // <:forest:336558090428350465>

        for (var x = 0; x < size; x++)
        {
          var tile = ["<:m_:336588833925627904>", "<:w_:336588833040891904>", "<:w_:336588833040891904>", "<:w_:336588833040891904>", "<:w_:336588833040891904>", "<:g_:336588833682358272>", "<:w_:336588833040891904>", "<:w_:336588833040891904>"];
          tile = tile[Math.floor(Math.random() * tile.length)];
          fs.appendFileSync('world.txt', tile);
        }
        fs.appendFileSync('world.txt', "\n");
      }

      message.channel.sendMessage("", {
  embed: {
   color: 16766976,
   description: fs.readFileSync("world.txt", "utf8")
       }
   }
  );
    }

    else
    {
      message.channel.sendMessage("World types:\nnormal\nflat\nmountain\nforest\nocean");
    }
  }
}

if (message.content === "thinking")
{
  message.delete();
  message.channel.sendMessage(":thinking:");
}

if (message.content === "babakappa")
{
  message.delete();
  message.channel.sendMessage("<:babaKappa:310069824355303424>");
}

if (message.content === "tHINKing")
{
  message.delete();
  message.channel.sendMessage("<:tHINKIng:333644899658235904>");
}

if (message.content === "spinthinking")
{
  message.delete();
  message.channel.sendMessage("<:thinkingspinned:333695701949218828>");
}

if (message.content === "thonk")
{
  message.delete();
  message.channel.sendMessage("<:thonk:333987270925484032>");
}

       if (EncommandIs("uptime", message))
       {
           var timee = client.uptime / 1000;
           type = "seconds"
           timee.toFixed(1);
           console.log(timee);
           if (timee > 60)
           {
               timee /= 60;
               type = "minutes";
               if (timee > 60)
               {
                   timee /= 60;
                   type = "hours";
               }
           }
           message.channel.sendMessage("```ml\nUnreal Megablaze is online for " + timee.toFixed(1).toString() + " " + type + "```");
       }

       if (EncommandIs("servers", message))
    {
        message.channel.sendMessage("```ml\nUnreal Megablaze exists on " + client.guilds.size + " server (s)```");
    }

    if (EncommandIs("reverse", message))
    {
        var text = args.join(" ").substring(9);
        text = text.split("").reverse().join("");
        message.channel.sendMessage(text);
    }

if (EncommandIs("calc", message))
{
    var n1 = parseInt(args[1]);
    var n2 = parseInt(args[3]);
    var n12;
    if (args.length !== 4)
    {
        message.channel.sendMessage("Something went wrong...");
    }
    else
    {
    if (args[2] === "+")
    {
        n12 = n1 + n2;
    }
    else if (args[2] === "-")
    {
        n12 = n1 - n2;
    }
    else if (args[2] === "*")
    {
        n12 = n1 * n2;
    }
    else if (args[2] === "%")
    {
        n12 = n1 % n2;
    }
    else if (args[2] === "/")
    {
        n12 = n1 / n2;
        if (n2 === 0)
        {
          n12 = "Infinity";
        }
    }
    else { message.channel.sendMessage("Something went wrong..."); }
    message.channel.sendMessage(n12);
}
}

if (EncommandIs("if", message))
{
    if (args.length < 8)
    {
        message.channel.sendMessage("Something went wrong...");
    }
    var n1 = parseInt(args[1]);
    var n2 = parseInt(args[3]);
    var n3 = parseInt(args[5]);
    var n12;
    if (args[2] === "+")
    {
        n12 = n1 + n2;
    }
    else if (args[2] === "-")
    {
        n12 = n1 - n2;
    }
    else if (args[2] === "*")
    {
        n12 = n1 * n2;
    }
    else if (args[2] === "/")
    {
        n12 = n1 / n2;
    }
    else { message.channel.sendMessage("Something went wrong...")}
    var operation = args[6];
    var text = args[7];
    if (operation === "sendMessage")
    {
    if (args[4] === "=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 != n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else { message.channel.sendMessage("Something went wrong...")}
}
if (operation === "reply")
    {
    if (args[4] === "=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 != n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text);
        }
    }
    else { message.channel.sendMessage("Something went wrong...")}
}

if (args.length > 8 && args[8] === "else")
{
    var operation2 = args[9];
    var text2 = args[10];
    if (operation2 === "sendMessage")
    {
        if (args[4] === "=")
    {
        if (n12 !== n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    }
    if (operation2 === "reply")
    {
        if (args[4] === "=")
    {
        if (n12 !== n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === ">")
    {
        if (n12 < n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "!=")
    {
        if (n12 === n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    else if (args[4] === "<")
    {
        if (n12 > n3)
        {
            message.channel.sendMessage(text2);
        }
    }
    }
}
}


    if (EncommandIs("cod3breaker", message))
    {
        var n1 = Math.floor((Math.random() * 20) % 20 + 1) + 1;
        var n2 = Math.floor((Math.random() * 50) % 50 + 2) + n1;
        var n3 = Math.floor((Math.random() * 70) % 70 + 3) + n2;
        var n4 = Math.floor((Math.random() * 90) % 90 + 4) + n3;
        var n5 = Math.floor((Math.random() * 130) % 130 + 5) + n4;
        var n6 = Math.floor((Math.random() * 160) % 160 + 6) + n5;

        var n11 = n2 - n1;
        var n12 = n3 - n2;
        var n13 = n4 - n3;
        var n14 = n5 - n4;
        var n15 = n6 - n5;
        var cod = n11.toString() + n12.toString() + n13.toString() + n14.toString() + n15.toString()
        message.channel.sendMessage(n1);
        message.channel.sendMessage(n2);
        message.channel.sendMessage(n3);
        message.channel.sendMessage(n4);
        message.channel.sendMessage(n5);
        message.channel.sendMessage("**" + n6 + "**");
        message.channel.awaitMessages(response => response.content.toLowerCase() === cod, {
                max: 1,
                time: 999999999,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.sendMessage("YOU HAVE DOOMED US ALL!");
            });
    }

        if (EncommandIs("prob", message))
    {
        var prob = Math.floor((Math.random() * 107) % 107) - 2;
        message.channel.sendMessage(prob.toString() + "%");
    }

        if (EncommandIs("repeat", message))
        {
            var times = parseInt(args[1]);
            var repeat;
            if (times > 50)
            {
                message.channel.sendMessage("Ты чо, сломать меня захотел? Лимит - 50. И точка.");
            }
            else
            {
            var len = 9 + args[1].length;
            message.channel.sendMessage("Hold on, I am preparing to a message boom...").then(m => {
           setTimeout(function(){   m.delete(); for (repeat = 0; repeat < times; repeat++)
        {
            message.channel.sendMessage(args.join(" ").substring(len));
        }  }, times * 200)});
            }
    }


    if (message.content.toLowerCase().includes('lmao'))
    {
        message.channel.sendMessage("^^ i'm dеаd");
    }



    if (EncommandIs("file", message))
    {
        if (message.content.includes("1") || message.content.includes("2") || message.content.includes("3") || message.content.includes("4") || message.content.includes("5") || message.content.includes("6") || message.content.includes("7") || message.content.includes("8") || message.content.includes("9") || message.content.includes("0"))
        {
            message.channel.sendMessage("Don't use numbers");
        }
        else
        {
        var fs = require("fs");

        if(args[1] === "new")
        {
            if (args.length < 4)
            {
                message.channel.sendMessage("What to write into the file? Use $fhelp for more info");
            }
            else
            {
        var fs = require("fs");
        var filename = args[2];
        var filetext = message.content.substring(7 + filename.length);
        fs.writeFile(filename, filetext);
        var data = fs.readFile(filename, "utf8");

        message.channel.sendMessage("The file **" + filename + "** is done!");
    }
        }
    else if (args[1] === "read")
    {
         if (args.length < 3)
            {
                message.channel.sendMessage("What file to read? Type $fhelp for more info");
            }
            else
            {
         var fs = require("fs");
         fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
         var fileContent = fs.readFileSync(args[2], "utf8");
         console.log(fileContent);
         message.channel.sendMessage("**" + args[2] + "** ```" + fileContent + "```");
        }
    }
    else
    {
        message.channel.sendMessage("You entered a wrong file. Type $fhelp for more info");
    }
});
    }
    }
    else if (args[1] === "add")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        fs.appendFile(args[2], " " + args[3], function(error){
                if(error) throw error; // если возникла ошибка
                var data = fs.readFileSync(args[2], "utf8");
        });
        message.channel.sendMessage("The file **" + args[2] + "** is edited!");
    }
        }
        else
        {
             message.channel.sendMessage("No file exists. Type $fhelp for more info");
        }
        });
    }
    else if (args[1] === "rename")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        var fileContent = fs.readFileSync(args[2], "utf8");
        fs.writeFile(args[3], fileContent);
        message.channel.sendMessage("The file renamed!");
        fs.unlinkSync(args[2]);
    }
        }
        else
        {
            message.channel.sendMessage("I didn't find any file with that name. Type $fhelp for more info");
        }
        });
    }
    else if (args[1] === "delete")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
            fs.unlinkSync(args[2]);
            message.channel.sendMessage("The file **" + args[2] + "** was deleted")
        }
    }
    else
    {
        message.channel.sendMessage("404 error - no file. Type $fhelp for more info");
    }
        });
}
    else if (args[1] === "import")
    {
        var fs = require("fs");
        fs.open(args[4], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        var data = fs.readFileSync(args[4], "utf8");
        fs.writeFile(args[2], data);
        message.channel.sendMessage("The file **" + args[2] + "** imported!");
    }
        }
        else
        {
             message.channel.sendMessage("Nah, there is no file like that. Type $fhelp for more info");
        }
        });
    }

    else if (args[1] === "exist")
    {
        var fs = require("fs");
        fs.open(args[2], 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
        message.channel.sendMessage("The file **" + args[2] + "** exists");
        }
        }
        else
        {
             message.channel.sendMessage("No result.");
        }
        });
    }
        }
}

function acc_Register()
    {
       if (args.length !== 4)
       {
           message.channel.sendMessage("Usage: `$account register [name (without spaces)] [pass]`");
           return;
       }
       else
       {
           var name = args[2];
           var pass = args[3];
           
           var currentid = parseInt(fs.readFileSync("current.id", "utf8"));
           var id = currentid + 1;
           fs.writeFileSync("current.id", id.toString());

           fs.writeFileSync(id + ".account", name + " " + pass + " 0 0 novice true 00/00/0000");
           fs.writeFileSync(id + ".stats", "100 5 0 2 50");
           // hp dmg def crit_multi money


           message.channel.sendMessage("Saving data...")
           setTimeout(function()
           {
               message.channel.sendMessage("Registered successfully!");
           }, 5000);
           setTimeout(function()
           {
               message.channel.sendMessage("Info:\nName: **" + name + "**\nID: **" + id + "**");
           }, 2000)
           setTimeout(function()
           {
               message.channel.sendMessage("**$account info [id]** - account, XP, rank info.\n**$account delete [id] [pass]** - delete an account.");
           }, 5000)
       }
    }

    function acc_Info()
    {
        if (args.length !== 3)
        {
            message.channel.sendMessage("Usage: `$account info [id]`");
            return;
        }
        else
        {
            var id = args[2];

            fs.open(id + ".account", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
            {
    var filecontent = fs.readFileSync(id + ".account", "utf8");
    var info = filecontent.split(" ");

    var name = info[0];
    var exp = parseInt(info[2]);
    var lvl = parseInt(info[3]);
    var rank = info[4];
    var daily = info[5];

    var rank_text = "Beginner";          if (exp >= 5) lvl = 1;         if (exp >= 10) lvl = 2;         if (exp >= 15) lvl = 3;         if (exp >= 20) lvl = 4;         if (exp >= 25) lvl = 5;          if (exp >= 30) lvl = 6;         if (exp >= 40) lvl = 7;         if (exp >= 50) lvl = 8;         if (exp >= 60) lvl = 9;         if (exp >= 70) lvl = 10;          if (exp >= 80) lvl = 11;         if (exp >= 100) lvl = 12;         if (exp >= 120) lvl = 13;         if (exp >= 140) lvl = 14;         if (exp >= 160) lvl = 15;          if (exp >= 180) lvl = 16;         if (exp >= 210) lvl = 17;         if (exp >= 240) lvl = 18;         if (exp >= 270) lvl = 19;         if (exp >= 300) lvl = 20;          if (exp >= 340) lvl = 21;         if (exp >= 380) lvl = 22;         if (exp >= 420) lvl = 23;         if (exp >= 460) lvl = 24;         if (exp >= 500) lvl = 25;          if (exp >= 550) lvl = 26;         if (exp >= 600) lvl = 27;         if (exp >= 650) lvl = 28;         if (exp >= 700) lvl = 29;         if (exp >= 750) lvl = 30;          if (exp >= 800) lvl = 31;         if (exp >= 875) lvl = 32;         if (exp >= 950) lvl = 33;         if (exp >= 1025) lvl = 34;         if (exp >= 1100) lvl = 35;          if (exp >= 1200) lvl = 36;         if (exp >= 1300) lvl = 37;         if (exp >= 1400) lvl = 38;         if (exp >= 1500) lvl = 39;         if (exp >= 1600) lvl = 40;          if (exp >= 1750) lvl = 41;         if (exp >= 1900) lvl = 42;         if (exp >= 2050) lvl = 43;         if (exp >= 2100) lvl = 44;         if (exp >= 2350) lvl = 45;          if (exp >= 2500) lvl = 46;         if (exp >= 2750) lvl = 47;         if (exp >= 3000) lvl = 48;         if (exp >= 3250) lvl = 49;         if (exp >= 3500) lvl = 50;          if (exp >= 4000) lvl = 51;         if (exp >= 6000) lvl = 52;         if (exp >= 8000) lvl = 53;         if (exp >= 10000) lvl = 54;         if (exp >= 12000) lvl = 55;          if (lvl >= 6)         {             rank = "upgraded";             rank_text = "Upgraded";         }         if (lvl >= 11)         {             rank = "master";             rank_text = "Master";         }         if (lvl >= 16)         {             rank = "grandmaster";             rank_text = "Grandmaster";         }         if (lvl >= 21)         {             rank = "champion";             rank_text = "Champion";         }         if (lvl >= 26)         {             rank = "bronze";             rank_text = "Bronze League";         }         if (lvl >= 31)         {             rank = "silver";             rank_text = "Silver League";         }         if (lvl >= 36)         {             rank = "gold";             rank_text = "Gold League";         }         if (lvl >= 41)         {             rank = "platinum";             rank_text = "Platinum League";         }         if (lvl >= 46)         {             rank = "diamond";             rank_text = "Diamond League";         }         if (lvl >= 51)         {             rank = "king";             rank_text = "King";         }         if (lvl >= 55)         {             rank = "god";             rank_text = "God";         };

    var daily_text;

    if (daily === "true") daily_text = "Can collect daily!"
    else daily_text = "Daily is already collected.";

    message.channel.sendMessage("Found an account. Loading data...")
           setTimeout(function()
           {
               message.channel.sendMessage("Name: **" + name + "**\nID: **" + id + "**\nXP: **" + exp + "**\nLevel: **" + lvl + "**\nRank: **" + rank_text + "**\n" + daily_text);
           }, 5000)
            }
            else
            {
                message.channel.sendMessage("No account found.");
            }
        }
    });
        }
    }

    function acc_Stats()
    {
        if (args.length !== 3)
        {
            message.channel.sendMessage("Usage: `$account stats [id]`");
            return;
        }
        else
        {
            var id = args[2];

            fs.open(id + ".stats", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
            {
                 var filecontent = fs.readFileSync(id + ".account", "utf8");
    var info = filecontent.split(" ");

    var name = info[0];

        var statcontent = fs.readFileSync(id + ".stats", "utf8");
        var stats = statcontent.split(" ");

        var playerhp = parseInt(stats[0]);
        var playerdmg = parseInt(stats[1]);
        var playerdef = parseInt(stats[2]);
        var playercrit = parseInt(stats[3]);
        var playermoney = parseInt(stats[4]);

    message.channel.sendMessage("Account found! Loading data...")
           setTimeout(function()
           {
               message.channel.sendMessage("Stats of account " + name + " (" + id + ")\nHP: **" + playerhp + "**\nDmg: **" + playerdmg + "**\nDef: **" + playerdef + "**\nCrit dmg: **x" + playercrit + "**\nStars: **" + playermoney + "** :star:");
           }, 5000)
            }
            else
            {
                message.channel.sendMessage("No account found!");
            }
        }
    });
        }
    }

    function acc_Delete()
    {
       if (args.length !== 4)
       {
           message.channel.sendMessage("Usage: `$account delete [id] [pass]`");
           return;
       }
       else
       {
           var id = args[2];

           fs.open(id + ".account", 'wx', (err, fd) => {
        if (err)
        {
        if (err.code === "EEXIST")
        {
           var pass_entered = args[3];
           
           var filecontent = fs.readFileSync(id + ".account", "utf8");
           var info = filecontent.split(" ");

           var pass_real = info[1];
           var name = info[0];

           if (pass_entered !== pass_real)            {                message.channel.sendMessage("Wrong pass!");                return;            };

         fs.unlinkSync(id + ".account");
         fs.appendFileSync("debug.js", "\n // ===== Удалён аккаунт ===== \n  //" + id + "\n  //" + name + "\n\n");
               message.channel.sendMessage("Account **" + name + "** (" + id + ") was deleted successfully.")
           setTimeout(function()
           {
               message.channel.sendMessage("You can register a new account: `$account register [name] [pass]`.");
           }, 5000)
    }
    else
    {
        message.channel.sendMessage("No account found!");
    }
               
           }
       });
    }
}


    if (EncommandIs("daily", message))
    {
    if (args.length !== 4)
    {
        message.channel.sendMessage("Usage: `$daily [your ACCOUNT ID] [pass] [ID of a person to rep]`");
        return;
    }

    var id1 = args[1];
    var pass_entered = args[2];
    var id2 = args[3];

    var filecontent1 = fs.readFileSync(id1 + ".account", "utf8");
    var info1 = filecontent1.split(" ");
    
    var filecontent2 = fs.readFileSync(id2 + ".account", "utf8");
    var info2 = filecontent2.split(" ");

    var name1 = info1[0];
    var pass_real1 = info1[1];
    var pass_real2 = info2[1];

    var lvl1 = parseInt(info1[3]);
    var rank1 = info1[4];

    var daily1 = info1[5];
    var daily2 = info2[5];

    var dailydate2 = info2[6];

    var exp1 = parseInt(info1[2]);
    var exp2 = parseInt(info2[2]);

    var lvl2 = parseInt(info2[3]);
    var rank2 = info2[4];

    var name2 = info2[0];

    var daily1 = info1[5];
    var daily_date1 = info1[6];

           if (daily_date1 !== currentDate)
           {
               fs.writeFileSync(id1 + ".account", name1 + " " + pass_real1 + " " + exp1 + " " + lvl1 + " " + rank1 + " true " + daily_date1);
           }

    if (pass_entered !== pass_real1)
           {
               message.channel.sendMessage("Wrong pass!");
               return;
           }

    if (daily1 === "true")
       {
          var new_exp = Math.floor((Math.random() * 12) % 12);
          if (lvl >= 2) new_exp += Math.floor((Math.random() * 12) % 12);
          if (lvl >= 5) new_exp += Math.floor((Math.random() * 12) % 12);
          if (lvl >= 10) new_exp += 6;
          if (lvl >= 15) new_exp += 7;
          if (lvl >= 20) new_exp += 8;
          if (lvl >= 25) new_exp += 9;
          if (lvl >= 30) new_exp += 12;
          if (lvl >= 35) new_exp += 15;
          if (lvl >= 40) new_exp += 20;
          if (lvl >= 45) new_exp += 25;
          if (lvl >= 50) new_exp += 100;
          if (lvl >= 55) new_exp += Math.floor((Math.random() * 250) % 250);

          var newexp1 = Math.ceil(new_exp / 3);
          var newexp2 = Math.ceil(new_exp / 2);

          exp1 += newexp1;
          exp2 += newexp2;

          var id = id1;
          var exp = exp1;
          var lvl = lvl1;
          var rank = rank1;
          var pass_real = pass_real1;

          var rank_text = "Новичок";          if (exp >= 5) lvl = 1;         if (exp >= 10) lvl = 2;         if (exp >= 15) lvl = 3;         if (exp >= 20) lvl = 4;         if (exp >= 25) lvl = 5;          if (exp >= 30) lvl = 6;         if (exp >= 40) lvl = 7;         if (exp >= 50) lvl = 8;         if (exp >= 60) lvl = 9;         if (exp >= 70) lvl = 10;          if (exp >= 80) lvl = 11;         if (exp >= 100) lvl = 12;         if (exp >= 120) lvl = 13;         if (exp >= 140) lvl = 14;         if (exp >= 160) lvl = 15;          if (exp >= 180) lvl = 16;         if (exp >= 210) lvl = 17;         if (exp >= 240) lvl = 18;         if (exp >= 270) lvl = 19;         if (exp >= 300) lvl = 20;          if (exp >= 340) lvl = 21;         if (exp >= 380) lvl = 22;         if (exp >= 420) lvl = 23;         if (exp >= 460) lvl = 24;         if (exp >= 500) lvl = 25;          if (exp >= 550) lvl = 26;         if (exp >= 600) lvl = 27;         if (exp >= 650) lvl = 28;         if (exp >= 700) lvl = 29;         if (exp >= 750) lvl = 30;          if (exp >= 800) lvl = 31;         if (exp >= 875) lvl = 32;         if (exp >= 950) lvl = 33;         if (exp >= 1025) lvl = 34;         if (exp >= 1100) lvl = 35;          if (exp >= 1200) lvl = 36;         if (exp >= 1300) lvl = 37;         if (exp >= 1400) lvl = 38;         if (exp >= 1500) lvl = 39;         if (exp >= 1600) lvl = 40;          if (exp >= 1750) lvl = 41;         if (exp >= 1900) lvl = 42;         if (exp >= 2050) lvl = 43;         if (exp >= 2100) lvl = 44;         if (exp >= 2350) lvl = 45;          if (exp >= 2500) lvl = 46;         if (exp >= 2750) lvl = 47;         if (exp >= 3000) lvl = 48;         if (exp >= 3250) lvl = 49;         if (exp >= 3500) lvl = 50;          if (exp >= 4000) lvl = 51;         if (exp >= 6000) lvl = 52;         if (exp >= 8000) lvl = 53;         if (exp >= 10000) lvl = 54;         if (exp >= 12000) lvl = 55;          if (lvl >= 6)         {             rank = "upgraded";             rank_text = "Улучшенный";         }         if (lvl >= 11)         {             rank = "master";             rank_text = "Мастер";         }         if (lvl >= 16)         {             rank = "grandmaster";             rank_text = "Грандмастер";         }         if (lvl >= 21)         {             rank = "champion";             rank_text = "Чемпион";         }         if (lvl >= 26)         {             rank = "bronze";             rank_text = "Бронзовая Лига";         }         if (lvl >= 31)         {             rank = "silver";             rank_text = "Серебряная Лига";         }         if (lvl >= 36)         {             rank = "gold";             rank_text = "Золотая Лига";         }         if (lvl >= 41)         {             rank = "platinum";             rank_text = "Платиновая Лига";         }         if (lvl >= 46)         {             rank = "diamond";             rank_text = "Бриллиант";         }         if (lvl >= 51)         {             rank = "king";             rank_text = "Король";         }         if (lvl >= 55)         {             rank = "god";             rank_text = "Бог";         };

          fs.writeFileSync(id + ".account", name1 + " " + pass_real + " " + exp + " " + lvl + " " + rank + " false " + currentDate);

          var id = id2;
          var exp = exp2;
          var lvl = lvl2;
          var rank = rank2;
          var pass_real = pass_real2;

          var rank_text = "Новичок";          if (exp >= 5) lvl = 1;         if (exp >= 10) lvl = 2;         if (exp >= 15) lvl = 3;         if (exp >= 20) lvl = 4;         if (exp >= 25) lvl = 5;          if (exp >= 30) lvl = 6;         if (exp >= 40) lvl = 7;         if (exp >= 50) lvl = 8;         if (exp >= 60) lvl = 9;         if (exp >= 70) lvl = 10;          if (exp >= 80) lvl = 11;         if (exp >= 100) lvl = 12;         if (exp >= 120) lvl = 13;         if (exp >= 140) lvl = 14;         if (exp >= 160) lvl = 15;          if (exp >= 180) lvl = 16;         if (exp >= 210) lvl = 17;         if (exp >= 240) lvl = 18;         if (exp >= 270) lvl = 19;         if (exp >= 300) lvl = 20;          if (exp >= 340) lvl = 21;         if (exp >= 380) lvl = 22;         if (exp >= 420) lvl = 23;         if (exp >= 460) lvl = 24;         if (exp >= 500) lvl = 25;          if (exp >= 550) lvl = 26;         if (exp >= 600) lvl = 27;         if (exp >= 650) lvl = 28;         if (exp >= 700) lvl = 29;         if (exp >= 750) lvl = 30;          if (exp >= 800) lvl = 31;         if (exp >= 875) lvl = 32;         if (exp >= 950) lvl = 33;         if (exp >= 1025) lvl = 34;         if (exp >= 1100) lvl = 35;          if (exp >= 1200) lvl = 36;         if (exp >= 1300) lvl = 37;         if (exp >= 1400) lvl = 38;         if (exp >= 1500) lvl = 39;         if (exp >= 1600) lvl = 40;          if (exp >= 1750) lvl = 41;         if (exp >= 1900) lvl = 42;         if (exp >= 2050) lvl = 43;         if (exp >= 2100) lvl = 44;         if (exp >= 2350) lvl = 45;          if (exp >= 2500) lvl = 46;         if (exp >= 2750) lvl = 47;         if (exp >= 3000) lvl = 48;         if (exp >= 3250) lvl = 49;         if (exp >= 3500) lvl = 50;          if (exp >= 4000) lvl = 51;         if (exp >= 6000) lvl = 52;         if (exp >= 8000) lvl = 53;         if (exp >= 10000) lvl = 54;         if (exp >= 12000) lvl = 55;          if (lvl >= 6)         {             rank = "upgraded";             rank_text = "Улучшенный";         }         if (lvl >= 11)         {             rank = "master";             rank_text = "Мастер";         }         if (lvl >= 16)         {             rank = "grandmaster";             rank_text = "Грандмастер";         }         if (lvl >= 21)         {             rank = "champion";             rank_text = "Чемпион";         }         if (lvl >= 26)         {             rank = "bronze";             rank_text = "Бронзовая Лига";         }         if (lvl >= 31)         {             rank = "silver";             rank_text = "Серебряная Лига";         }         if (lvl >= 36)         {             rank = "gold";             rank_text = "Золотая Лига";         }         if (lvl >= 41)         {             rank = "platinum";             rank_text = "Платиновая Лига";         }         if (lvl >= 46)         {             rank = "diamond";             rank_text = "Бриллиант";         }         if (lvl >= 51)         {             rank = "king";             rank_text = "Король";         }         if (lvl >= 55)         {             rank = "god";             rank_text = "Бог";         };

          fs.writeFileSync(id + ".account", name2 + " " + pass_real + " " + exp + " " + lvl + " " + rank + " " + daily2 + " " + dailydate2);

          message.channel.sendMessage("Successfully collected the daily!\nYou (" + name1 + ", " + id1 + ") got: **" + newexp1 + "** XP\nAccount **" + name2 + "** (" + id2 + ") got **" + newexp2 + "** XP");
          message.delete();
       }
    }

    if (EncommandIs("account", message))
    {
        switch (args[1])
        {
            case "register":
            acc_Register();
            message.delete();
            break;
            
            case "info":
            acc_Info();
            break;

            case "delete":
            acc_Delete();
            message.delete();
            break;

            case "stats":
            acc_Stats();
            message.delete();
            break;

            default:
            message.channel.sendMessage("Wrong usage.```bash\n$account register [name] [pass]\n$account info [ACCOUNT id]\n$account delete [ACCOUNT id] [pass]```");
            return;
            break;
        }
    }


    if (EncommandIs("channelwrite", message))
    {
        try {
            if (args[1].includes("rules") || args[1].includes("news") || args[1].includes("info") || args[1].includes("log") || args[1].includes("announc"))
            {
                message.channel.sendMessage("Forbidden!");
            }
            else
            {
                message.guild.channels.filter(c => c.name === args[1]).first().sendMessage(args.join(" ").substring(14 + args[1].length));
                message.delete();
            }
            }
            catch(err)
            {
                message.channel.sendMessage("404 error - no channel.");
            }
    }

    if (EncommandIs("gg", message))
    {
        var gg = ["GG! :D","Nice! c:","Awesome :grin:", "Cool!", "GG, man...!", ":D"];
        var gg2 = gg[Math.floor(Math.random() * gg.length)];
        message.channel.sendMessage(gg2);
    }


    if (EncommandIs("response", message))
    {
        var res1 = args[1];
        var res2 = args[2];
        var res3 = parseInt(args[3]);
        var res4 = parseInt(args[4]);

        message.channel.awaitMessages(response => response.content.toLowerCase() === res1, {
                max: res4,
                time: res3 * 1000,
                errors: ['time'],
                })
                .then((collected) => {
                //если ответ правильный
                message.channel.sendMessage(res2);
            });
    }

    if (EncommandIs("youtube", message))
    {
        var textyt = args.join("+").substring(9);
        message.channel.sendMessage("https://www.youtube.com/results?search_query=" + textyt);
    }

    if (EncommandIs("e$yes", message))
    {
        message.delete();
        message.channel.sendMessage("^^ tru");
    }

    if (EncommandIs("e$no", message))
    {
        message.delete();
        message.channel.sendMessage("^^ no");
    }

    if (EncommandIs("e$lol", message))
    {
        message.delete();
        message.channel.sendMessage("^^ lol");
    }

    if (EncommandIs("e$mehheh", message))
    {
        message.delete();
        message.channel.sendMessage(")0)");
    }

        if (message.content.includes("noice"))
    {
        message.channel.sendMessage("^^ tru");
    }

        if (message.content.includes("i'm dead"))
    {
        message.channel.sendMessage("lmао");
    }

  if (EncommandIs("poll yes_no", message))
  {
      if (args.length < 2)
      {
          message.channel.sendMessage('Usage: `e$poll yes_no [text]`')
      }
      else
      {
    message.channel.sendMessage(args.join(" ").substring(12)).then((msg) => {
    msg.react("👎");
    msg.react("👍");
    msg.react("😐");
  });
  message.delete();
      }
}

 if (EncommandIs("poll options", message))
  {
      if (args2.length < 2)
      {
          message.channel.sendMessage('Usage: `e$poll options [text] | [option 1] | <options from 2 to 5>`')
      }
      else
      {
          var q = args2[0].substring(13);
          var one = args2[1];

          var final = q + "\n" + "If **" + one + "**, react with :regional_indicator_a:";
          if (args2.length > 2)
          {
             var two = args2[2];
             final += "\n" + "If **" + two + "**, react with :regional_indicator_b:";
          }
          if (args2.length > 3)
          {
             var three = args2[3];
             final += "\n" + "If **" + three + "**, react with :regional_indicator_c:";
          }
          if (args2.length > 4)
          {
             var four = args2[4];
             final += "\n" + "If **" + four + "**, react with :regional_indicator_d:";
          }
          if (args2.length > 5)
          {
             var five = args2[5];
             final += "\n" + "If **" + five + "**, react with :regional_indicator_e:";
          }

          
    message.channel.sendMessage(final).then((msg) => {
    msg.react("🇦");
    if (args2.length > 2)
          {
             msg.react("🇧");
          }
          if (args2.length > 3)
          {
             msg.react("🇨");
          }
          if (args2.length > 4)
          {
             msg.react("🇩");
          }
          if (args2.length > 5)
          {
             msg.react("🇪");
          }
  });
  message.delete();
      }
}



        if (EncommandIs("choose", message))
    {
        if (args2.length === 2)
        {
            var choose3 = [args2[1], args2[2]];
            message.channel.sendMessage(choose3[Math.floor(Math.random() * choose3.length)]);
        }
        else if (args2.length === 3)
        {
            var choose4 = [args2[1], args2[2], args2[3]];
            message.channel.sendMessage(choose4[Math.floor(Math.random() * choose4.length)]);
        }
        else if (args2.length === 4)
        {
            var choose5 = [args2[1], args2[2], args2[3], args2[4]];
            message.channel.sendMessage(choose5[Math.floor(Math.random() * choose5.length)]);
        }
        else if (args2.length === 5)
        {
            var choose6 = [args2[1], args2[2], args2[3], args2[4], args2[5]];
            message.channel.sendMessage(choose6[Math.floor(Math.random() * choose6.length)]);
        }
        else if (args2.length === 6)
        {
            var choose7 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6]];
            message.channel.sendMessage(choose7[Math.floor(Math.random() * choose7.length)]);
        }
        else if (args2.length === 7)
        {
            var choose8 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7]];
            message.channel.sendMessage(choose8[Math.floor(Math.random() * choose8.length)]);
        }
        else if (args2.length === 8)
        {
            var choose9 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7], args2[8]];
            message.channel.sendMessage(choose9[Math.floor(Math.random() * choose9.length)]);
        }
        else if (args2.length === 9)
        {
            var choose10 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7], args2[8], args2[9]];
            message.channel.sendMessage(choose10[Math.floor(Math.random() * choose10.length)]);
        }
        else if (args2.length === 10)
        {
            var choose11 = [args2[1], args2[2], args2[3], args2[4], args2[5], args2[6], args2[7], args2[8], args2[9], args2[10]];
            message.channel.sendMessage(choose11[Math.floor(Math.random() * choose11.length)]);
        }

        else if (args2.length > 10)
        {
            message.channel.sendMessage('Too много аргументов. Usage: `e$choose [слово 1] [слово 2] <до 10 слов>`');
        }
    }

        if (EncommandIs("kill", message))
    {
            message.channel.sendMessage("ok killed");
    }


    if (EncommandIs("loadlvl", message))
    {
      if (args.length !== 2)
      {
        message.channel.sendMessage("Usage: `e$loadlvl [level]`");
        return;
      }
      var name = args[1];

      fs.open(name + ".lvl", 'wx', (err, fd) => {
              if (err) {
                  if (err.code == "EEXIST") {
                      var world = fs.readFileSync(name + ".lvl", "utf8");

                message.channel.sendMessage("", {
            embed: {
             color: 16777215,
             title: "Level `" + name + "`",
             description: world
                 }
             }
            );
                  }
              }
              else {
                  message.channel.sendMessage("Error 404 - no level exists.");
              }
          });

}

if (EncommandIs("loadmap", message))
{
  if (args.length !== 2)
  {
    message.channel.sendMessage("Usage: `e$loadmap [map name]`");
    return;
  }
  var name = args[1];

  fs.open(name + ".wld", 'wx', (err, fd) => {
          if (err) {
              if (err.code == "EEXIST") {
                  var world = fs.readFileSync(name + ".wld", "utf8");

            message.channel.sendMessage("", {
        embed: {
         color: 16777215,
         title: "World `" + name + "`",
         description: world
             }
         }
        );
              }
          }
          else {
              message.channel.sendMessage("No world existing.");
          }
      });

}

    if (EncommandIs("genlvl", message))
{
  var prob = 0;
  if (args.length !== 3)
  {
    message.channel.sendMessage("Usage: `e$genlvl [name] [size]`");
    return;
  }
  var name = args[1];
  var size = parseInt(args[2]);
  fs.writeFileSync(name + ".lvl", "");
        for (var y = 0; y < size; y++)
        {
          for (var x = 0; x < size; x++)
          {
            var tile = ["<:sp:336945353796485140>", "<:bl:336945353821782016>", "<:bl:336945353821782016>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>", "<:bg:336945490757156866>"];
            tile = tile[Math.floor(Math.random() * tile.length)];
            fs.appendFileSync(name + '.lvl', tile);
          }
          fs.appendFileSync(name + '.lvl', "\n");
        }

        message.channel.sendMessage("", {
    embed: {
     color: 16766976,
     title: name,
     description: fs.readFileSync(name + '.lvl', "utf8")
         }
     }
    );
}


           if (EncommandIs("random", message))
    {
        if (message.content.includes(',') || message.content.includes('.') || message.content.includes('^') || message.content.includes('?') || message.content.includes('!') || message.content.includes('%') || message.content.includes('#') || message.content.includes('@') || message.content.includes('*') || message.content.includes('+') || message.content.includes('/') || message.content.includes('=') || message.content.includes('(') || message.content.includes(')'))
        {
            message.channel.sendMessage('Use only numbers');
        }
        else if (args[1] < 1)
        {
            message.channel.sendMessage('Use numbers more than 0');
        }
        else if (args[1] > 999999999)
        {
            message.channel.sendMessage("Too big number");
        }
        else
        {
           message.channel.sendMessage(Math.floor((Math.random() * 1000000000) % args[1] + 1));
        }
    }

    if (EncommandIs("createlvl", message))
    {
            var chance = Math.floor((Math.random() * 4) % 4);
            if (chance === 1)
            {
                var name = ['Afraid', 'Scientic Hell', 'Engine', 'Day', 'Summer', 'Night', 'Fight', 'Game', 'Step', 'Space', 'Jelly', 'Flight', 'Wall', 'Eye', 'World', 'Worlds ', 'Sign', 'Universe', 'Land', 'Lands', 'Hill', 'Mountain', 'Aether'];
            }
            else
            {
           var name1 = ['B', 'C', 'D', 'K', 'M', 'L', 'G', 'H', 'P', 'R', 'T', 'V', 'Z', 'X'];
           var name2 = ['a', 'e', 'u', 'o', 'y', 'i', '', ''];
           var name3 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'v', 'z', 'p', 't', 's', 'q', '', ''];
           var name4 = ['a', 'e', 'o', 'y', 'i', 'l', '', '', ''];
           var name = [name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)]];
            }
           var namepre = ['Shadow ', 'Fire ', 'The ', 'A ', 'An ', 'Absolete ', 'Dark ', 'The Great ', 'Double ', 'Triple ', 'Everlasting ', 'Alter ', 'Meow', 'Jelly ', 'Sunny ', ' Watching ', 'Burning ', 'The Eater of ', 'Multi ', 'Red ', 'Green ', 'Blue ', 'Black ', 'High ', 'Slimy ', 'Cursed '];
           var namepre2 = namepre[Math.floor(Math.random() * namepre.length)];
           var namepast = [' of Fire', ' Fire', 'ness', ' of the Dark', ' of Dark', 'ful', ' X', '', ''];
           var namepast2 = namepast[Math.floor(Math.random() * namepast.length)];
           var length1 = ['Medium', 'Long', 'XL'];
           var length2 = length1[Math.floor(Math.random() * length1.length)];
           var likes = Math.floor((Math.random() * 1000000) % 1000000);
           var id = Math.floor((Math.random() * 1000000000) % 100000000);
           var difficulty = ['Easy', 'Normal', 'Hard', 'Harder', 'Insane', 'Easy Demon', 'Medium Demon', 'Hard Demon', 'Insane Demon', 'Extreme Demon', 'Auto'];
           var lvlcreator = ['Viprin','Adiale','ZenthicAlpha','Tama_N','Serponge','FunnyGame','Cody','Dorabae','Michigun','Mineblaze','Shadow618','Sheet0k','LolDudex','JefryKawaii','MysticSword','haoN','Lemons','Danolex','Peton','Izhar','UserMatt18','BobRatchet','Rustam','God Of Music','CreatorJerkRat','Skitten','Findexi','F3lixsram','Optical','SirHadoken','Experience D','KFAOpitar','Pauze','Superopi','Tongii','Jayuff','Etzer','Dudex','TheRealDarnoc','Pipenashho','Mulpan','DarwinGD','Filaret','Namtar','OmegaFalcon','MrPPS','Thomartin','Jeyzor','Alkali','Nasgubb','Shockwing','Agmund','Startul','ZelLink','Glittershroom','Gelt','Minesap','Echonox','Pineapple','Water','VFG','Colon','TheRealDorami','Mazl','TriAxis','Rob Buck','RobTop','Ghostface','TrueNature','TrueChaos','Sumsar','ASonicMen','Noobas', 'RobTop', 'Parash', 'AlexFalcon', 'Torch121', 'FishAndrew'];
           var lvlcreator2 = lvlcreator[Math.floor(Math.random() * lvlcreator.length)];
           var name2 = namepre2 + name[Math.floor(Math.random() * name.length)] + namepast2;
           var difficulty2 = difficulty[Math.floor(Math.random() * difficulty.length)];

           message.channel.sendMessage(" ", {
  embed: {
    color: 16766976,
    title: 'Level name',
    description: name2,
    fields: [{
        name: 'ID',
        value: id
      },
      {
        name: 'Author',
        value: lvlcreator2
      },
      {
        name: 'Difficulty',
        value: difficulty2
      },
      {
        name: 'Length',
        value: length2
      },

      {
        name: 'Likes',
        value: likes
      }
    ],
    timestamp: new Date()
  }
});
           console.log(lvlcreator2 + ' created a level ' + name2 + ' ' + id);
        }

        if (EncommandIs("createdslvl", message))
    {
            var chance = Math.floor((Math.random() * 4) % 4);
            if (chance === 1)
            {
                var name = ['Afraid', 'Scientic Hell', 'Engine', 'Day', 'Summer', 'Night', 'Fight', 'Game', 'Step', 'Space', 'Jelly', 'Flight', 'Wall', 'Eye', 'World', 'Worlds ', 'Sign', 'Universe', 'Land', 'Lands', 'Hill', 'Mountain', 'Aether'];
            }
            else
            {
           var name1 = ['B', 'C', 'D', 'K', 'M', 'L', 'G', 'H', 'P', 'R', 'T', 'V', 'Z', 'X'];
           var name2 = ['a', 'e', 'u', 'o', 'y', 'i', '', ''];
           var name3 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'v', 'z', 'p', 't', 's', 'q', '', ''];
           var name4 = ['a', 'e', 'o', 'y', 'i', 'l', '', '', ''];
           var name = [name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4 .length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)], name1[Math.floor(Math.random() * name1.length)] + name2[Math.floor(Math.random() * name2.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)] + name4[Math.floor(Math.random() * name4.length)] + name3[Math.floor(Math.random() * name3.length)]];
            }
           var namepre = ['Shadow ', 'Fire ', 'The ', 'A ', 'An ', 'Absolete ', 'Dark ', 'The Great ', 'Double ', 'Triple ', 'Everlasting ', 'Alter ', 'Meow', 'Jelly ', 'Sunny ', ' Watching ', 'Burning ', 'The Eater of ', 'Multi ', 'Red ', 'Green ', 'Blue ', 'Black ', 'High ', 'Slimy ', 'Cursed '];
           var namepre2 = namepre[Math.floor(Math.random() * namepre.length)];
           var namepast = [' of Fire', ' Fire', 'ness', ' of the Dark', ' of Dark', 'ful', ' X', '', ''];
           var namepast2 = namepast[Math.floor(Math.random() * namepast.length)];
           var length1 = ['Short', 'Long', 'XL'];
           var length2 = length1[Math.floor(Math.random() * length1.length)];
           var likes = Math.floor((Math.random() * 1000000) % 1000000);
           var id = Math.floor((Math.random() * 1000000000) % 100000000);
           var difficulty = ['Easy', 'Normal', 'Hard', 'Harder', 'Insane', 'Angel', 'Ghost', "Extreme Ghost"];
           var lvlcreator = ['DubstepJoltik','KasSanity','Mineblaze','Tama_N','Vexinox','DSWiosna','LockedDBZ','cos8o','CryptJupiter','RyanR678','Oscartwinb','ValeMeroa','ChasePlayz10000','CitherYT','MysticSword','CrypticSpider','Greenhal77','FlashThunderYT','dexboss','IvRussia','Switch','Flameboy624','TinyBoris','Ruflosh','Leontic','Asri3L'];
           var lvlcreator2 = lvlcreator[Math.floor(Math.random() * lvlcreator.length)];
           var name2 = namepre2 + name[Math.floor(Math.random() * name.length)] + namepast2;
           var difficulty2 = difficulty[Math.floor(Math.random() * difficulty.length)];

           message.channel.sendMessage(" ", {
  embed: {
    color: 16766976,
    title: 'Level name',
    description: name2,
    fields: [{
        name: 'ID',
        value: id
      },
      {
        name: 'Author',
        value: lvlcreator2
      },
      {
        name: 'Difficulty',
        value: difficulty2
      },
      {
        name: 'Length',
        value: length2
      },

      {
        name: 'Likes',
        value: likes
      }
    ]
  }
});
           console.log(lvlcreator2 + ' created a DS level ' + name2 + ' ' + id);
        }

    if (message.content === "facepalm")
    {
        message.channel.sendMessage(":face_palm:");
        message.delete();
    }

    if (EncommandIs("write", message))
    {
        message.delete();
        message.channel.startTyping();
        setTimeout(function() { message.channel.sendMessage(args.join(" ").substring(7));  message.channel.stopTyping(); }, message.content.length * 100);
    }


    if (EncommandIs("say", message))
    {
        if(message.content.includes("e$say e$say e$say"))
        {
            message.channel.sendMessage("pls no");
            return;
        }
        else
        {
            message.channel.sendMessage(args.join(" ").substring(5));
            message.delete();
        }
    }
    
});

client.login("MzQ4ODY1OTQzNTc0Njc1NDU2.DHtKPw.8YuhXAMgKOF6RQdvPqwKJ3QPBgE");
