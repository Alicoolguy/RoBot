const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "AliBot shows all commands!",
    category: "help",
    execute(message, args){
       const helpembed = new Discord.MessageEmbed() 
       .setTitle('**HELP**') 
       .addField('Fun :video_game:', '`ping`, `hello`, `underthetree`, `nyancat`, `meme`, `aww`, `pie`, `cake`') 
       .addField('Utility :space_invader:', '`Welcome Message`, `info`') 
       .addField('Admin :tools:', '`kick`')
       .addField('Support Server :thinking:', ' https://discord.gg/Kbss7JG') 
       .setThumbnail('https://media.discordapp.net/attachments/743555490730213457/750216358347669604/VisualEditor_-_Icon_-_Help.svg.png?width=670&height=670')
       .setFooter('Please use R!info for more info')
       .setColor('RANDOM') 
       message.channel.send(helpembed) 
    }
}  