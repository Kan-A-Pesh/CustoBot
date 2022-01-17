/* Invite link: https://discord.com/oauth2/authorize?client_id=877608150046502983&scope=bot&permissions=8 */
const djs = require('discord.js');
const nodes = require('../db/nodes.js')
const guilds = require('./../db/guilds')
const env = require('./../config');

const client = new djs.Client(
    {
        intents: [
            djs.Intents.FLAGS.GUILDS,
            djs.Intents.FLAGS.GUILD_MESSAGES
        ]
    });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (msg) => {
    // Send back a reply when the specific command has been written by a user.
    if (msg.content === '!help') {
        let r = new djs.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Command List')
        .setDescription('Here is the list of available commands.')
        .setTimestamp(new Date())
        .setFooter('CustoBot vALPHA');

        nodes.getForGuild().then((nodes) => {
    
            nodes.forEach(command => {
                r.addField(command.username, command.message + "\n", false)
            });
    
            msg.channel.send({ embeds: [r] });
        });
    }
    if (msg.content === '!debug')
    {
        msg.reply(
            "> 🍞 *Debugging info ...*\n"+
            "\n**🔗 Channel Id:** "+msg.channelId+
            "\n**🛡 Guild Id:** "+msg.guildId+
            "\n**✉ Message Id:** "+msg.id+
            "\n**📤 Sender Id:** "+msg.author.id
            );
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.on('guildCreate', async guild => {
    try {
        guilds.create({
            guildId: guild.id
        });
        console.log("CustoBot has joined the server!");
    }
    catch (err) {
        console.log(err);
    }
});

client.login(env.BOT_TOKEN);