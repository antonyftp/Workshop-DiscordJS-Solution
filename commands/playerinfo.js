const Discord = require("discord.js");
const { getMember, formatDate } = require("./utils/playerinfo.utils");

exports.run = (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const joined = formatDate(member.joinedAt);
    const roles = member.roles.cache
        .filter(r => r.id !== message.guild.id)
        .map(r => r).join("\n") || "none";
    const created = formatDate(member.user.createdAt);
    const embed = new Discord.MessageEmbed()
        .setTitle(`Info ${member.user.username}`)
        .setFooter(member.displayName, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL())
        .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

        .addField('Nom', member.displayName, true)
        .addField('Tag discord', member.user.tag, true)
        .addField('ID', member.user.id, true)
        .addField('Date de création', created, true)
        .addField("Date d'arrivée", joined, true)
        .addField('Roles', roles, true)

        .setTimestamp();
    message.channel.send(embed);
}
