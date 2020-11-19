const db = require('../../recondb')

module.exports = {
    name : 'rmv-automeme',
    run : async(client, message) => {
        const guild = message.guild.id;
        if(await db.has(`automeme-${guild}`)) {
            await db.delete(`automeme-${guild}`)
        } else return message.channel.send('There is no data stored.')

        message.channel.send('Automeme has been turned off!')
    }
}
