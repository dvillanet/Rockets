"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(name) {
        this.thrusters = new Array();
        this.name = name;
    }
    Rocket.prototype.addThruster = function (maxPower) {
        var thruster = new Thruster(maxPower);
        this.thrusters.push(thruster);
    };
    Rocket.prototype.accelerate = function () {
        this.thrusters.forEach(function (element) {
            if (element.actualPower < element.maxPower) {
                element.actualPower = element.actualPower + 10;
            }
        });
    };
    Rocket.prototype.deccelerate = function () {
        this.thrusters.forEach(function (element) {
            if (element.actualPower > 0) {
                element.actualPower = element.actualPower - 10;
            }
        });
    };
    Rocket.prototype.actualTotalPower = function () {
        var result = 0;
        this.thrusters.forEach(function (element) {
            result += element.actualPower;
        });
        return result;
    };
    Rocket.prototype.maxTotalPower = function () {
        var result = 0;
        this.thrusters.forEach(function (element) {
            result += element.maxPower;
        });
        return result;
    };
    Rocket.prototype.printRocket = function () {
        var output = "";
        output = "Rocket name: " + this.name + "  /  Number of thursters: " + this.thrusters.length + "  /  Total Max Power: " + this.maxTotalPower + "  /  Total Actual Power: " + this.actualTotalPower;
        this.thrusters.forEach(function (element, index) {
            output += "<BR> thurster" + (index + 1) + " MaxPower: " + element.maxPower + " / ActualPower: " + element.actualPower;
        });
        return output;
    };
    Rocket.prototype.printRocketHTML = function (rocketId) {
        var output = "";
        output = '      <div class="card" style="width: 18rem;"><div class="card-header"><H5>'
            + this.name + "</H5> <BR>  Number of thursters: " + this.thrusters.length + "  <BR> Total Max Power: " + this.maxTotalPower() + "  <BR>  Total Actual Power: " + this.actualTotalPower() +
            '</div><ul class="list-group list-group-flush">';
        this.thrusters.forEach(function (element, index) {
            output += '<li class="list-group-item small">' + index + " MaxPower: " + element.maxPower + " / ActualPower: " + element.actualPower;
        });
        output += '</ul><div class="p-3 d-flex justify-content-between"><button type="button" class="btn btn-primary px-3" onclick="accelerateRocket(' + rocketId + ')">Accelerate</button><button type="button" class="btn btn-primary  px-3" onclick="deccelerateRocket(' + rocketId + ')">Deccelerate</button></div></div>';
        return output;
    };
    return Rocket;
}());
