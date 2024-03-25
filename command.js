const { Client, Intents } = require("discord.js");
const { REST, Routes } = require("discord.js");
const { Client, Intents } = require("discord.js");
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
const rest = new REST({ version: '10' }).setToken("MTE4ODMyODg5ODY2OTMxNDA5OQ.GoDbIU.v3zYkpvtBIC_PyZwCprPo69ahDDO0_NoF-5yxE");

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  updateCommands();
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'dark cloud'); 
  if (!channel) return;

  channel.send(`${member.user.tag} joined the server! Welcome!`);
});

async function updateCommands() {
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("YOUR_CLIENT_ID_HERE"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}
client.login("1188328898669314099");
