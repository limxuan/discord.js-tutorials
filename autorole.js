const client = require('../index.js');
const db = require('../reconDB');

client.on('guildMemberAdd', async(member) => {
    const check = await db.has(`autorole-${member.guild.id}`);
    if(check === true) {
        member.roles.add(await db.get(`autorole-${member.guild.id}`))
    }
})
