function submitInfo(SERVER, SUMMONER_NAME) {
    
  var SUMMONER_NAME = "";
  SUMMONER_NAME = $("#userName").val();
        
  var SERVER = "";
  SERVER = $("#local").val();
  summonerLookUp(SUMMONER_NAME, SERVER);
    
//  pageChange (SUMMONER_NAME, SERVER);
    
//    if (SUMMONER_NAME !== "") {
//
//    $.ajax({
//      url: 'https://' + SERVER + '.api.pvp.net/api/lol/' + SERVER + '/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
//      type: 'GET',
//      dataType: 'json',
//      data: {
//      },
//      success: function() {
//          
////         var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");
////         SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();
////          
////         document.getElementById("serverType").innerHTML = SERVER;
////         document.getElementById("sumName").innerHTML = SUMMONER_NAME_NOSPACES;
//         summonerLookUp(SUMMONER_NAME);
//         
//         
//        
//      },
//        
//      error: function(XMLHttpRequest, textStatus, errorThrown) {
//        document.getElementById('errors').innerHTML = "Error, could not find summoner";
// }
//    });
//  } else {}
}

//function pageChange (SUMMONER_NAME, SERVER) {
//    location.href = 'stats.html';
//}

function summonerLookUp(SUMMONER_NAME, SERVER) {
alert(SERVER);
if (SUMMONER_NAME !== "") {

    $.ajax({
      url: 'https://' + SERVER + '.api.pvp.net/api/lol/' + SERVER + '/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=771f5509-7e01-4f41-9ec2-69e7b2158c66',
      type: 'GET',
      dataType: 'json',
      data: {
      },
      success: function(json) {
        summonerLevel = json[SUMMONER_NAME].summonerLevel;
        summonerID = json[SUMMONER_NAME].id;          
        document.getElementById("sLevel").innerHTML = summonerLevel;
        document.getElementById("sID").innerHTML = summonerID;
          
          
      },
        
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        document.getElementById('errors').innerHTML = "Error, could not find summoner";
      }
    });
} else {
    alert("Did not work");
}
}


function clearerror() {
     document.getElementById('errors').innerHTML = "";
}
