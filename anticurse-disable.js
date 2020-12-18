const db = require('../../reconDB');

module.exports = {
    name: 'antiswear-off',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You do not have admin permission');
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I need  manage messages permission');

        if(await db.has(`swear-${message.guild.id}`) === true) {
            
            await db.delete(`swear-${message.guild.id}`);
            message.channel.send('Antiswear is now off!')

        } else return message.channel.send('Antiswear has already been turned off!')
    }
}