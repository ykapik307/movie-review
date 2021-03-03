let movieName=document.querySelector('.ll');
let buttonS=document.querySelector('.enter');
let maine=document.querySelector('.main');
let mainDiv=document.querySelector('.main-div');

  buttonS.addEventListener('click',() =>{
    
  let mName=movieName.value;
  const api=`https://www.omdbapi.com/?t=${mName}&apikey=bc345d51`;
  fetch(api)
    .then(response => response.json())
    .then(data => {
        let title=data.Title;
    let year=data.Year;
    let runTime=data.Runtime;
    let actors=data.Actors;
    let director=data.Director;
    let rating=data.imdbRating;
    let plot=data.Plot;
    let img=data.Poster;
    console.log(title);
    console.log(actors);
    mainDiv.innerHTML=`
        <img src="${img}" class="poster" alt="${title}"/>
        <div class="movie-info">
        <h3 id="name">${title}<h3>
        <h3 id="year">Year : ${year}<h3>
        <h3 id="actors">Cast : ${actors}<h3>
        <h3 id="diret">Director : ${director}<h3>
        <h3 id="rating">Rating : ${rating}/10<h3>
        <h3 id="plot">Plot : ${plot}<h3>
        </div>`;

    })
    maine.style.opacity=1;

   
  })