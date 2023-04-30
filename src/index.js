require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//Status
/*

let status = [
  {
    name: 'Spot Studies',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/@spotstudies',
  },
  {
    name: 'in Super Mario Kart',
    type: ActivityType.Competing,
  },
  {
    name: 'Morons',
    type: ActivityType.Watching,
  },
  {
    name: 'Eespiderman Eespiderman Song',
    type: ActivityType.Listening,
  },
  {
    name: 'Call of Duty',
    type: ActivityType.Playing,
  },
  {
    name: 'Reading The Last Straw (DOWK)',
    type: ActivityType.Custom,
  },
];

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 12000);
});*/

eventHandler(client);

//Login

client.login(process.env.TOKEN);