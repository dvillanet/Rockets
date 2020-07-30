let rocketArray:Rocket[]=[];


function createRocket(name: string, id:number) {
    let rocket = new Rocket(name);
    rocketArray[id]=rocket;
    return rocket;
}

//Crear Coets
function createRocket1(id:number) 
{if (rocketArray[1]==undefined){

createRocket("32WESSDS",1);
rocketArray[1].addThruster(10);
rocketArray[1].addThruster(30);
rocketArray[1].addThruster(80);
(document.getElementById("rocketContainer"+id) as HTMLDivElement).innerHTML = rocketArray[1].printRocketHTML(id);
}
}


function createRocket2(id:number) {

if (rocketArray[id]==undefined){
createRocket("LDSFJA32",2);
rocketArray[2].addThruster(30);
rocketArray[2].addThruster(40);
rocketArray[2].addThruster(50);
rocketArray[2].addThruster(50);
rocketArray[2].addThruster(30);
rocketArray[2].addThruster(10);
(document.getElementById("rocketContainer"+id) as HTMLDivElement).innerHTML = rocketArray[2].printRocketHTML(id);
}
}

function accelerateRocket(rocketId:number){
    rocketArray[rocketId].accelerate();
    (document.getElementById("rocketContainer"+rocketId) as HTMLDivElement).innerHTML = rocketArray[rocketId].printRocketHTML(rocketId);
}
function deccelerateRocket(rocketId:number){
    rocketArray[rocketId].deccelerate();
    (document.getElementById("rocketContainer"+rocketId) as HTMLDivElement).innerHTML = rocketArray[rocketId].printRocketHTML(rocketId);
}