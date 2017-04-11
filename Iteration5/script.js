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
            
            rankedLookup(summonerID, SERVER, SUMMONER_NAME_UI);
            
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

function summonerLookUp(SERVER, summonerID, SUMMONER_NAME_UI, played) {

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
//            alert(played);
//            to fetch last file
//            champs = resp.champions.length - 1;
//            champid = resp.champions[]
            
            for (var i = 0; i < resp.champions.length; i++) {
                if (resp.champions[i].id == "0"){
//                    alert("found");
                    
                    cs = resp.champions[i].stats.totalMinionKills;
                    averageCS = cs / played;
                    averageCS = Math.round(averageCS);
                    document.getElementById('cs').innerHTML = averageCS;
                    
                    kills = resp.champions[i].stats.totalChampionKills;
                    averageKills = kills / played;
                    averageKills = Math.round(averageKills * 10) / 10;
                    document.getElementById('kills').innerHTML = averageKills + "/";
                    
                    assists = resp.champions[i].stats.totalAssists;
                    averageAssists = assists / played;
                    averageAssists = Math.round(averageAssists * 10) / 10;
                    document.getElementById('assists').innerHTML = averageAssists;
                    
                    deaths = resp.champions[i].stats.totalDeathsPerSession;
                    averageDeaths = deaths / played;
                    averageDeaths = Math.round(averageDeaths * 10) / 10;
                    document.getElementById('deaths').innerHTML = averageDeaths + "/";
                    
                    dmgD = resp.champions[i].stats.totalDamageDealt;
//                    alert(dmgD);
                    averageDmgD = dmgD / played;
                    averageDmgD = Math.round(averageDmgD);
                    document.getElementById('dmgD').innerHTML = averageDmgD;
                    
                    dmgT = resp.champions[i].stats.totalDamageTaken;
                    averageDmgT = dmgT / played;
                    averageDmgT = Math.round(averageDmgT);
                    document.getElementById('dmgT').innerHTML = averageDmgT;
                    
                    gold = resp.champions[i].stats.totalGoldEarned;
                    averageGold = gold / played;
                    averageGold = Math.round(averageGold);
                    document.getElementById('aGold').innerHTML = averageGold;
            
                    turrets = resp.champions[i].stats.totalTurretsKilled;
                    averageTurrets = turrets / played;
                    averageTurrets = Math.round(averageTurrets * 10) / 10;
                    document.getElementById('turrets').innerHTML = averageTurrets;
                    
                }
            }
            
            
//            for(var i = 0; i < resp.champions.length; i += 1){
//            var result = resp.champions[i].id;
//            if(result.id === "0"){
//                kills = resp.champions[i].stats.totalChampionKills;
//            
//            alert(kills);
//            }
//        }
            
//            document.getElementById('output').innerHTML = champs;
            
//            played = resp.champions[champs].stats.totalSessionsPlayed;
//            document.getElementById('played').innerHTML = played;
            
//            wins = resp.champions[champs].stats.totalSessionsWon;
//            document.getElementById('wins').innerHTML = wins;
            
//            losses = resp.champions[champs].stats.totalSessionsLost;
//            document.getElementById('losses').innerHTML = losses;
            
//            winrate = wins / (wins + losses) * 100;
//            winrate = Math.round(winrate * 10) / 10;
//            document.getElementById('winrate').innerHTML = winrate + "%";
            
//            kills = resp.champions[champs].stats.totalChampionKills;
//            averageKills = kills / played;
//            averageKills = Math.round(averageKills * 10) / 10;
//            document.getElementById('kills').innerHTML = averageKills + "/";
            
//            assists = resp.champions[champs].stats.totalAssists;
//            averageAssists = assists / played;
//            averageAssists = Math.round(averageAssists * 10) / 10;
//            document.getElementById('assists').innerHTML = averageAssists;
            
//            deaths = resp.champions[champs].stats.totalDeathsPerSession;
//            averageDeaths = deaths / played;
//            averageDeaths = Math.round(averageDeaths * 10) / 10;
//            document.getElementById('deaths').innerHTML = averageDeaths + "/";
            
//            dmgD = resp.champions[champs].stats.totalDamageDealt;
//            averageDmgD = dmgD / played;
//            averageDmgD = Math.round(averageDmgD);
//            document.getElementById('dmgD').innerHTML = averageDmgD;
            
//            dmgT = resp.champions[champs].stats.totalDamageTaken;
//            averageDmgT = dmgT / played;
//            averageDmgT = Math.round(averageDmgT);
//            document.getElementById('dmgT').innerHTML = averageDmgT;
            
//            cs = resp.champions[champs].stats.totalMinionKills;
//            averageCS = cs / played;
//            averageCS = Math.round(averageCS);
//            document.getElementById('cs').innerHTML = averageCS;
            
//            gold = resp.champions[champs].stats.totalGoldEarned;
//            averageGold = gold / played;
//            averageGold = Math.round(averageGold);
//            document.getElementById('aGold').innerHTML = averageGold;
//            
//            turrets = resp.champions[champs].stats.totalTurretsKilled;
//            averageTurrets = turrets / played;
//            averageTurrets = Math.round(averageTurrets * 10) / 10;
//            document.getElementById('turrets').innerHTML = averageTurrets;
            
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

function rankedLookup(summonerID, SERVER, SUMMONER_NAME_UI) {
    if (summonerID !== "") {
        
        $.ajax({
        url: 'https://' + SERVER + '.api.pvp.net/api/lol/' + SERVER + '/v2.5/league/by-summoner/' + summonerID + '/entry?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
        type: 'GET',
        dataType: 'json',
        data: {
        },
        success: function(resp) {
              
            entries = resp[summonerID].length;
            firstEntry = resp[summonerID][0].queue;
//            alert(firstEntry);
            
             // do calcs for only solo
            if (entries == 1 && firstEntry == "RANKED_SOLO_5x5"){
//                alert("only solo found");
                document.getElementById('flexTier').innerHTML = "Flex rank not found";
                
                // get rank
                soloTier = resp[summonerID][0].tier;
                document.getElementById('soloTier').innerHTML = soloTier + " ";
                soloDiv = resp[summonerID][0].entries[0].division;
                document.getElementById('soloDiv').innerHTML = soloDiv + " ";
                soloLp = resp[summonerID][0].entries[0].leaguePoints;
                document.getElementById('soloLp').innerHTML = soloLp + "LP";
                
                // win ratio
                wins = resp[summonerID][0].entries[0].wins;
//                alert(wins);
                document.getElementById('wins').innerHTML = wins;
                
                losses = resp[summonerID][0].entries[0].losses;
//                alert(losses);
                document.getElementById('losses').innerHTML = losses;
                
                played = wins + losses;
                document.getElementById('played').innerHTML = played;
                
                winrate = wins / (wins + losses) * 100;
                winrate = Math.round(winrate);
                document.getElementById('winrate').innerHTML = winrate + "%";
                
                flexTier = 0;
                decideRank(soloTier, flexTier);
                
                } 
            
//                  alert("only flex found");
              else if (entries == 1 && firstEntry == "RANKED_FLEX_SR") {

                document.getElementById('soloTier').innerHTML = "Solo rank not found";
                  
                // get rank
                flexTier = resp[summonerID][0].tier;
                document.getElementById('flexTier').innerHTML = flexTier + " ";
                flexDiv = resp[summonerID][0].entries[0].division;
                document.getElementById('flexDiv').innerHTML = flexDiv + " ";
                flexLp = resp[summonerID][0].entries[0].leaguePoints;
                document.getElementById('flexLp').innerHTML = flexLp + "LP";
                
                // win ratio
                wins = resp[summonerID][0].entries[0].wins;
//                alert(wins);
                document.getElementById('wins').innerHTML = wins;
                
                losses = resp[summonerID][0].entries[0].losses;
//                alert(losses);
                document.getElementById('losses').innerHTML = losses;
                
                played = wins + losses;
                document.getElementById('played').innerHTML = played;
                
                winrate = wins / (wins + losses) * 100;
                winrate = Math.round(winrate);
                document.getElementById('winrate').innerHTML = winrate + "%";
                soloTier = 0;
                decideRank(soloTier, flexTier);
            } 
            
//                do calcs for both
            else if (entries == 2) {
                
                // get rank
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
                
                // win ratio
                soloWins = resp[summonerID][0].entries[0].wins;
                flexWins = resp[summonerID][1].entries[0].wins;
                wins = soloWins + flexWins;
//                alert(wins);
                document.getElementById('wins').innerHTML = wins;
                
                soloLosses = resp[summonerID][0].entries[0].losses;
                flexLosses = resp[summonerID][1].entries[0].losses;
                losses = soloLosses + flexLosses;
//                alert(losses);
                document.getElementById('losses').innerHTML = losses;
                
                played = wins + losses;
                document.getElementById('played').innerHTML = played;
                
                winrate = wins / (wins + losses) * 100;
                winrate = Math.round(winrate);
                document.getElementById('winrate').innerHTML = winrate + "%";
                
                decideRank(soloTier, flexTier);
                
              
//                alert("solo and flex found");
            } else {
                alert("not enough ranked games found");
            }
            
            summonerLookUp(SERVER, summonerID, SUMMONER_NAME_UI, played);
            
            
//            if (resp.length = 1) {
                
                
//                document.getElementById('flexTier').innerHTML = "Flex rank not found"
//                
//                soloTier = resp[summonerID][0].tier;
//                document.getElementById('soloTier').innerHTML = soloTier + " ";
//                soloDiv = resp[summonerID][0].entries[0].division;
//                document.getElementById('soloDiv').innerHTML = soloDiv + " ";
//                soloLp = resp[summonerID][0].entries[0].leaguePoints;
//                document.getElementById('soloLp').innerHTML = soloLp + "LP";
//            } 
//            
//            else if (resp.length = 1; && resp[summonerID][0].queue = "RANKED_FLEX_SR" )
//                
//                flexTier = resp[summonerID][0].tier;
//                document.getElementById('soloTier').innerHTML = "Solo rank not found";
//                
//                document.getElementById('flexTier').innerHTML = flexTier + " ";
//                flexDiv = resp[summonerID][0].entries[0].division;
//                decideRank(soloTier, flexTier);
//                document.getElementById('flexDiv').innerHTML = flexDiv + " ";
//                flexLp = resp[summonerID][0].entries[0].leaguePoints;
//                document.getElementById('flexLp').innerHTML = flexLp + "LP";
//                
//            }
            
           
            
//            if (resp.length = 2) {
//            flexTier = resp[summonerID][1].tier;
////            if (flexTier !== "") {
////                flexTier == "not enough games";
////            }
//            document.getElementById('flexTier').innerHTML = flexTier + " ";
//            flexDiv = resp[summonerID][1].entries[0].division;
//            decideRank(soloTier, flexTier);
//            document.getElementById('flexDiv').innerHTML = flexDiv + " ";
//            flexLp = resp[summonerID][1].entries[0].leaguePoints;
//            document.getElementById('flexLp').innerHTML = flexLp + "LP";
//            } 
//            else {
//                alert ("gone wrong");
//                
//            }
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

function decideRank (soloTier, flexTier) {
    if (soloTier == "BRONZE") {
        sTier = 1;
    } else if (soloTier == "SILVER") {
        sTier = 2;
    } else if (soloTier == "GOLD") {
        sTier = 3;
    } else if (soloTier == "PLATINUM") {
        sTier = 4;
    } else if (soloTier == "DIAMOND") {
        sTier = 5;
    } else if (soloTier == "MASTER") {
        sTier = 6;
    } else if (soloTier == "CHALLENGER") {
        sTier = 7;
    } else if (soloTier == "") {
        sTier = 0;
    } else {
        document.getElementById('errors').innerHTML = "Could not find solo rank";
    }
    
    if (flexTier == "BRONZE") {
        fTier = 1;
    } else if (soloTier == "SILVER") {
        fTier = 2;
    } else if (soloTier == "GOLD") {
        fTier = 3;
    } else if (soloTier == "PLATINUM") {
        fTier = 4;
    } else if (soloTier == "DIAMOND") {
        fTier = 5;
    } else if (soloTier == "MASTER") {
        fTier = 6;
    } else if (soloTier == "CHALLENGER") {
        fTier = 7;
    } else if (fTier == "") {
        fTier = 0;
    }
    else {
        document.getElementById('errors').innerHTML = "Could not find flex rank";
    }
    
    if (sTier >= fTier) {
        highestTier = sTier;
        document.getElementById('playerTier').innerHTML = soloTier;
        document.getElementById('tierTitle').style.display = "inline";
    } else {
        highestTier = fTier;
        document.getElementById('playerTier').innerHTML = flexTier;
        document.getElementById('tierTitle').style.display = "inline";
    }
    
    
//    alert(sTier);
}
//function testing (SERVER) {
//    alert(SERVER);
//}
//

function clearerror() {
     document.getElementById('errors').innerHTML = "";
}
