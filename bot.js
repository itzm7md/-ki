 const Discord = require('discord.js');
const client = new Discord.Client();
	 const adminprefix = "#";
const devs = ['405795595450712081' , '472573894323077150' , '431474404007084035'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغير البلاينق **`)
} else
if (message.content.startsWith(adminprefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/faresgameryt");
    message.channel.sendMessage(`**تم تغير الستريمنق  ${argresult}**`)
} else
	if (message.content.startsWith(adminprefix+ 'wh')) {
  client.user.setActivity(argresult, {type: "WATCHING"});
    message.channel.sendMessage(`**${argresult} تم تغير الواتشنق **`)
	}else 
		if (message.content.startsWith(adminprefix+ 'l')) {
  client.user.setActivity(argresult, {type: "LISTENING"});
message.channel.sendMessage(`**${argresult} تم تغير اللسننق **`)
		}
client.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            Rocket.destroy();s
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }


    });
});
 client.login(process.env.BOT_TOKEN);
