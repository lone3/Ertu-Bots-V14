const { EmbedBuilder, WebhookClient } = require("discord.js");
const { green, blue, yellow, red } = require("chalk");
const { tarihsel } = require("../Helpers/Dates");
const client = global.bot;

const webhookLogger = 'https://discord.com/api/webhooks/1104806634720591892/GRsbbCssT3iChqVPfsipXbbwsOrHIZjpwI_dLUK4GK1_h_Avw-EQpWVlzyrqozKX8R-c' ? new WebhookClient({ url: 'https://discord.com/api/webhooks/1104806634720591892/GRsbbCssT3iChqVPfsipXbbwsOrHIZjpwI_dLUK4GK1_h_Avw-EQpWVlzyrqozKX8R-c' }) : undefined;

let allmonths = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık",
  };

function sendWebhook(content, err) {
  if (!content && !err) return;
  const errString = err?.stack || err;

  const embed = new EmbedBuilder()

  if (errString)
    embed.setDescription(
      "```js\n" + (errString.length > 4096 ? `${errString.substr(0, 4000)}...` : errString) + "\n```"
    );

  embed.addFields({ name: "Description", value: content || err?.message || "NA" });
  webhookLogger.send({ username: "YARRAK", embeds: [embed] }).catch((ex) => {});

}

module.exports = class Logger {
  static success(content) {
    console.log(`${allmonths} ${blue(`${content}`)}`);
  }

  static log(content) {
    console.log(`${allmonths} ${blue(`${content}`)}`);
  }

  static warn(content) {
    console.log(`${allmonths} ${yellow("⚠")} ${blue(`${content}`)}`);
  }

  static error(content, ex) {
    if (ex) {
      console.log(`${allmonths} ${red("✗")} ${blue(`${content}: ${ex?.message}`)}`);
    } else {
      console.log(`${allmonths} ${red("✗")} ${blue(`${content}`)}`)
    }
    if (webhookLogger) sendWebhook(content, ex);
  }

  static debug(content) {
    console.log(`${allmonths} ${green("✓")} ${blue(`${content}`)}`);
  }

  static botReady(content) {
    console.log(`${allmonths} ${green("✓")} ${blue(`(${content}) sahaya iniş yaptı`)}`);
  }
};