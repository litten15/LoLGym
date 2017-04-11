function submitInfo() {
    
    var SUMMONER_NAME_UI = "";
    SUMMONER_NAME_UI = $("#userName").val();
    
    var SERVER = "";
    SERVER = $("#local").val();
    
    var SUMMONER_NAME = SUMMONER_NAME_UI.replace(" ", "");
    SUMMONER_NAME = SUMMONER_NAME.toLowerCase().trim();
    
//    summonerLookUp(SERVER, SUMMONER_NAME);
    
    if (SUMMONER_NAME !== "") {
        
        $.ajax({
        url: 'https://' + SERVER + '.api.pvp.net/api/lol/' + SERVER + '/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
        type: 'GET',
        dataType: 'json',
        data: {
        },
        success: function(json) {
            summonerID = json[SUMMONER_NAME].id;
            summonerLevel = json[SUMMONER_NAME].summonerLevel;
            document.getElementById('sLevel').innerHTML = summonerLevel;
            fName = json[SUMMONER_NAME].name;
            document.getElementById('username').innerHTML = fName;
//            testing (SERVER);
//            alert("it worked");
            
            summonerLookUp(SERVER, summonerID, SUMMONER_NAME_UI);
            rankedLookup(summonerID, SERVER);
            
            },
        
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        document.getElementById('errors').innerHTML = "Error, could not find summoner";
      }
    });
} 

    else {
    alert("Please enter a summoner name");
}
      
}    

function summonerLookUp(SERVER, summonerID, SUMMONER_NAME_UI) {

//    alert(SERVER);
//    alert(SUMMONER_NAME);
//    alert(summonerID);
    
    if (summonerID !== "") {
        
        $.ajax({
        url: 'https://' + SERVER + '.api.pvp.net/api/lol/' + SERVER + '/v1.3/stats/by-summoner/' + summonerID + '/ranked?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
        type: 'GET',
        dataType: 'json',
        data: {
        },
        success: function(resp) {
            
            champs = resp.champions.length - 1;
//            document.getElementById('output').innerHTML = champs;
            
            played = resp.champions[champs].stats.totalSessionsPlayed;
            document.getElementById('played').innerHTML = played;
            
            wins = resp.champions[champs].stats.totalSessionsWon;
            document.getElementById('wins').innerHTML = wins;
            
            losses = resp.champions[champs].stats.totalSessionsLost;
            document.getElementById('losses').innerHTML = losses;
            
            winrate = wins / (wins + losses) * 100;
            document.getElementById('winrate').innerHTML = winrate + "%";
            
            kills = resp.champions[champs].stats.totalChampionKills;
            averageKills = kills / played;
            averageKills = Math.round(averageKills * 10) /10;
            document.getElementById('kills').innerHTML = averageKills + "/";
            
            assists = resp.champions[champs].stats.totalAssists;
            averageAssists = assists / played;
            averageAssists = Math.round(averageAssists * 10) / 10;
            document.getElementById('assists').innerHTML = averageAssists;
            
            deaths = resp.champions[champs].stats.totalDeathsPerSession;
            averageDeaths = deaths / played;
            averageDeaths = Math.round(averageDeaths * 10) / 10;
            document.getElementById('deaths').innerHTML = averageDeaths + "/";
            
            dmgD = resp.champions[champs].stats.totalDamageDealt;
            averageDmgD = dmgD / played;
            averageDmgD = Math.round(averageDmgD);
            document.getElementById('dmgD').innerHTML = averageDmgD;
            
            dmgT = resp.champions[champs].stats.totalDamageTaken;
            averageDmgT = dmgT / played;
            averageDmgT = Math.round(averageDmgT);
            document.getElementById('dmgT').innerHTML = averageDmgT;
            
            cs = resp.champions[champs].stats.totalMinionKills;
            averageCS = cs / played;
            averageCS = Math.round(averageCS);
            document.getElementById('cs').innerHTML = averageCS;
            
            gold = resp.champions[champs].stats.totalGoldEarned;
            averageGold = gold / played;
            averageGold = Math.round(averageGold);
            document.getElementById('aGold').innerHTML = averageGold;
            
            turrets = resp.champions[champs].stats.totalTurretsKilled;
            averageTurrets = turrets / played;
            averageTurrets = Math.round(averageTurrets * 10) / 10;
            document.getElementById('turrets').innerHTML = averageTurrets;
            
            
            
            
            
            
//            summonerID = json[SUMMONER_NAME].id;          
//            document.getElementById("sLevel").innerHTML = summonerLevel;
//            document.getElementById("sID").innerHTML = summonerID;
//            document.getElementById("dTotalPhysicalDamageDealt").innerHTML = sTotalDmg;
//            testing (SERVER);
//            alert("it worked");
//            document.getElementById('username').innerHTML = SUMMONER_NAME_UI;
            document.getElementById('intro').style.display = "inline";
            },
        
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        document.getElementById('errors').innerHTML = "Error, could not find summoner";
      }
    });
} 

    else {
    alert("Did not work");
    }
}

function rankedLookup(summonerID, SERVER) {
    if (summonerID !== "") {
        
        $.ajax({
        url: 'https://' + SERVER + '.api.pvp.net/api/lol/' + SERVER + '/v2.5/league/by-summoner/' + summonerID + '/entry?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
        type: 'GET',
        dataType: 'json',
        data: {
        },
        success: function(resp) {
            soloTier = resp[summonerID][0].tier;
            document.getElementById('soloTier').innerHTML = soloTier + " ";
            soloDiv = resp[summonerID][0].entries[0].division;
            document.getElementById('soloDiv').innerHTML = soloDiv + " ";
            soloLp = resp[summonerID][0].entries[0].leaguePoints;
            document.getElementById('soloLp').innerHTML = soloLp + "LP";
            
            flexTier = resp[summonerID][1].tier;
            document.getElementById('flexTier').innerHTML = flexTier + " ";
            flexDiv = resp[summonerID][1].entries[0].division;
            document.getElementById('flexDiv').innerHTML = flexDiv + " ";
            flexLp = resp[summonerID][1].entries[0].leaguePoints;
            document.getElementById('flexLp').innerHTML = flexLp + "LP";
        },
        
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        document.getElementById('errors').innerHTML = "Error, could not get rank";
      }
    });
} 

    else {
    alert("Did not work");
    }
}
    
//function testing (SERVER) {
//    alert(SERVER);
//}
//

function clearerror() {
     document.getElementById('errors').innerHTML = "";
}
