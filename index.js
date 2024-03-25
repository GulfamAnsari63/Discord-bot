const { Client, GatewayIntentBits } = require('discord.js');
const shortid = require('shortid'); // Import shortid library for generating short IDs
const axios = require('axios'); 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const removeBgApiKey = 'FtTUxauUf15UKwx51g8bNBiD';

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('hi') || message.content.toLowerCase().includes('hello')) {
    message.reply(`Hello ${message.author.username}!`);
  }

  if (message.content.startsWith('!create')) {
    const url = message.content.split('!create')[1].trim();

    // Generate a short ID for the URL
    const shortId = shortid.generate();

    return message.reply({
      content: `Generating Short ID for ${url}: ${shortId}`,
    });
  }
  
   
});


client.on('interactionCreate', (interaction) => {
  console.log(interaction);
});

client.login('Discord-client-id');
