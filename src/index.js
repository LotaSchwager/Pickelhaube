require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client ({
   intents:[
       GatewayIntentBits.Guilds,
       GatewayIntentBits.GuildMembers,
       GatewayIntentBits.GuildMessages,
       GatewayIntentBits.MessageContent
   ]
});

client.on('ready', (c) => {
   console.log(`${c.user.tag} esta conectado!!`);
});

client.on('messageCreate', (msg) => {
   if (msg.author.bot){return;}

   if (msg.content.substring(0,1) === '/'){
       if(msg.content === '/hola'){msg.reply(`Aweonao ${msg.author}`);}
   }
});

client.login(process.env.TOKEN);