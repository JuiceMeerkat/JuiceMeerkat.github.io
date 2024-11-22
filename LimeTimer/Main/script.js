//BACKGROUND:


/*

const container = document.getElementById('dottedBackground');
  for (let i = 0; i < 6; i++) {
    const item = document.createElement('svg');
    item.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg"> <path d="M14.554,0C6.561,0,0,6.562,0,14.552c0,7.996,6.561,14.555,14.554,14.555c7.996,0,14.553-6.559,14.553-14.555     C29.106,6.562,22.55,0,14.554,0z"/> </svg>`;
    container.appendChild(item);
  }

*/
  








//DISPLAY:


function getDisplays(div) {
  childs = []
  
  for (let i = 0; i < div.children.length; i++) {
    console.log(div.children[i]);
    childs.push(div.children[i]);
  }

  return childs
}



class stopwatch {

  constructor() {
    this.millis = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }


  
    
  incrementDisplay() {

    increaseDisplay();

    
    

    //let msLength = milliseconds.toString().length;

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    //let twoLongMS = Number(String(milliseconds).substring(0, (msLength - 1)));
    //let ms = twoLongMS < 10 ? "0" + twoLongMS : twoLongMS;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    //let ms = milliseconds;




    displayReference.setAttribute("placeholder", ` ${h}:${m}:${s}:${ms}`)

  }
}





// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let displayReference = document.querySelector('#display');
// let displayID = null;

// let playing = false;

// let playButtonSVG = document.getElementById("playButtonSVG");

// let stopwatchReference = document.querySelector('#stopwatches');

// let randomDiv = document.querySelector('#displayDiv');



let x = 1;

let stopwatchesReference;

let stopwatches;
let stopwatchesStats = [];

let stopwatchesLength;

for (let i = 0; i < stopwatchesLength; i++) {
  const newThing = new stopwatch();
  stopwatchesStats.push(newThing);
}

console.log('aftermath');

stopwatchesReference = document.getElementById('stopwatches');





stopwatches = getDisplays(stopwatchesReference);

stopwatchesLength = stopwatches.length

for (let i = 0; i < stopwatchesLength; i++) {
  const newThing = new stopwatch();
  stopwatchesStats.push(newThing);
}

console.log('aftermath');




function redefineStopwatches() {
  stopwatches = getDisplays(stopwatchesReference);
  stopwatchesLength = stopwatches.length

  for (let i = 0; i < stopwatchesLength - 1; i++) {
    const newThing = new stopwatch();
    stopwatchesStats.push(newThing);
  }

}

function addStopwatch() {
  let stopwatchesSection = document.getElementById('stopwatches');
  let stopwatchesSectionChild = stopwatchesSection.children[0];


  let newDiv = document.createElement('div');
  newDiv.className = 'stopwatch';
  newDiv.innerHTML = `<div class="displayDiv" >
  <input class="div" id="display" inputmode="numeric" placeholder="00:00:00:00" value=""></input>
  <div id="displayUnderline"></div>
</div>

<div class="div" id="buttons">

  <button class="startButton" src="#">
  <svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7zM9 15.2V8.805L14.113 12z" style="fill:#1c1b1e"/>
  </svg> 
  </button>


  
<button class="resetButton" src="#">
    

  <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 214.367 214.367" xml:space="preserve">
  <path d="M202.403,95.22c0,46.312-33.237,85.002-77.109,93.484v25.663l-69.76-40l69.76-40v23.494  c27.176-7.87,47.109-32.964,47.109-62.642c0-35.962-29.258-65.22-65.22-65.22s-65.22,29.258-65.22,65.22  c0,9.686,2.068,19.001,6.148,27.688l-27.154,12.754c-5.968-12.707-8.994-26.313-8.994-40.441C11.964,42.716,54.68,0,107.184,0  S202.403,42.716,202.403,95.22z"/>
  </svg>
</button>


  
</div>`

  let container = document.getElementById('stopwatches');
  container.appendChild(newDiv);


}




function addTimer() {
  let stopwatchesSection = document.getElementById('timers');
  let stopwatchesSectionChild = stopwatchesSection.children[0];


  let newDiv = document.createElement('div');
  newDiv.className = 'timer';
  newDiv.innerHTML = `<div class="displayDiv" >
  <input class="div" id="display" inputmode="numeric" placeholder="00:00:00:00" value=""></input>
  <div id="displayUnderline"></div>
</div>

<div class="div" id="buttons">

  <button class="startButton" src="#">
  <svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7zM9 15.2V8.805L14.113 12z" style="fill:#1c1b1e"/>
  </svg> 
  </button>


  
<button class="resetButton" src="#">
    

  <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 214.367 214.367" xml:space="preserve">
  <path d="M202.403,95.22c0,46.312-33.237,85.002-77.109,93.484v25.663l-69.76-40l69.76-40v23.494  c27.176-7.87,47.109-32.964,47.109-62.642c0-35.962-29.258-65.22-65.22-65.22s-65.22,29.258-65.22,65.22  c0,9.686,2.068,19.001,6.148,27.688l-27.154,12.754c-5.968-12.707-8.994-26.313-8.994-40.441C11.964,42.716,54.68,0,107.184,0  S202.403,42.716,202.403,95.22z"/>
  </svg>
</button>

</div>`
  let container = document.getElementById('timers');
  container.appendChild(newDiv);

}






function resetDisplay () {
  clearInterval(displayID);
  displayID = null;
  playButtonSVG.outerHTML = `<svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7zM9 15.2V8.805L14.113 12z" style="fill:#1c1b1e"/>
        </svg> `

  playButtonSVG = document.getElementById("playButtonSVG");
  let playing = false;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayReference.setAttribute("placeholder", "00:00:00:00") = '00:00:00:00';
}
  


function playdisplay () {
  if (playing == false) {
    displayID = setInterval(incrementDisplay, 10);

  //Setting the correct height for the pause button


    playButtonSVG = document.getElementById("playButtonSVG");
    playButtonSVG.outerHTML = `<svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M11.12 2H7.88A2.88 2.88 0 0 0 5 4.88v22.24A2.88 2.88 0 0 0 7.88 30h3.24A2.88 2.88 0 0 0 14 27.12V4.88A2.88 2.88 0 0 0 11.12 2zM12 27.12a.89.89 0 0 1-.88.88H7.88a.89.89 0 0 1-.88-.88V4.88A.89.89 0 0 1 7.88 4h3.24a.89.89 0 0 1 .88.88zM24.12 2h-3.24A2.88 2.88 0 0 0 18 4.88v22.24A2.88 2.88 0 0 0 20.88 30h3.24A2.88 2.88 0 0 0 27 27.12V4.88A2.88 2.88 0 0 0 24.12 2zM25 27.12a.89.89 0 0 1-.88.88h-3.24a.89.89 0 0 1-.88-.88V4.88a.89.89 0 0 1 .88-.88h3.24a.89.89 0 0 1 .88.88z"/></svg>`
    playButtonSVG.style.height = "200px";
    playing = true;

  } else {
    clearInterval(displayID);

    playButtonSVG.outerHTML = `<svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7zM9 15.2V8.805L14.113 12z" style="fill:#1c1b1e"/>
          </svg> `

    playButtonSVG = document.getElementById("playButtonSVG");
    playing = false;

  }
}




document.querySelector('.startButton').addEventListener('click', (event) => playdisplay(event));


document.querySelector('.resetButton').addEventListener('click', resetDisplay)


function increaseDisplay() {
  //milliseconds, seconds, minutes, hours = milliseconds, seconds, minutes, hours;
  milliseconds = milliseconds + 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
        
      }
    }
  }
}


function decreasedisplay() {
  milliseconds = milliseconds - 1;
  if (milliseconds == 0) {
    milliseconds = 100;
    seconds--;
    if (seconds == 0) {
      seconds = 60;
      minutes--;
      if (minutes == 0) {
        minutes = 60;
        hours--;
        if (hours == 0) {
          console.log('Finished!');
          window.alert("finished");
        }
        
      }
    }
  }
}












//  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><style></style><path d="M13 28H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1zm-5-2h4V6H8v20zM25 28h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1zm-5-2h4V6h-4v20z"/></svg>








//PLACEHOLDER KEYDOWN:



console.log("done")


//so hear we have some declaration of variables (mostly references for elements) which we will probably be using a lot of later on

displayReference = document.getElementById('display');
let displayStringLong = String(displayReference.getAttribute("placeholder"));
let displayStringShort = longToShort(displayStringLong);
let underlineReference = document.querySelector('#displayUnderline');
let wantFocused = false;

function check() {
  wantFocused = (document.activeElement === displayReference);
  console.log("wantFocused ====", wantFocused);
}




function redefine() {
  displayReference = document.getElementById('display');
  displayStringLong = String(displayReference.getAttribute("placeholder"));
  displayStringShort = longToShort(displayStringLong);
  return displayReference, displayStringLong, displayStringShort;
}


//Function for making a number without a bunch of zeros before it

function longToShort(str) {
  //
  let length = str.length;
  let i = 0;


  while (i < 11) {
    firstLetter = str.substring(0, 1);

    if (firstLetter == ":") {
      str = str.substring(1, length);
    }
    else if (firstLetter == "0") {

      str = str.substring(1, length);
    } 
    else if (firstLetter !== "0") {

      break
    }

    i++
  }

  if (str == "") {
    str = "0";
  }
  return str;
}




function shortToLong (str) {
  str = str;
  let pureStr = str.replaceAll(":", "");
  let length = pureStr.length;
  
  let missingZeros = 8 - length;
  let i = 0;

  while (i < missingZeros) {
    pureStr = "0" + pureStr;

    i++
  }
  
  let listValues = [];
  i = 0;
  let newStr = ""

  while (i < 4) {
    newVal = pureStr.substring(0, 2);
    newStr = newVal + ":" + newStr
    newVal = null;

    i++
  }

  str = newStr;

  return str

}


//[hours, minutes, seconds, milliseconds] = displayStringLong.split(':');



//Checking if they've entered a value and changing the placeholder to that

displayReference.addEventListener('keydown', keydownFunc);
  




  
function keydownFunc(event) {
  // Check if the Enter key is pressed
  event.preventDefault();
  if (event.key === 'Enter') {
      // Get the value of the input field
      let inputValue = this.placeholder;

      // Do something with the input value (e.g., display an alert)
      console.log("you entered", inputValue);
      displayReference.setAttribute("placeholder", inputValue);
      
      
      //Make it so that the text is align is center again
      displayReference.style.textAlign = "center";
      displayReference.style.cursor = "auto";

      // Clear the input field
      //this.value = '';
  }
}
































//Changing the value to the placeholder if they've clicked on it

let displayClicked = false;


displayReference.addEventListener("click", onDisplayClick);


function onDisplayClick(event) {
  
  //console.log("worked");
  displayClicked = true;
  //console.log("Clicked the display");
  placeholder = displayReference.getAttribute("placeholder");

  //Setting the text align right for aesthetics purposes.
  displayReference.style.textAlign = "center";

  this.placeholder = displayReference.getAttribute("placeholder");
  console.log("CLICKED: the current placeholder is ", this.placeholder);

  //displayReference.setAttribute("value", this.value);

/*
  width: 100%;
  height: 10px;
  background-color: rgba(0, 8, 255, 0.631);
  margin: 10px;

  animation-name: expandShrink;
  animation-timing-function: ease-in-out;
  animation-duration: 0.75s; 
  animation-iteration-count: infinite;

*/
  underlineReference.style.width = "100%";
  underlineReference.style.height = "10px";

  wantFocused = true;

}

document.addEventListener('click', onDocumentClick);
document.addEventListener('keydown', onDocumentKeydown);


function onDocumentClick(event) {
  if (displayClicked) {

    displayClicked = false;

    return;
  }

  if (!displayReference.contains(event.target)) {

    //This means they clicked outside of the 'display' box

    console.log("clicked outside of the box");
    document.getElementById('display').style.textAlign = 'center';
    underlineReference.style.height = "0%";
    underlineReference.style.overflow = "hidden";
    check();

    wantFocused = false;


  }


}



function onDocumentKeydown(event) {

  if (event.key == "Enter") {

    //This should also mean the 'display' input element no longer has focus (in our eyes, because it actually does)
    console.log("Clicked Enter");

    document.getElementById('display').style.textAlign = 'center';
    underlineReference.style.height = "0%";
    underlineReference.style.overflow = "hidden";

    wantFocused = false;

  }
}








displayReference.addEventListener("keydown", backspace);

function backspace(event) {
  let newStr = "";

  if (event.key === 'Backspace') {
    console.log("Key: Backspace");

    redefine();

    let TSLPure = displayStringLong.replaceAll(":", "");

    newInputValue = TSLPure.substring(0, (TSLPure.length - 1));
    newInputValue = "0" + newInputValue;

    console.log("newVal: ", newInputValue);
    i = 0;
    pureStr = newInputValue;
    newStr = "";
  
    while (i < 4) { 

      //Make new values and new strings
      newVal = pureStr.substring(0, 2);
      newStr = newStr + ":" + newVal;
      
      //Delete from pureStr to make it work
      pureStr = pureStr.substring(2, pureStr.length)

      console.log("backspace step ", i, newVal, newStr);
      newVal = null;
  
      i++
    }

    //This is to remove the innevitable extra colon at the beginning
    newStr = newStr.substring(1, (newStr.length));

    console.log("newStr: ", newStr);
    redefine()
    //displayReference.setAttribute("value", newStr);
    displayReference.setAttribute("placeholder", newStr);
    redefine()
    //console.log("BOOOOM:", displayReference.getAttribute("value"));

  
  //if (event.key === 'Enter') {
  //  console.log("Key: Enter");
  //}

  // Set the new value to the input field
  //displayReference.value = newStr;
  displayReference.setAttribute("placeholder", newStr);

  // Prevent the default backspace action
  event.preventDefault();
  }

}

//redefine()


//displayReference.addEventListener("keydown", enteredInput);
milliseconds, seconds, minutes, hours = strToVars(String(document.getElementById('display').placeholder));
timeValues = [milliseconds, seconds, minutes, hours];
displayReference.addEventListener("keydown", (event) => enteredInput(event));

let timeValsPerm = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0

}


function enteredInput(event) {
  
  event.preventDefault();
  let key = event.key;
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
  console.log("-----------------------------------------");
  console.log("baa: ", document.getElementById('display').placeholder,   typeof("baa: ", document.getElementById('display').placeholder));
  
  let timeValues = strToVars(document.getElementById('display').placeholder);
  let [milliseconds, seconds, minutes, hours] = timeValues;
  
  console.log(milliseconds, seconds, minutes, hours);
  
  //timeValues = [milliseconds, seconds, minutes, hours]; 
  
  let displayReference, TSL, TSS = redefine(); 
  //TSL = varsToStr([milliseconds, seconds, minutes, hours]);
  TSL = varsToStr([hours, minutes, seconds, milliseconds]);
  
  console.log("this is timeValues: ", timeValues);
  
  TSL = expandSections_str(TSL);
  console.log("TSL      :", TSL);
  console.log("pull up");
  let newInputPlaceholder;
    


  if (nums.includes(key) && wantFocused) {
    if (TSL == undefined) TSL = "00:00:00:00";
    let TSLPure = TSL.replaceAll(":", "");
    let TSLPureLength = TSLPure.length;
    
    //milliseconds, seconds, minutes, hours = strToVars(TSL);


  
    console.log("num: ", key);
    console.log();
    console.log("Before   ", hours, minutes, seconds, milliseconds);
    console.log();

    TSLPure = TSLPure.substring(1, TSLPureLength);
    TSLPure = TSLPure + String(event.key);
    TSL = String(String(TSLPure.slice(0, 2)) + ":" +
     String(TSLPure.slice(2, 4)) + ":" +
     String(TSLPure.slice(4, 6)) + ":" +
     String(TSLPure.slice(6, 8)));


/* String(TSLPure.slice(6, 8)) + ":" +
     String(TSLPure.slice(4, 6)) + ":" 
     String(TSLPure.slice(2, 4)) + ":"
     String(TSLPure.slice(0, 2));


     */




    console.log("TSLPure: ", TSLPure);
    console.log("TSL: ", TSL);

    //[milliseconds, seconds, minutes, hours] = [TSLPure.slice(6, 8), TSLPure.slice(4, 6), TSLPure.slice(2, 4), TSLPure.slice(0, 2)];
    
    console.log("Begin");
    console.log("After ", hours, minutes, seconds, milliseconds);
    [hours, minutes, seconds, milliseconds] = strToVars(TSL);
    console.log("After ", hours, minutes, seconds, milliseconds);
    console.log("End");
    
    
    console.log();
    console.log("After ", hours, minutes, seconds, milliseconds);
    console.log("AFter :", hours, milliseconds);
    console.log();
    newInputPlaceholder = varsToStr([milliseconds, seconds, minutes, hours]);
    //document.getElementById('display').value = newInputValue;
    //updateInputsValuePlaceholder_2FalseOrStr(newInputValue, false)
  }
  newInputPlaceholder = expandSections_str(newInputPlaceholder);

  console.log("new input placeholder: ", newInputPlaceholder);
  console.log(" (Mil -> Hour) Time values:", milliseconds, seconds, minutes, hours);
  timeValsPerm.milliseconds = milliseconds;
  timeValsPerm.seconds = seconds;
  timeValsPerm.minutes = minutes;
  timeValsPerm.hours = hours;
  document.getElementById('display').placeholder = newInputPlaceholder;

}








function strToVars(str) {
  str = str;
  let pureStr = str.replaceAll(":", "");
  let newStr = "";
  let i = 0;

  console.log("STR TO VARS");
  console.log("passed str: ", str)

  let values = [];
  
    while (i < 4) { 

      //Make new values and new strings
      newVal = pureStr.substring(0, 2);
      values.unshift(Number(newVal));
      
      //Delete from pureStr to make it work
      pureStr = pureStr.substring(2, pureStr.length)

      console.log("strToVars step ", i, newVal, values);
      newVal = null;
  
      i++
    }

    console.log(values);

    hours = Number(values[3]);
    //console.log(values[3]);
    minutes = Number(values[2]);
    seconds = Number(values[1]);
    milliseconds = Number(values[0]);

    return [hours, minutes, seconds, milliseconds];
}


function varsToStr(arrayWithVariables) {
  let vars = arrayWithVariables;
  let i = 0;
  let varsLength = vars.length;
  let newStr = "";

  while (i < varsLength) {
    newStr = vars[i] + ":" + newStr;
    //console.log("varsToStr step ", i, vars[i], "  ", newStr); 
    

    i++
  }

  newStr = newStr.substring(0, (newStr.length - 1));

  return newStr;

}



function expandSections_str(string) {
  string = string;
  let i = 0;
  sectionsList = string.split(":");


  while (i < 4) {
    if (sectionsList[i].length < 2) {
      sectionsList[i] = "0" + sectionsList[i];
    }

    i++
  }
  
  newStr = sectionsList.join(":");


  return newStr;

}



function expandSections_arr(arr) {
  let i = 0;
  arr = arr;
  let lengthArr = arr.length;

  while (i < lengthArr) {
    arr[i] = String(arr[i]);

    if (arr[i].length < 2) {
      arr[i] = "0" + arr[i];
      arr[i] = Number(arr[i]);
    }

    i++
  }

  return arr;
}


function updateInputsValuePlaceholder_2FalseOrStr(updateValue, updatePlaceholder) {
  let displayReference, TSL, TSS = redefine()
  displayReference = document.getElementById('display');
  if (updateValue !== false) {
    displayReference.value = updateValue;
  }
  if (updatePlaceholder !== false) {
    displayReference.placeholder = updatePlaceholder
  }
}

























/*

displayReference.addEventListener("keydown", backspace);

function backspace(event) {
    if (event.key === 'Backspace') {
        console.log("Key: Backspace");

        // Get the current value and remove colons
        let TSLPure = displayReference.value.replaceAll(":", "");

        // Remove the last digit, prepend a '0'
        let newInputValue = "0" + TSLPure.slice(0, -1);

        // Reinsert colons every 2 digits
        let newStr = `${newInputValue.slice(0, 2)}:${newInputValue.slice(2, 4)}:${newInputValue.slice(4)}`;

        console.log("newStr: ", newStr);

        // Set the new value to the input field
        displayReference.value = newStr;
        displayReference.setAttribute("placeholder", newStr);

        // Prevent the default backspace action
        event.preventDefault();
    }
  }

*/






//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//CHANGE OPACITY:


function dispCliHeight_ID_(Id) {
  let reference = document.getElementById(Id);
  return reference.clientHeight;
}

function getStopwatchesHeight() {
  let stopwatchMaxHeight = dispCliHeight_ID_('stopwatches');
  return stopwatchMaxHeight;
}





function checkScroll() {

  torsHeadingReference = document.getElementsByClassName('torsHeading');
  console.log(torsHeadingReference);


  for (let i = 0; i < torsHeadingReference.length; i++) {
    console.log(i);
    console.log(getComputedStyle(torsHeadingReference[i]).position);
    if (getComputedStyle(torsHeadingReference[i]).position == 'sticky') {
      console.log('yooo');
      torsHeadingReference[i].style.color = 'rgba(255, 255, 255, 1)';
    } else {
      console.log('hell na');
      torsHeadingReference[i].style.color = 'rgba(0, 0, 0, 0)';
    }
  }

}

const torsHeadingReference2 = document.querySelector(".torsHeading");
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(torsHeadingReference2);



window.onscroll = checkScroll();






































































//That was the code

//Supabase connection:
document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADDDDDDDDDDDDDDED')
  // Step 1: Define your Supabase project details
  const SUPABASE_URL = 'https://my-url-that-i-have-in-my-actual-code.supabase.co';
  const SUPABASE_ANON_KEY = 'my-key-that-i-wont-tell-you-but-still-have';

  // Step 2: Create a Supabase client instance
  const mySupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Step 3: Define the function to get scores
  async function getScore() {
    // Attempt to fetch data from the 'scores' table
    const { data, error } = await mySupabase.from('scores').select('*').limit(1);

    // Return the fetched data and error
    return { data, error };
  }

  // Optional: Call the getScore function to test it
  getScore()
    .then(result => {
      if (result.error) {
        console.error('Error fetching score:', result.error);
      } else {
        console.log('Fetched score data:', result.data);
      }
    })
    .catch(err => {
      console.error('Unexpected error:', err);
    });
});
