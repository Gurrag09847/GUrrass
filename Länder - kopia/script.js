let container = document.querySelector(".countries");

let value = 0;

const loadCountries = () => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        container.innerHTML = "";
        displayCountries(data);
    })
}

const loadCountry = (value) => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        container.innerHTML = "";
        let specificData = data[value];
        displayCountry(specificData);
    })
}


const displayCountries = (data) => {
    for(let i = 0; i < data.length; i++) {
        let out = `
            <div class="country">
                <img src="${data[i].flag}">

                <h3 class="title">${data[i].name}</h3> 

                <div class="description">
                    <h4 class="capital">Capital: ${data[i].capital}</h4> <br>
                    <h4 class="Population">Population: ${data[i].population}</h4> <br>
                    <h4 class="capital">Languages: ${data[i].languages}</h4> <br>
                    <h4 class="region">Region: ${data[i].region}</h4> <br>
                </div>
            </div>
        `;

        container.innerHTML += out;
        value++;
    }
}



const displayCountry = (data) => {
    
        

        let out = `
            <div class="country">

                <div class="back-btn">X</div> <br> <br>

                <img src="${data.flag}">

                <h3 class="title">${data.name}</h3> 

                <p class="description">
                    <h2 class="capital">Capital: ${data.capital}</h2> <br>
                    <h2 class="Population">Population: ${data.population}</h2> <br>
                    <h2 class="capital">Languages: ${data.languages}</h2> <br>
                    <h2 class="region">Region: ${data.region}</h2> <br>
                </p>

            </div>
        `

        container.innerHTML += out;
    
        document.querySelector(".back-btn").addEventListener("click", () => {
            window.location.reload();
        })
}

window.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")) {
        loadCountry(e.target.dataset.value);
    }
})


loadCountries();