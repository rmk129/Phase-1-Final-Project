document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.coincap.io/v2/assets") 
    .then(function (resp) {
        return resp.json();
})
    .then(e => {
        searchCrypto(e.data)
        resetCrypto(e.data)
        let dataArray = e.data.slice(0, 6)
        dataArray.forEach(element => {
            createCard(element)
});
        let indexNumber1 = 6
        let indexNumber2 = 12
        const button = document.getElementById("more-crypto-btn")
        button.addEventListener('click', ()=>{
            dataArray = e.data.slice(indexNumber1, indexNumber2)
            dataArray.forEach(element => {
                createCard(element)
            })
            indexNumber1 += 6
            indexNumber2 += 6
})})})



function createCard(element) {
        const div = document.createElement("div");
        div.className = "card";
        const coinName = document.createElement("h2")
        coinName.innerHTML = element.name;
        coinName.style.fontSize = "xx-large"
        const coinSymbol = document.createElement('h2')
        coinSymbol.innerHTML = "Ticker/Symbol: " + element.symbol
        const price = document.createElement("h3")
        price.innerHTML = "USD Price: " + parseFloat(element.priceUsd).toFixed(2)
        const percentChange = document.createElement("h4")
        percentChange.innerHTML = "Change in 24 Hours: " + parseFloat(element.changePercent24Hr).toFixed(2) + "%" 
        div.appendChild(coinName);
        div.appendChild(coinSymbol);
        div.appendChild(price)
        div.appendChild(percentChange)

        buildBullish(div);
        buildComments(div);
        buildMouseOver(div);
        document.getElementById("crypto-collection").appendChild(div)
       } 


       const EMPTY_HEART = '♡'
       const FULL_HEART = '♥'
       
function buildBullish(div){
        const bullish = document.createElement("h3")
        bullish.innerHTML = "Bullish?" + EMPTY_HEART
        bullish.addEventListener('click', function(e) {
            if (e.target.innerText === "Bullish?" + EMPTY_HEART) {
                e.target.innerText = "Bullish Indeed!" + FULL_HEART;
                }
            else if (e.target.innerText === "Bullish Indeed!" + FULL_HEART) {
                e.target.innerText = "Bullish?" + EMPTY_HEART
        } })
        div.appendChild(bullish)
}


function buildComments(div){
        const form = document.createElement("form")
        const label = document.createElement("label")
        label.innerHTML = "Comments: "
        const placeHolder = document.createElement("input")
        placeHolder.type = "text"
        placeHolder.id = "commentBox"
        placeHolder.placeholder = "Price predictions?"
        const submitBox = document.createElement("input")
        submitBox.type = "submit"
        submitBox.className = "submit"
        submitBox.placeholder = "Comment Here..."
        const ul = document.createElement("ul")
        ul.id = "cyptoComments"

        form.appendChild(label)
        form.appendChild(placeHolder)
        form.appendChild(submitBox)
        form.appendChild(ul)
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (ul.childNodes.length > 3){
                ul.childNodes[0].remove();
                createLi(ul, e)
                form.reset()
            }
            else {
                createLi(ul, e)
                form.reset()
            } })
        div.appendChild(form)
}

function createLi(ul, e) {
    const li = document.createElement("li")
    li.className = "comment-list"
    li.innerHTML = e.target.commentBox.value
    ul.appendChild(li)
}

function searchCrypto (array){
    const form = document.getElementById("searchCrypto")
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const match = e.target.cryptoInput.value.toUpperCase();
        const newObj = array.find((element) => element.symbol === match) 
        
        if (newObj === undefined){
            alert("There is no matching crypto");
        }
        else {
            const divCards = document.getElementById("crypto-collection")
            divCards.replaceChildren()
            createCard(newObj);
}})}


function resetCrypto(array) {
    const reset = document.getElementById("reset-button")
    reset.addEventListener('click', () => { 
        const divCards = document.getElementById("crypto-collection")
        divCards.replaceChildren()
        const dataArray = array.slice(0, 6)
        dataArray.forEach(element => {
            createCard(element)
})})}



function buildMouseOver(div) {
        div.addEventListener('mouseover', (e) => {
            div.style.width = "20rem"
            div.style.height = "30rem"
            div.style.boxShadow = "15px 20px #3b56f2"
            div.style.backgroundColor = "#8092f79f"
            
        })
        div.addEventListener('mouseout', (e) => {
            div.style.width = "15rem"
            div.style.height = "25rem"
            div.style.boxShadow = "8px 11px #3b56f2"
            div.style.backgroundColor = "white"
})}