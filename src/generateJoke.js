import axios from "axios"

function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    axios.get("https://icanhazdadjoke.com", config).then(res => {
        document.getElementById("joke").innerHTML = res.data.joke
    })
}

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

export default generateJoke;
