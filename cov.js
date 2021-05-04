const container = document.querySelector(".container");
let arr = [];
const servurl = "https://api.covid19api.com/live/country/india/status/confirmed/date/2021-05-03";

fetch(servurl)
.then((data) => {
    return data.text();
})
.then((result) => {
arr = JSON.parse(result);

arr.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="cont">
    <div class="Sta">State/UT:</div>
    <div class="sta">${element.Province}</div>     
    </div>

    <div class="cont">  
    <div class="Con">Confirmed:</div>
    <div class="con">${element.Confirmed}</div>
    </div> 

    <div class="cont">
    <div class="Dea">Deaths:</div>
    <div class="dea">${element.Deaths}</div>
    </div>

    <div class="cont">
    <div class="Rec">Recovered:</div>
    <div class="rec">${element.Recovered}</div>
    </div>

    <div class="cont">
    <div class="Act">Active:</div>
    <div class="act">${element.Active}</div>
    </div>`

    container.appendChild(card);
});

});