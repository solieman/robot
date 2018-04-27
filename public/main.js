function submitRobotActions(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Action to be performed when the document is read;
          console.log(this.responseText);
        //   var cResponseData = JSON.parse(this.responseText);
          var cResponseData = this.responseText;
          console.log(cResponseData);
          document.getElementById('result-div').innerHTML += cResponseData;
        }
    };
    
    const currentData = document.getElementById("robot-steps").value;
    const cleanData = cleanUserInput(currentData);
    console.log(cleanData);
    document.getElementById('result-div').innerHTML = "";
    document.getElementById('result-div').appendChild(cleanData);
    xhttp.open("POST", "processRobotData", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({ info: currentData });
    xhttp.send(data);
    
    
    // window.fetch('processRobotData', {
    //   method: 'POST',
    //   body: JSON.stringify({ info: 'data' }),
    // }).then((resolve)=>{console.log(resolve.body)}, (reject)=>{console.log(reject)});
}