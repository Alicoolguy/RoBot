const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: "Kicks a user",
    category: "moderation",
    execute(message, args){
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Sorry, you dont permission to use this command')
        let User = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const errornouser = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setColor(`RED`)
        .setDescription('You did not specify a user!');
        if(!User) return message.channel.send(errornouser)
        User.kick()
        message.channel.send(`Successfully Kicked ${User}!`)
    }
}  