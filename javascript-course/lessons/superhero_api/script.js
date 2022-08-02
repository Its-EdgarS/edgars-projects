const superheroDiv = document.getElementById('container')
const heroImg = document.getElementById('heroImg')

const getSuperhero = () => {

    const randNum = Math.ceil(Math.random() * 731)

        fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randNum}.json`)
            .then(Response => Response.json())
            .then(json => {
                superheroDiv.innerHTML = `<h3>You are now seeing: ${json.name}</h3>`
                superheroDiv.innerHTML += `<img src="${json.images.lg}"/>`
                superheroDiv.innerHTML += `<p>The superhero's powerstats are the following:<br> ${JSON.stringify(json.powerstats)}</p>`
                // heroImg.setAttribute('src', json.images.lg) -- Other method
            })
}

const getSuperheroByName = () => {
    
    const superheroName = document.getElementById('input').value;
    
    fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
        .then(Response => Response.json())
        .then(json => {
            json.forEach(element => {
                if (element.name == superheroName) {
                    superheroDiv.innerHTML = `<h3>You are now seeing: ${element.name}</h3>`
                    superheroDiv.innerHTML += `<img src="${element.images.lg}"/>`
                    superheroDiv.innerHTML += `<p>The superhero's powerstats are the following:<br> ${JSON.stringify(element.powerstats)}</p>`
                }
            });
            // superheroDiv.innerText = `You are now seeing: ${json.name}\n`
            // superheroDiv.innerText += `The superhero's powerstats are the following: \n${JSON.stringify(json.powerstats)}`
            // heroImg.setAttribute('src', json.images.lg)
        })
}

const randomSearch = document.getElementById('random')

randomSearch.onclick = () => getSuperhero()

const nameSearch = document.getElementById('search')

nameSearch.onclick = () => getSuperheroByName()
