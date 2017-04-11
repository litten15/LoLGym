// masters player coolnice
var summonerID = "62943148";

// beastt
//var summonerID = "33707181";

//rbarabia
//var summonerID = "62943148";

function spiderWeb(summonerID){
      
    
        for (var i = 0; i < 100; i++) {
            
            
        }
    
    
    
        $.ajax({
        url: 'https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/' + summonerID + '/ranked?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
        type: 'GET',
        dataType: 'json',
        data: {
        },
        success: function(resp) {

           
                }
            },


        
      error: function(XMLHttpRequest, textStatus, errorThrown) {
//        document.getElementById('errors').innerHTML = "Error, could not find summoner";
      }
    });
    
    
}

function capture() {
        
        $.ajax({
        url: 'https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/' + summonerID + '/ranked?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
        type: 'GET',
        dataType: 'json',
        data: {
        },
        success: function(resp) {

            for (var i = 0; i < resp.champions.length; i++) {
                if (resp.champions[i].id == "0"){
                    
                    cs = resp.champions[i].stats.totalMinionKills;
                    
//                    JSON.stringify(resp);
//                    
//                    document.getElementById('array').innerHTML = resp;
                
                    
                    // returns response as array
                    var arr = $.map(resp.champions[i].stats, function(el) { return el; });
                    
                    console.log(arr);
                    
                    var totalSessions = arr[0];
                    
                    totals(totalSessions);
                    

                    document.getElementById('array').innerHTML = arr;
                    
                    
//                    kills = resp.champions[i].stats.totalChampionKills;
//                    averageKills = kills / played;
//                    averageKills = Math.round(averageKills * 10) / 10;
//                    document.getElementById('kills').innerHTML = averageKills + "/";
//                    
//                    assists = resp.champions[i].stats.totalAssists;
//                    averageAssists = assists / played;
//                    averageAssists = Math.round(averageAssists * 10) / 10;
//                    document.getElementById('assists').innerHTML = averageAssists;
//                    
//                    deaths = resp.champions[i].stats.totalDeathsPerSession;
//                    averageDeaths = deaths / played;
//                    averageDeaths = Math.round(averageDeaths * 10) / 10;
//                    document.getElementById('deaths').innerHTML = averageDeaths + "/";
//                    
//                    dmgD = resp.champions[i].stats.totalDamageDealt;
//                    averageDmgD = dmgD / played;
//                    averageDmgD = Math.round(averageDmgD);
//                    document.getElementById('dmgD').innerHTML = averageDmgD;
//                    
//                    dmgT = resp.champions[i].stats.totalDamageTaken;
//                    averageDmgT = dmgT / played;
//                    averageDmgT = Math.round(averageDmgT);
//                    document.getElementById('dmgT').innerHTML = averageDmgT;
//                    
//                    gold = resp.champions[i].stats.totalGoldEarned;
//                    averageGold = gold / played;
//                    averageGold = Math.round(averageGold);
//                    document.getElementById('aGold').innerHTML = averageGold;
//            
//                    turrets = resp.champions[i].stats.totalTurretsKilled;
//                    averageTurrets = turrets / played;
//                    averageTurrets = Math.round(averageTurrets * 10) / 10;
//                    document.getElementById('turrets').innerHTML = averageTurrets;
                    
                }
            }

            },
        
      error: function(XMLHttpRequest, textStatus, errorThrown) {
//        document.getElementById('errors').innerHTML = "Error, could not find summoner";
      }
    });
} 

function totals(totalSessions){
    
    var start = 0;
    var total = start + totalSessions;
    console.log(total);
    
}



//
//function capture() {
//        
//       function rankedLookup() {
//        
//        $.ajax({
//        url: 'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/62943148/entry?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
//        type: 'GET',
//        dataType: 'json',
//        data: {
//        },
//        success: function(resp) {
//            
//            
//        },
//        
//        error: function(XMLHttpRequest, textStatus, errorThrown) {
//        document.getElementById('errors').innerHTML = "Error, could not get rank";
//      }
//    });
//} 
//
//    else {
//    alert("Did not work");
//    }
//}
//
