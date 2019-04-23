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
const currentVersion= "0.35";

let matchesStorage = []
let count = -1;
//TODO Add Corresponding URL's
//TODO Add Google adsense
//TODO Add best map..
//TODO Add Ajax search..
//TODO Add taart diagram -- chartJS
//TODO Add if solo or premade
//TODO Add legenda
//TODO Add footer & copyright shizzle

$(function() {
  $("#friendlyTeam")
    .empty()
    .append(`<div class='buttonHead'><h3>Friendly:</h3></div>`);
  $("#enemyTeam")
    .empty()
    .append(`<div class='buttonHead'><h3>Enemy:</h3></div>`);
  $("#facts")
    .empty()
    .append(`<div class='buttonHead'><h3>Info:</h3></div>`);
  $("#version")
    .empty()
    .append(`<div class='buttonHead'><h5>current-version. ${currentVersion}</h5></div>`);
  $("#Profiles").append(
    `<div class='profileBox'></div>
    <div class='profileBox'></div>`
  );
  $("#searchButton").click(function(e) {

    clearVals();
    if ((player_Nick_1 = $("#input1").val() != "")) {
      if ((player_Nick_2 = $("#input2").val() != "")) {
        clearHtml();
        matchesStorage=[]
        $("#friendlyTeam").empty().append(`
        <div class='buttonHead'><h3>Friendly:</h3></div>
          <div class='matchButton'>
          <div class='gameTime'>Time</div>
          <div class='scoreLine'>Score</div>
          <div class='result'>Result</div>
          <div class='map'>Map</div>
          <div class='demo'>Demo</div>
          <div></div>`);
        $("#enemyTeam").empty().append(`
        <div class='buttonHead'><h3>Enemy:</h3></div>
        <div class='matchButton'>
        <div class='gameTime'>Time</div>
        <div class='scoreLine'>Score</div>
        <div class='result'>Result</div>
        <div class='map'>Map</div>
        <div class='demo'>Demo</div>
        <div></div>`);
        $("#facts").append("<div class='buttonHead'><h3>Info:</h3></div>");

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
            setTimeout(() => {
              clearInterval(matches_output);
            }, matches_Amount);
            
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
});

//* TIMINGS MARKED WITH [i]
// Get Player Info 1
//* TIMING: [1]
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
};

//* TIMING: [2]
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
};

//* TIMING: [4]
//Check teammates or not


//* TIMING: [3]
//Get all player matches played
let getAllPlayerMatches = (player_id, offset) => {
  offset = calcSearch() - 100;
  let playerUrl = `${baseUrl}players/${player_id}/history?game=csgo&from=1262304000&to=1555493746&offset=${offset}&limit=100`;
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
};

//* TIMING: [5]
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
    matchesStorage.push(getTime)
    console.log(matchesStorage)

    
  });
};

//* TIMING: [6]
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
          `<div class='matchButton'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoUrl}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      if (condition == "LOSE") {
        timesLostInTeam++;
        $("#friendlyL").append(
          `<div class='matchButton'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoUrl}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      $("#friendlyTeam").empty().append(`
          <div class='buttonHead'><h3>Friendly: (${timesWonInTeam +
            timesLostInTeam})</h3></div>
          <div class='matchButton'>
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
          `<div class='matchButton'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoUrl}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      if (condition == "LOSE") {
        timesLostVs++;
        $("#enemyL").append(
          `<div class='matchButton'>
            <div id='gameTime'>${matchesStorage[count]}</div>
            <div id='scoreLine'>${scoreLine}</div>
            <div class='span${condition}'><strong>${condition}</strong></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed}</div></a>
            <div><a href='${demoUrl}'>Watch Demo <i class="fas fa-download"></i></a></div>
            <div><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>
            <i class="fas fa-chevron-right"></i></a>
            </div>`
        );
      }
      $("#enemyTeam").empty().append(`
          <div class='buttonHead'><h3>Enemy: (${timesWonVs +
            timesLostVs})</h3></div>
          <div class='matchButton'>
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
    $("#facts").empty().append(`<li class='buttonHead'><h3>Facts:</h3></li>
    <li class='listItem'><strong>${player_Nick_1}</strong> has met <strong>${player_Nick_2}</strong> <strong>${timesMet}</strong> times in ${matches_Amount} matches.</li>
    <li class='listItem'>When <strong>${player_Nick_1}</strong> and <strong>${player_Nick_2}</strong> played together they won ${timesWonInTeam} games and lost ${timesLostInTeam} games.</li>
    <li class='listItem'>When <strong>${player_Nick_1}</strong> and <strong>${player_Nick_2}</strong> played on opposites <strong>${player_Nick_1}</strong> won ${timesWonVs} games and lost ${timesLostVs} games.</li>
    <li class='listItem'>${impactScoreFriendly}% is the overal winrate when playing together.</li>
    <li class='listItem'>${impactScoreEnemy}% is the overal winrate when playing against <strong>${player_Nick_2}</strong> .</li>`);
  });
};

//* Standalone functions
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
