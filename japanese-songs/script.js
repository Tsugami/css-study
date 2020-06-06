const songs = [{
  "time": "00:00:00",
  "position": "01",
  "name": "さよならエレジー"
},
{
  "time": "00:03:48",
  "position": "02",
  "name": "サイハテアイニ"
}, {
  "time": "00:07:28",
  "position": "03",
  "name": "何なんｗ(Nan-Nan)"
}, {
  "time": "00:12:25",
  "position": "04",
  "name": "Lemon"
}, {
  "time": "00:16:34",
  "position": "05",
  "name": "Pretender"
}, {
  "time": "00:21:35",
  "position": "06",
  "name": "抱きしめて"
}, {
  "time": "00:26:54",
  "position": "07",
  "name": "打上花火"
}, {
  "time": "00:31:35",
  "position": "08",
  "name": "明日への手紙"
}, {
  "time": "00:36:37",
  "position": "09",
  "name": "スキマスイッチ"
}, {
  "time": "00:42:11",
  "position": "10",
  "name": "あの娘シークレット"
}, {
  "time": "00:46:01",
  "position": "11",
  "name": "はなびら"
}, {
  "time": "00:50:58",
  "position": "12",
  "name": "イエスタデイ"
}, {
  "time": "00:55:54",
  "position": "13",
  "name": "Your song"
}, {
  "time": "01:00:47",
  "position": "14",
  "name": "Rain"
}, {
  "time": "01:05:33",
  "position": "15",
  "name": "サヨナラCOLOR"
}, {
  "time": "01:10:14",
  "position": "16",
  "name": "瞬き"
}, {
  "time": "01:12:54",
  "position": "17",
  "name": "薄ら氷心中"
}, {
  "time": "01:15:58",
  "position": "18",
  "name": "愛を伝えたいだとか"
}, {
  "time": "01:19:36",
  "position": "19",
  "name": "ボクノート"
}, {
  "time": "01:24:56",
  "position": "20",
  "name": "灰色と青"
}, {
  "time": "01:30:27",
  "position": "21",
  "name": "フィクション"
}, {
  "time": "01:34:15",
  "position": "22",
  "name": "ベイビー・アイラブユー"
}, {
  "time": "01:39:23",
  "position": "23",
  "name": "愛にできることはまだあるかい"
}, {
  "time": "01:45:54",
  "position": "24",
  "name": "百八円の恋"
}, {
  "time": "01:49:28",
  "position": "25",
  "name": "貴方解剖純愛歌"
}, {
  "time": "01:53:56",
  "position": "26",
  "name": "恋音と雨空"
}, {
  "time": "01:59:01",
  "position": "27",
  "name": "ピースサイン"
}, {
  "time": "02:02:59",
  "position": "28",
  "name": "いつか"
}, {
  "time": "02:07:29",
  "position": "29",
  "name": "トドカナイカラ"
}, {
  "time": "02:11:29",
  "position": "30",
  "name": "ずっと真夜中でいいのに。"
}, {
  "time": "02:15:54",
  "position": "31",
  "name": "ソラニン"
}, {
  "time": "02:20:31",
  "position": "32",
  "name": "別の人の彼女になったよ"
}, {
  "time": "02:25:07",
  "position": "33",
  "name": "点描の唄"
}, {
  "time": "02:30:01",
  "position": "34",
  "name": "バナナフィッシュの浜辺と黒い虹"
}, {
  "time": "02:34:35",
  "position": "35",
  "name": "Happy Birthday"
}, {
  "time": "02:39:00",
  "position": "36",
  "name": "フラレガイガール"
}, {
  "time": "02:44:39",
  "position": "37",
  "name": "Stand by me"
}, {
  "time": "02:50:00",
  "position": "38",
  "name": "会いたいよ"
}, {
  "time": "02:54:19",
  "position": "39",
  "name": "Hikari"
}, {
  "time": "02:58:18",
  "position": "40",
  "name": "棒人間"
}
]

let mainSelected = document.querySelector('main ol');

const sortedSongs = songs.sort((a, b) => a.position - b.position);

for (const song of sortedSongs) {
  const className = song.position > 20 ? 'column2' : 'column1';
  mainSelected.innerHTML += `<li class="${className}"><strong>${song.position}. ${song.name}</strong></li>`
}