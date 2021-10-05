let colorPickerCell = document.querySelectorAll(".colorPicker");
let headderElementA = document.querySelector("#headderElement");
let emptyCells = document.querySelectorAll(".borderAlign");


// Assign activecolor to emptyCell
function getEmptyCell(cellId,activeColor){
    let clickedEmptyCell = document.getElementById(cellId);
    clickedEmptyCell.style.backgroundColor = activeColor;
}


for(let eachCell of colorPickerCell){
    let cellId = Math.floor(Math.random()*16777215);
    let randomHexaValue =  cellId.toString(16);

    eachCell.id = cellId;
    eachCell.style.backgroundColor ="#" + randomHexaValue;

    eachCell.onclick = function(){
        clickedCellfun(cellId);
        
    }
    
   

}
// getActiveColor function
function clickedCellfun(cellId){
    let clickedCell =document.getElementById(cellId); 
    let activeColor = window.getComputedStyle(clickedCell).backgroundColor;
    console.log(activeColor);
    console.log(cellId);

    // getEmptyCells
    for(let eachEmptyCell of emptyCells){
        let cellId = Math.floor(Math.random()*12345678);
        eachEmptyCell.id = cellId;
        eachEmptyCell.onclick = function(){
            getEmptyCell(cellId,activeColor);
        }
    }
}