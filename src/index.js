import 'bootstrap/dist/css/bootstrap.css'

// Remember last clicked country

let lastClickedCountry

// Add event listener

let mapDiv = document.getElementById('map')
mapDiv.addEventListener('click', fetchCountry)

function myFunction(
    hej_jeg_hedder_jon,
    med,
    dig)
{

}

function fetchCountry(event)
{
    event.preventDefault();
    let id = event.target.id
    if (id == 'gb-gbn') id = 'gb'
    if (id == 'ru-main') id = 'ru'
    const clickedCountry = event.target;
    if (clickedCountry.getAttribute('style') != 'fill:red')
    {
        clickedCountry.setAttribute('style', 'fill:red')
        if (lastClickedCountry && (clickedCountry != lastClickedCountry))
        {
            lastClickedCountry.setAttribute('style', 'fill:#c0c0c0')
        }
        lastClickedCountry = clickedCountry
        fetch('http://restcountries.eu/rest/v1/alpha?codes=' + id)
            .then(response => response.json())
            .then(data =>
            {
                let country = `Country: ${data[0].name}<br/>Population: ${data[0].population}<br/>Area: ${data[0].area}<br/>Borders: ${data[0].borders.join(",")}`
                document.getElementById('info').innerHTML = country
            })
    } else
    {
        clickedCountry.setAttribute('style', 'fill:#c0c0c0')
        document.getElementById('info').innerHTML = ''
    }



}