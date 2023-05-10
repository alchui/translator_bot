// Require the necessary discord.js classes
const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

const user_translate = require("../utils/user_translate");
const owl_translate = require("./owl_translate");
const translate = require("../utils/translate");
const channel_translate = require("./channel_translate");

const main = process.env;

// Create a new client instance (Discord Instance)
const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

// DeepL Instance
const options = {
	method: "POST",
	headers: {
		Authorization: main.DEEPL,
	},
};

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!");
});

client.on("messageCreate", (message) => {
	// Break infinite loop
	if (message.author.bot) {
		return;
	}

	channel_translate("RU", "EN", main.ALPHA, client, options, message);
	channel_translate("RU", "EN", main.FARM, client, options, message);

	owl_translate(client, options, message);
});

// Login to Discord with your client's token
client.login(main.TOKEN);
