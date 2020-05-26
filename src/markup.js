import cardTemplate from './cardTemplate.hbs'

const result = document.querySelector('.result')

export const renderCountriesList = (countriesArr) => {
    const countriesList = `
    <ul class="countriesList">
        ${renderCountriesListItem(countriesArr)}
    </ul>
    `;
    result.insertAdjacentHTML("beforeend", countriesList)
    // result.innerHTML = `${countriesList}`

}

const renderCountriesListItem = countriesArr => countriesArr.reduce((acc, country) => {
    return (acc += `<li class='countriesListItem'>${country.name}</li>`)
}, "");


export const renderCard = (country) => {
    result.innerHTML = `${cardTemplate(country)}`
    // result.insertAdjacentHTML('beforeend', cardTemplate(country))
}