//change client on line 4
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});

//add 2 events
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '<messageid>'){
        if(reaction.emoji.name === '<emoji>') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('<roleID>')
            user.send('You have obtained a role!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '<messageid>'){
        if(reaction.emoji.name === '<emoji>') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('<roleID>')
            user.send('One of your roles has been removed!')
        }
    }
})
