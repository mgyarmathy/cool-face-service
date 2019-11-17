const express = require('express');
const app = express();

const faces = [
  "( `·´ )",
  "( ° ͜ ʖ °)",
  "( ͡° ͜ʖ ͡°)",
  "( ⚆ _ ⚆ )",
  "( ︶︿︶)",
  "( ﾟヮﾟ)",
  "(¬_¬)",
  "(¬º-°)¬",
  "(¬‿¬)",
  "(°ロ°)☝",
  "(´・ω・)っ",
  "(ó ì_í)",
  "(ʘᗩʘ')",
  "(ʘ‿ʘ)",
  "(͡° ͜ʖ ͡°)",
  "(ಠ_ಠ)",
  "(ಠ‿ಠ)",
  "(ಠ⌣ಠ)",
  "(ಥ_ಥ)",
  "(ಥ﹏ಥ)",
  "(ง •̀_•́)ง",
  "(ง'̀-'́)ง",
  "(ง°ل͜°)ง",
  "(ง⌐□ل͜□)ง",
  "(ღ˘⌣˘ღ)",
  "(ᵔᴥᵔ)",
  "(•ω•)",
  "(•◡•)/",
  "(⊙ω⊙)",
  "(⌐■_■)",
  "(╯°□°）╯",
  "(◕‿◕)",
  "(❍ᴥ❍ʋ)",
  "(っ◕‿◕)っ",
  "(ノಠ益ಠ)ノ",
  "(ノ・∀・)ノ",
  "(；一_一)",
  "(｀◔ ω ◔´)",
  "(｡◕‿‿◕｡)",
  "(ﾉ◕ヮ◕)ﾉ",
  "=^.^=",
  "t(-.-t)",
  "| (• ◡•)|",
  "~(˘▾˘~)",
  "¬_¬",
  "¯(°_o)/¯",
  "¯\_(ツ)_/¯",
  "°Д°",
  "ʅʕ•ᴥ•ʔʃ",
  "ʕ´•ᴥ•`ʔ",
  "ʕ•ᴥ•ʔ",
  "ʕ◉.◉ʔ",
  "ʕㅇ호ㅇʔ",
  "ʕ；•`ᴥ•´ʔ",
  "ʘ‿ʘ",
  "͡° ͜ʖ ͡°",
  "٩◔̯◔۶",
  "ಠ_ಠ",
  "ಠoಠ",
  "ಠ~ಠ",
  "ಠ‿ಠ",
  "ಠ⌣ಠ",
  "ಠ╭╮ಠ",
  "ರ_ರ",
  "๏̯͡๏﴿",
  "༼ ºل͟º ༽",
  "༼ ºل͟º༼",
  "༼ ºل͟º༽",
  "༼ ͡■ل͜ ͡■༽",
  "༼ʘ̚ل͜ʘ̚༽",
  "ლ(´ڡ`ლ)",
  "ᄽὁȍ ̪őὀᄿ",
  "ᔑ•ﺪ͟͠•ᔐ",
  "ᕕ( ᐛ )ᕗ",
  "ᕙ(⇀‸↼‶)ᕗ",
  "ᕙ༼ຈل͜ຈ༽ᕗ",
  "ᶘ ᵒᴥᵒᶅ",
  "≧☉_☉≦",
  "⊙▃⊙",
  "⊙﹏⊙",
  "┌( ಠ_ಠ)┘",
  "╚(ಠ_ಠ)=┐",
  "◉_◉",
  "◔ ⌣ ◔",
  "◔̯◔",
  "◕‿↼",
  "◕‿◕",
  "☉_☉",
  "☼.☼",
  "♥‿♥",
  "⚆ _ ⚆",
  "✌(-‿-)✌",
  "〆(・∀・＠)",
  "ノ( ゜-゜ノ)",
  "ヽ(`Д´)ﾉ",
  "ヽ༼° ͟ل͜ ͡°༽ﾉ",
  "ヽ༼ຈل͜ຈ༽ﾉ",
  "ヽ༼Ὸل͜ຈ༽ﾉ",
  "ヾ(⌐■_■)ノ",
  "꒰･◡･๑꒱",
  "﴾͡๏̯͡๏﴿",
  "｡◕‿◕｡",
  "ʕノ◔ϖ◔ʔノ",
  "꒰•̥̥̥̥̥̥̥ ﹏ •̥̥̥̥̥̥̥̥๑꒱",
  "ಠ_ರೃ",
  "(ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)",
  "(ꐦ°᷄д°᷅)",
  "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛",
  "(*ﾟ⚙͠ ∀ ⚙͠)ﾉ❣",
  "٩꒰･ัε･ั ꒱۶",
  "ヘ（。□°）ヘ",
  "૮( ᵒ̌ૢཪᵒ̌ૢ )ა",
  "“ψ(｀∇´)ψ",
  "ಠﭛಠ",
  "(๑>ᴗ<๑)",
  "(oT-T)尸",
  "(✌ﾟ∀ﾟ)☞",
  "ಥ‿ಥ",
  "(⑅ ॣ•͈ᴗ•͈ ॣ)",
  "ヾ(´￢｀)ﾉ",
  "(•̀o•́)ง",
  "(๑•॒̀ ູ॒•́๑)",
  "⚈้̤͡ ˌ̫̮ ⚈้̤͡",
  "(((╹д╹;)))",
  "•̀.̫•́✧",
  "(ᵒ̤̑ ₀̑ ᵒ̤̑)",
  "\_(ʘ_ʘ)_/"
]


const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Array.prototype.sample = function() {
  return this[Math.floor(Math.random()*this.length)];
};

Array.prototype.max = function(max) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i].length <= max) {
      arr.push(this[i]);
    }
  }
  return arr;
};

app.get('/', function(req, res) {
  console.log(req);
  const max_face_length = (req.query.max_face_length) ? req.query.max_face_length : 32;
  res.send(faces.max(max_face_length).sample() + '\n');
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});