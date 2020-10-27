//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
const filmElem = document.getElementById("filmContainer");
const rootElem = document.getElementById("root");
const numberOfResults = document.getElementById("numberOfResults");
function setup() {

  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  filmElem.innerHTML = ""
  episodeList.forEach((element) => {
    const createDiv = document.createElement('div')


    createDiv.className = "card col-sm-6 col-md-4 bg-white border-0 my-2 cardZoom"
    createDiv.innerHTML = `
        <div class="mx-1 border border-primary  rounded h-100">
        <div class="card-header bg-primary text-white">
            ${element.name}
        </div>
        <img src="${element.image.medium}" class="card-img-top " />
        <div class="card-body" style="font-size:14px;">
            ${element.summary}
        </div>    
    </div>      
    `

    filmElem.appendChild(createDiv);

  });
}

function getEpisodeNumber(season, number) {
  if (season < 10)
    season = "0" + season;

  if (number < 10)
    number = "0" + number;

  return `S${season} E${number}`
}
function searching(searching) {
  searching = searching.toLowerCase();
  let matchedEpisode = allEpisodes.filter((episode) => {
    return (episode.summary + episode.name).toLowerCase().includes(searching);
  });
  makePageForEpisodes(matchedEpisode)
  return (numberOfResults.innerText = `Displaying ${matchedEpisode.length}/${allEpisodes.length} `)
}

window.onload = setup;
