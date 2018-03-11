const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix } = require('./config.json');
const token = process.env.BOT_TOKEN;

const statuses = ['you type commands', 'your server', 'for raiders'];
const currentStatus = statuses[Math.floor(Math.random() * statuses.length)];

client.on('ready', () => {
  console.log('Hey, I\'m ready!');
  client.user.setActivity(currentStatus, {type: 'WATCHING'});
});
          
client.on('message', msg => {
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
});

client.login(token);
