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
function showComments(commentSource){
    var comment = document.getElementsByClassName(commentSource);
    for (i = 0; i < comment.length; i++){
        element = comment[i];
        if (element.style.visibility == "visible"){
            element.style.visibility = "hidden";
        }else{
            element.style.visibility = "visible";
        }
    }
}