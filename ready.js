client.on('ready', async () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`${client.user.username} ✅`)

    //automeme -----------------------------------------------------
    if(await recondb.has('automeme-756890395392081980') === false) return;
    const got = require('got')
    const data = await recondb.get('automeme-756890395392081980')
    const channel = client.channels.cache.get(data[0])
    const time = data[1]

    setInterval(() => {
        got('https://www.reddit.com/r/memes/random/.json').then(res => {
            let content = JSON.parse(res.body)
            channel.send(
                new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("RANDOM")
                    .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)
            )
        })
    }, time)
})
