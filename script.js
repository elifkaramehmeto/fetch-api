const countryListDiv = document.getElementById("country-list");

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.className = "country";

            const countryFlag = document.createElement('img');
            countryFlag.src = country.flags.png;
            countryFlag.alt = `${country.name.common}`;
            countryDiv.appendChild(countryFlag);

            const countryName = document.createElement("h3");
            countryName.textContent = country.name.common;
            countryDiv.appendChild(countryName);

            const moreButton = document.createElement("button");
            moreButton.textContent = "More";
            countryDiv.appendChild(moreButton);

            const countryInfoDiv = document.createElement("div");
            countryInfoDiv.className = "country-info";
            countryInfoDiv.style.display = "none";
            countryDiv.appendChild(countryInfoDiv);

            const language = document.createElement("p");
            language.textContent = `Language: ${country.languages}`;

            const region = document.createElement("p");
            region.textContent = `Region: ${country.region}`;

            const population = document.createElement("p");
            population.textContent = `Population: ${country.population}`;

            moreButton.addEventListener("click", function () {
                if (countryInfoDiv.style.display == "none") {
                    countryInfoDiv.style.display = "block";

                    console.log("Country Name:", country.name.common);
                    console.log("Flag:", country.flags.png);
                    console.log("Language:", country.languages);
                    console.log("Region:", country.region);
                    console.log("Population:", country.population);
                }else{
                    countryInfoDiv.style.display = "none";
            }
            });

            countryInfoDiv.appendChild(language);
            countryInfoDiv.appendChild(region);
            countryInfoDiv.appendChild(population);

            countryDiv.appendChild(countryFlag);
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(moreButton);
            countryDiv.appendChild(countryInfoDiv);
            countryListDiv.appendChild(countryDiv);
        });
    });
