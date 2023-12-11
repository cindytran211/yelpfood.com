function performSearch(){
    var searchTerm=document.getElementById("searchInput").value;
    if(searchTerm!="poke" && searchTerm!="mcdonald"){
        window.location.href = "/unknown.html";
    }else{
        window.location.href = "/"+searchTerm+"review.html";
    }
}

function changeImageSource(id){
    var imageElement = document.getElementById(id);
    if (imageElement.src.endsWith("fullheart.png")) {
        imageElement.src = "images/blankheart.png";
    } else {
        imageElement.src = "images/fullheart.png";
    }
}