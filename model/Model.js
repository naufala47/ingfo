
let soal_hitungan = JSON.parse(`[{
	"type": "radio",
	"soal": "Siapakah penemu baling-baling bambu",
	"a": "Doraemon",
	"b": "hanif",
	"c": "nobita",
	"d": "naruto",
	"kunci": "a",
	"score" : 20
}, {
	"type": "checkbox",
	"soal": "pilihlah 3 yang benar mengenai aqil",
	"option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
	"kunci": ["Manusia", "Anggota Avenger"],
	"score" : 20
}]`);

let soal_bebas = JSON.parse(`[{
	"type": "radio",
	"soal": "Siapakah penemu baling-baling bambu",
	"a": "Doraemon",
	"b": "hanif",
	"c": "nobita",
	"d": "naruto",
	"kunci": "a",
	"score" : 20
}, {
	"type": "checkbox",
	"soal": "pilihlah 3 yang benar mengenai aqil",
	"option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
	"kunci": ["Manusia", "Anggota Avenger"],
	"score" : 20
}, {
	"type": "essay",
	"soal": "ingfo",
	"kunci": "no ingfo",
	"score" : 20
},{
	"type": "radio",
	"soal": "Siapakah anggota Hololive ID",
	"a": "iofi",
	"b": "nene",
	"c": "matsuri",
	"d": "flare",
	"kunci": "a",
	"score" : 20
},{
	"type": "checkbox",
	"soal": "pilihlah hero avenger",
	"option": ["Hulk", "Iron Man", "Wiro Sableng"],
	"kunci": ["Hulk", "Iron Man"],
	"score" : 20
}]`);

module.exports.data = [{ type: "bebas", data: soal_bebas, image: "https://cdn.smassets.net/assets/cms/cc/uploads/Screen-Shot-2020-06-17-at-2.51.59-PM.png", description: "Soal yang bebas" }, { type: "hitungan", data: soal_hitungan, image: "https://cdn.idntimes.com/content-images/community/2019/08/calculator-385506-960-720-5762849e0ede2c709ca3c39cd7f4ca73_600x400.jpg", description: "soal yang hitungan" }]
