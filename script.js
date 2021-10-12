const GnewsKey = 'e59508cf11c8163ca125b013c491abba';
//const newsKey = '1585ef9523994d5ebf088e18989877a9'; 
//fetch('https://gnews.io/api/v4/{endpoint}?token=e59508cf11c8163ca125b013c491abba');

let url = 'https://gnews.io/api/v4/top-headlines?max=5&topic=business&lang=en&token=' + GnewsKey; 
//let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + newsKey; 
   fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json){
            console.log(json); 
            let results = '';
            results += "<h2>Breaking News Today</h2>";
             
            for (let i = 0; i < json.articles.length; i++){
                results += "<a href='" + json.articles[i].url + "' target='_blank'><h4>" + json.articles[i].title; 
                results += "</h4><img src='" + json.articles[i].image +"' class = 'img-fluid'></a>"
            }
            document.getElementById('newPage').innerHTML = results; 
        })

document.getElementById('sumbit1').addEventListener('click', function(event){
    event.preventDefault();
    const value = document.getElementById('search1').value; 

    let url2 = 'https://gnews.io/api/v4/search?q=' + value + '&max=5&lang=en&token=' + GnewsKey;
    console.log(url2); 
    fetch(url2)
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json); 
        let results = '';
        results += "<h2>News about " + value + "</h2>";
         
        for (let i = 0; i < json.articles.length; i++){
            results += "<a href='" + json.articles[i].url + "' target='_blank'><h4>" + json.articles[i].title; 
            results += "</h4><img src='" + json.articles[i].image +"' class = 'img-fluid'></a>"
        }
        document.getElementById('newPage').innerHTML = results; 
    })
      
    });

    document.getElementById('sumbit2').addEventListener('click', function(event){
        event.preventDefault();
        const value = document.getElementById('search2').value; 
    
        let url2 = 'https://gnews.io/api/v4/search?q=' + value + '&max=5&lang=en&token=' + GnewsKey;
        console.log(url2); 
        fetch(url2)
        .then(function(response){
            return response.json();
        }).then(function(json){
            console.log(json); 
            let results = '';
            results += "<h2>News about " + value + "</h2>";
             
            for (let i = 0; i < json.articles.length; i++){
                results += "<a href='" + json.articles[i].url + "' target='_blank'><h4>" + json.articles[i].title; 
                results += "</h4><img src='" + json.articles[i].image +"' class = 'img-fluid'></a>"
            }
            document.getElementById('newPage').innerHTML = results; 
        })
          
        });


