module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const { channel } = require('../config.json');

        const { MaleEmoji } = require('../config.json');
        const { MaleName } = require('../config.json')
        

        const { MessageEmbed } = require('discord.js')
        let AAAAembed = new Discord.MessageEmbed()
            .setColor('#861b1b')
            .setTitle('جهت دریافت پرمیشن تماشای پورن روی ریاکشن زیر کیلک کنید')
            .setThumbnail('https://cdn.discordapp.com/attachments/942117660525727754/1079094238668652664/standard_5.gif')
            .setImage('https://cdn.discordapp.com/attachments/942117660525727754/1079376461485592577/standard_6.gif')
            .setDescription('To get permission to watch porn, click on the reaction below\n\n'
                + `${MaleEmoji} for ${MaleName}\n`) //copy this line

        console.log("Reactionrole Message Created")
        let msg = await message.channel.send({ embeds: [AAAAembed]});
        msg.react(`${MaleEmoji}`) //copy this
    }
}