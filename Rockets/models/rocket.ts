class Rocket {
    name: string;
    thrusters: Thruster[] = new Array();

    constructor(name: string) {
        this.name = name;
    }

    addThruster(maxPower: number): void {
        var thruster = new Thruster(maxPower)
        this.thrusters.push(thruster);
    }

    accelerate(): void {
        this.thrusters.forEach(element => {
            if (element.actualPower < element.maxPower) {
                element.actualPower = element.actualPower + 10;
            }
        });

    }
    deccelerate(): void {
        this.thrusters.forEach(element => {
            if (element.actualPower > 0) {
                element.actualPower = element.actualPower - 10;
            }
        });

    }




    actualTotalPower(): number {
        var result = 0;
        this.thrusters.forEach(element => {
            result += element.actualPower;
        });
        return result;
    }
    maxTotalPower(): number {
        var result = 0;
        this.thrusters.forEach(element => {
            result += element.maxPower;
        });
        return result;
    }

    printRocket(): string {
        var output = "";
        output = "Rocket name: " + this.name + "  /  Number of thursters: " + this.thrusters.length + "  /  Total Max Power: " + this.maxTotalPower + "  /  Total Actual Power: " + this.actualTotalPower;
        this.thrusters.forEach((element, index) => {
            output += "<BR> thurster" + (index + 1) + " MaxPower: " + element.maxPower + " / ActualPower: " + element.actualPower;
        });
        return output;



    }

    printRocketHTML(rocketId:number):string {
        var output = "";
        output = '      <div class="card" style="width: 18rem;"><div class="card-header"><H5>'
            + this.name + "</H5> <BR>  Number of thursters: " + this.thrusters.length + "  <BR> Total Max Power: " + this.maxTotalPower() + "  <BR>  Total Actual Power: " + this.actualTotalPower() +
            '</div><ul class="list-group list-group-flush">';
        this.thrusters.forEach((element, index) => {
            output += '<li class="list-group-item small">'+ index + " MaxPower: " + element.maxPower + " / ActualPower: " + element.actualPower;
        });
        output += '</ul><div class="p-3 d-flex justify-content-between"><button type="button" class="btn btn-primary px-3" onclick="accelerateRocket('+rocketId+')">Accelerate</button><button type="button" class="btn btn-primary  px-3" onclick="deccelerateRocket('+rocketId+')">Deccelerate</button></div></div>';
        return output;
    }





}