const Discord = require('discord.js')
module.exports = {
    name: 'info',
    description: "Info about RoBot",
    category: "Utility",
    execute(message, args){
        const infoembed = new Discord.MessageEmbed()
        .setTitle('**INFO**') 
        .setDescription('RoBot is a multi purpose bot with many fun such as helpful commands! The Prefix of RoBot is R! so when you type a command remember to have it starting with R!') 
        .addField(':tada: Invite RoBot today! :tada:', 'https://discord.com/oauth2/authorize?client_id=737647174959235162&permissions=8&scope=bot') 
        .setThumbnail('https://cdn.discordapp.com/attachments/712709770817175603/779082344501084200/450-200709182334532329.jpg') 
        .setFooter('Made By Alicoolguy') 
        .setColor('BLUE') 
        message.channel.send(infoembed) 
    }
}  