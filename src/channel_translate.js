const fetch = require("node-fetch");
require("dotenv").config();

function channel_translate(one, two, channel, client, options, message) {
	// Check if nickname exists
	let dname = message.member.nickname;
	if (dname === null) {
		dname = message.author.username;
	}

	// Received messages from first Channel
	if (message.channelId === channel) {
		// DeepL Translate API for ONE
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: one,
				}),
			options
		)
			.then((response) => response.json())

			.then((response) => {
				response.translations[0].detected_source_language != one
					? client.channels.cache
							.get(channel)
							.send(dname + ": " + response.translations[0].text)
					: "";
			})
			.catch((err) => console.error(err));

		// DeepL Translate API for ONE
		fetch(
			"https://api-free.deepl.com/v2/translate?" +
				new URLSearchParams({
					text: message.content,
					target_lang: two,
				}),
			options
		)
			.then((response) => response.json())

			.then((response) => {
				response.translations[0].detected_source_language != two
					? client.channels.cache
							.get(channel)
							.send(dname + ": " + response.translations[0].text)
					: "";
			})
			.catch((err) => console.error(err));
	}
}

module.exports = channel_translate;
