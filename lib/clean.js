const refInput = ['place', 'move', 'left', 'right', 'up', 'down', 'report'];

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