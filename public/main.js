function submitRobotActions(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Action to be performed when the document is read;
        //   var cResponseData = JSON.parse(this.responseText);
          var cResponseData = this.responseText;
          document.getElementById('result-div').innerHTML += cResponseData;
          
        }
    };
    
    const currentData = document.getElementById("robot-steps").value;
    const cleanData = cleanUserInput(currentData);
    document.getElementById('result-div').innerHTML = "";
    document.getElementById('result-div').appendChild(cleanData.view);
    executeValiedData(cleanData.data);
    
    xhttp.open("POST", "processRobotData", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({ info: currentData });
    xhttp.send(data);
}