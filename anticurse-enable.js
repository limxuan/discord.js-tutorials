const db = require('../../reconDB');

module.exports = {
    name: 'antiswear-on',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You do not have admin permission');
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I need  manage messages permission');

        if(await db.has(`swear-${message.guild.id}`) === false) {
            
            await db.set(`swear-${message.guild.id}`, true)
            message.channel.send('Antiswear is now on!')

        } else return message.channel.send('Antiswear has already been turned on!')
    }
}