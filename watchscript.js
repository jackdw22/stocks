//Comes from yahoo finance
const STOCK_KEY = "Za58PO9bnZ4myuo3mdEOH1CelKbFLLK88Z7qcqnc";
const DEFAULTS = "region=US&lang=en"


//Quote
function suggestIt(){


  let sym = document.getElementById("symbolSearch").value;

  if (sym===""){
    return
  }

  let url = "https://yfapi.net/v6/finance/quote?" + DEFAULTS +"&symbols="+sym;

  fetch(url,{
  	method: "GET",
  	headers: {
  		'x-api-key': STOCK_KEY,
      'accept' : 'application/json'
  	}}).then(function(response){
      return response.json();
    }).then(function(json){
        let stocks = json.quoteResponse.result;
        console.log(stocks);
        console.log(stocks[0]);
        addIt(stocks);
        document.getElementById("symbolSearch").value='';

    }).catch(function (error) {
    	console.error(error);
    });

}


function addIt(stocks){
  for(let i = 0; i<stocks.length; i++){
    if (stocks[i].quoteType === "EQUITY" || stocks[i].quoteType === "ETF"){
      addStock(stocks[i]);
    }
    else if(stocks[i].quoteType === "CURRENCY"){
            addCurrency(stocks[i]);
    }
    else if(stocks[i].quoteType === "CRYPTOCURRENCY"){
            addCrypto(stocks[i]);
    }
    else if(stocks[i].quoteType === "MUTUALFUND"){
            addFund(stocks[i]);
    }

  }
}


function addFund(fund){

  let row = document.createElement('tr');
  let data = document.createElement('TD');
  //Name
  let temp = fund.shortName;
  if(temp ===undefined){
    temp ="N/A";
  }
  data.append(temp);
  row.append(data);

  //Symbol
  temp = fund.symbol;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Price
  temp = fund.regularMarketPrice;
  if(temp === undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Bid & Ask
  temp ="N/A";
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);
  temp ="N/A";
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Size
  data = document.createElement('TD');
  data.append("N/A");
  row.append(data);

  //PreviousCLose
  temp = fund.regularMarketPreviousClose;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);


  //MarketCap
  temp ="N/A";
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);


  document.getElementById('watchList').append(row);
}

function addCrypto(coin){
  let row = document.createElement('tr');
  let data = document.createElement('TD');

  //Name
  let temp = coin.shortName;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Symbol
  temp = coin.symbol;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);


  //Price
  temp = coin.regularMarketPrice;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Bid & Ask
  temp ="N/A";
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);
  temp ="N/A";
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Size
  data = document.createElement('TD');
  data.append("N/A");
  row.append(data);

  //PreviousClose
  temp = coin.regularMarketPreviousClose;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //MarketCap
  temp = coin.marketCap;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = makePretty(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  document.getElementById('watchList').append(row);

}

function addCurrency(curr){
  let row = document.createElement('tr');
  let data = document.createElement('TD');

  //Name
  let temp = curr.shortName;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Symbol
  temp = curr.symbol;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Price
  temp = curr.regularMarketPrice;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Bid
  temp = curr.bid;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Ask
  temp = curr.ask;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Size
  data = document.createElement('TD');
  data.append("N/A");
  row.append(data);

  //PreviousClose
  temp = curr.regularMarketPreviousClose;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //MarketCap
  data = document.createElement('TD');
  data.append("N/A");
  row.append(data);

  document.getElementById('watchList').append(row);

}

function addStock(stock){

  console.log(stock);

  let row = document.createElement('tr');
  let data = document.createElement('TD');
  //Name
  let temp = stock.shortName;
  if(temp ===undefined){
    temp ="N/A";
  }
  data.append(temp);
  row.append(data);

  //Symbol
  temp = stock.symbol;
  if(temp ===undefined){
    temp ="N/A";
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Price
  temp = stock.regularMarketPrice;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);


  //Bid
  temp = stock.bid;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Ask
  temp = stock.ask;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //Size
  temp = stock.bidSize;
  if(stock.bidSize===undefined||stock.askSize===undefined){
    temp ="N/A";
  }
  else{
    temp = stock.bidSize + "x" + stock.askSize;
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //PreviousCLose
  temp = stock.regularMarketPreviousClose;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = numberWithCommas(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  //MarketCap
  temp = stock.marketCap;
  if(temp ===undefined){
    temp ="N/A";
  }
  else{
    temp = makePretty(temp);
  }
  data = document.createElement('TD');
  data.append(temp);
  row.append(data);

  document.getElementById('watchList').append(row);
}

document.getElementById("tSub").addEventListener('click', function(event){
  event.preventDefault();
  suggestIt();

});

function makePretty (labelValue) {

    // 12 Zeroes for Trillions
    return Math.abs(Number(labelValue)) >= 1.0e+12

    ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "T"
    // 9 Zeroes for Billions
    : Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
