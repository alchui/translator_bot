# Discord Translator Bot

## Description

This is a Discord bot that can translate messages between different languages. It uses the DeepL Translate API to perform the translations.

## Features

-   Translate messages between multiple languages
-   Automatically detect the language of the original message
-   Set a default target language for your server

## Usage

This is published to aid learning and to use for reference purposes.

## Configuration

You can customize the bot by modifying the values in the `.env` file. Here are the available options:

-   `TOKEN`: Your Discord Bot Token
-   `DEEPL`: DeepL Translator API Secret Key
-   `others`: Discord Channel ID Token (can be found in Discord User Dev Mode)

## Installation

To install the bot on your own server, you'll need to have Node.js and npm installed. Clone the repository and run the following commands:

`npm install`

Then, open the .env file and enter your API credentials, Discord bot token, and other token IDs.

Finally, start the bot by running the following command:

`npx nodemon`

The bot should now be running on your server.

## Credits

This bot was created by [Alvin Chui](https://github.com/alchui). Special thanks to the creators of the DeepL Translate API and the Discord.js library.

## License

This project is licensed under the MIT License.

Basically grant all permissions, such as

-   Commercial use
-   Distribution
-   Modification
-   Private use
