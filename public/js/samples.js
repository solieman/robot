function samplesChanger () {
    var x = document.getElementById("samples").value;
    console.log(x);
    document.getElementById("robot-steps").value = samples[x];
    // document.getElementById("robot-steps").innerHTML = samples[x];
}

const sample1 = "PLACE 0,0,NORTH\nMOVE\nREPORT";
const sample2 = "PLACE 1,0,EAST\nLEFT\nREPORT";
const sample3 = "PLACE 2,0,WEST\nMOVE\nLEFT\nMOVE\nREPORT";
const sample4 = "PLACE 3,0,SOUTH\nLEFT\nMOVE\nMOVE\nREPORT";
const sample5 = "PLACE 4,0,NORTH\nMOVE\nRIGHT\nMOVE\nRIGHT\nLEFT\nREPORT";
const sample6 = "PLACE 3,0,SOUTH\nMOVE\nLEFT\nMOVE\nLEFT\nMOVE\nREPORT";

const samples = [null,sample1,sample2,sample3,sample4,sample5,sample6]