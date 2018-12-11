require('./assets/less/styles.less');

var url = 'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=10961131-cc3197223dbf7e1e51fa8e690&q=jersey+city&image_type=photo'

function fetch(endpoint){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onload = function() {
            if (xhr.status === 200) {
                console.dir(xhr);
                var json = JSON.parse(xhr.responseText);
                console.dir(json.hits);
                makePicsArray(json.hits);
            }
            else {
                console.warn('Request failed:' + xhr.status);
            }
        };
        xhr.send();
      
}

fetch(url);

function Thumbnail(type, src){
    this.html = '<div ><image style="padding:5px;border:5px solid black;border-radius:15px;max-width:200px;" src="' + src + '"></div>'
}

function makePicsArray(responseArray){
    var picsArray = [];

for (var i = 0; i < responseArray.length; i++){
    var thumb = new Thumbnail('image', responseArray[i].largeImageURL)
    picsArray.push(thumb);
    document.getElementById("big_photo_container").innerHTML += thumb.html;
    console.log(document.getElementById("big_photo_container").innerHTML)
}


}



