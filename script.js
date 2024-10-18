const API_KEY = 'd8687e0e-37fd-4b3e-a9ad-8ab72db0da69&offset=0';
    
// Fetch live match data
async function getLiveMatches() {
  try {
    const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`);
    const data = await response.json();
    display(data.data);

  } catch (error) {
    console.error("Error fetching live matches check chey ra:", error);
  }
}
getLiveMatches();
// console.log("hello");
// function displayMatches(dataGuru){
//     const fristTeamName = document.getElementById("team1Name");

//     console.log(fristTeamName);
// }

function display(dataGuru){
    // console.dir(dataGuru);
    const fristTeamName = document.getElementById("team1Name");
    fristTeamName.innerHTML = dataGuru[7].teams[0];
    const secondTeamName = document.getElementById("team2Name");
    secondTeamName.innerHTML = dataGuru[7].teams[1];

    const score1St = document.getElementById("score1St");
    const score2nd = document.getElementById("score2nd");
    const status = document.getElementById("status");
    const overs1stGuru = document.getElementById("overs1st");
    const overs2ndGuru = document.getElementById("overs2nd");
    let score1stGuru = dataGuru[7].score[0].r;
    let wickets1st = dataGuru[7].score[0].w;
    let overs1st = dataGuru[7].score[0].o;
    score1St.innerHTML = `Score :${score1stGuru}/${wickets1st}`;
    overs1stGuru.innerHTML =`Overs :${overs1st}`;

    try{
      let score2ndGuru = dataGuru[7].score[1].r;
      let wickets2nd = dataGuru[7].score[1].w;
      let overs2nd = dataGuru[7].score[1].o;
      score2nd.innerHTML = `Score :${score2ndGuru}/${wickets2nd}`;
      overs2ndGuru.innerHTML =`Overs :${overs2nd}`;
    }
    catch{
      score2nd.innerHTML = `yet to bat`;
    }
    
    status.innerText = dataGuru[7].status;
    status.style.color = "white";


    
}