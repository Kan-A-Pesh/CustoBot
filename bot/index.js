/* Invite link: https://discord.com/oauth2/authorize?client_id=877608150046502983&scope=bot&permissions=8 */
const djs = require('discord.js');
const messages = require('./../db/messages')
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

        messages.getAll().then((messages) => {

            console.log(r);
    
            messages.forEach(command => {
                r.addField(command.username, command.message, false)
            });
    
            msg.channel.send({ embeds: [r] });
        });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(env.BOT_TOKEN);