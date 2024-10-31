var row = document.querySelector(".row");
var myHttp = new XMLHttpRequest();
var res = [];
myHttp.open('GET', "https://api.restful-api.dev/objects");
myHttp.send();

myHttp.addEventListener("readystatechange", function(){
    if(myHttp.readyState == 4 && myHttp.status == 200 )
    {
        res = JSON.parse(myHttp.response);
        console.log(res);
        displayData();
    }
});

function displayData () {
    var cartona =``;
for(var i=0; i<res.length; i++){
    cartona +=`<div class="col-md-4 g-3 ">
    <div class="card bg-warning text-center">
        <h1>${res[i].name}</h1>
        <p>${res[i].color}</p>
    </div>
    </div>`;
}
row.innerHTML = cartona;
}