const client = global.client;
const ertucuk = require("../../Settings/System");
const ertum = require("../../Settings/Setup.json")
const { EmbedBuilder, AuditLogEvent } = require("discord.js");
const moment = require("moment");
const { Mute, Revuu, kirmiziok, green ,red } = require("../../Settings/Emojis.json")

client.on("voiceStateUpdate", async(oldState, newState) => {

const channel = client.channels.cache.find(x => x.name === "voice_log")
if (!channel) return;


if (!oldState.channel && newState.channel) return channel.send({ embeds: [new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir ses kanalına giriş yaptı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Girdiği Zaman: <t:${Math.floor(Date.now() / 1000)}:R>\n\n \`\`\`Kanalında bulunan üyeler şunlardır;\`\`\` \n ${newState.channel.members.map(x => `<@!${x.id}>`)}`)]});
if (oldState.channel && !newState.channel) return channel.send({ embeds:  [new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${red} ${newState.member.toString()} isimli kullanıcı bir sesli kanalından ayrıldı.\n\n \` ➥ \` Ses Kanalı: <#${oldState.channel.id}>\n \` ➥ \` Çıktığı Zaman: <t:${Math.floor(Date.now() / 1000)}:R>\n\n \`\`\`Kanalında bulunan üyeler şunlardır;\`\`\` \n ${oldState.channel.members.map(x => `<@!${x.id}>`)}`)]});
if (oldState.channel.id && newState.channel.id && oldState.channel.id != newState.channel.id) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanal değişimi yaptı.\n\n \` ➥ \` Ses Kanal Değişikliği: <#${oldState.channel.id}> => <#${newState.channel.id}>\n \` ➥ \` Değişim Zamanı: <t:${Math.floor(Date.now() / 1000)}:R>\n\n \`\`\`Eski Kanalında bulunan üyeler şunlardır;\`\`\` \n ${oldState.channel.members.map(x => `<@!${x.id}>`)} \n\n \`\`\`Yeni Kanalında bulunan üyeler şunlardır;\`\`\` \n ${newState.channel.members.map(x => `<@!${x.id}>`)}  `)]});
if (oldState.channel.id && oldState.selfMute && !newState.selfMute) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda kendi susturmasını kaldırdı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Kaldırma Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && !oldState.selfMute && newState.selfMute) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda kendini susturdu.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Susturma Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && oldState.selfDeaf && !newState.selfDeaf) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda kendi sağırlaştırmasını kaldırdı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Kaldırma Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && !oldState.selfDeaf && newState.selfDeaf) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda kendini sağırlaştırdı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Sağırlaştırma Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && !oldState.streaming && newState.channel.id && newState.streaming) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda yayın açtı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Yayını Açma Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && oldState.streaming && newState.channel.id && !newState.streaming) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda yayınını kapadı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Yayını Kapama Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && !oldState.selfVideo && newState.channel.id && newState.selfVideo) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda kamerasını açtı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Kamera Açma Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});
if (oldState.channel.id && oldState.selfVideo && newState.channel.id && !newState.selfVideo) return channel.send({ embeds:[new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`${green} ${newState.member.toString()} isimli kullanıcı bir sesli kanalda kamerasını kapadı.\n\n \` ➥ \` Ses Kanalı: <#${newState.channel.id}>\n \` ➥ \` Kamerayı Kapama Zamanı <t:${Math.floor(Date.now() / 1000)}:R>`)]});

const channel2 = oldState.guild.channels.cache.get(ertum.VMuteLogChannel);
if (!channel2) return;
let logs = await oldState.guild.fetchAuditLogs({ limit: 1, type: AuditLogEvent.MemberUpdate });
let entry = logs.entries.first();
if (!oldState.serverMute && newState.serverMute) return channel2.send({ embeds: [new EmbedBuilder().setColor("Random").setAuthor({ name: client.guilds.cache.get(ertucuk.ServerID).name, iconURL: client.guilds.cache.get(ertucuk.ServerID).iconURL({dynamic:true})}).setFooter({ text: `${moment(Date.now()).format("LLL")}`}).setDescription(`
${newState.member.tag} Adlı Kişiye ${entry.executor.user.tag} tarafından Sağ-tık susturma işlemi yapıldı.`)
.addFields(
{ name: "Cezalandırılan", value: `${newState.member}`, inline: true },
{ name: "Cezalanan", value: `${entry.executor}`, inline: true},
{ name: "Ses Kanal", value: ` <#${newState.channel.id}>`, inline: true},)]});
})