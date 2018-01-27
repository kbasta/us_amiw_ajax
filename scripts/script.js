function pokaz(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET'
    }).then(function(data) {
        var src = data[2].url;
        przypisz(src);
    });
}

function przypisz(link){
    document.getElementById("image").src = link;
}