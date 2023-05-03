document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.coincap.io/v2/assets") 
    .then(function (resp) {
        return resp.json();
    })
    .then(e => {
        let dataArray = e.data.splice(0, 6)
       dataArray.forEach(element => {
            createCard(element)
       });
         const button = document.getElementById("more-crypto-btn")
         button.addEventListener('click', ()=>{
            let indexNumber = 6
            dataArray = e.data.splice(indexNumber, 6)
            dataArray.forEach(element => {
                createCard(element)
            })
            indexNumber += 6
         })
      }
      )
    })
        let indexNumber = 6
        function loadMore (array){
            
            let newArray = array.splice(indexNumber, 6)
            newArray.forEach(element => {
                createCard(element)
            })
            indexNumber += 6
            
     }



       function createCard(element) {
            let div = document.createElement("div");
            div.className = "card";
            let coinName = document.createElement("h2")
            coinName.innerHTML = element.name;
            div.appendChild(coinName);
            let coinSymbol = document.createElement('h2')
            coinSymbol.innerHTML = "Ticker/Symbol: " + element.symbol
            div.appendChild(coinSymbol);
            let price = document.createElement("h3")
            price.innerHTML = "USD Price: " + parseFloat(element.priceUsd).toFixed(2)
            div.appendChild(price)
            let percentChange = document.createElement("h4")
            percentChange.innerHTML = "Change in 24 Hours: " + Math.round(element.changePercent24Hr) + "%" 
            div.appendChild(percentChange)
            buildBullish(div);
            buildComments(div);
            buildMouseOver(div);
            document.getElementById("crypto-collection").appendChild(div)
       } 


       const EMPTY_HEART = '♡'
       const FULL_HEART = '♥'
       
       function buildBullish(div){
            let bullish = document.createElement("h3")
            bullish.innerHTML = "Bullish?" + EMPTY_HEART
            bullish.addEventListener('click', function(e) {
                if (e.target.innerText === "Bullish?" + EMPTY_HEART) {
                    e.target.innerText = "Bullish Indeed!" + FULL_HEART;
                    
                  }
                  else if (e.target.innerText === "Bullish Indeed!" + FULL_HEART) {
                  e.target.innerText = "Bullish?" + EMPTY_HEART
                  }
            })
            div.appendChild(bullish)
       }

function buildComments(div){
    let form = document.createElement("form")
    let label = document.createElement("label")
    label.innerHTML = "Comments: "
    form.appendChild(label)
    let placeHolder = document.createElement("input")
    placeHolder.type = "text"
    placeHolder.id = "commentBox"
    placeHolder.placeholder = "Price predictions?"
    form.appendChild(placeHolder)
    let submitBox = document.createElement("input")
    submitBox.type = "submit"
    submitBox.className = "submit"
    submitBox.placeholder = "Comment Here..."
    form.appendChild(submitBox)
    let ul = document.createElement("ul")
    form.appendChild(ul)
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let li = document.createElement("li")
        li.className = "comment-list"
        li.innerHTML = e.target.commentBox.value
        ul.appendChild(li)
        form.reset()
    })
    div.appendChild(form)

}

function buildMouseOver(div) {
        div.addEventListener('mouseover', (e) => {
            div.style.width = "20rem"
            div.style.height = "30rem"
            div.style.backgroundColor = "#7487f4"
            
        })
        div.addEventListener('mouseout', (e) => {
            div.style.width = "15rem"
            div.style.height = "25rem"
            div.style.backgroundColor = "white"
        })
}