import axios from "axios";

function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get("https://api.quotable.io/random", config)
        .then(res => document.getElementById('quote').innerHTML = res.data.content);
}

export default generateQuote;