require('dotenv').config();

const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

const commands = [
    {
        name: 'hola',
        description: 'Te dice aweonao',
    },
];

(async () => {
    try{
        console.log("Empieza");

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
        { body: commands }
        );

        console.log("Terminado");
    }catch (error){
        console.log(`Hubo un error: ${error}`);
    }
})();