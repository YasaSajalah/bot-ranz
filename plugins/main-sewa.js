let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
━━━〔 ıll *Sewa Bot Hakura* llı 〕━━㉿
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━㉿
⬡ *1 BULAN* 5.000
⬡ *PERMANEN 2 grup:* 15.000
⬡ *PERMANEN 3-6 grup:* 25.000
⟩» lebih dari 6 tambah +5.000
📮 *batas scan 5 kali !*
┗━━━━━━━━━━━━━━━━━━㉿
┏━━━〔 ıll *PAYMENT* llı 〕━━㉿
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
⬡ *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *Dana yang sudah masuk tida bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━㉿
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${numberowner} (Owner Hakura)

*Follow Instagram ku juga kak😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu Ranz', '.menu', m) 
}
handler.help = ['sewaranz']
handler.tags = ['info']
handler.command = /^(zifasewa|sewazifa)$/i

module.exports = handler
