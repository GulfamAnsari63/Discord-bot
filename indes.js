// const { Client, GatewayIntentBits } = require('discord.js');
// const axios = require('axios');
// const FormData = require('form-data');
// const fs = require('fs');

// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// const removeBgApiKey = 'FtTUxauUf15UKwx51g8bNBiD';

// client.on('messageCreate', async (message) => {
//   if (message.author.bot) return;

//   if (message.content.toLowerCase().includes('hi') || message.content.toLowerCase().includes('hello')) {
//     message.reply(`Hello ${message.author.username}!`);
//   }

//   if (message.content.startsWith('!create')) {
//     const url = message.content.split('!create')[1].trim();

//     // Generate a short ID for the URL
//     const shortId = shortid.generate();

//     return message.reply({
//       content: `Generating Short ID for ${url}: ${shortId}`,
//     });
//   }

//   if (message.content.startsWith('!rmbg')) {
//     const attachment = message.attachments.first();

//     if (!attachment || !attachment.url) {
//       return message.reply('Please attach an image to remove the background.');
//     }

//     try {
//       const response = await axios.post(
//         'https://api.remove.bg/v1.0/removebg',
//         createFormData(attachment.url),
//         {
//           responseType: 'arraybuffer',
//           headers: {
//             ...createFormData(attachment.url).getHeaders(),
//             'X-Api-Key': removeBgApiKey,
//           },
//           encoding: null,
//         }
//       );

//       if (response.status !== 200) {
//         return console.error('Error:', response.status, response.statusText);
//       }

//       fs.writeFileSync("no-bg.png", response.data);

//       return message.reply({
//         content: 'Background removed!',
//         files: [{ attachment: 'no-bg.png', name: 'no-bg.png' }],
//       });
//     } catch (error) {
//       console.error('Error removing background:', error.response ? error.response.data : error.message);
//       return message.reply('Error removing background. Please try again.');
//     }
//   }
// });

// function createFormData(imageUrl) {
//   const formData = new FormData();
//   formData.append('size', 'auto');
//   formData.append('image_file', axios.get(imageUrl, { responseType: 'stream' }).data);

//   return formData;
// }

// client.on('interactionCreate', (interaction) => {
//   console.log(interaction);
// });

// client.login('MTE4ODMyODg5ODY2OTMxNDA5OQ.GoDbIU.v3zYkpvtBIC_PyZwCprPo69ahDDO0_NoF-5yxE');
