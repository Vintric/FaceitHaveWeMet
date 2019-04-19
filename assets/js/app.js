const token = "655d9216-acc1-4fe5-bf5d-6f424b0d62c6"; //
const baseUrl = "https://open.faceit.com/data/v4/";
let player_Nick_1;
let player_Nick_2;
let player_id_1;
let player_id_2;

let team_id_1_fetch_players;
let team_id_2_fetch_players;

let output = $("#Profiles");
let playerData;
let urlsplit;
let playerUrl;

let timesMet = 0;
let timesInTeam = 0;
let timesInEnemy = 0;
let timesWonInTeam = 0;
let timesLostInTeam = 0;
let timesWonVs = 0;
let timesLostVs = 0;

let searchOffset = 0;
let matchOutTimer = 0;
let condition;

let impactScore = 0;
let impactScoreEnemy = 0;

//TODO Add Corresponding URL's
//TODO Add Google adsense
//TODO Add Demo download capability
//TODO Add best map..
//TODO Add Ajax search..
//TODO Add taart diagram -- chartJS
//TODO Add if solo or premade
//TODO Add legenda
//TODO Add footer & copyright shizzle

$(function () {
  $("#searchButton").click(function (e) {
    clearVals();
    if ((player_Nick_1 = $("#input1").val() != "")) {
      clearHtml();
      if ((player_Nick_2 = $("#input2").val() != "")) {
        clearHtml();
        $("#friendlyTeam")
          .empty()
          .append("Friendly:<br>");
        $("#enemyTeam")
          .empty()
          .append("Enemy:<br>");
        $("#textOutput").append("Facts:");
        if ((matches_Amount = $("#input3").val() != "")) {
          if ($("#input1").val() !== $("#input2").val()) {
            player_Nick_1 = $("#input1").val();
            player_Nick_2 = $("#input2").val();
            matches_Amount = $("#input3").val();
            let pOutTimer = parseInt(matches_Amount) + 6000;
            console.log(pOutTimer);
            setTimers();
            handlePlayerNickToId1(player_Nick_1);
            handlePlayerNickToId2(player_Nick_2);
            setTimeout(function () {
              setParagraph();
            }, pOutTimer);
            // repeat with the interval of 1 seconds
            let matches_output = setInterval(() => timedEvents(), 100);
            setTimeout(() => {
              clearInterval(matches_output);
            }, matches_Amount);
          } else {
            output.empty().append(`Make sure you have entered 2 unique nicknames! `);
          }
        } else {
          output.empty().append(`Please fill in the amount of matches`);
        }
      } else {
        output.empty().append(`Please fill in player 2`);
      }
    } else {
      output.empty().append(`Please fill in player 1`);
    }
    e.preventDefault();
  });
  $("#Changelog").click(function (e) {
    $("#changelogContainer").fadeToggle("hidden");
    $("#faqContainer").removeClass("hidden");
  });
  $("#faq").click(function (e) {
    $("#faqContainer").fadeToggle("hidden");
    $("#changelogContainer").removeClass("hidden");
  });
});

//* als searchOffset een waarde calcamount heeft bereikt dan eindigt interval.
//* searchOffset = val die ingegeven wordt -100
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
  setTimeout(function () {
    getAllPlayerMatches(player_id_1, searchOffset);
  }, 1000);
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
  }).done(function (data) {
    player_id_1 = data.player_id;
    avatar_1 = data.avatar;
    steamid_1 = data.platforms.steam;
    country_1 = data.country;
    faceit_elo_1 = data.games.csgo.faceit_elo;
    steam_id_64_1 = data.steam_id_64;
    faceit_url = data.faceit_url;
    profileLink_1 = faceit_url.split("/").slice(-1)[0];
    //Output text
    output.append(`<div class='profileBox'>
    <img src='${avatar_1}'>
    <div class='profileInfo'>
    <h3><a href='https://www.faceit.com/en/players/${profileLink_1}'>${nickname}</a></h3>
    <pre>Elo:${faceit_elo_1}</pre>
    <pre>Country:${country_1}</pre>
    <pre>Steam-id:${steamid_1}</pre>
    <pre><a href='https://steamcommunity.com/profiles/${steam_id_64_1}'>Steam-profile</a></pre>
     </div>
     </div>`);
  });
};
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
  }).done(function (data) {
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
    <pre>Elo:${faceit_elo_2}</pre>
    <pre>Country:${country_2}</pre>
    <pre>Steam-id:${steamid_2}</pre>
    <pre><a href='https://steamcommunity.com/profiles/${steam_id_64_2}'>Steam-profile</a></pre>
     </div>
     </div>`);
  });
};
// General Player info handler
let handlePlayerId = id => {
  let handleUrl = `${baseUrl}players/${id}`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: handleUrl,
    dataType: "json",
    error: handleAjaxError
  }).done(function (data) {
    output.append(`${data.nickname}<br>`);
  });
};

//Check teammates or not
let getIfTeamOrEnemy = (position1, position2) => {
  if (posiOne >= position1 && posiOne <= position2) {
    if (posiTwo >= position1 && posiTwo <= position2) {
      convertUrl(matches.faceit_url);
      getAllPlayerMatchesStats(urlsplit, "Friendly");
    } else {
      convertUrl(matches.faceit_url);
      getAllPlayerMatchesStats(urlsplit, "Enemy");
    }
  }
};

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
  }).done(function (data) {
    for (let i = 0; i < data.items.length; i++) {
      matches = data.items[i];
      players = matches.playing_players;
      //Get posi of player1
      posiOne = players.indexOf(player_id_1);
      //Get posi of player2
      posiTwo = players.indexOf(player_id_2);

      //Check all games you played together
      if (posiTwo == -1) {
        continue;
      }
      //Check if teammates or enemy
      getIfTeamOrEnemy(0, 4);
      getIfTeamOrEnemy(5, 9);
    }
  });
};

// Get match statistics
let getAllPlayerMatchesStats = (urlsplit, Team) => {
  let playerUrl = `${baseUrl}matches/${urlsplit}/stats`;
  $.ajax({
    headers: {
      Authorization: "Bearer " + token
    },
    url: playerUrl,
    dataType: "json",
    error: handleAjaxError
  }).done(function (data) {
    mapPlayed = data.rounds[0].round_stats.Map;
    scoreLine = data.rounds[0].round_stats.Score;
    gameWinner = data.rounds[0].round_stats.Winner;
    // console.log(gameWinner);
    teamId_1 = data.rounds[0].teams[0].team_id;
    // console.log(teamId_1);
    teamId_2 = data.rounds[0].teams[1].team_id;
    // console.log(teamId_2);
    // console.log(data.rounds[0])

    //Get players from first team
    let team_id_1_fetch_players_0 =
      data.rounds[0].teams[0].players[0].player_id;
    let team_id_1_fetch_players_1 =
      data.rounds[0].teams[0].players[1].player_id;
    let team_id_1_fetch_players_2 =
      data.rounds[0].teams[0].players[2].player_id;
    let team_id_1_fetch_players_3 =
      data.rounds[0].teams[0].players[3].player_id;
    let team_id_1_fetch_players_4 =
      data.rounds[0].teams[0].players[4].player_id;
    //Get players from second team
    let team_id_2_fetch_players_0 =
      data.rounds[0].teams[1].players[0].player_id;
    let team_id_2_fetch_players_1 =
      data.rounds[0].teams[1].players[1].player_id;
    let team_id_2_fetch_players_2 =
      data.rounds[0].teams[1].players[2].player_id;
    let team_id_2_fetch_players_3 =
      data.rounds[0].teams[1].players[3].player_id;
    let team_id_2_fetch_players_4 =
      data.rounds[0].teams[1].players[4].player_id;

    //* Adds win or loss to the games and colors them
    if (gameWinner === teamId_1) {
      if (
        player_id_1 == team_id_1_fetch_players_0 ||
        player_id_1 == team_id_1_fetch_players_1 ||
        player_id_1 == team_id_1_fetch_players_2 ||
        player_id_1 == team_id_1_fetch_players_3 ||
        player_id_1 == team_id_1_fetch_players_4
      ) {
        condition = "W";
      } else {
        condition = "L";
      }
    }
    if (gameWinner === teamId_2) {
      if (
        player_id_1 == team_id_2_fetch_players_0 ||
        player_id_1 == team_id_2_fetch_players_1 ||
        player_id_1 == team_id_2_fetch_players_2 ||
        player_id_1 == team_id_2_fetch_players_3 ||
        player_id_1 == team_id_2_fetch_players_4
      ) {
        condition = "W";
      } else {
        condition = "L";
      }
    }

    if (Team == "Friendly") {
      if (condition == "W") {
        timesWonInTeam++;
        $("#friendlyW").append(
          `<li class='matchButton${Team}'><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed} - <span class='span${condition}'>${scoreLine} - ${condition}</span></a></li>`
        );
      }
      if (condition == "L") {
        timesLostInTeam++;
        $("#friendlyL").append(
          `<li class='matchButton${Team}'><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed} - <span class='span${condition}'>${scoreLine} - ${condition}</span></a></li>`
        );
      }
      $("#friendlyTeam")
        .empty()
        .append(`Friendly: (${timesWonInTeam + timesLostInTeam})`);
    }

    if (Team == "Enemy") {
      if (condition == "W") {
        timesWonVs++;
        $("#enemyW").append(
          `<li class='matchButton${Team}'><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed} - <span class='span${condition}'>${scoreLine} - ${condition}</span></a></li>`
        );
      }
      if (condition == "L") {
        timesLostVs++;
        $("#enemyL").append(
          `<li class='matchButton${Team}'><a href='https://www.faceit.com/en/csgo/room/${urlsplit}/scoreboard'>${mapPlayed} - <span class='span${condition}'>${scoreLine} - ${condition}</span></a></li>`
        );
      }
      $("#enemyTeam")
        .empty()
        .append(`Enemy: (${timesWonVs + timesLostVs})`);
    }
    impactScoreFriendly = Math.round((timesWonInTeam / (timesWonInTeam + timesLostInTeam)) * 100);
    impactScoreEnemy = Math.round((timesWonVs / (timesLostVs + timesWonVs)) * 100);
    timesMet = (timesLostVs + timesWonVs) + (timesWonInTeam + timesLostInTeam);
    $(
      "#textOutput"
    ).empty().append(`<p><strong>${player_Nick_1}</strong> has met <strong>${player_Nick_2}</strong> <strong>${timesMet}</strong> times in ${matches_Amount} matches.</p>
    <p>When <strong>${player_Nick_1}</strong> and <strong>${player_Nick_2}</strong> played together they won ${timesWonInTeam} games and lost ${timesLostInTeam} games.</p>
    <p>When <strong>${player_Nick_1}</strong> and <strong>${player_Nick_2}</strong> played on opposites <strong>${player_Nick_1}</strong> won ${timesWonVs} games and lost ${timesLostVs} games.</p>
    <p>${impactScoreFriendly}% is the overal winrate when playing together.</p>
    <p>${impactScoreEnemy}% is the overal winrate when playing against <strong>${player_Nick_2}</strong> .</p>`);
  });
  // console.log(typeof timesWonInTeam);
  // console.log(typeof timesInEnemy);

  // console.log(typeof impactScore );
};
//Handle UrlSplitting
let convertUrl = objecturl => {
  url = objecturl;
  urlsplit = url.split("/").slice(-1)[0];
  return urlsplit;
};

//Handle fail
let handleAjaxError = () => {
  console.log("There was a problem proccesing your request");
};