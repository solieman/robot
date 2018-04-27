const validator = require("./validator");


module.exports = {
    place: function (argument) {
        // body...
        validator.validateBound(argument);
        console.log('place', argument);
    },
    move: function (argument) {
        // body...
        console.log('move', argument);
    },
    rotate: function (argument) {
        // body...
        console.log('rotate', argument);
    }
};

// class robot {
//     constructor(x=0,y=0,f="north") { 
//         this.x = x,
//         this.y = y,
//         this.f = f
//     }
    
//     place (positionData){
//         console.log(positionData.split(','));
//         const cleanData = positionData.split(',');
//         if(cleanData[0] >= 0 && cleanData[0] < 5 && cleanData[1] >= 0 && cleanData[1] < 5 ) {
//             this.x = Number(cleanData[0]);
//             this.y = Number(cleanData[1]);    
//         } else {
//             console.log('Not a valied position, ',positionData,' will be ignored');
//         }
        
//         this.f = cleanData[2];
//     }
    
//     move () {
//         if (this.f === 'north') {
//             if (this.x < 4) {
//                 this.x ++;
//             } else {
//                 console.log('Not a valied move, robot can not move to north, this step will be ignored');
//             }
//         } else if (this.f === 'south') {
//             if (this.x > 0) {
//                 this.x --;
//             } else {
//                 console.log('Not a valied move, robot can not move to south, this step will be ignored');
//             }
//         } else if (this.f === 'east') {
//             if (this.y < 4) {
//                 this.y ++;
//             } else {
//                 console.log('Not a valied move, robot can not move to east, this step will be ignored');
//             }
//         } else if (this.f === 'west') {
//             if (this.y > 0) {
//                 this.y --;
//             } else {
//                 console.log('Not a valied move, robot can not move to west, this step will be ignored');
//             }
//         }
        
//     }
    
//     left () {
//         if (this.f === 'north') {
//             this.f = 'west';
//         } else if (this.f === 'west') {
//             this.f = 'south';
//         } else if (this.f === 'south') {
//             this.f = 'east';
//         } else if (this.f === 'east') {
//             this.f = 'north';
//         }
//     }
    
//     right () {
//         if (this.f === 'north') {
//             this.f = 'east';
//         } else if (this.f === 'east') {
//             this.f = 'south';
//         } else if (this.f === 'south') {
//             this.f = 'west';
//         } else if (this.f === 'west') {
//             this.f = 'north';
//         }
//     }
// };


// let executeValiedData = function(steps) {
//     let currentRobot = new robot();
    
//     steps.forEach((step) => {
//       switch (step.split(' ')[0]) {
//           case 'place':
//               currentRobot.place(step.split(' ')[1]);
//               // code
//               break;
//           case 'move':
//               currentRobot.move();
//               // code
//               break;
//           case 'right':
//               currentRobot.right();
//               // code
//               break;
//           case 'left':
//               currentRobot.left();
//               // code
//               break;
//           case 'report':
//               console.log('Report: ', currentRobot);
//               // code
//               break;
           
//           default:
//               // code
//       }
//     });
// };