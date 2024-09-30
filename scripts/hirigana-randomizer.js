genHiraganaBtn.addEventListener("click", generateHiragana);

function generateHiragana() {
  removeLevelSelect();
  randomizeHiraganaSoundCategory(hrgnaLevel);
  selectSoundFromHiraganaCategory();

  hrgnaImg = document.createElement("IMG");
  hrgnaImg.setAttribute("src", hrgnaImg.src = "images/" + hrgnaSoundCtgry + "/hrgna_" + hrgnaSound + ".png");
  hrgnaImg.setAttribute("height", "128");
  hrgnaImg.setAttribute("alt", "Hiragana Image");
  hrgnaImg.setAttribute("class", "hirigana-image");
  hrgnaImg.setAttribute("id", "hrgna-img");


  genHrgnaImgBox.appendChild(hrgnaImg);

  hrgnaAnswrInput = document.createElement("input");
  hrgnaAnswrInput.setAttribute("id", "hrgnaAnswrInput");
  hrgnaAnswrInput.setAttribute("class", "hiragana-answer-input");
  hrgnaAnswrInput.setAttribute("placeholder", "Answer");
  genHrgnaImgBox.appendChild(hrgnaAnswrInput);

  genHiraganaBtn.remove();
}

function removeLevelSelect() {
  lvlSelectBox.innerHTML = "";
}

function randomizeHiraganaSoundCategory(level) {
  let numRand;
  if(level === 1) {
    numRand = Math.floor(Math.random() * (3 - 1) ) + 1;
  } else if(level === 2) {
    numRand = Math.floor(Math.random() * (5 - 1) ) + 1;
  } else if(level === 3) {
    numRand = Math.floor(Math.random() * (7 - 1) ) + 1;
  } else if(level === 4) {
    numRand = Math.floor(Math.random() * (10 - 1) ) + 1;
  } else if(level === 5) {
    numRand = Math.floor(Math.random() * (12 - 1) ) + 1;
  } else {
    alert("Please select a level between 1 and 5.")
  }

  if(numRand === 1) {
    hrgnaSoundCtgry = "a";
  } else if(numRand === 2) {
    hrgnaSoundCtgry = "ka";
  } else if(numRand === 3) {
    hrgnaSoundCtgry = "sa";
  } else if(numRand === 4) {
    hrgnaSoundCtgry = "ta";
  } else if(numRand === 5) {
    hrgnaSoundCtgry = "na";
  } else if(numRand === 6) {
    hrgnaSoundCtgry = "ha";
  } else if(numRand === 7) {
    hrgnaSoundCtgry = "ma";
  } else if(numRand === 8) {
    hrgnaSoundCtgry = "ya";
  } else if(numRand === 9) {
    hrgnaSoundCtgry = "ra"
  } else if(numRand === 10) {
    hrgnaSoundCtgry = "wa";
  } else {
    hrgnaSoundCtgry = "u";
  }
  console.log(hrgnaSoundCtgry);
}

function selectSoundFromHiraganaCategory() {
  let numRand;
  let soundCategory = hrgnaSoundCtgry.slice(0,1);
  if(soundCategory === "k" ||
    soundCategory === "s" ||
    soundCategory === "t" ||
    soundCategory === "n" ||
    soundCategory === "h" ||
    soundCategory === "m" ||
    soundCategory === "r"
  ) {
    numRand = Math.floor(Math.random() * (6 - 1) ) + 1;
    if(numRand === 1) {
      hrgnaSound = String(soundCategory + "a");
    } else if(numRand === 2) {
      if(soundCategory === "s") {
        hrgnaSound = String("shi");
      } else if(soundCategory === "t") {
        hrgnaSound = String("chi");
      } else {
        hrgnaSound = String(soundCategory + "i");
      }
    } else if(numRand === 3) {
      if(soundCategory === "t") {
        hrgnaSound = String("tsu");
      } else if(soundCategory === "h") {
        hrgnaSound = String("fu");
      } else {
        hrgnaSound = String(soundCategory + "u");
      }
    } else if(numRand === 4) {
      hrgnaSound = String(soundCategory + "e");
    } else if(numRand === 5) {
      hrgnaSound = String(soundCategory + "o");
    }
  } else if(soundCategory === "y") {
    numRand = Math.floor(Math.random() * (4 - 1) ) + 1;
    if(numRand === 1) {
      hrgnaSound = String("ya");
    } else if(numRand === 2) {
      hrgnaSound = String("yu");
    } else if(numRand === 3) {
      hrgnaSound = String("yo");
    }
  } else if(soundCategory === "w") {
    numRand = Math.floor(Math.random() * (3 - 1) ) + 1;
    if(numRand === 1) {
      hrgnaSound = String("wa");
    } else if(numRand === 2) {
      hrgnaSound = String("wo");
    }
  } else if(soundCategory === "u") {
    hrgnaSound = "n";
  } else if(soundCategory === "a") {
    numRand = Math.floor(Math.random() * (6 - 1) ) + 1;
    if(numRand === 1) {
      hrgnaSound = "a";
    } else if(numRand === 2) {
      hrgnaSound = "i";
    } else if(numRand === 3) {
      hrgnaSound = "u";
    } else if(numRand === 4) {
      hrgnaSound = "e";
    } else if(numRand === 5) {
      hrgnaSound = "o";
    }
  }
}

// TEST CODE
/*
function testGenerateHiragana(level) {
  let soundCtgryArray = {
    a: 0,
    ka: 0,
    sa: 0,
    ta: 0,
    na: 0,
    ha: 0,
    ma: 0,
    ya: 0,
    ra: 0,
    wa: 0,
    n: 0,
    errors: 0
  }
  let soundArray = {
    a: [0, 0, 0, 0, 0, 0],
    ka: [0, 0, 0, 0, 0, 0],
    sa: [0, 0, 0, 0, 0, 0],
    ta: [0, 0, 0, 0, 0, 0],
    na: [0, 0, 0, 0, 0, 0],
    ha: [0, 0, 0, 0, 0, 0],
    ma: [0, 0, 0, 0, 0, 0],
    ya: [0, 0, 0, 0, 0, 0],
    ra: [0, 0, 0, 0, 0, 0],
    wa: [0, 0, 0, 0, 0, 0],
    n: [0, 0, 0, 0, 0, 0],
    errors: [0]
  }

  for (let i = 0; i < 1000; i++) {
    randomizeHiraganaSoundCategory(level);
    selectSoundFromHiraganaCategory();

    if(hrgnaSoundCtgry === "a") {
      soundCtgryArray.a+=1;
    } else if(hrgnaSoundCtgry === "ka") {
      soundCtgryArray.ka+=1;
    } else if(hrgnaSoundCtgry === "sa") {
      soundCtgryArray.sa+=1;
    } else if(hrgnaSoundCtgry === "ta") {
      soundCtgryArray.ta+=1;
    } else if(hrgnaSoundCtgry === "na") {
      soundCtgryArray.na+=1;
    } else if(hrgnaSoundCtgry === "ha") {
      soundCtgryArray.ha+=1;
    } else if(hrgnaSoundCtgry === "ma") {
      soundCtgryArray.ma+=1;
    } else if(hrgnaSoundCtgry === "ya") {
      soundCtgryArray.ya+=1;
    } else if(hrgnaSoundCtgry === "ra") {
      soundCtgryArray.ra+=1;
    } else if(hrgnaSoundCtgry === "wa") {
      soundCtgryArray.wa+=1;
    } else if(hrgnaSoundCtgry === "u") {
      soundCtgryArray.n+=1;
    } else {
      soundCtgryArray.errors+=1;
    }

    if(hrgnaSound === "a") {
      soundArray.a[0]+=1;
    } else if(hrgnaSound === "i") {
      soundArray.a[1]+=1;
    } else if(hrgnaSound === "u") {
      soundArray.a[2]+=1;
    } else if(hrgnaSound === "e") {
      soundArray.a[3]+=1;
    } else if(hrgnaSound === "o") {
      soundArray.a[4]+=1;
    } else if(hrgnaSound === "ka") {
      soundArray.ka[0]+=1;
    } else if(hrgnaSound === "ki") {
      soundArray.ka[1]+=1;
    } else if(hrgnaSound === "ku") {
      soundArray.ka[2]+=1;
    } else if(hrgnaSound === "ke") {
      soundArray.ka[3]+=1;
    } else if(hrgnaSound === "ko") {
      soundArray.ka[4]+=1;
    } else if(hrgnaSound === "sa") {
      soundArray.sa[0]+=1;
    } else if(hrgnaSound === "shi") {
      soundArray.sa[1]+=1;
    } else if(hrgnaSound === "su") {
      soundArray.sa[2]+=1;
    } else if(hrgnaSound === "se") {
      soundArray.sa[3]+=1;
    } else if(hrgnaSound === "so") {
      soundArray.sa[4]+=1;
    } else if(hrgnaSound === "ta") {
      soundArray.ta[0]+=1;
    } else if(hrgnaSound === "chi") {
      soundArray.ta[1]+=1;
    } else if(hrgnaSound === "tsu") {
      soundArray.ta[2]+=1;
    } else if(hrgnaSound === "te") {
      soundArray.ta[3]+=1;
    } else if(hrgnaSound === "to") {
      soundArray.ta[4]+=1;
    } else if(hrgnaSound === "na") {
      soundArray.na[0]+=1;
    } else if(hrgnaSound === "ni") {
      soundArray.na[1]+=1;
    } else if(hrgnaSound === "nu") {
      soundArray.na[2]+=1;
    } else if(hrgnaSound === "ne") {
      soundArray.na[3]+=1;
    } else if(hrgnaSound === "no") {
      soundArray.na[4]+=1;
    } else if(hrgnaSound === "ha") {
      soundArray.ha[0]+=1;
    } else if(hrgnaSound === "hi") {
      soundArray.ha[1]+=1;
    } else if(hrgnaSound === "fu") {
      soundArray.ha[2]+=1;
    } else if(hrgnaSound === "he") {
      soundArray.ha[3]+=1;
    } else if(hrgnaSound === "ho") {
      soundArray.ha[4]+=1;
    } else if(hrgnaSound === "ma") {
      soundArray.ma[0]+=1;
    } else if(hrgnaSound === "mi") {
      soundArray.ma[1]+=1;
    } else if(hrgnaSound === "mu") {
      soundArray.ma[2]+=1;
    } else if(hrgnaSound === "me") {
      soundArray.ma[3]+=1;
    } else if(hrgnaSound === "mo") {
      soundArray.ma[4]+=1;
    } else if(hrgnaSound === "ya") {
      soundArray.ya[0]+=1;
    } else if(hrgnaSound === "yu") {
      soundArray.ya[2]+=1;
    } else if(hrgnaSound === "yo") {
      soundArray.ya[4]+=1;
    } else if(hrgnaSound === "ra") {
      soundArray.ra[0]+=1;
    } else if(hrgnaSound === "ri") {
      soundArray.ra[1]+=1;
    } else if(hrgnaSound === "ru") {
      soundArray.ra[2]+=1;
    } else if(hrgnaSound === "re") {
      soundArray.ra[3]+=1;
    } else if(hrgnaSound === "ro") {
      soundArray.ra[4]+=1;
    } else if(hrgnaSound === "wa") {
      soundArray.wa[0]+=1;
    } else if(hrgnaSound === "wo") {
      soundArray.wa[4]+=1;
    } else if(hrgnaSound === "n") {
      soundArray.n[5]+=1;
    } else {
      soundArray.errors[0]+=1;
    }
  }
  console.log(soundCtgryArray);
  console.log(soundArray);
}

testGenerateHiragana(5);
*/
