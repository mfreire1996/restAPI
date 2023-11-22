function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const loadCountryAPI = () =>{
    //fetch url of rest country from website
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
  }

  const displayCountries = countries =>{
    // console.log(countries)
    const countriesHTML = countries.map(country => getCountry(country))
    //displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
  }

  //get data and set it to html
  const getCountry = (country) => {
    console.log(country)
    return `
    <div class="country-div">
    <img src="${country.flags.png}"
    <h2>${country.name.common}</h2>
    <h4>Population: ${country.population}</h4>
    <h4>Region: ${country.region}</h4>
    <h4>Capital: ${country.capital}</h4>
    </div>
    `
  }
  //call the function to get output in console
  loadCountryAPI()