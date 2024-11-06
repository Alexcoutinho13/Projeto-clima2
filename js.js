document.querySelector('.busca').addEventListener('submit', async (event)=> {
event.preventDefault()

let input = document.querySelector('.inputSearch').value

    if(input !== '') {
        showWorning('Carregando...')
        let url = `https://api.hgbrasil.com/weather?key=39e7ce23&city_name=${encodeURI(input)}`
        let results = await fetch(url)
        let json = results.json()
        console.log(json)
    } else {

    }

})


function showWorning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}