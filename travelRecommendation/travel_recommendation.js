const searchInput = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("results");

searchButton.addEventListener("click", showTravelRecommendation);

function showTravelRecommendation()
{

    result.innerHTML = ""; // para limpiar en nueva busqueda.

    const search = searchInput.value.toLowerCase().trim();

    var jsonUrl = "./travel_recommendation_api.json";

    fetch(jsonUrl).then(response => response.json()).then(data =>
    {
        if(search === "country" || search === "countries")
        {
            data.countries.forEach(pais =>
            {
                pais.cities.forEach(ciudad =>
                {
                    result.innerHTML += `<div class="recommendationCard">
                                            <img src="${ciudad.imageUrl}">
                                            <div class="recommendationInfo">
                                                <h2>City: ${ciudad.name}</h2>
                                                <p>${ciudad.description}</p>
                                            </div>
                                        </div>`;
                }
                );
            }
            );
        }
        
        data.countries.forEach(country =>
        {
            if(country.name.toLowerCase() === search)
            {
                country.cities.forEach(city =>
                {
                    result.innerHTML += `<div class="recommendationCard">
                                            <img src="${city.imageUrl}">
                                            <div class="recommendationInfo">
                                                <h2>City: ${city.name}</h2>
                                                <p>${city.description}
                                            </div>
                                        </div>`;
                }
                )
                
            }
        });

        data.temples.forEach(temple =>
        {
            if("temple" === search || "temples" === search)
            {
                result.innerHTML += `<div class="recommendationCard">
                                            <img src="${temple.imageUrl}">
                                            <div class="recommendationInfo">
                                                <h2>City: ${temple.name}</h2>
                                                <p>${temple.description}
                                            </div>
                                        </div>`;
            }
        }
        );

        data.beaches.forEach(beach =>
        {
            if("beach" === search || "beaches" === search)
            {
                result.innerHTML += `<div class="recommendationCard">
                                            <img src="${beach.imageUrl}">
                                            <div class="recommendationInfo">
                                                <h2>City: ${beach.name}</h2>
                                                <p>${beach.description}
                                            </div>
                                        </div>`;
            }
        }
        )
    }
    );

}

const clearButton = document.getElementById("clearButton");

function clearSearch()
{
    result.innerHTML = "";
}

clearButton.addEventListener("click", clearSearch);

