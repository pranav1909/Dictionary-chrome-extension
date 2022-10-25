let text = document.querySelector("#text");
let search = document.querySelector("#search");
let data = document.querySelector("#data");

let loadData = () => {
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${text.value}`;

    fetch(api).then(response => response.json()).then(result => {
        console.log(result);
        data.innerHTML =
    `<div class="detail">
        <h3>${result[0].word}  (${result[0].meanings[0].partOfSpeech})</h3>
    </div>
    
    <div class="detail">
        <h5 class="meaning">DEFINITION</h5>
        <p>${result[0].meanings[0].definitions[0].definition}</p>
    </div>`
    }).catch( () => {
        data.innerHTML = `<div id="error">Can't find the meaning of ${text.value}</div>`;
    });
}

search.addEventListener("click", () => {
    if (text.value != "") {
        loadData();
    } else {
        data.innerHTML = `<div id="msg">Type a word and click on search</div>`;
    }
})