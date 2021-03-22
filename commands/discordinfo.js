const Discord = require("discord.js");
const { formatDate } = require("./utils/playerinfo.utils");

exports.run = (bot, message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Informations du discord`)
        .setFooter(message.member.displayName, message.member.user.displayAvatarURL())
        .setColor("BLUE")

        .addField("**Nom**", message.guild.name, true)
        .addField("**Date de création**", formatDate(message.guild.createdAt), true)
        .addField("**Nombre de membres**", message.guild.memberCount, true)
        .addField("**Fondateur**", `<@${message.guild.ownerID}>`, true)

    message.channel.send(embed);
}
