//schema  -----------------------------------------
 
client.ticketTranscript = mongoose.model('transcripts', 
    new mongoose.Schema({
        Channel : String,
        Content : Array
    })
)
// -------------------------------------------------

client.on('message', async(message) => {
    if(message.channel.parentID !== '756890395392081985') return;
    client.ticketTranscript.findOne({ Channel : message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
           console.log('there is data')
           data.Content.push(`${message.author.tag} : ${message.content}`) 
        } else {
            console.log('there is no data')
            data = new client.ticketTranscript({ Channel : message.channel.id, Content: `${message.author.tag} : ${message.content}`})
        }
        await data.save()
            .catch(err =>  console.log(err))
        console.log('data is saved ')
    })

})
