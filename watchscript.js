//Comes from yahoo finance
const STOCK_KEY = "Za58PO9bnZ4myuo3mdEOH1CelKbFLLK88Z7qcqnc";
const DEFAULTS = "region=US&lang=en"
//Autocomplete url

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
        console.log(typeof(stocks));
        console.log(stocks[0].longName)
    }).catch(function (error) {
    	console.error(error);
    });

}


document.getElementById("tSub").addEventListener('click', function(event){
  event.preventDefault();
  suggestIt();

});
