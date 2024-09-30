let hrgnaImg;
let hrgnaSoundCtgry = "";
let hrgnaSound = "";
let userAnswerInput = "";
let hrgnaLevel = 1;

const genHrgnaBtnBox = document.getElementById("gen-hrgna-box");
const genHrgnaImgBox = document.getElementById("gen-hrgna-img-box");

const rtrnToLvlSlctBtn = document.getElementById("rtrn-to-lvl-slct-btn");
const genHiraganaBtn = document.getElementById("gen-hrgna-btn");

const lvlIndicator = document.getElementById("lvl-indctr");
const lvlSelectBox = document.getElementById("lvl-slct-box");

const lvlBtnIchi = document.getElementById("lvl-slct-1");
const lvlBtnNi = document.getElementById("lvl-slct-2");
const lvlBtnSan = document.getElementById("lvl-slct-3");
const lvlBtnYon = document.getElementById("lvl-slct-4");
const lvlBtnGo = document.getElementById("lvl-slct-5");

function updateLevelIndicator() {
  lvlIndicator.innerText = "Level " + hrgnaLevel;
}

lvlBtnIchi.addEventListener("click", () => {
  hrgnaLevel = 1;
  updateLevelIndicator();
});
lvlBtnNi.addEventListener("click", () => {
  hrgnaLevel = 2;
  updateLevelIndicator();
});
lvlBtnSan.addEventListener("click", () => {
  hrgnaLevel = 3;
  updateLevelIndicator();
});
lvlBtnYon.addEventListener("click", () => {
  hrgnaLevel = 4;
  updateLevelIndicator();
});
lvlBtnGo.addEventListener("click", () => {
  hrgnaLevel = 5;
  updateLevelIndicator();
});

rtrnToLvlSlctBtn.addEventListener("click", () => {
  lvlSelectBox.innerHTML = '<p class="title">Level Select</p><p id="lvl-indctr" class="level-indicator">Level 1</p><button id="lvl-slct-1" class="level-btn"><img src="images/number_kanji/1ichi.png" alt="Level One" class="level-img"></button><button id="lvl-slct-2" class="level-btn"><img src="images/number_kanji/2ni.png" alt="Level Two" class="level-img"></button><button id="lvl-slct-3" class="level-btn"><img src="images/number_kanji/3san.png" alt="Level Three" class="level-img"></button><button id="lvl-slct-4" class="level-btn"><img src="images/number_kanji/4yon.png" alt="Level Four" class="level-img"></button><button id="lvl-slct-5" class="level-btn"><img src="images/number_kanji/5go.png" alt="Level Five" class="level-img"></button>';

  genHrgnaBtnBox.innerHTML = genHrgnaBtnBox.innerHTML + '<button id="gen-hrgna-btn">Generate</button>';
  document.getElementById("hrgna-img");
  hrgnaSoundCtgry = "";
  hrgnaSound = "";
  userAnswerInput = "";
  hrgnaLevel = 1;
});
