"use strict";
var rocketArray = [];
function createRocket(name, id) {
    var rocket = new Rocket(name);
    rocketArray[id] = rocket;
    return rocket;
}
//Crear Coets
function createRocket1(id) {
    if (rocketArray[1] == undefined) {
        createRocket("32WESSDS", 1);
        rocketArray[1].addThruster(10);
        rocketArray[1].addThruster(30);
        rocketArray[1].addThruster(80);
        document.getElementById("rocketContainer" + id).innerHTML = rocketArray[1].printRocketHTML(id);
    }
}
function createRocket2(id) {
    if (rocketArray[id] == undefined) {
        createRocket("LDSFJA32", 2);
        rocketArray[2].addThruster(30);
        rocketArray[2].addThruster(40);
        rocketArray[2].addThruster(50);
        rocketArray[2].addThruster(50);
        rocketArray[2].addThruster(30);
        rocketArray[2].addThruster(10);
        document.getElementById("rocketContainer" + id).innerHTML = rocketArray[2].printRocketHTML(id);
    }
}
function accelerateRocket(rocketId) {
    rocketArray[rocketId].accelerate();
    document.getElementById("rocketContainer" + rocketId).innerHTML = rocketArray[rocketId].printRocketHTML(rocketId);
}
function deccelerateRocket(rocketId) {
    rocketArray[rocketId].deccelerate();
    document.getElementById("rocketContainer" + rocketId).innerHTML = rocketArray[rocketId].printRocketHTML(rocketId);
}
