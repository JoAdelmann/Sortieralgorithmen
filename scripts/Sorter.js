Sorter.prototype.i = 0;
Sorter.prototype.j = 1;
Sorter.prototype.numOfUnsElems = 10;





//InsertionSortExclusive
Sorter.prototype.k=1;
Sorter.prototype.tempElemK = null;
Sorter.prototype.tempTextElemK = null;
Sorter.prototype.tempValueK = 0;

Sorter.prototype.elemJMO = null;
Sorter.prototype.textElemJMO = null;
Sorter.prototype.valueJMO = 0;

//MergeSortExclusive
Sorter.prototype.l = 2;
Sorter.prototype.n = 0;
Sorter.prototype.m = 1;
Sorter.prototype.unsElems = 4;
Sorter.prototype.x=0;
Sorter.prototype.minIndex = 0;

//QuickSortExclusive
Sorter.prototype.lessThenPivot = new Array(0);
Sorter.prototype.greaterThenPivot = new Array(0);
Sorter.prototype.less = new Array(0);
Sorter.prototype.greater = new Array(0);
Sorter.prototype.pivotIndex = 5;

function Sorter() {
    

}

Sorter.prototype.bubbleSortArray = function(array) {
        var temp;
        for(var i=1; i<array.length; i++) {
            for(var j=0; j<array.length-i; j++) {
                if(array[j]>array[j+1]) {
                    swap(j, j+1, array);
                }	
            }
        }    
}


Sorter.prototype.insertionSortArray = function(array) {
    var temp;
    for (var i = 1; i < array.length; i++) {
        temp = array[i];
        var j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
}

Sorter.prototype.selectionSortArray = function(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
            }
        }
    }
}

Sorter.prototype.swap = function(i, j, array) {
        var i = parseInt(i);
        var j = parseInt(j);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp; 
} 

Sorter.prototype.findMinIndex = function(from, array) {
    var res = parseInt(from);
    for(var i=0; i<array.length; i++) {
        if(array[i] < res) {
            res = i;
        }
    }
    return res;
}

Sorter.prototype.bubbleSortSingleStep = function() {
    this.selectElem("bubbleSort").style.visibility = "visible";
    this.selectElem("outerIf").style.backgroundColor= "red";
    
    if(this.i < this.numOfUnsElems) {
        this.selectElem("outerFor").style.backgroundColor= "green";
        this.selectElem("innerFor").style.backgroundColor= "black";
        this.selectElem("innerIf").style.backgroundColor= "black";
 
        var elemI = this.selectBox(this.i);
        var textElemI = this.selectBarText(this.i);
        var valueI = parseInt(textElemI.innerHTML);
        
        elemI.style.backgroundColor = "green";
        
        if(this.i > 0) {
            this.selectBox(this.i-1).style.backgroundColor = "cadetblue";
        }
        
        if(this.j < this.numOfUnsElems) {
            this.selectElem("outerFor").style.backgroundColor= "black";
            this.selectElem("innerFor").style.backgroundColor= "green";
            this.selectElem("innerIf").style.backgroundColor= "black";
            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            
            elemJ.style.backgroundColor = "red";

            if(valueI >= valueJ) {
              this.selectElem("innerFor").style.backgroundColor= "black";
              this.selectElem("innerIf").style.backgroundColor= "green";
              this.selectElem("outerIf").style.backgroundColor= "black";
              this.swapElems(this.i,this.j);
              var temp = elemI.id;
              var temp2 = textElemI.id;
                
              elemI.id = elemJ.id;
              textElemI.id = textElemJ.id;
                
              elemJ.id = temp;
              textElemJ.id = temp2;
                
            }
            this.j++;
        }
        else {
            this.numOfUnsElems--;
            this.j=1;
        }
        this.i++;
    }
    
   else {
        this.i=0;
   }   
}

Sorter.prototype.selectionSortSingleStep = function() {
    this.selectElem("selectionSort").style.visibility = "visible";
    if(this.i < 10) {
        this.minIndex = this.findMinIndex(this.i);
        this.selectElem("findMinIndex").style.backgroundColor = "red";
        this.selectElem("swapElems").style.backgroundColor = "black";
        if(this.i > 0) {
            var beforeMinIndex = this.findMinIndex(this.i-1);
            var elem = this.selectBox(beforeMinIndex);
            elem.style.backgroundColor = "green";
        }

        var elemI = this.selectBox(this.i);
        var textElemI = this.selectBarText(this.i);
        var valueI = parseInt(textElemI.innerHTML);
        
        var elemJ = this.selectBox(this.minIndex);
        var textElemJ = this.selectBarText(this.minIndex);
        var valueJ = parseInt(textElemJ.innerHTML);
        elemJ.style.backgroundColor = "red";
        
        if(this.minIndex == 9) {
            elemJ.style.backgroundColor = "green";
        }
        
        this.swapElemsNTimes(this.i, this.minIndex, this.minIndex-this.i);
        this.selectElem("swapElems").style.backgroundColor = "green";
        
        var temp = elemI.id;
        var temp2 = textElemI.id;
                
        elemI.id = elemJ.id;
        textElemI.id = textElemJ.id;
                
        elemJ.id = temp;
        textElemJ.id = temp2;   
    }
    this.i++;
    this.numOfUnsElems--;
}

Sorter.prototype.insertionSortSingleStep = function() {
    this.selectElem("insertionSort").style.visibility = "visible";
    this.selectElem("forLoop").style.backgroundColor = "black";
    this.selectElem("temp").style.backgroundColor = "black";
    this.selectElem("tempEqArrayI").style.backgroundColor = "black";
    this.selectElem("varJEqI").style.backgroundColor = "black";
    this.selectElem("while").style.backgroundColor = "black";
    this.selectElem("arrayJEqArrayJMO").style.backgroundColor = "black";
    this.selectElem("jMM").style.backgroundColor = "black";
    this.selectElem("arrayJEqTemp").style.backgroundColor = "black";
    
    this.selectElem("forLoop").style.backgroundColor = "green";
    if(this.k < this.numOfUnsElems) {
        this.tempElemK = this.selectBox(this.k);
        this.tempTextElemK = this.selectBarText(this.k);
        this.tempValueK = parseInt(this.tempTextElemK.innerHTML);
        
        this.j = this.k;
        
        this.elemJMO = this.selectBox(this.j-1);
        this.textElemJMO = this.selectBarText(this.j-1);
        this.valueJMO = parseInt(this.textElemJMO.innerHTML);
        this.elemJMO.style.backgroundColor = "green";
        
        this.selectElem("forLoop").style.backgroundColor = "green";
        this.selectElem("temp").style.backgroundColor = "green";
        this.selectElem("tempEqArrayI").style.backgroundColor = "green";
        this.selectElem("varJEqI").style.backgroundColor = "green";
        this.selectElem("while").style.backgroundColor = "black";
        this.selectElem("arrayJEqArrayJMO").style.backgroundColor = "black";
        this.selectElem("jMM").style.backgroundColor = "black";
        this.selectElem("arrayJEqTemp").style.backgroundColor = "green";
        
        if(this.j > 0 && this.valueJMO > this.tempValueK) {
            this.swapElems(this.j-1, this.j);
            var temp = this.selectBox(this.j).id;
            var temp2 = this.selectBarText(this.j).id;
                
            this.selectBox(this.j).id = this.elemJMO.id;
            this.selectBarText(this.j).id = this.textElemJMO.id;
                
            this.elemJMO.id = temp;
            this.textElemJMO.id = temp2;
            this.j--;
            
            this.selectElem("forLoop").style.backgroundColor = "black";
            this.selectElem("temp").style.backgroundColor = "black";
            this.selectElem("tempEqArrayI").style.backgroundColor = "black";
            this.selectElem("varJEqI").style.backgroundColor = "black";
            this.selectElem("while").style.backgroundColor = "green";
            this.selectElem("arrayJEqArrayJMO").style.backgroundColor = "green";
            this.selectElem("jMM").style.backgroundColor = "green";
            this.selectElem("arrayJEqTemp").style.backgroundColor = "black";  
        }
        this.k++;
    }
    else {
        this.k=1;
        this.numOfUnsElems--;
    }
}

Sorter.prototype.mergeSortSingleStep = function() {
    this.selectElem("mergeSort").style.visibility = "visible";
    if(this.l == 2) {
        this.selectElem("sortTwo").style.backgroundColor = "black";
        if(this.i < 9) {
            this.selectElem("sortTwo").style.backgroundColor = "green";
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "yellow";
            
            this.j= this.i + 1;
            
            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "yellow";
            
            if(valueI > valueJ) {
                this.swapElems(this.i, this.j);
                var temp = elemI.id;
                var temp2 = textElemI.id;
                
                elemI.id = elemJ.id;
                textElemI.id = textElemJ.id;
                
                elemJ.id = temp;
                textElemJ.id = temp2;
            }
            this.i+=2;
        }
        else {
            this.selectElem("mergeTwo").style.backgroundColor = "green";
            this.l+=2;
            this.i = 0;
        }

    }
    else if(this.l == 4) {
        this.selectElem("mergeTwo").style.backgroundColor = "black";
        this.selectElem("sortFour").style.backgroundColor = "black";
        if(this.i < 8) {
            this.selectElem("sortFour").style.backgroundColor = "green";
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "orange"; 
            
            this.j = this.i + 2;
            
            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "orange";
            
            if(valueI > valueJ) {
                this.swapElemsNTimes(this.i,this.j, this.j-this.i);
                
                var temp = elemI.id;
                var temp2 = textElemI.id;
                
                elemI.id = elemJ.id;
                textElemI.id = textElemJ.id;
                
                elemJ.id = temp;
                textElemJ.id = temp2;
                
            }

            if(this.i == 2) {
                this.selectElem("mergeFour").style.backgroundColor = "green";
                this.selectElem("sortFour").style.backgroundColor = "black";
                this.clearInOrder(0, 3);
                this.i = 4;
            }
            else if(this.i == 5) {
                this.selectElem("mergeFour").style.backgroundColor = "green";
                this.selectElem("sortFour").style.backgroundColor = "black";
                this.clearInOrder(4, 7);
                this.l+=2;
                this.i = 0;
            }
            else {
                this.i++;
            }
        }
        
        
    }
    else if(this.l == 6) {
        this.selectElem("mergeFour").style.backgroundColor = "black";
        if(this.i<4) {
            this.selectElem("sortEight").style.backgroundColor = "green";
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "green"; 
            
            this.j = this.i + 4;
            
            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "green";
            
            if(valueI > valueJ) {
                this.swapElemsNTimes(this.i,this.j, this.j-this.i);
                
                var temp = elemI.id;
                var temp2 = textElemI.id;
                
                elemI.id = elemJ.id;
                textElemI.id = textElemJ.id;
                
                elemJ.id = temp;
                textElemJ.id = temp2;
                
            }
            this.i++;
        }
        else {
            this.selectElem("sortEight").style.backgroundColor = "black";
            this.selectElem("mergeEight").style.backgroundColor = "green";
            this.clearInOrder(0, 7);
            this.i = 0;
            this.l+=2;
        }
    }
    else {
       if(this.i<2) {
           this.selectElem("mergeEight").style.backgroundColor = "black";
           this.selectElem("sortRest").style.backgroundColor = "green";
           var elemI = this.selectBox(this.i);
           var textElemI = this.selectBarText(this.i);
           var valueI = parseInt(textElemI.innerHTML);
           elemI.style.backgroundColor = "green"; 
        
           this.j = this.i + 8;
           
           var elemJ = this.selectBox(this.j);
           var textElemJ = this.selectBarText(this.j);
           var valueJ = parseInt(textElemJ.innerHTML);
           elemJ.style.backgroundColor = "green"; 
            
           if(valueI > valueJ) {
               this.swapElemsNTimes(this.i,this.j, this.j-this.i);
                
               var temp = elemI.id;
               var temp2 = textElemI.id;
                
               elemI.id = elemJ.id;
               textElemI.id = textElemJ.id;
                
               elemJ.id = temp;
               textElemJ.id = temp2;
           }
           this.i++;
       }
        else {
            this.selectElem("sortRest").style.backgroundColor = "black";
            this.selectElem("mergeRest").style.backgroundColor = "green";
            this.clearInOrder(0,9);
            this.numOfUnsElems = 0;
        }
    }
}

Sorter.prototype.quickSortSingleStep = function() {
    if(this.pivotIndex == 5) {
        var elemPivot = this.selectBox(this.pivotIndex);
        var textElemPivot = this.selectBarText(this.pivotIndex);
        var valuePivot = parseInt(textElemPivot.innerHTML);
        
        elemPivot.style.backgroundColor = "yellow";
        
        for(var i=0; i<10; i++) {
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "blue";
            
            if(valueI > valuePivot) {
                if(parseInt(elemI.id.substring(3)) < this.pivotIndex) {
                    this.greaterThenPivot.push(parseInt(elemI.id.substring(3)));
                    elemI.style.backgroundColor = "red";
                }
                else {
                    this.greater.push(parseInt(elemI.id.substring(3)));
                    elemI.style.backgroundColor = "blue";
                }
            }
            else if(valueI < valuePivot) {
                if(parseInt(elemI.id.substring(3)) > this.pivotIndex) {
                    this.lessThenPivot.push(parseInt(elemI.id.substring(3)));
                    elemI.style.backgroundColor = "red";
                }
                else {
                    this.less.push(parseInt(elemI.id.substring(3)));
                    elemI.style.backgroundColor = "blue";
                }
                
            }
            else {
                elemI.style.backgroundColor = "yellow";
            }
            this.i++;
        }
        
        if(this.lessThenPivot.length < this.greaterThenPivot.length) {
            console.log("less < greater");
            for(var i=0; i<this.lessThenPivot.length; i++) {
                this.swapElemsNTimes(this.greaterThenPivot[i], this.lessThenPivot[i], this.lessThenPivot[i]-this.greaterThenPivot[i]);
            }
        }
        else if(this.lessThenPivot.length > this.greaterThenPivot.length) {
            console.log("less > greater");
            for(var i=0; i<this.greaterThenPivot.length; i++) {
                this.swapElemsNTimes(this.lessThenPivot[i], this.greaterThenPivot[i], this.greaterThenPivot[i]-this.lessThenPivot[i]);
            }
        }
        else {
            for(var i=0; i<this.lessThenPivot.length; i++) {
                this.swapElemsNTimes(this.greaterThenPivot[i], this.lessThenPivot[i], this.lessThenPivot[i]-this.greaterThenPivot[i]);
            }            
        }
        this.pivotIndex = 0;
    }
}



Sorter.prototype.selectElem = function(id) {
    return document.getElementById(id);
}

Sorter.prototype.selectBox = function(number) {
    var n = parseInt(number);
    var res = this.selectElem('box' + '' + n);
    return res;    
}

Sorter.prototype.selectBarText = function(number) {
    var n = parseInt(number);
    var res = this.selectElem('barText' + '' + n);
    return res;    
}

//Animationen
Sorter.prototype.moveNTimesToLeft = function(index, far) {
    var id = parseInt(index);
    var howFar = parseInt(far);
    for(var i=0; i<=howFar; i++) {
        this.moveLeft(id);
    }
}

Sorter.prototype.moveNTimesToRight = function(index, far) {
    var id = parseInt(index);
    var howFar = parseInt(far);
    for(var i=0; i<=howFar; i++) {
        this.moveRight(id);
    }
}

Sorter.prototype.moveLeft = function(number) {
    var id = parseInt(number);
    var cElem = this.selectBox(id);
    cElem.classList.add("move");
    cElem.style.left=parseInt(cElem.style.left) + (-(window.innerWidth/10)*0.7) + 'px';
}

Sorter.prototype.moveRight = function(number) {
    var id = parseInt(number);
    var cElem = this.selectBox(id);
    cElem.classList.add("move");
    cElem.style.left=parseInt(cElem.style.left) +  (window.innerWidth/10)*0.7 + 'px';
}

Sorter.prototype.moveUp = function(number) {
    var id = parseInt(number);
    var cElem = this.selectBox(id);
    cElem.classList.add("move");
    cElem.style.bottom = parseInt(cElem.style.bottom) + '50px';
}

Sorter.prototype.moveDown = function(number) {
    var id = parseInt(number);
    var cElem = this.selectBox(id);
    cElem.classList.add("move");
    cElem.style.bottom = parseInt(cElem.style.bottom) + (-50) + 'px';
}

Sorter.prototype.swapElems = function(i,j) {
    var i = parseInt(i);
    var j = parseInt(j);

    this.moveRight(i);
    this.moveLeft(j);
}

Sorter.prototype.swapElemsNTimes = function(i,j,n) {
    var i = parseInt(i);
    var j = parseInt(j);
    var n = parseInt(n);
    
    for(var x=0; x<n; x++) {
        this.moveRight(i);
        this.moveLeft(j);
    }
}

Sorter.prototype.findMinIndex = function(number) {
    var from = parseInt(number);
    var min = from;
    for(var x=from+1; x<10; x++) {
        var minVal = parseInt(this.selectBarText(min).innerHTML);
        var xVal = parseInt(this.selectBarText(x).innerHTML);
        
        if(xVal < minVal) {
            min = x;
        }
    }
    return min;
}

Sorter.prototype.clearInOrder = function(from, to) {
    for(var x=parseInt(from); x < parseInt(to); x++) {
        var elemX = this.selectBox(x);
        var textElemX = this.selectBarText(x);
        var valueX = parseInt(textElemX.innerHTML);
    
        var elemY = this.selectBox(x+1);
        var textElemY = this.selectBarText(x+1);
        var valueY = parseInt(textElemY.innerHTML);
        
        if(valueX > valueY) {
            this.swapElems(x,x+1);
                
            var temp = elemX.id;
            var temp2 = textElemX.id;
                
            elemX.id = elemY.id;
            textElemX.id = textElemY.id;
                
            elemY.id = temp;
            textElemY.id = temp2;
                
        }
    }
}

Sorter.prototype.getIndex = function(id) {
    return parseInt(id.substring(3));
}
