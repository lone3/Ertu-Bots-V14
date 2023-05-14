const { ApplicationCommandOptionType, PermissionsBitField, EmbedBuilder } = require("discord.js");
const penals = require("../../schemas/penals");
const ertum = require("../../Settings/Setup.json");
const ertucuk = require("../../Settings/System");
const { red, green } = require("../../Settings/Emojis.json")
const { BsonDatabase,JsonDatabase,YamlDatabase } = require("five.db");
const db = new YamlDatabase();

module.exports = {
    name: "unban",
    description: "",
    category: "NONE",
    cooldown: 0,
    command: {
      enabled: true,
      aliases: ["un-ban"],
      usage: "",
    },
    slashCommand: {
      enabled: true,
      options: [
        {
            name: "ertu",
            description: "ertu",
            type: ApplicationCommandOptionType.Subcommand,
        },
      ],
    },

    onLoad: function (client) {

        client.fetchUser = async (userID) => {
            try {
              return await client.users.fetch(userID);
            } catch (err) {
              return undefined;
            }
          };

          client.fetchBan = async (guild, userID) => {
            try {
              return await guild.bans.fetch(userID);
            } catch (err) {
              return undefined;
            }
          };

     },

    onCommand: async function (client, message, args) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers) && !ertum.banHammer.some(x => message.member.roles.cache.has(x))) 
        {
        message.react(red)
        message.channel.send({ content:"Yeterli yetkin bulunmuyor!"}).then((e) => setTimeout(() => { e.delete(); }, 5000)); 
        return }
        if (!args[0]) 
        {
        message.react(red)
        message.channel.send({ content:"Bir üye belirtmelisin!"}).then((e) => setTimeout(() => { e.delete(); }, 5000)); 
        return }
        const ban = await client.fetchBan(message.guild, args[0]);
        if (!ban) 
        {
        message.react(red)
        message.channel.send({ content:"Bu üye banlı değil!"}).then((e) => setTimeout(() => { e.delete(); }, 5000));
        return }

        let logChannel = client.channels.cache.find(x => x.name === "ban_log");
        if(!logChannel) {
          let hello = new Error("BAN LOG KANALI AYARLANMAMIS! LUTFEN SETUPTAN KURULUMU YAPINIZ!");
          console.log(hello);
        }

        message.guild.members.unban(args[0], `${message.author.username} tarafından kaldırıldı!`).catch(() => {});
        db.push(`kullanıcı`,`${ban.user.id}, tarih`,`<t:${(Date.now() / 1000).toFixed()}> `)
        message.react(green)
        message.reply({ content:`${green} \`(${ban.user.username.replace(/\`/g, "")} - ${ban.user.id})\` adlı üyenin banı ${message.author} tarafından kaldırıldı!`}).then((e) => setTimeout(() => { e.delete(); }, 50000));
        if (ertucuk.Moderation.dmMessages) ban.user.send({ content:`**${message.guild.name}** sunucusunda, **${message.author.tag}** tarafından banınız kaldırıldı!`}).catch(() => {});
    
const log = new EmbedBuilder()
.setDescription(`
${ban.user.username.replace(/\`/g, "")} adlı kullanıcının ${message.author} tarafından ban cezası kaldırıldı.`)
.addFields(
{ name: "Affedilen", value: `${ban.user.username.replace(/\`/g, "")}`, inline: true},
{ name: "Affeden", value: `${message.author}`, inline: true},
{ name: "Ceza Bitiş:", value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true},
          )
          logChannel.send({ embeds: [log]});
     },

    onSlash: async function (client, interaction) { },
  };