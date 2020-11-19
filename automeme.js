const db = require('../../recondb')
const ms = require('ms')
module.exports = {
    name : 'auto-meme',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send('You dont have permission to use this command!')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return  message.channel.send('No channel found.')
        let time = args[1]
        if(!time) return message.channel.send('Please specify a time.')
        time = ms(time)
        time = parseInt(time)
        await db.set(`automeme-${message.guild.id}`, [channel.id, time])
        message.channel.send(`Automeme is binded to ${channel};`)
    }
}
