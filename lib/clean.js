module.exports = {
    cleanUserInput: function (argument) {
        // body...
        const userInput = argument.split(/\n/);
        const cleanData = [];
        
        console.log('userInput', userInput);
        userInput.forEach(function(item){
           if (refInput.indexOf(item.toLowerCase()) > -1) {
               cleanData.push(item.toLowerCase());
           } else {
               if ((item.toLowerCase()).includes('place') || (item.toLowerCase()).includes('report')) {
                   cleanData.push(item.toLowerCase());
               } else {
                   
               }
           }
        });
        
        console.log('cleanData', cleanData);
        return cleanData;
    }
};


const refInput = ['place', 'move', 'left', 'right', 'up', 'down', 'report'];

function cleanUserInput(argument) {
    // body...
    const tbl = document.createElement('table');
    tbl.className = "table";
    
    const userInput = argument.split(/\n/);
    const cleanData = [];
    
    userInput.forEach(function(item){
        if (item && item !== '') {
            
            const row = tbl.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            
            cell1.innerHTML = item;
            cell2.innerHTML = 'Not Valid';
            row.className = "table-danger";
            
            if (refInput.indexOf(item.toLowerCase()) > -1) {
                cleanData.push(item.toLowerCase());
                
                cell2.innerHTML = 'Valid';
                row.className = "table-success";
            } else {
                if ((item.toLowerCase()).includes('place')) {
                    const position = (item.toLowerCase()).replace("place ", "");
                    if (validateBound(position)) {
                        cleanData.push(item.toLowerCase());
                        cell2.innerHTML = 'Valid';
                        row.className = "table-success";
                    } else {
                        
                    }
                } else if((item.toLowerCase()).includes('report')){
                    if (true) {
                        cleanData.push(item.toLowerCase());
                        cell2.innerHTML = 'Valid';
                        row.className = "table-success";
                    } else {
                        
                    }
                }
            }
            
        } else {
            
        }
    });
    
    // return cleanData;
    return {view:tbl,data:cleanData};
}


///////////////////

const robotFacing = ['north', 'east', 'south', 'west']; // clockwise
const XY = {
    maxX : 5, // x total
    maxY : 5 // y total
};

function validateBound(input) {
    
    const cInput = input.split(',');
    //Check position
    if (isNaN(cInput[0]) || isNaN(cInput[1])) {
        console.log("Please enter a numeric coordinates!");
        return false;
    } else if (cInput[0] < 0 || cInput[0] > 4 || cInput[1] < 0 || cInput[1] > 4) {
        console.log("Coordinates out of range!");
        return false;
    }
    
    //Check direction
    if(robotFacing.indexOf(cInput[2].toLowerCase()) < 0) {
        console.log('Robot direction not correct');
        return false;
    }
    
    return true;
}
function validateFacing(face) {
    if (robotFacing.indexOf(face.toLowerCase()) < 0) {
        console.log("Wrong facing!");
        return false;
    } else {
        return true;
    }
}