function drawIt(robotItem) {
    const tbl = document.createElement('table');
    tbl.className = "table";
    
    for (var i = 4; i > -1; i--) {
        const row = tbl.insertRow();
        
        for (var j = 0; j < 5; j++) {
            var cell1 = row.insertCell(j);
            cell1.innerHTML = i+','+j;
            cell1.className = 'table-bordered';
            if(i === robotItem.y && j === robotItem.x && robotItem.f){
                cell1.className = 'table-success';
                cell1.innerHTML = robotItem.f;
            }
        }
    }
    
    return tbl;
}