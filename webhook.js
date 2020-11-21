const { WebhookClient, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'webhook',
    run : async(client, message, args) => {
    const wc = new WebhookClient('779729843456573460', 'VWYM2DJNPIBL4wP2KcsL-HsvMzbKUA3Wfok1PydnJk19yBO1ynxVfJwHGw96IOL9iLlz')
        const embed = new MessageEmbed()
            .setTitle("this is an embed").setColor('GREEN').setTimestamp().setDescription(args.join(" "))
    wc.send({
        username : message.author.tag,
        avatarURL : message.author.displayAvatarURL({ dynamic : true }),
        embeds : [embed]
    })
    }
}
