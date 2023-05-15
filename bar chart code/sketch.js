XValues = [];



function preload() {
  table = loadTable('circle_data (3).csv', "csv", "header");
}

function setup() {
  createCanvas(400, 500);
  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();
}

function draw() {
  background(220);
  fill(0);

  for (var i = 0; i < numberOfRows; i++) {
    //place years
    text(table.getString(i, 0), i * 60 + 100, 430);
    //pull numbers
    XValues[i] = table.getString(i, 1);
   
    fill(120,50,10);
    //draw graph
    rect(i * 60 + 100, 400 - XValues[i], 20, XValues[i])
     fill(120,50,10);
     
  } 
   
  maxValue=max(XValues); 
    for ( k=0; k<maxValue;k=k+20){
   text(k,10,420-k);

    }
  
  

}