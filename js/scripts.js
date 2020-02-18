
setTimeout(()=>{new Notification('Title', {
body: 'Lorem Ipsum Dolor Sit Amet'
}).onclick = () => {
console.log('Notification clicked')
}
},1000)

function emplenaTaula(){      
let taulaRes = "";
//amb la primera fila o recorent les keys
keys=["nom","direccio","estrelles","..."];
taulaRes+="<tr>";
keys.forEach(key => {
    taulaRes+= "<th>"+key+"</th>";
});
taulaRes+="</tr>";

//per cada hotel

let hotels = [ ["nom","direccio","estrelles","..."],["nom","direccio","estrelles","..."],["nom","direccio","estrelles","..."],["nom","direccio","estrelles","..."]];

hotels.forEach(hotel=>{
    taulaRes+="<tr>";
    hotel.forEach(camp=>{
    taulaRes+= "<td>"+camp+"</td>";
    });
    taulaRes+="</tr>";
});

var taula = document.getElementById("resultats");
taula.innerHTML=taulaRes;

};
window.onload = function(){
    let boto = document.getElementById("btnBuscar");
    boto.onclick = function(){emplenaTaula()};
}


