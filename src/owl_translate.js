const fetch = require("node-fetch");
require("dotenv").config();

const main = process.env;

// Channel Setting
const channel_one = main.OWL_EN;
const channel_two = main.OWL_ZH;
const channel_three = main.OWL_RU;

// Language Setting
const language_one = "EN";
const language_two = "ZH";
const language_three = "RU";

function check_message(client, message, dname) {
	/*
  if (message.content === "") {
    client.channels.cache
      .get(channel_one)
      .send(dname + ": " + message.url + "[Image]");
    client.channels.cache
      .get(channel_two)
      .send(dname + ": " + message.url + "[Image]");
    client.channels.cache
      .get(channel_three)
      .send(dname + ": " + message.url + "[Image]");

    return;
  }
  */
}

function owl_translate(client, options, message) {
	// Check if nickname exists
	let dname = message.member.nickname;
	if (dname === null) {
		dname = message.author.username;
	}

	// Received messages from first Channel
	if (message.channelId === channel_one) {
		check_message(client, message, dname);

		// DeepL Translate API for Indonesian
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: language_two,
				}),
			options
		)
			.then((response) => response.json())

			.then((response) => {
				response.translations[0].detected_source_language !=
				language_one
					? message.reply(
							dname +
								": This is a channel specified in English. Please type in English. Thank you."
					  )
					: "";
				client.channels.cache
					.get(channel_two)
					.send(dname + ": " + response.translations[0].text);
			})
			.catch((err) => console.error(err));

		// DeepL Translate API for Chinese
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: language_three,
				}),
			options
		)
			.then((response) => response.json())
			.then((response) =>
				client.channels.cache
					.get(channel_three)
					.send(dname + ": " + response.translations[0].text)
			)
			.catch((err) => console.error(err));
	}

	// Received messages from second Channel
	if (message.channelId === channel_two) {
		check_message(client, message, dname);

		// DeepL Translate API for English
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: language_one,
				}),
			options
		)
			.then((response) => response.json())
			.then((response) => {
				response.translations[0].detected_source_language !=
				language_two
					? message.reply(
							dname +
								": 这是一个专门为讲中文的人设立的频道。请只用中文说话。谢谢你。"
					  )
					: "";
				client.channels.cache
					.get(channel_one)
					.send(dname + ": " + response.translations[0].text);
			})
			.catch((err) => console.error(err));

		// DeepL Translate API for Chinese
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: language_three,
				}),
			options
		)
			.then((response) => response.json())
			.then((response) =>
				client.channels.cache
					.get(channel_three)
					.send(dname + ": " + response.translations[0].text)
			)
			.catch((err) => console.error(err));
	}

	// Received messages from third Channel
	if (message.channelId === channel_three) {
		check_message(client, message, dname);

		// DeepL Translate API for English
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: language_one,
				}),
			options
		)
			.then((response) => response.json())
			.then((response) => {
				response.translations[0].detected_source_language !=
				language_three
					? message.reply(
							dname +
								": Это канал, указанный на русском языке. Пожалуйста, введите текст на русском языке. Спасибо."
					  )
					: "";
				client.channels.cache
					.get(channel_one)
					.send(dname + ": " + response.translations[0].text);
			})
			.catch((err) => console.error(err));

		// DeepL Translate API for Indonesian
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: language_two,
				}),
			options
		)
			.then((response) => response.json())
			.then((response) =>
				client.channels.cache
					.get(channel_two)
					.send(dname + ": " + response.translations[0].text)
			)
			.catch((err) => console.error(err));
	}
}

module.exports = owl_translate;
