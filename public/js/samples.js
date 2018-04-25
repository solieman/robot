function samplesChanger () {
    var x = document.getElementById("samples").value;
    document.getElementById("robot-steps").innerHTML = samples[x];
}

const sample1 = "PLACE 0,0,NORTH \nMOVE\nReport";
const sample2 = "PLACE 1,0,NORTH \nLEFT\nReport";
const sample3 = "PLACE 2,0,NORTH \nMOVE\nReport";
const sample4 = "PLACE 3,0,NORTH \nMOVE\nReport";
const sample5 = "PLACE 4,0,NORTH \nMOVE\nReport";
const sample6 = "PLACE 5,0,NORTH \nMOVE\nReport";

const samples = [null,sample1,sample2,sample3,sample4,sample5,sample6]