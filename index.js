function renderContries(country){
    const card= document.createElement('div')
    card.classList.add('country')

    const countryName= country.name.common
    const name= document.createElement('h2')
    name.textContent= countryName

    const countryImage= document.createElement('img')
    countryImage.src= country.flags.svg
    countryImage.alt= countryName

  card.append(name,countryImage)
  document.querySelector("#countries").appendChild(card)

}


async function getContries(){
    const response=  await fetch("https://restcountries.com/v3.1/all")
    const countries= await response.json()
    countries.forEach(renderContries)
}

getContries()