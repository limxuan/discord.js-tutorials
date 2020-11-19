const got = require('got')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'meme',
    run : async(client, message) => {
        got('https://www.reddit.com/r/memes/random/.json').then(res => {
            let content = JSON.parse(res.body)
            message.channel.send(
                new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("RANDOM")
                    .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)
            )
        })
    }
}
