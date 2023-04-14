require('dotenv').config();

const { Routes, ApplicationCommandOptionType } = require('discord.js');
const { REST } = require('@discordjs/rest');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

const commands = [
    {
        name: 'hola',
        description: 'Te insulta',
    },
    {
        name: 'versus',
        description: 'usuario vs usuario',
        options: [
            {
                name: 'first-user',
                description: 'El primer peleador',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'second-user',
                description: 'El segundo peleador',
                type:  ApplicationCommandOptionType.String,
                require: true,
            },
        ],
    },
];

(async () => {
    try{
        console.log("Registrando los comandos '/'");

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
        { body: commands }
        );

        console.log("Terminado");
    }catch (error){
        console.log(`Hubo un error: ${error}`);
    }
})();