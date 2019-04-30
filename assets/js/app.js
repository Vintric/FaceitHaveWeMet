
let player_Nick_1;
let player_Nick_2;
let player_id_1;
let player_id_2;


let playerData;
let urlsplit;
let playerUrl;

let searchOffset = 0;
let matchOutTimer = 0;
let condition;
let demoUrl;

let impactScore = 0;
let impactScoreEnemy = 0;

let endData = 0;
let endDataPrev = 0;
let setDate = false;
let getTime;
let faceiturl;
const currentVersion= "0.56";

let demoStorage = []
let matchesStorage = []
let count = -1;

let now = new Date();


let searchCounter = -1;
let searchStorage = [];
let nicknameLooped;

//TODO Add Corresponding URL's
//TODO Add Ads
//TODO Change ajax searchbox css
//TODO listjs

let css = 'color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold;background: black;';
let css2 = 'color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold;background: black;';
let css3 = 'color:blue;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold;background: black;';
let token;
const baseUrl = "https://open.faceit.com/data/v4/";

$(function() {
  let keysToken = [
  "2ba7cdc4-3d72-41d4-8fc7-7fa5e0d3d1aa",
  "1411eea9-891b-4972-a84e-18dc8004232c",
  "fe0b9e1e-2d89-4cfd-8827-6be642670c78",
  "672a34d1-b254-4a22-aa61-ecf812657dc7",
  "49841c59-a98b-4edf-9e78-bc46eff44df1",
  "e070b097-5998-47fe-9385-df1157ddba7f",
  "a515a678-91fa-44b8-ad44-4214c8dd343f",
  "e37cd1e2-664c-491c-8da1-9f24d48249de",
  "fd6852b0-faae-4961-9eb7-a58e3b1dc75e",
  "655d9216-acc1-4fe5-bf5d-6f424b0d62c6",
  "2ba7cdc4-3d72-41d4-8fc7-7fa5e0d3d1aa",
  "1411eea9-891b-4972-a84e-18dc8004232c",
  "fe0b9e1e-2d89-4cfd-8827-6be642670c78",
  "672a34d1-b254-4a22-aa61-ecf812657dc7",
  "49841c59-a98b-4edf-9e78-bc46eff44df1",
  "e070b097-5998-47fe-9385-df1157ddba7f",
  "a515a678-91fa-44b8-ad44-4214c8dd343f",
  "e37cd1e2-664c-491c-8da1-9f24d48249de",
  "fd6852b0-faae-4961-9eb7-a58e3b1dc75e",
  "655d9216-acc1-4fe5-bf5d-6f424b0d62c6",
  "d5cde6c0-2c4e-41b4-bef9-53764f022500"
  ];
  setInterval(function(){token = rand(keysToken);console.log("%c"+token , css)},1);

  let regExSearch = (param) => {
    trueTyped = param
    let pushAble = (stringtopushtooarr) => {
      let position = searchStorage.indexOf(stringtopushtooarr)
      if (position === -1) {
        searchStorage.push(stringtopushtooarr)
        for(i = 0; i < searchStorage.length; i++ ){
          searchTerm = searchStorage[i]
            }

            handleAjaxSearch(searchTerm)
        }
    };


    //!Add original string!!!
    pushAble(trueTyped);

    //!Add pseudo exeptions
    pushAble("-" + trueTyped);
    pushAble(trueTyped + "-");
    //*remove first letter
    let searchNoFirstLetter = trueTyped.slice(1);
    pushAble(searchNoFirstLetter);
    
    
    //*Last letter caps
    let lastLetterCaps = trueTyped.replace(/[a-z]\b/g, c => c.toUpperCase())
    pushAble(lastLetterCaps);
    console.log(lastLetterCaps)
    //*First letter caps
    let firstLetterCaps = trueTyped.replace(/\b[a-z]/g, a => a.toUpperCase())
    pushAble(firstLetterCaps);
    console.log(firstLetterCaps)

    //*

    
    //* Full uppercase
    let searchUpperCase = trueTyped.toUpperCase();
    pushAble(searchUpperCase);  
    
    
    //!SEARCH IN L33T
    let searchInLeet = (str) => {
      //*change o to 0 as some people have o changed to 0 & viceversa
      let replaceOwitho01 = str.replace(/o/g, '0')
      let replaceOnewith02 = str.replace(/0/g, 'o')
      pushAble(replaceOwitho01);
      pushAble(replaceOnewith02);

      //*change i to 1 
      let replace1with1 = str.replace(/i/g, '1')
      let replace1with2 = str.replace(/1/g, 'i')
      pushAble(replace1with1);
      pushAble(replace1with2);

      //*change z to 2 
      let replace2with1 = str.replace(/z/g, '2')
      let replace2with2 = str.replace(/2/g, 'z')
      pushAble(replace2with1);
      pushAble(replace2with2);

      //*change e to 3 
      let replace3with1 = str.replace(/e/g, '3')
      let replace3with2 = str.replace(/3/g, 'e')
      pushAble(replace3with1);
      pushAble(replace3with2);

      //*change a to 4 
      let replace4with1 = str.replace(/a/g, '4')
      let replace4with2 = str.replace(/a/g, '4')
      pushAble(replace4with1);
      pushAble(replace4with2);

      //*change s to 5
      let replace5with1 = str.replace(/s/g, '5')
      let replace5with2 = str.replace(/5/g, 's')
      pushAble(replace5with1);
      pushAble(replace5with2);
      //*change g to 6
      let replace6with1 = str.replace(/g/g, '6')
      let replace6with2 = str.replace(/6/g, 'g')
      pushAble(replace6with1);
      pushAble(replace6with2);
      //*change t to 7
      let replace7with1 = str.replace(/t/g, '7')
      let replace7with2 = str.replace(/7/g, 't')
      pushAble(replace7with1);
      pushAble(replace7with2);
      //*change b to 8
      let replace8with1 = str.replace(/b/g, '8')
      let replace8with2 = str.replace(/8/g, 'b')
      pushAble(replace8with1);
      pushAble(replace8with2);

      
    };searchInLeet(trueTyped)

    //!Add Case sens search
    let CaseSensSearch = (str) => {


      let caseSensA = str.replace(/a/g, 'A')
      let caseSensA2 = str.replace(/A/g, 'a')
      pushAble(caseSensA);
      pushAble(caseSensA2);
      
      let caseSensB = str.replace(/b/g, 'B')
      let caseSensB2 = str.replace(/B/g, 'b')
      pushAble(caseSensB);
      pushAble(caseSensB2);
      

      let caseSensC = str.replace(/c/g, 'C')
      let caseSensC2 = str.replace(/C/g, 'c')
      pushAble(caseSensC);
      pushAble(caseSensC2);

      let caseSensD = str.replace(/d/g, 'D')
      let caseSensD2 = str.replace(/D/g, 'd')
      pushAble(caseSensD);
      pushAble(caseSensD2);

      let caseSensE = str.replace(/e/g, 'E')
      let caseSensE2 = str.replace(/E/g, 'e')
      pushAble(caseSensE);
      pushAble(caseSensE2);

      let caseSensF = str.replace(/f/g, 'F')
      let caseSensF2 = str.replace(/F/g, 'f')
      pushAble(caseSensF);
      pushAble(caseSensF2);

      let caseSensG = str.replace(/g/g, 'G')
      let caseSensG2 = str.replace(/G/g, 'g')
      pushAble(caseSensG);
      pushAble(caseSensG2);

      let caseSensH = str.replace(/h/g, 'H')
      let caseSensH2 = str.replace(/H/g, 'h')
      pushAble(caseSensH);
      pushAble(caseSensH2);

      let caseSensI = str.replace(/i/g, 'I')
      let caseSensI2 = str.replace(/I/g, 'i')
      pushAble(caseSensI);
      pushAble(caseSensI2);

      let caseSensJ = str.replace(/j/g, 'J')
      let caseSensJ2 = str.replace(/J/g, 'j')
      pushAble(caseSensJ);
      pushAble(caseSensJ2);

      let caseSensK = str.replace(/k/g, 'K')
      let caseSensK2 = str.replace(/K/g, 'k')
      pushAble(caseSensK);
      pushAble(caseSensK2);

      let caseSensL = str.replace(/l/g, 'L')
      let caseSensL2 = str.replace(/L/g, 'l')
      pushAble(caseSensL);
      pushAble(caseSensL2);

      let caseSensM = str.replace(/m/g, 'M')
      let caseSensM2 = str.replace(/M/g, 'm')
      pushAble(caseSensM);
      pushAble(caseSensM2);

      let caseSensN = str.replace(/n/g, 'N')
      let caseSensN2 = str.replace(/N/g, 'n')
      pushAble(caseSensN);
      pushAble(caseSensN2);

      let caseSensO = str.replace(/o/g, 'O')
      let caseSensO2 = str.replace(/O/g, 'o')
      pushAble(caseSensO);
      pushAble(caseSensO2);

      let caseSensP = str.replace(/p/g, 'P')
      let caseSensP2 = str.replace(/P/g, 'p')
      pushAble(caseSensP);
      pushAble(caseSensP2);

      let caseSensQ = str.replace(/q/g, 'Q')
      let caseSensQ2 = str.replace(/Q/g, 'q')
      pushAble(caseSensQ);
      pushAble(caseSensQ2);

      let caseSensR = str.replace(/r/g, 'R')
      let caseSensR2 = str.replace(/R/g, 'r')
      pushAble(caseSensR);
      pushAble(caseSensR2);

      let caseSensS = str.replace(/s/g, 'S')
      let caseSensS2 = str.replace(/S/g, 's')
      pushAble(caseSensS);
      pushAble(caseSensS2);

      let caseSensT = str.replace(/t/g, 'T')
      let caseSensT2 = str.replace(/T/g, 't')
      pushAble(caseSensT);
      pushAble(caseSensT2);

      let caseSensU = str.replace(/u/g, 'U')
      let caseSensU2 = str.replace(/U/g, 'u')
      pushAble(caseSensU);
      pushAble(caseSensU2);

      let caseSensV = str.replace(/v/g, 'V')
      let caseSensV2 = str.replace(/V/g, 'v')
      pushAble(caseSensV);
      pushAble(caseSensV2);

      let caseSensW = str.replace(/w/g, 'W')
      let caseSensW2 = str.replace(/W/g, 'w')
      pushAble(caseSensW);
      pushAble(caseSensW2);

      let caseSensX = str.replace(/x/g, 'X')
      let caseSensX2 = str.replace(/X/g, 'x')
      pushAble(caseSensX);
      pushAble(caseSensX2);

      let caseSensY = str.replace(/y/g, 'Y')
      let caseSensY2 = str.replace(/Y/g, 'y')
      pushAble(caseSensY);
      pushAble(caseSensY2);

      let caseSensZ = str.replace(/z/g, 'Z')
      let caseSensZ2 = str.replace(/Z/g, 'z')
      pushAble(caseSensZ);
      pushAble(caseSensZ2);

    };CaseSensSearch(trueTyped)

 
  }
  $("#friendlyTeam")
    .empty()
    .append(`<div class='buttonHead'><h3>As friendly:</h3></div>`);
  $("#enemyTeam")
    .empty()
    .append(`<div class='buttonHead'><h3>As enemy:</h3></div>`);
  $("#facts")
    .empty()
    .append(`<div class='buttonHead'><h3>Facts:</h3></div>`);
  $("footer")
    .empty()
    .append(`
    <div id='version' href='#changelogContainer'><small>current-version: ${currentVersion}</small></div>
    <div id='CC><a href='https://www.github.com/AngeloAlfanoc'><small>Copyright &#169; ${now.getFullYear()} &#8226; Alfano Angelo</a>  &#8226; Some Rights Reserved.</small></div>`);
  $("#searchButton").click(function(e) {

    clearVals();
    if ((player_Nick_1 = $("#input1").val() != "")) {
      if ((player_Nick_2 = $("#input2").val() != "")) {
        clearHtml();
        $("#friendlyTeam").empty().append(`
        <div class='buttonHead'><h3>As friendly:</h3></div>
          <div class='tableHeader'>
          <div class='gameTime'>Time</div>
          <div class='scoreLine'>Score</div>
          <div class='result'>Result</div>
          <div class='map'>Map</div>
          <div class='demo'>Demo</div>
          <div></div>`);
        $("#enemyTeam").empty().append(`
        <div class='buttonHead'><h3>As enemy:</h3></div>
        <div class='tableHeader'>
        <div class='gameTime'>Time</div>
        <div class='scoreLine'>Score</div>
        <div class='result'>Result</div>
        <div class='map'>Map</div>
        <div class='demo'>Demo</div>
        <div></div>`);
        $("#facts").empty().append("<div class='buttonHead'><h3>Facts:</h3></div>");

        if ((matches_Amount = $("#input3").val() != "")) {
          if ($("#input1").val() !== $("#input2").val()) {
            $("#errorbox").empty();
            player_Nick_1 = $("#input1").val();
            player_Nick_2 = $("#input2").val();
            matches_Amount = $("#input3").val();
            
            setTimers();
            handlePlayerNickToId1(player_Nick_1);
            handlePlayerNickToId2(player_Nick_2);
            
            // repeat with the interval of .1 seconds
            let matches_output = setInterval(() => timedEvents(), 100);
            setTimeout(() => {clearInterval(matches_output);}, matches_Amount);
  
          } else {
            $("#errorbox")
              .empty()
              .append(`error-03: Please make sure the specified usernames are not the equal!`);
          }
        } else {
          $("#errorbox")
            .empty()
            .append(`error-03: Matches field is blank.<br> Please supply us with any amount!`);
        }
      } else {
        $("#errorbox")
          .empty()
          .append(`error-02: No username for player 2.<br> Please make sure you have entered a username!`);
      }
    } else {
      $("#errorbox")
        .empty()
        .append(`error-01: No username for player 1.<br> Please make sure you have entered a username!`);
    }
    e.preventDefault();
  });
  $("#Changelog").click(function(e) {
    $("#changelogContainer").fadeToggle("hidden");
    $("#faqContainer").removeClass("hidden");
  });
  $("#faq").click(function(e) {
    $("#faqContainer").fadeToggle("hidden");
    $("#changelogContainer").removeClass("hidden");
  });
  $("#version").click(function(e) {
    $("#changelogContainer").fadeToggle("hidden");
    $("#faqContainer").removeClass("hidden");
  })
  //*LIVE SEARCH PROGRESSION 
  
  let debounce = function (func, wait, immediate) {
    let timeout;
    return function() {
       let  context = this, args = arguments;
        let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
  };


  $("#input1").click(function () { 

    $("#searchBox").removeClass("none")
    $("#searchBox").addClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    $(`#searchBox`).empty()
  }); 
  $("#input1").focus(function () { 

    $("#searchBox").removeClass("none")
    $("#searchBox").addClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    
  });

  $("#input1").keyup(debounce(function(){
    
    let trueTyped = $("#input1").val();
    regExSearch(trueTyped);
    $("#searchBox").removeClass("none")
    $("#searchBox").addClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    $("#searchBox").empty();

  },500));

 
  $("#input2").focus(function () { 

    $("#searchBox2").removeClass("none")
    $("#searchBox2").addClass("absolute")
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $(`#searchBox2`).empty()
  });
$ ("#input2").keyup(debounce(function(){
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $("#searchBox2").removeClass("none")
    $("#searchBox2").addClass("absolute")
    $("#searchBox2").empty();
    let trueTyped = $("#input2").val();
    regExSearch(trueTyped);
  },500));
  $("#input2").click(function () { 
    $("#searchBox2").removeClass("none")
    $("#searchBox2").addClass("absolute")
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $(`#searchBox2`).empty()
  });

  $("body").click(function(){
    
    $(`#searchBox`).empty()
    $(`#searchBox2`).empty()
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
  })
  $("#container").click(function(){

    $(`#searchBox`).empty()
    $(`#searchBox2`).empty()
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
  })

  $("#input3").focus(function () { 

    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    $(`#searchBox2`).empty()
    $(`#searchBox1`).empty()
  });
  

});

let nickname;

let handleAjaxSearch = (searchParam) => {
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },

    url: `https://open.faceit.com/data/v4/players?nickname=${searchParam}&game=csgo`,
    dataType: "json",
    
    
    beforeSend: function() {
      let checkEmpty = () => {
        if (trueTyped == "") {
          searchStorage = [];
        }
        console.log("%c"+token , css2)
      };

      setTimeout(function() {
        checkEmpty();
        ajaxreqeuestActive = 0;
      }, 3000);
      // trueTyped.length
    },
    
    success: function(data) {
      let avatar = data.avatar;
      let country = data.country;

      if (!data.avatar) {
        avatar = "./assets/img/profile.jpg";
      }

      {
        if (data.nickname) {
          nickname = data.nickname;
          $(`#searchBox`).append(
            `<li><span><img src='${avatar}'><span><span>${nickname}</span><span class="flag-icon flag-icon-${country}"><span></li> `
          );
          $("#searchBox2").append(
            `<li><span><img src='${avatar}'><span><span>${nickname}</span><span class="flag-icon flag-icon-${country}"><span></li> `
          );

          // binding click event to li
          $("#searchBox li").bind("click", function() {
            let text = $(this).text();
            $("#input1").val(text);
            searchStorage.splice(0, searchStorage);
            $(`#searchBox2`).empty();
          });
          $("#searchBox2 li").bind("click", function() {
            let text = $(this).text();
            $("#input2").val(text);
            searchStorage.splice(0, searchStorage);
            $(`#searchBox`).empty();
          });
        }
      }
    },
    error: function(data) {
      if (data.status == 404 || data.status == 400) {
        failedsearch = searchStorage.indexOf(searchParam);
        if (failedsearch >= 0) {
          searchStorage.splice(failedsearch, 1);
        }

        //
      }
    }
  });
}

//*-------AJAX OBJECT---------*//
  // On ajax start do the following
  $( document ).ajaxStart(function() {
    $("#loaderWrapper").removeClass("none");

  });
// On error start do the following
  $( document ).ajaxError(function() {
    
  });
  // As soon as all ajax loading stops end do the following 
  $(document).ajaxStop(function() {
  $("#loaderWrapper").addClass("none")
  $("#friendlyButton").click(function(e) {
    $("#friendlyW").children().toggleClass("none");
    $("#friendlyW").children().toggleClass("flex");
    $("#friendlyL").children().toggleClass("none");
    $("#friendlyL").children().toggleClass("flex");
  });

  
  $("#enemyButton").click(function(e) {
    $("#enemyW").children().toggleClass("none");
    $("#enemyW").children().toggleClass("flex");
    $("#enemyL").children().toggleClass("none");
    $("#enemyL").children().toggleClass("flex");
  });




  });
//*-------AJAX OBJECT---------*//

//*------- START MAIN FUNCTIONALITY---------*//
  //* TIMINGS MARKED WITH [i] !!!HEADFUNCTIONALITY!!! ///*
  //* TIMING: [1]  

  // Get Player Info 1
  let handlePlayerNickToId1 = nickname => {
  let profileUrl = `${baseUrl}players?nickname=${nickname}`;
  
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: profileUrl,
    dataType: "json",
    error: handleAjaxError,
    async:false

  }).done(function(data) {
    console.log("%c"+token , css3)
    player_id_1 = data.player_id;
    avatar_1 = data.avatar;
    steamid_1 = data.platforms.steam;
    country_1 = data.country;
    faceit_elo_1 = data.games.csgo.faceit_elo;
    steam_id_64_1 = data.steam_id_64;
    faceit_url = data.faceit_url;
    profileLink_1 = faceit_url.split("/").slice(-1)[0];
    console.log(player_id_1);

    //Output text
    $("#profilebox1").empty().append(`
    <img src='${avatar_1}'>
    <div class='profileInfo'>
    <h3><a href='https://www.faceit.com/en/players/${profileLink_1}'>${nickname}</a></h3>
    <p>Elo:${faceit_elo_1}</p>
    <p>Country: <span class="flag-icon flag-icon-${country_1}"></span></p>
    <p>Steam-id:${steamid_1}</p>
    <p><a href='https://steamcommunity.com/profiles/${steam_id_64_1}'>Steam-profile</a></p>
     </div>
     `);
  });
  };//* TIMING: [2]

  // Get Player Info 2
  let handlePlayerNickToId2 = nickname => {
  let profileUrl = `${baseUrl}players?nickname=${nickname}`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: profileUrl,
    dataType: "json",
    async:false
  }).done(function(data) {
    console.log("%c"+token , css3)
    player_id_2 = data.player_id;
    avatar_2 = data.avatar;
    steamid_2 = data.platforms.steam;
    country_2 = data.country;
    faceit_elo_2 = data.games.csgo.faceit_elo;
    steam_id_64_2 = data.steam_id_64;
    faceit_url = data.faceit_url;
    profileLink_2 = faceit_url.split("/").slice(-1)[0];
    $("#profilebox2").empty().append(`
    <img src='${avatar_2}'>
    <div class='profileInfo'>
    <h3><a href='https://www.faceit.com/en/players/${profileLink_2}'>${nickname}</a></h3>
    <p>Elo:${faceit_elo_2}</p>
    <p>Country: <span class="flag-icon flag-icon-${country_2}"></span></p>
    <p>Steam-id:${steamid_2}</p>
    <p><a href='https://steamcommunity.com/profiles/${steam_id_64_2}'>Steam-profile</a></p>
     </div>
     `);
  });
  };//* TIMING: [3]

  //Get all player matches played
  let getAllPlayerMatches = (player_id, offset) => {
  offset = calcSearch() - 100;
  let playerUrl = `${baseUrl}players/${player_id}/history?game=csgo&from=1262304000&to=1555493746&offset=${offset}&limit=${matches_Amount}`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: playerUrl,
    dataType: "json",
    error: handleAjaxError,

  }).done(function(data) {
    console.log("%c"+token , css3)
    for (let i = 0; i < data.items.length; i++) {
      matches = data.items[i];
      faceiturl = convertUrl(matches.faceit_url);
      
      players = matches.playing_players;
      //Get posi of player1
      posiOne = players.indexOf(player_id_1);
      //Get posi of player2
      posiTwo = players.indexOf(player_id_2);
      
      //Check all games you played together
      if (posiTwo == -1) {
        continue;
      }
      getDetailedMatchInfo(faceiturl)
      //Check if teammates or enemy
      if (posiOne >= 0 && posiOne <= 4) {
        if (posiTwo >= 0 && posiTwo <= 4) {
          getAllPlayerMatchesStats(faceiturl, "Friendly");
        } else {
          getAllPlayerMatchesStats(faceiturl, "Enemy");
        }
      }
      if (posiOne >= 5 && posiOne <= 9) {
        if (posiTwo >= 5 && posiTwo <= 9) {
          getAllPlayerMatchesStats(faceiturl, "Friendly");
        } else {
          getAllPlayerMatchesStats(faceiturl, "Enemy");
        }
      }

    }
  });
  };//* TIMING: [4]
  let timing4 = false;
  //Get matches played
  let getDetailedMatchInfo = urlsplit => {
  let Url = `${baseUrl}matches/${urlsplit}`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: Url,
    dataType: "json",
    error: handleAjaxError,
  }).done(function(data) {
    console.log("%c"+token , css3)
    demoUrl = data.demo_url;
    endData = data.finished_at;
    getTime = convertUnixTime(endData);
    matchesStorage.push(getTime);
    demoStorage.push(demoUrl);
    // console.log(matchesStorage)

    
  });
  };//* TIMING: [5]

  // Get match statistics
  let getAllPlayerMatchesStats = (urlsplit, Team) => {
  
let timing= 35000 * matches_Amount;
  let playerUrl = `${baseUrl}matches/${urlsplit}/stats`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: playerUrl,
    dataType: "json",
    timeout:timing,
    error: "problem get All Player Matches Stats"
  }).done(function(data) {
    console.log("%c"+token , css3)
    //* The map played
    mapPlayed = data.rounds[0].round_stats.Map;
    //* The score of the game
    scoreLine = data.rounds[0].round_stats.Score;

    //* Adds win or loss to the games and colors them
    if (data.rounds[0].round_stats.Winner == data.rounds[0].teams[0].team_id) {
      if (
        player_id_1 == data.rounds[0].teams[0].players[0].player_id||
        player_id_1 == data.rounds[0].teams[0].players[1].player_id ||
        player_id_1 == data.rounds[0].teams[0].players[2].player_id ||
        player_id_1 == data.rounds[0].teams[0].players[3].player_id ||
        player_id_1 == data.rounds[0].teams[0].players[4].player_id
      ) {
        condition = "WIN";
      } else {
        condition = "LOSE";
      }
    }
    
    if (data.rounds[0].round_stats.Winner == data.rounds[0].teams[1].team_id) {
      if (
        player_id_1 == data.rounds[0].teams[1].players[0].player_id ||
        player_id_1 == data.rounds[0].teams[1].players[1].player_id ||
        player_id_1 == data.rounds[0].teams[1].players[2].player_id ||
        player_id_1 == data.rounds[0].teams[1].players[3].player_id ||
        player_id_1 == data.rounds[0].teams[1].players[4].player_id
      ) {
        condition = "WIN";
      } else {
        condition = "LOSE";
      }
    }

    //* Append the buttons
    

else {
  count++

  
    if (Team == "Friendly") {
      if (condition == "WIN") {
        timesWonInTeam++;

        $("#friendlyW").append(
          `<div class='matchButton flex'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoStorage[count]}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      if (condition == "LOSE") {
        timesLostInTeam++;
        $("#friendlyL").append(
          `<div class='matchButton flex'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoStorage[count]}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      $("#friendlyTeam").empty().append(`
          <div class='buttonHead' id='friendlyButton'>
          <i class="fas fa-chevron-up"></i><h3>As friendly: (${timesWonInTeam +
            timesLostInTeam})</h3></div>
          <div class='tableHeader'>
          <div class='gameTime'>Time</div>
          <div class='scoreLine'>Score</div>
          <div class='result'>Result</div>
          <div class='map'>Map</div>
          <div class='demo'>Demo</div>
          <div></div>
       `);
    }
  
    if (Team == "Enemy") {
      if (condition == "WIN") {
        timesWonVs++;
        $("#enemyW").append(
          `<div class='matchButton flex'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoStorage[count]}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      if (condition == "LOSE") {
        timesLostVs++;
        $("#enemyL").append(
          `<div class='matchButton flex'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoStorage[count]}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      $("#enemyTeam").empty().append(`
          <div class='buttonHead'  id='enemyButton'>
          <i class="fas fa-chevron-up"></i><h3>As enemy: (${timesWonVs + timesLostVs})</h3></div>
          <div class='tableHeader'>
          <div class='gameTime'>Time</div>
          <div class='scoreLine'>Score</div>
          <div class='result'>Result</div>
          <div class='map'>Map</div>
          <div class='demo'>Demo</div>
          <div></div>
       `);
    
}
}
    //Calculate winrates
    impactScoreFriendly = Math.round(
      (timesWonInTeam / (timesWonInTeam + timesLostInTeam)) * 100
    );
    impactScoreEnemy = Math.round(
      (timesWonVs / (timesLostVs + timesWonVs)) * 100
    );
    timesMet = timesLostVs + timesWonVs + (timesWonInTeam + timesLostInTeam);
    $("#facts").empty().append(`<div class='buttonHead' id='factsButton'><h3>Facts:</h3></div>
    <div class='listItem'><strong>${player_Nick_1}</strong> has met <strong>${player_Nick_2}</strong> <strong>${timesMet}</strong> times in ${matches_Amount} matches.</div>
    <div class='listItem'>When <strong>${player_Nick_1}</strong> and <strong>${player_Nick_2}</strong> played together they won ${timesWonInTeam} games and lost ${timesLostInTeam} games.</div>
    <div class='listItem'>When <strong>${player_Nick_1}</strong> and <strong>${player_Nick_2}</strong> played on opposites <strong>${player_Nick_1}</strong> won ${timesWonVs} games and lost ${timesLostVs} games.</div>
    <div class='listItem'>${impactScoreFriendly}% is the overal winrate when playing together.</div>
    `);
  
  if(impactScoreEnemy >= 0) {
    $("#facts").append(`<div class='listItem'>${impactScoreEnemy}% is the overal winrate when playing against <strong>${player_Nick_2}</strong></div>`)
  }
  else {

  }
  });

  };
//*------- END MAIN FUNCTIONALITY---------*//


//*------- STANDALONE FUNCTIONS---------*//
//Handle UrlSplitting
let convertUrl = objecturl => {
  url = objecturl;
  urlsplit = url.split("/").slice(-1)[0];
  return urlsplit;
};
//Offset interval changer
let calcSearch = () => {
  calcAmount = matches_Amount - 100;
  while (searchOffset != calcAmount) {
    searchOffset = parseFloat(searchOffset + 100);
    return searchOffset;
  }
  return searchOffset;
};
//Timout events
let timedEvents = () => {
  setTimeout(function() {
    getAllPlayerMatches(player_id_1, searchOffset);
  }, 1100);
};
//Set timers to 0
let setTimers = () => {
  timesMet = 0;
  timesInEnemy = 0;
  timesInTeam = 0;
  searchOffset = 0;
  timesWonInTeam = 0;
  timesLostInTeam = 0;
  timesWonVs = 0;
  timesLostVs = 0;
};
//Clear HTML
let clearHtml = () => {
  $("#Profiles").empty();
  $("#friendlyTeam").empty();
  $("#friendlyW").empty();
  $("#friendlyL").empty();
  $("#enemyTeam").empty();
  $("#enemyW").empty();
  $("#enemyL").empty();
  $("#textOutput").empty();
};
let clearVals = () => {
  player_Nick_1 = "";
  player_Nick_2 = "";
};
//Handle fail
let handleAjaxError = () => {
  console.log("There was a problem proccesing your request");
};
//Convert Timestamp to date
let convertUnixTime = unixtime => {
      // Unixtimestamp
      let unixtimestamp = unixtime;
      // Months array
      let months_arr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      // Convert timestamp to milliseconds
      let date = new Date(unixtimestamp * 1000);
      // Year
      let year = date.getFullYear();
      // Month
      let month = months_arr[date.getMonth()];
      // Day
      let day = date.getDate();
      // Hours
      let hours = date.getHours();
      // Minutes
      let minutes = "0" + date.getMinutes();

      let convdataTime =
        day +
        " " +
        month +
        " " +
        year +
        " - " +
        hours +
        ":" +
        minutes.substr(-2);
        // console.log(convdataTime)
        return convdataTime
};


let rand = items => {
  return items[~~(items.length * Math.random())];
}; // jQuery Randomizer
//*------- STANDALONE---------*//
