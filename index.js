// myOffice_bot

const Telegraf = require('telegraf')
const opn = require('opn');

// const bot = new Telegraf(process.env.BOT_TOKEN)


const bot = new Telegraf("772393203:AAEVVAOiU2khzlG1h4vUwKXrgTvLlaMDRpY")
bot.use((ctx, next) => {
  const start = new Date()
  return next(ctx).then(() => {
    const ms = new Date() - start
    console.log('Response time %sms', ms)
  })
})

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.email((ctx) => ctx.reply('It is an email'))
bot.url((ctx) => {
  //opn()
  console.log(ctx.update.message.text)
  ctx.reply('Opening url')
  opn(ctx.update.message.text)
})
bot.launch()