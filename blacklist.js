const blacklist = require('../../models/blacklist')
const { Message } = require('discord.js')

module.exports = {
    name : 'blacklist',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(message.author.id !== '277105132922208258') return message.channel.send('This is an owner only command.')
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** has already been blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`${User.user.tag} has been added to blacklist.`)
            }
           
        })
    }
}
