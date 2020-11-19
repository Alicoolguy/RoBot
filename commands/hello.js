const Discord = require('discord.js')
module.exports = {
    name: 'hello',
    description: "AliBot says Hello!",
    category: "fun",
    execute(message, args){
        const helloembed = new Discord.MessageEmbed()
        .setTitle('Hello Friend!')
        .setColor('RANDOM')
        message.channel.send(helloembed) 
    }
}  