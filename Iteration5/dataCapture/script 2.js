// masters player coolnice
var summonerID = "62943148";


function capturrre() {
        
       function rankedLookup() {
        
        $.ajax({
        url: 'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/62943148/entry?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
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
//            if (flexTier !== "") {
//                flexTier == "not enough games";
//            }
            document.getElementById('flexTier').innerHTML = flexTier + " ";
            flexDiv = resp[summonerID][1].entries[0].division;
            decideRank(soloTier, flexTier);
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

