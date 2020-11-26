const Discord = require('discord.js');
const got = require('got');
const client = new Discord.Client();
const message = new Discord.Message
const prefix = 'R!';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('RoBot is Online!')
    client.user.setActivity(`${client.guilds.cache.size} servers | R!help`, { type: 'WATCHING' })
}); 



client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'hello') 
    if(!welcomeChannel) return;
    welcomeChannel.send(`Welcome to the server! ${member}, Dont forget to read the rules! :wink:`)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    } else if (command === 'hello') {
        client.commands.get('hello').execute(message, args)
    } else if (command === 'help') { 
        client.commands.get('help').execute(message, args)
    } else if (command === 'underthetree') { 
        client.commands.get('underthetree').execute(message, args)
    } else if (command === 'nyancat') { 
        client.commands.get('nyancat').execute(message, args)
    } else if (command === 'meme') { 
        client.commands.get('meme').execute(message, args)
    } else if (command === 'kick') { 
        client.commands.get('kick').execute(message, args) 
    } else if (command === 'info') { 
        client.commands.get('info').execute(message, args) 
    } else if (command === 'aww') { 
        client.commands.get('aww').execute(message, args) 
    } else if (command === 'pie') { 
        client.commands.get('pie').execute(message, args) 
    } else if (command === 'cake') { 
        client.commands.get('cake').execute(message, args) 
    }     
});

client.login(process.env.token) 