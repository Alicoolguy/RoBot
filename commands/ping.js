const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    description: "Pong!",
    category: "fun",
    enabled: "yes",
    execute(message, args){
        const pingembed = new Discord.MessageEmbed()
        .setTitle(':ping_pong: Pong!')
        .setColor('RANDOM')
        message.channel.send(pingembed)
    }
}  
