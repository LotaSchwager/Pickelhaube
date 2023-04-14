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

client.on('interactionCreate', (interaction) => {
   if (!interaction.isChatInputCommand())return;

   if (interaction.commandName === 'hola'){interaction.reply(`${interaction.member} aweonao`);}

   if (interaction.commandName === 'versus'){
      const var1 = interaction.options.get('first-user').value;
      const var2 = interaction.options.get('second-user').value;

      interaction.reply(`${var1} se agarra a combos con ${var2}`);
   }

    
});

client.login(process.env.TOKEN);