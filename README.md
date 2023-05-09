Welcome to my Phase-1 Final Project README

Top Crypto Currency Tracker

Introduction:

This project allows users to monitor almost 100 different crypto-currencies showing their names, tickers, current price, as well as 24 hour percent change in price. It is a great way to see a quick breakdown of crypto currencies without seeing too much information that can be confusing

Description and Usage:

In this project, we used the API provided by Coincap (https://api.coincap.io/v2/assets). A lot of information is provided for each crypto-currency such as current supply, market cap, 24hour vwap, as well as a link to monitor the crypto live. These are ontop of the ones I used for the project. 
Cards: 


Using this API, you will see 6 different cards when you load the page showing the information stated in the introduction for each crypto-currency. To load more currencies, simply scroll to the bottom to the loadmore button.

Cards: 
Each card for each cypto-currency is created via JavaScript as the information is "fetched" from the API. You will notice that intially, the full array of data of all the crypto currencies is sliced to just the first 6 to render the first 6. Using this data, we can access individual attritbutes of each element in the array of data to get each cryptocurrencies names, tickers, and more information. These are added using the createCard function

Additional features added to the cards are within the createCard function: 
1. The first feature is created using the function buildBullish. This feature works as a "like" button that changes from empty to heart to full heart once it is clicked. It can be revered by clicking a second time. It uses the "click" event listener. 
2. The second feature is creted using the buildComments function. It does exactly as it states in which you can add your own comments about each crypto currency and view them at the bottom of each card. It holds a maximum of 4 comments before deleting the top comments as more comments are made. This uses the "submit" event listener. 
3. The third feature is created using the buildMouseOver function. This function uses the mouseOver and mouseOut event listeners to increase the size of each card and change its color as you hover your mouse over it. 

Load More: 
Initially, when the array of the cryptocurrencies' data is returned from the API, it is a large array and would create too many cards at once. To tackle this, the intial rendering splices the data array to just the first 6 crypto currencies. Once you click on the load more button at the bottom of the screen, a second splice occurs where the index starts at 6 and renders the next 6 cards. At the end of the event listener, the index is added by 6 to start the next splice at the index of 12 and for the enxt 6 cards after that, and so forth till all the cards are rendered. 

Search: 
Using searchCrypto function, you can search and render just the card of the crypto of your choosing using its ticker/symbol. The click event listener is used in this function and the value of the input is then used to match a similar ticker. If no ticker is found, an Alert pops up notifying you that no match is found.

Reset:
After using the search functionality or if you have loaded to many cards, you can hit reset and it will bring up the first 6 cards when you load the site without having to refresh the page. This is done by deleted all the cards and re-rendering the first 6. 

RoadMap: 
Moving forward, the main thing I want to work on is the CSS. The styling isn't the best but the functionality is there. To make it more professional, I need to work on designing and positioning the cards as well as the information better. 

