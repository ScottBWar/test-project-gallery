require('./assets/less/styles.less');


MOCK_MODE = true;
var url = 'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=10961131-cc3197223dbf7e1e51fa8e690&q=jersey&per_page=50'


function getAllPictures(endpoint){
    if(MOCK_MODE){
        var numArray = [];
        for(var i = 0; i <= 50; i++){
            numArray.push(i);
        }
        makePaginationButtons(numArray);
        showPictures(numArray, 1);

        return
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    console.log("Sending Request");
    console.dir(xhr);
    xhr.onload = function() {
            if (xhr.status === 200) {
                console.dir(xhr);
                var json = JSON.parse(xhr.responseText);
                console.dir(json.hits);
                var responseArray = json.hits;
                makePaginationButtons(responseArray);
                showPictures(responseArray, 1);
            }
            else {
                console.warn('Request failed:' + xhr.status);
            }
        };
        xhr.send();
      
}





function Thumbnail(type, src){
    if(MOCK_MODE){
        this.html = '<div class="img_container"><image class="fetch_image" src="' + "http://placekitten.com/"+ (Math.floor(Math.random() * 5) + 10)  + "00/" + (Math.floor(Math.random() * 5) + 8)   + "00" + '"></div>';
    }else{
        this.html = '<div class="img_container"><image class="fetch_image" src="' + src + '"></div>';

    }
}

function showPictures(responseArray, page){
    var currentPics = document.getElementsByClassName('img_container');

    while(currentPics[0]){
        currentPics[0].parentNode.removeChild(currentPics[0]);
    }

    var picsArray = [];
    for (var i = ((page - 1) * 10); i < ((page * 10)); i++){
        var thumb = new Thumbnail('image', responseArray[i].largeImageURL)
        picsArray.push(thumb);
        document.getElementById("container_large").innerHTML += thumb.html; 
    }

    var picElements =  document.getElementsByClassName('fetch_image');
    for(var j  = 0; j < picElements.length; j++){
        picElements[j].onclick = function(e){
            openViewer(this);
        }
    }

}

function makePaginationButtons(responseArray){
   
    for (var index = 0; index < responseArray.length; index++){
        if (((index + 1 )  % 10) === 0){
            var paginationButtonHtml = '<button data-page="' + parseInt((index / 10) +1) +  '" id="pagination_button_' + parseInt((index / 10) +1) + '" class="pagination_button">'+ parseInt((index / 10) +1) +'</button>'
            document.getElementById("pagination_button_container").innerHTML += paginationButtonHtml;
        }
    }

    var page_buttons = document.getElementsByClassName('pagination_button');
    for(var i = 0; i < page_buttons.length; i++) {
        var element = page_buttons[i];
        element.onclick = function(e) {
            var page = this.getAttribute('data-page');
            for(var j = 0; j < page_buttons.length; j++){
                page_buttons[j].classList.remove('disabled');
            }
            console.log("show page: " + page)
            showPictures(responseArray, page); 
            this.classList.add('disabled');
            document.getElementById('page_indicator').innerHTML = "Viewing Page " + page;
        }
    }

}

function openViewer(picElement){
    var viewer = '<div id="viewer"><image id="image_closeup" src="' + picElement.getAttribute('src') + '" ></div>'    
    document.getElementById('modal').classList.add('open');
    document.getElementById('modal').innerHTML = viewer;
    document.getElementById('viewer').onclick = function(e){
        closeViewer();
    }
}

function closeViewer(){
    document.getElementById('modal').classList.remove('open');
}

getAllPictures(url);


