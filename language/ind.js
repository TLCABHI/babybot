exports.wait = () => {
	return`*「❗」WAIT MWONU*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「❗」ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」BELUM DAFTAR*\n*cara daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar ramlan|18*`
}

exports.baned = () => {
	return`*「❗」SORRY MWONU, BUT YOU'RE ALREADY BANNED YHAHAHA HAYUUU :V*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED 」*\n\n*you have registered mwone >_<*`
}

exports.stikga = () => {
	return`*「 FAILED 」Try again next time bro*`
}

exports.linkga = () => {
	return`*「❗」sorry the link is invalid bruh*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT ADMIN ALLADA KUTTA*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW IN ACTIVE *`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🤔」Where's the text, bro?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (username, userage, serialUser, time, sender, botName) => {
	return`*「 SUCCESSFUL REGISTRATION 」* \ nFor User Info: \ n \ n * ➸ Name: $ {Username} * \ n * ➸ Number: wa.me/$(sender.split("@")[0]]*\n* ➸ userage: $ {User age} * \ n * ➸ Registration Time: $ {time} * \ n \ n * 「SN」: $ {serialUser} * \ n_NOTE 
}
exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
	



	


 

	





	



