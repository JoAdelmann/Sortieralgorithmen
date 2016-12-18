 //Variablen
var currentObj = null;
var numberArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var randomizedArray = Array(0);
var toPrintArray = Array(0);
var i = 0;
var j = 1;
var minIndex = 0;
var numOfUnsElems = 10;
var animate;
var selectedAlgo = "";
var abtn;
var sistebtn;
var next;
var algoText = "";
var sortedIndex = 0;
 
            
//Button-Funktionen
function selectAlgo(n) {
    var s = parseInt(n);
    abtn = document.getElementById("animateBtn");
    sistebtn = document.getElementById("singleStepBtn");
    next = document.getElementById("nextBtn");
    algoText = document.getElementById("algo");
    
    abtn.style.visibility="visible"; sistebtn.style.visibility="visible";
    algoText.innerHTML="";
    
    
    
    switch(s) {
        case 0: selectAlgo = "BubbleSort";  algoText.innerHTML=selectAlgo; break;
            
        case 1: selectAlgo = "SelectionSort";  algoText.innerHTML=selectAlgo; break;
            
        case 2: selectAlgo = "InsertionSort";  algoText.innerHTML=selectAlgo; break;
            
        case 3: selectAlgo = "MergeSort"; algoText.innerHTML=selectAlgo; break;
            
        case 4: selectAlgo = "QuickSort";        algoText.innerHTML=selectAlgo; break;
            
        case 5: selectAlgo = "RadixSort";  algoText.innerHTML=selectAlgo; break;
    }
    
    
}

function fullAnimation() {
    sistebtn.style.visibility="hidden";
    next.style.visibility="hidden";
    sortAnim();
}

function singleStep() {
    abtn.style.visibility="visible";
    next.style.visibility="visible";
}

function selectNext() {
    next.style.visibility="visible";
    switch(selectAlgo) {
        case "BubbleSort": bubbleSortSingleStep(); break;
        case "SelectionSort": selectionSortSingleStep(); break;
    }
}


function randomizeButton(){
    clear();
    
  randomizedArray = shuffle(numberArray);
    
  printArray(randomizedArray);  
}

function sortAnim(time) {
  if(randomizedArray.length == 0) {
    console.error("Empty Array!");   
  }
  else {
      switch(selectAlgo) {
        case "BubbleSort":  bubbleSortSingleStep(); break;
        case "SelectionSort":  selectionSortSingleStep(); break;
        case "InsertionSort":  insertionSingleStep(); break;
        case "MergeSort":  mergeSingleStep; break;
        case "QuickSort":  quickSingleStep; break;
        case "RadixSort":  radixSingleStep; break;
            
    }
     
      animate = setTimeout(sortAnim, 1000);
      if(numOfUnsElems == 0) {
          console.log("Fertig!");
          clearTimeout(animate);
          window.alert("Fertig!");
      }
  }  
}


function bubbleSortAnim(time) {
  if(randomizedArray.length == 0) {
    console.error("Empty Array!");   
  }
  else {
      bubbleSortSingleStep();
      animate = setTimeout(bubbleSortAnim, 500);
      if(numOfUnsElems == 0) {
          console.log("Fertig!");
          clearTimeout(animate);
          window.alert("Fertig!");
      }
  }
}


function bubbleSortSingleStep() {
    
    if(i < numOfUnsElems) {
        
        var elemI = selectBox(i);
        var textElemI = selectBarText(i);
        var valueI = parseInt(textElemI.innerHTML);
        
        elemI.style.backgroundColor = "green";
        
        if(i > 0) {
            selectBox(i-1).style.backgroundColor = "cadetblue";
        }
        
        if(j < numOfUnsElems) {
            var elemJ = selectBox(j);
            var textElemJ = selectBarText(j);
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

function selectionSortSingleStep() {
    if(i < randomizedArray.length) {
        
        minIndex = findMinIndex(i);
        if(i > 0) {
            var beforeMinIndex = findMinIndex(i-1);
            var elem = selectBox(beforeMinIndex);
            elem.style.backgroundColor = "green";
        }
        
        
        
        var elemI = selectBox(i);
        var textElemI = selectBarText(i);
        var valueI = parseInt(textElemI.innerHTML);
        
        var elemJ = selectBox(minIndex);
        var textElemJ = selectBarText(minIndex);
        var valueJ = parseInt(textElemJ.innerHTML);
        elemJ.style.backgroundColor = "red";
        
        if(minIndex == 9) {
            elemJ.style.backgroundColor = "green";
        }
        
        
        swapElemsNTimes(i, minIndex, minIndex-i);
        

        var temp = elemI.id;
        var temp2 = textElemI.id;
                
        elemI.id = elemJ.id;
        textElemI.id = textElemJ.id;
                
        elemJ.id = temp;
        textElemJ.id = temp2;
 
        numOfUnsElems--;
        
       
    }
    i++;
    
}

function findMinIndex(number) {
    var from = parseInt(number);
    var min = from;
    for(var x=from+1; x<10; x++) {
        var minVal = parseInt(selectBarText(min).innerHTML);
        var xVal = parseInt(selectBarText(x).innerHTML);
        
        if(xVal < minVal) {
            min = x;
        }
    }
    return min;
}

function moveLeft(number) {
    var id = parseInt(number);
    var cElem = document.getElementById('box' + '' + id);
    cElem.classList.add("move");
    cElem.style.left=parseInt(cElem.style.left) + (-(window.innerWidth/10)) + 'px';
}

function moveRight(number) {
    var id = parseInt(number);
    var cElem = document.getElementById('box' + '' + id);
    cElem.classList.add("move");
    cElem.style.left=parseInt(cElem.style.left) +  (window.innerWidth/10) + 'px';
}

function swapElems(i,j) {
    var i = parseInt(i);
    var j = parseInt(j);

    moveRight(i);
    moveLeft(j);
}

function swapElemsNTimes(i, j, n) {
    var i = parseInt(i);
    var j = parseInt(j);
    var n = parseInt(n);
    
    for(var x=0; x<n; x++) {
        moveRight(i);
        moveLeft(j);
    }
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
    
    cObj.style.height = '' + currentNumber*(window.innerHeight/10 - 30) + 'px';
    cObj.style.width = '' + (window.innerWidth/10)-20 + 'px';
    cObj.style.left = '' + i*(window.innerWidth/10) + 'px';
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
    
    document.getElementById("animateBtn").style.visibility="hidden";
    document.getElementById("singleStepBtn").style.visibility="hidden";
    document.getElementById("nextBtn").style.visibility="hidden";
    
    
}

function clear() {
    var currentText = null;
    randomizedArray = new Array(0);
    numberArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    numOfUnsElems = 10;
    i=0;
    j=1;
}

//Sonstige Funktionen
function selectBox(number) {
    var n = parseInt(number);
    var res = document.getElementById('box' + '' + n);
    return res;
}

function selectBarText(number) {
    var n = parseInt(number);
    var res = document.getElementById('barText' + '' + n);
    return res;
}
            
window.onload =init;