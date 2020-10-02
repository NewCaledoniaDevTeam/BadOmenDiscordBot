const Discord = require("discord.js");
const client = new Discord.Client();
require("./server.js");

client.login("TOKEN");
client.on("ready", () =>
  console.log(`${client.user.tag} has been successfully turned on!`)
);

//Custom Playing Status
const statusList = [
  { msg: "your court cases", type: "LISTENING" },
  { msg: "your language", type: "LISTENING" },
  { msg: "your business meetings", type: "LISTENING" },
  { msg: "the clan elders", type: "LISTENING" },
  { msg: "the text channels", type: "WATCHING" },
  { msg: "Type BadOmen for help", type: "WATCHING" }
];
//randon picks playing status
setInterval(async () => {
  const index = Math.floor(Math.random() * statusList.length + 1) - 1;
  await client.user.setActivity(statusList[index].msg, {
    type: statusList[index].type
  });
}, 60000);
client.on ('message', async message => {

let role = message.guild.roles.find(r => r.name === "HasBadOmen");
//let role = message.guild.roles.get("725156233228845126");
let member = message.member;

//swearWords
const swearWords = ["anal","anus","arse","ass","ballsack","bastard","bitch","biatch","blowjob","blow job","bollock","bollok","boner","boob","bugger","bum","butt","buttplug","clitoris","cock","coon","cunt","damn","dick","dildo","dyke","fag","feck","fellate","fellatio","felching","fuck","f u c k","flange","Goddamn","God damn","hell","homo","jerk","jizz","knobend","knob end","labia","lmfao","muff","nigger","nigga","penis","piss","poop","prick","pube","pussy","queer","scrotum","sex","shit","s hit","sh1t","slut","smegma","spunk","tit","tosser","turd","twat","vagina","wank","whore","wtf","ANAL","ANUS","ARSE","ASS","BALLSACK","BASTARD","BITCH","BIATCH","BLOWJOB","BLOW JOB","BOLLOCK","BOLLOK","BONER","BOOB","BUGGER","BUM","BUTT","BUTTPLUG","CLITORIS","COCK","COON","CUNT","DAMN","DICK","DILDO","DYKE","FAG","FECK","FELLATE","FELLATIO","FELCHING","FUCK","F U C K","FLANGE","GODDAMN","GOD DAMN","HELL","HOMO","JERK","JIZZ","KNOBEND","KNOB END","LABIA","LMFAO","MUFF","NIGGER","NIGGA","PENIS","PISS","POOP","PRICK","PUBE","PUSSY","QUEER","SCROTUM","SEX","SHIT","S HIT","SH1T","SLUT","SMEGMA","SPUNK","TIT","TOSSER","TURD","TWAT","VAGINA","WANK","WHORE","WTF","Anal","Anus","Arse","Ass","Ballsack","Bastard","Bitch","Biatch","Blowjob","Blow Job","Bollock","Bollok","Boner","Boob","Bugger","Bum","Butt","Buttplug","Clitoris","Cock","Coon","Cunt","Damn","Dick","Dildo","Dyke","Fag","Feck","Fellate","Fellatio","Felching","Fuck","F U C K","Flange","Goddamn","God Damn","Hell","Homo","Jerk","Jizz","Knobend","Knob End","Labia","Lmfao","Muff","Nigger","Nigga","Penis","Piss","Poop","Prick","Pube","Pussy","Queer","Scrotum","Sex","Shit","S Hit","Sh1t","Slut","Smegma","Spunk","Tit","Tosser","Turd","Twat","Vagina","Wank","Whore","Wtf", "A$$", "a$$", "swear1", "Sh*t", "F*ck", "Fu"];
 if(swearWords.some(word => message.content.includes(word)) ) {
   message.delete(1000); //delete message

  message.member.send('NO SWEARING ON MY CHRISTIAN MINECRAFT SERVER'); //dms
  message.reply("Article 12: NO SWEARING ON MY CHRISTIAN MINECRAFT SERVER"); // public

  const embed = new Discord.RichEmbed()
    .setColor('#959b9b')
    .setImage("https://i.imgur.com/zarwevP.gif")
    .setTimestamp();
  message.channel.send(embed);
  //message.member.send(embed);
  let role = message.guild.roles.find(r => r.name === "HasBadOmen");
  let member = message.member;
  member.addRole(role).catch(console.error);
}

/*
let role = message.guild.roles.find(r => r.name === "Team Mystic");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role).catch(console.error);

// Remove a role!
member.removeRole(role).catch(console.error);
*/

//milk
const milk = ['milk', 'Milk'];
 if(milk.some(word => message.content.includes(word))) {
   //message.delete(1000); //delete message
  message.member.send('Milk Gang'); //dms
  //message.reply("you have drank"); // public
  const embed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .addField(`you have drank`, `**milk**`)
    .setImage("https://i.imgur.com/JoB8Yaw.png")
    .setTimestamp();
  message.channel.send(embed);
  let role = message.guild.roles.find(r => r.name === "HasBadOmen");
  let member = message.member;
  member.removeRole(role).catch(console.error);
}

//help
  if ((message.content.startsWith(`BadOmen`)) || (message.content.startsWith(`Bad Omen`)) || (message.content.startsWith(`Bad Omen Help`)) || (message.content.startsWith(`BadOmenHelp`))) {
    const embed = new Discord.RichEmbed()
      .setColor('#959b9b')
      .setTitle("help menu")
      .setThumbnail("https://i.imgur.com/zarwevP.gif")
      .addField(`**BadOmen**`, `shows help menu`)
      .addField(`**If you curse**`, `it will delete it and message you`)
      .addField(`**milk**`, `gets rid of Bad Omen`)
      //.setImage("https://i.imgur.com/zarwevP.gif")
      .setTimestamp();

    message.channel.send(embed);
  }
});
//https://discord.com/oauth2/authorize?client_id=725104108515754045&scope=bot&permissions=805829758
//https://discordapp.com/oauth2/authorize?client_id=725104108515754045&scope=bot&permissions=469970110
