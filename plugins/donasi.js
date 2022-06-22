let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0895 2357 3658]
│ •  wa.me/6289523573658
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
