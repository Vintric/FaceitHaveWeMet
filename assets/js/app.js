const token = "655d9216-acc1-4fe5-bf5d-6f424b0d62c6"; //
const baseUrl = "https://open.faceit.com/data/v4/";
let player_Nick_1;
let player_Nick_2;
let player_id_1;
let player_id_2;

let output = $("#Profiles");
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
const currentVersion= "0.44";

let demoStorage = []
let matchesStorage = []
let count = -1;

let now = new Date();


let searchCounter = -1;
let searchStorage = [];
let nicknameLooped;

//TODO Add Corresponding URL's
//TODO Add Google adsense
//TODO Add best map..


//TODO Add if solo or premade



$(function() {
  let regExSearch = (param) => {
    trueTyped = param
    // //* Original name with minor differators
    handleAjaxSearch(trueTyped);
    handleAjaxSearch("-" + trueTyped);
    // //*remove first letter
    let searchNoFirstLetter = trueTyped.slice(1);
    handleAjaxSearch(searchNoFirstLetter);

    //!SEARCH IN LEET 
      //*change o to 0 as some people have o changed to 0 & viceversa
      let replaceOwitho01 = trueTyped.replace(/o/g, '0')
      let replaceOnewith02 = trueTyped.replace(/0/g, 'o')
      handleAjaxSearch(replaceOwitho01);
      handleAjaxSearch(replaceOnewith02);

      //*change i to 1 
      let replace1with1 = trueTyped.replace(/i/g, '1')
      let replace1with2 = trueTyped.replace(/1/g, 'i')
      handleAjaxSearch(replace1with1);
      handleAjaxSearch(replace1with2);

      //*change z to 2 
      let replace2with1 = trueTyped.replace(/z/g, '2')
      let replace2with2 = trueTyped.replace(/2/g, 'z')
      handleAjaxSearch(replace2with1);
      handleAjaxSearch(replace2with2);

      //*change e to 3 
      let replace3with1 = trueTyped.replace(/e/g, '3')
      let replace3with2 = trueTyped.replace(/3/g, 'e')
      handleAjaxSearch(replace3with1);
      handleAjaxSearch(replace3with2);

      //*change a to 4 
      let replace4with1 = trueTyped.replace(/a/g, '4')
      let replace4with2 = trueTyped.replace(/a/g, '4')
      handleAjaxSearch(replace4with1);
      handleAjaxSearch(replace4with2);

      //*change s to 5
      let replace5with1 = trueTyped.replace(/s/g, '5')
      let replace5with2 = trueTyped.replace(/5/g, 's')
      handleAjaxSearch(replace5with1);
      handleAjaxSearch(replace5with2);
      //*change g to 6
      let replace6with1 = trueTyped.replace(/g/g, '6')
      let replace6with2 = trueTyped.replace(/6/g, 'g')
      handleAjaxSearch(replace6with1);
      handleAjaxSearch(replace6with2);
      //*change t to 7
      let replace7with1 = trueTyped.replace(/t/g, '7')
      let replace7with2 = trueTyped.replace(/7/g, 't')
      handleAjaxSearch(replace7with1);
      handleAjaxSearch(replace7with2);
      //*change b to 8
      let replace8with1 = trueTyped.replace(/b/g, '8')
      let replace8with2 = trueTyped.replace(/8/g, 'b')
      handleAjaxSearch(replace8with1);
      handleAjaxSearch(replace8with2);

    //!Add Case sens search
    let caseSensA = trueTyped.replace(/a/g, 'A')
    console.log(caseSensA)
    handleAjaxSearch(caseSensA);
    let caseSensB = trueTyped.replace(/b/g, 'B')
    console.log(caseSensB)
    handleAjaxSearch(caseSensB);
    let caseSensC = trueTyped.replace(/c/g, 'C')
    console.log(caseSensC)
    handleAjaxSearch(caseSensC);
    let caseSensD = trueTyped.replace(/d/g, 'D')
    console.log(caseSensD)
    handleAjaxSearch(caseSensD);
    let caseSensE = trueTyped.replace(/e/g, 'E')
    console.log(caseSensE)
    handleAjaxSearch(caseSensE);
    let caseSensF = trueTyped.replace(/f/g, 'F')
    console.log(caseSensF)
    handleAjaxSearch(caseSensF);
    let caseSensG = trueTyped.replace(/g/g, 'G')
    console.log(caseSensG)
    handleAjaxSearch(caseSensG);
    let caseSensH = trueTyped.replace(/h/g, 'H')
    console.log(caseSensH)
    handleAjaxSearch(caseSensH);
    let caseSensI = trueTyped.replace(/i/g, 'I')
    console.log(caseSensI)
    handleAjaxSearch(caseSensI);
    let caseSensJ = trueTyped.replace(/j/g, 'J')
    console.log(caseSensJ)
    handleAjaxSearch(caseSensJ);
    let caseSensK = trueTyped.replace(/k/g, 'K')
    console.log(caseSensK)
    handleAjaxSearch(caseSensK);
    let caseSensL = trueTyped.replace(/l/g, 'L')
    console.log(caseSensL)
    handleAjaxSearch(caseSensL);
    let caseSensM = trueTyped.replace(/m/g, 'M')
    console.log(caseSensM)
    handleAjaxSearch(caseSensM);
    let caseSensN = trueTyped.replace(/n/g, 'N')
    console.log(caseSensN)
    handleAjaxSearch(caseSensN);
    let caseSensO = trueTyped.replace(/o/g, 'O')
    console.log(caseSensO)
    handleAjaxSearch(caseSensO);
    let caseSensP = trueTyped.replace(/p/g, 'P')
    console.log(caseSensP)
    handleAjaxSearch(caseSensP);
    let caseSensQ = trueTyped.replace(/q/g, 'Q')
    console.log(caseSensQ)
    handleAjaxSearch(caseSensQ);
    let caseSensR = trueTyped.replace(/r/g, 'R')
    console.log(caseSensR)
    handleAjaxSearch(caseSensR);
    let caseSensS = trueTyped.replace(/s/g, 'S')
    console.log(caseSensS)
    handleAjaxSearch(caseSensS);
    let caseSensT = trueTyped.replace(/t/g, 'T')
    console.log(caseSensT)
    handleAjaxSearch(caseSensT);
    let caseSensU = trueTyped.replace(/u/g, 'U')
    console.log(caseSensU)
    handleAjaxSearch(caseSensU);
    let caseSensV = trueTyped.replace(/v/g, 'V')
    console.log(caseSensV)
    handleAjaxSearch(caseSensV);
    let caseSensW = trueTyped.replace(/w/g, 'W')
    console.log(caseSensW)
    handleAjaxSearch(caseSensW);
    let caseSensX = trueTyped.replace(/x/g, 'X')
    console.log(caseSensX)
    handleAjaxSearch(caseSensX);
    let caseSensY = trueTyped.replace(/y/g, 'Y')
    console.log(caseSensY)
    handleAjaxSearch(caseSensY);
    let caseSensZ = trueTyped.replace(/z/g, 'Z')
    console.log(caseSensZ)
    handleAjaxSearch(caseSensZ);
    
    // //* The Name typed with uppercase start
    let searchFirstCapped = trueTyped.charAt(0).toUpperCase() + trueTyped.slice(1);
    handleAjaxSearch(searchFirstCapped);
    
    // //* Uppercase all
    let searchUpperCase = trueTyped.toUpperCase();
    handleAjaxSearch(searchUpperCase);
  }
  $("#friendlyTeam")
    .empty()
    .append(`<div class='buttonHead'><h3>Friendly:</h3></div>`);
  $("#enemyTeam")
    .empty()
    .append(`<div class='buttonHead'><h3>Enemy:</h3></div>`);
  $("#facts")
    .empty()
    .append(`<div class='buttonHead'><h3>Facts:</h3></div>`);
  $("footer")
    .empty()
    .append(`
    <div id='version' href='#changelogContainer'><small>current-version: ${currentVersion}</small></div>
    <div id='CC><a href='https://www.github.com/AngeloAlfanoc'><small>Copyright &#169; ${now.getFullYear()} &#8226; Alfano Angelo</a>  &#8226; Some Rights Reserved.</small></div>`);
  $("#Profiles").append(
    `<div class='profileBox'></div>
    <div class='profileBox'></div>`
  );
  $("#searchButton").click(function(e) {

    clearVals();
    if ((player_Nick_1 = $("#input1").val() != "")) {
      if ((player_Nick_2 = $("#input2").val() != "")) {
        clearHtml();
        $("#friendlyTeam").empty().append(`
        <div class='buttonHead'><h3>Friendly:</h3></div>
          <div class='tableHeader'>
          <div class='gameTime'>Time</div>
          <div class='scoreLine'>Score</div>
          <div class='result'>Result</div>
          <div class='map'>Map</div>
          <div class='demo'>Demo</div>
          <div></div>`);
        $("#enemyTeam").empty().append(`
        <div class='buttonHead'><h3>Enemy:</h3></div>
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
              .append(`Make sure you have entered 2 unique nicknames! `);
          }
        } else {
          $("#errorbox")
            .empty()
            .append(`Please fill in the amount of matches`);
        }
      } else {
        $("#errorbox")
          .empty()
          .append(`Please fill in player 2`);
      }
    } else {
      $("#errorbox")
        .empty()
        .append(`Please fill in player 1`);
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
  
  $("#input1").click(function () { 
    searchStorage = []
    $("#searchBox").removeClass("none")
    $("#searchBox").addClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    $(`#searchBox`).empty()
  }); 
  $("#input1").focus(function () { 
    searchStorage = []
    $("#searchBox").removeClass("none")
    $("#searchBox").addClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    
  });
  $("#input1").keyup(function() {
    $("#searchBox").removeClass("none")
    $("#searchBox").addClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    $("#searchBox").empty();
    let trueTyped = $("#input1").val();
    regExSearch(trueTyped);
    

  });
 
  $("#input2").focus(function () { 
    searchStorage = []
    $("#searchBox2").removeClass("none")
    $("#searchBox2").addClass("absolute")
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $(`#searchBox2`).empty()
  });
$ ("#input2").keyup(function() {
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $("#searchBox2").removeClass("none")
    $("#searchBox2").addClass("absolute")
    $("#searchBox2").empty();
    let trueTyped = $("#input2").val();
    regExSearch(trueTyped);
  });
  $("#input2").click(function () { 
    searchStorage = []
    $("#searchBox2").removeClass("none")
    $("#searchBox2").addClass("absolute")
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $(`#searchBox2`).empty()
  });

  $("#input3").focus(function () { 
    searchStorage = []
    $("#searchBox").addClass("none")
    $("#searchBox").removeClass("absolute")
    $("#searchBox2").addClass("none")
    $("#searchBox2").removeClass("absolute")
    $(`#searchBox2`).empty()
    $(`#searchBox1`).empty()
  });
  

});


let handleAjaxSearch = (searchParam, boxid) => {
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },

    url: `https://open.faceit.com/data/v4/players?nickname=${searchParam}&game=csgo`,
    dataType: "json",
    success: function(data) {

      let nickname = data.nickname;
      let avatar = data.avatar;
      let country = data.country;
      
      searchCounter++
      

      getExists = searchStorage.indexOf(nickname)
      console.log(searchStorage)
      if (getExists === -1) {
        searchStorage.push(nickname)
        console.log(searchStorage)
        for(i = 0; i < searchStorage.length; i++) {
          nicknameLooped = searchStorage[i]
        }
        
       $(`#searchBox`).append(
       `<li><span><img src='${avatar}'><span><span>${nicknameLooped}</span><span class="flag-icon flag-icon-${country}"><span></li> `
      );
      $("#searchBox2").append(
        `<li><span><img src='${avatar}'><span><span>${nicknameLooped}</span><span class="flag-icon flag-icon-${country}"><span></li> `
       );
      }

      // binding click event to li
      $("#searchBox li").bind("click", function() {
        let text = $(this).text()
        $("#input1").val(text);
        searchStorage.length === 0;
        $(`#searchBox2`).empty()
      });
      $("#searchBox2 li").bind("click", function() {
        let text = $(this).text()
        $("#input2").val(text);
        searchStorage.length === 0;
        $(`#searchBox`).empty()
      });
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
  })
  $("#enemyButton").click(function(e) {
    $("#enemyW").children().toggleClass("none");
    $("#enemyW").children().toggleClass("flex");
    $("#enemyL").children().toggleClass("none");
    $("#enemyL").children().toggleClass("flex");
  })

  searchStorage.length === 0;


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
    error: handleAjaxError
  }).done(function(data) {
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
    output.append(`<div class='profileBox'>
    <img src='${avatar_1}'>
    <div class='profileInfo'>
    <h3><a href='https://www.faceit.com/en/players/${profileLink_1}'>${nickname}</a></h3>
    <p>Elo:${faceit_elo_1}</p>
    <p>Country: <span class="flag-icon flag-icon-${country_1}"></span></p>
    <p>Steam-id:${steamid_1}</p>
    <p><a href='https://steamcommunity.com/profiles/${steam_id_64_1}'>Steam-profile</a></p>
     </div>
     </div>`);
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
    error: handleAjaxError
  }).done(function(data) {
    player_id_2 = data.player_id;
    avatar_2 = data.avatar;
    steamid_2 = data.platforms.steam;
    country_2 = data.country;
    faceit_elo_2 = data.games.csgo.faceit_elo;
    steam_id_64_2 = data.steam_id_64;
    faceit_url = data.faceit_url;
    profileLink_2 = faceit_url.split("/").slice(-1)[0];
    output.append(`<div class='profileBox'>
    <img src='${avatar_2}'>
    <div class='profileInfo'>
    <h3><a href='https://www.faceit.com/en/players/${profileLink_2}'>${nickname}</a></h3>
    <p>Elo:${faceit_elo_2}</p>
    <p>Country: <span class="flag-icon flag-icon-${country_2}"></span></p>
    <p>Steam-id:${steamid_2}</p>
    <p><a href='https://steamcommunity.com/profiles/${steam_id_64_2}'>Steam-profile</a></p>
     </div>
     </div>`);
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
    error: handleAjaxError
  }).done(function(data) {
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
    async: false
  }).done(function(data) {
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
  

  let playerUrl = `${baseUrl}matches/${urlsplit}/stats`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: playerUrl,
    dataType: "json",
    error: "problem get All Player Matches Stats"
  }).done(function(data) {
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
    
if (getTime == undefined){

}
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
          <i class="fas fa-minus-square" id='minusFriendly'></i><h3>Friendly: (${timesWonInTeam +
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
          <i class="fas fa-minus-square" id='minusEnemy'></i><h3>Enemy: (${timesWonVs + timesLostVs})</h3></div>
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
    <div class='listItem'>${impactScoreEnemy}% is the overal winrate when playing against <strong>${player_Nick_2}</strong> .</div>`);
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
  output.empty();
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
//*------- STANDALONE---------*//