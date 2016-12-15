 //Variablen
var currentObj = null;
var numberArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var randomizedArray = Array(0);
var toPrintArray = Array(0);
var i = 0;
var j = 1;
var numOfUnsElems = 10;
var animate;
 
            
//Button-Funktionen
function randomizeButton(){
    clear();
    
  randomizedArray = shuffle(numberArray);
    
  printArray(randomizedArray);  
}

function bubbleSortButton(time) {
  if(randomizedArray.length == 0) {
    console.error("Empty Array!");   
  }
  else {
      next();
      animate = setTimeout(bubbleSortButton, 500);
      if(numOfUnsElems == 0) {
          console.log("Fertig!");
          clearTimeout(animate);
          window.alert("Fertig!");
      }
  }
}


function next() {
    var nextBtn = document.getElementById('next');
    if(i < numOfUnsElems) {
        
        var elemI = document.getElementById('box' + '' + i);
        var textElemI = document.getElementById('barText' + '' + i);
        var valueI = parseInt(textElemI.innerHTML);
        
        elemI.style.backgroundColor = "green";
        
        if(i > 0) {
            document.getElementById('box' + '' + (i-1)).style.backgroundColor = "cadetblue";
        }
        
        if(j < numOfUnsElems) {
            var elemJ = document.getElementById('box' + '' + j);
            var textElemJ = document.getElementById('barText' + '' + j);
            var valueJ = parseInt(textElemJ.innerHTML);
            
            elemJ.style.backgroundColor = "red";
            
            if(valueI >= valueJ) {
              swapElems(i,j);
              var temp = elemI.id;
              var temp2 = textElemI.id;
                
              elemI.id = elemJ.id;
              textElemI.id = textElemJ.id;
                
              elemJ.id = temp;
              textElemJ.id = temp2;
              
            }
            
            j++;
        }
        
        else {
            numOfUnsElems--;
            j=1;
            
        } 
        
        i++;
    }

   else {
        i=0;
    }
}

function moveLeft(number) {
    var id = parseInt(number);
    var cElem = document.getElementById('box' + '' + id);
    cElem.classList.add("moveLeft");
    cElem.style.left=parseInt(cElem.style.left) + (-45) + 'px';
}

function moveRight(number) {
    var id = parseInt(number);
    var cElem = document.getElementById('box' + '' + id);
    cElem.classList.add("moveRight");
    cElem.style.left=parseInt(cElem.style.left) + 45 + 'px';
}

function swapElems(i,j) {
    var i = parseInt(i);
    var j = parseInt(j);

    moveRight(i);
    moveLeft(j);
}

          
//Array-Funktionen
function shuffle(array) {
  var currentIndex = array.length, temp, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

function bubbleSort(array) {
    for(var i=0; i<array.length; i++) {
        for(var j=0; j<array.length; j++) {
            if(array[i] <= array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
          
//Anzeige
function printArray(array) {
    for(var i=0; i<array.length; i++) {
    var currentNumber = array[i];
    var cObj = document.getElementById('box' + i);
    var cObjText = document.getElementById('barText' + i);
    
    cObj.style.height = '' + currentNumber*20 + 'px';
    cObj.style.left = '' + i*45 + 'px';
    cObj.style.bottom='0px';
    cObj.style.textAnchor='bottom';
    cObj.style.borderColor = 'blue';
    cObjText.innerHTML = '' + currentNumber;
    }
}
          
function init(){
    clear();
    for(var i=0; i<10; i++) {
        currentObj=document.getElementById('box'+ i);
        currentObj.style.bottom='0px';
        currentObj.style.left = '' + i*45 + 'px';
        currentObj.style.height =  '0px';
        currentObj.style.borderColor= 'black';

        currentText = document.getElementById('barText' + i);
        currentText.innerHTML = '';
    }
}

function clear() {
    var currentText = null;
    randomizedArray = new Array(0);
    numberArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    numOfUnsElems = 10;
    i=0;
    j=1;
}
            
window.onload =init;