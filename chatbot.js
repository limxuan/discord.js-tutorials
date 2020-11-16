const { chatBot } = require('reconlx') 

module.exports = {
    name : 'chat',
    run : async(client, message, args) => {
        chatBot(message, args.join(" "))
    }
}
