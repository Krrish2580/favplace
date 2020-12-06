let place = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
let plength = place.length;
let places = document.getElementById("place");
let text = "<ol>";
for(let i=0; i<plength; i++){
    text += "<li>" + place[i] + "</li>";
}
text += "</ol>";
places.innerHTML = text;
document.getElementById("sn").innerHTML = plength;
function showUpdate(){
    place.splice(6, 7, "Waling", "Butwal");
    place.splice(3, 1);
    let plength = place.length;
    let text = "<ol>";
    for(let i=0; i<plength; i++){
        text += "<li>" + place[i] + "</li>";
    }
    text += "</ol>";
    places.innerHTML = text;
    document.getElementById("sn").innerHTML = plength;
}