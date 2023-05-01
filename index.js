document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.coincap.io/v2/assets") 
    .then(function (resp) {
        return resp.json();
    })
    .then(e => {
       e.data.forEach(element => {
            createCard(element)
       });
        
      }
      )
    })



// e.forEach(element => {
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
            price.innerHTML = "USD Price: " + element.priceUsd
            div.appendChild(price)
            let percentChange = document.createElement("h4")
            percentChange.innerHTML = "Approx % change in 24 Hours:" + Math.round(element.changePercent24Hr) 
            div.appendChild(percentChange)
       
        //   let bullish = document.createElement("p")
        //   bullish.innerText = `${element.likes} likes`
        //   div.appendChild(likes);
        //   let likeButton = document.createElement("button")
        //   likeButton.className = "like-btn"
        //   likeButton.id = element.id;
        //   likeButton.innerHTML = "Like &hearts;"
        //   likeButton.addEventListener('click', function(e) {
        //     let newlikes = element.likes++;
        //     likes.innerText = `${newlikes} likes!`
        //     fetch(`http://localhost:3000/toys/${element.id}`, {
        //       method: 'PATCH',
        //       headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //       },
        //       body: JSON.stringify({
        //         "likes": newlikes
        //       })
        //     })
        //   })
        //   div.appendChild(likeButton)
            document.getElementById("toy-collection").appendChild(div)
       } 