require('./assets/less/styles.less');

// var url = 'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=10961131-cc3197223dbf7e1e51fa8e690&q=jersey&per_page=50'


// function showPictures(endpoint){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);
//     xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//     xhr.onload = function() {
//             if (xhr.status === 200) {
//                 console.dir(xhr);
//                 var json = JSON.parse(xhr.responseText);
//                 console.dir(json.hits);
//                 makePicsArray(json.hits);
//             }
//             else {
//                 console.warn('Request failed:' + xhr.status);
//             }
//         };
//         xhr.send();
      
// }

// fetch(url);

var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function Thumbnail(type, src){
    this.html = '<div class="img_container"><image class="fetch_image" style="padding:5px;border:5px solid #7f8c8d;border-radius:15px;" src="' + "http://placekitten.com/"+ (Math.floor(Math.random() * 5) + 1)  + "00/" + (Math.floor(Math.random() * 5) + 1)   + "00" + '"></div>'
}

function showPictures(responseArray, page){
    var currentPics = document.getElementsByClassName('img_container');

    while(currentPics[0]){
        currentPics[0].parentNode.removeChild(currentPics[0]);
    }

    var picsArray = [];
    for (var i = ((page - 1) * 10); i < ((page * 10)); i++){
        var thumb = new Thumbnail('image', 'responseArray[i].largeImageURL')
        picsArray.push(thumb);
        document.getElementById("big_photo_container").innerHTML += thumb.html;
        console.log(thumb);
    }
    console.log(picsArray);
}

function makePaginationButtons(responseArray){
   
    for (var index = 0; index < responseArray.length; index++){
        if (((index + 1 )  % 10) === 0){
            var paginationButtonHtml = '<button data-page="' + parseInt((index / 10) +1) +  '" id="pagination_button_' + parseInt((index / 10) +1) + '" class="paginaton_button"> Page '+ parseInt((index / 10) +1) +'</button>'
            document.getElementById("pagination_button_container").innerHTML += paginationButtonHtml;
        }
    }

    var page_buttons = document.getElementsByClassName('paginaton_button');
    for(var i = 0; i < page_buttons.length; i++) {
        var element = page_buttons[i];
        element.onclick = function(e) {
            var page = this.getAttribute('data-page');
            showPictures(numArray, page); 
        }
    }

}

makePaginationButtons(numArray);



