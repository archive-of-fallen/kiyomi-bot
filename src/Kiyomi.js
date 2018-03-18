const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = require('./config.json');
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
  
  const args = msg.content.split(' ').slice(1);
  
  if(msg.content.startsWith(prefix + 'addstatus')) {
    if(msg.author.id != '300992784020668416') return;
    if(!args) {
      return msg.reply('Please provide some input on what you\'d like me to add.');
    }
    statuses.push(args);
  }
});

client.login(token);
