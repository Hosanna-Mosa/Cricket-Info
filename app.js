// Your API key from CricAPI
// const API_KEY = '9709d23e-89fa-4fec-8302-05f4b6a28f24&offset=0';
    
// // Fetch live match data
// async function getLiveMatches() {
//   try {
//     const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`);
//     const data = await response.json();
//     displayMatches(data.data);
//   } catch (error) {
//     console.error("Error fetching live matches:", error);
//   }
// }

// // Function to display matches
// function displayMatches(matches) {
// //   const liveMatchesDiv = document.getElementById('live-matches');
// //   liveMatchesDiv.innerHTML = ''; // Clear previous content
//   let Team1Name = document.getElementById("Team1Name");
// //   Team1Name.innerHTML = "hello";
// console.dir(Team1Name);



//   if (matches.length === 0) {
//     // liveMatchesDiv.innerHTML = '<p>No live matches at the moment.</p>';
//     return;
//   }

//   const matchDiv = document.createElement('div');
//   matchDiv.className = 'match';

//   // Directly accessing the score from match data without unnecessary JSON parsing
//   let matchScore = match.teamInfo ? match.teamInfo : "Score not available"; 
//   let imgSrc1 = matchScore[0].img;
//   let imgSrc2 = matchScore[1].img;
//   // console.log(imgSrc);
  

//   matchDiv.innerHTML = `
//     <h2>${match.teams[0]} vs ${match.teams[1]}</h2>
//     <img src="${imgSrc1}" alt="team-img"> vs <img src="${imgSrc2}" alt="team-img">
//     <p class="status">${match.status}</p>
//   `;
// //   liveMatchesDiv.appendChild(matchDiv);


// //   matches.forEach(match => {
// //     const matchDiv = document.createElement('div');
// //     matchDiv.className = 'match';

// //     // Directly accessing the score from match data without unnecessary JSON parsing
// //     let matchScore = match.teamInfo ? match.teamInfo : "Score not available"; 
// //     let imgSrc1 = matchScore[0].img;
// //     let imgSrc2 = matchScore[1].img;
// //     // console.log(imgSrc);
    

// //     matchDiv.innerHTML = `
// //       <h2>${match.teams[0]} vs ${match.teams[1]}</h2>
// //       <img src="${imgSrc1}" alt="team-img"> vs <img src="${imgSrc2}" alt="team-img">
// //       <p class="status">${match.status}</p>
// //     `;
// //     liveMatchesDiv.appendChild(matchDiv);
// //   });
// }

// // Load live matches when the page loads
// window.onload = getLiveMatches;