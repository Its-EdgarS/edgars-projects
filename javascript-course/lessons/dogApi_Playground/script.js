const imgSrc = document.getElementById('dogImage')

//.then - promises - takes a second or two to get info from link so javascript promises to eventually get info THEN do what's next
//asynchronous programming - program doesn't run linearly anymore when using 3rd party site - code after call could run first

const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response => Response.json())
        .then(json => imgSrc.setAttribute('src', json.message))
}

fetchDog()