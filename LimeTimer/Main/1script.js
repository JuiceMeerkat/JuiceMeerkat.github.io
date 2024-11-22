//VARIABLES:

let stopwatchInnerHtml = `<div class="displayDiv" >
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


let playing = false;
let stopwatchesList = []

let newStopwatchNUMBER;
let firstStopwatch;

let stopwatchesContainer = document.getElementById('stopwatches');


console.log('yoo')


class stopwatch {

    constructor(index) {
      this.millis = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.indexNum = index;
    }
  
  
    
      
    incrementDisplay() {
  
      increaseDisplay();
      
  
      let msLength = this.milliseconds.toString().length;
  
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      //let twoLongMS = Number(String(milliseconds).substring(0, (msLength - 1)));
      //let ms = twoLongMS < 10 ? "0" + twoLongMS : twoLongMS;
      let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
      //let ms = milliseconds;
  
  
  
  
      displayReference.setAttribute("placeholder", ` ${h}:${m}:${s}:${ms}`)
  
    }

    increaseDisplay() {
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



    playdisplay () {
        if (playing == false) {
          displayID = setInterval(incrementDisplay, 10);
      
        //Setting the correct height for the pause button
      
      
          //playButtonSVG = document.getElementById("playButtonSVG");
          //playButtonSVG.outerHTML = `<svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M11.12 2H7.88A2.88 2.88 0 0 0 5 4.88v22.24A2.88 2.88 0 0 0 7.88 30h3.24A2.88 2.88 0 0 0 14 27.12V4.88A2.88 2.88 0 0 0 11.12 2zM12 27.12a.89.89 0 0 1-.88.88H7.88a.89.89 0 0 1-.88-.88V4.88A.89.89 0 0 1 7.88 4h3.24a.89.89 0 0 1 .88.88zM24.12 2h-3.24A2.88 2.88 0 0 0 18 4.88v22.24A2.88 2.88 0 0 0 20.88 30h3.24A2.88 2.88 0 0 0 27 27.12V4.88A2.88 2.88 0 0 0 24.12 2zM25 27.12a.89.89 0 0 1-.88.88h-3.24a.89.89 0 0 1-.88-.88V4.88a.89.89 0 0 1 .88-.88h3.24a.89.89 0 0 1 .88.88z"/></svg>`
          //playButtonSVG.style.height = "200px";
          playing = true;
        } else {
          clearInterval(displayID);
      
          playButtonSVG.outerHTML = `<svg id="playButtonSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7zM9 15.2V8.805L14.113 12z" style="fill:#1c1b1e"/>
                </svg> `
      
          playButtonSVG = document.getElementById("playButtonSVG");
          playing = false;
        }
    }



    onClick() {
      console.log('onclick')
      console.log(stopwatchesList.indexOf(this), '    ', this, ' has been touched');
    }

    addEL() {
      console.log('this.indexNum : ', this.indexNum);
      console.log('stopwatchesContainer : ', stopwatchesContainer)
      stopwatchesContainer.children[this.indexNum].addEventListener('click', () => {
        console.log(this.indexNum, '    ', stopwatchesContainer.children[this.indexNum], ' has been clicked');
      })
    }
    
}




console.log('addSSS');
function addStopwatch() {


    
    //let stopwatchesSectionChild = stopwatchesSection.children[0];
  
  
    let newStopwatchHTML = document.createElement('div');
    newStopwatchHTML.className = 'stopwatch';
    newStopwatchHTML.innerHTML = stopwatchInnerHtml;
  
    stopwatchesContainer.appendChild(newStopwatchHTML);
    
    newStopwatchNUMBER = (stopwatchesList.length);
    console.log('newStopwatchNUMBER : ', newStopwatchNUMBER);

    let newStopwatchCLASS = new stopwatch(newStopwatchNUMBER);

    stopwatchesList.push(newStopwatchCLASS);

  
    let newChild = stopwatchesContainer.children[newStopwatchNUMBER];
    console.log('newChild (object): ', newChild);
    console.log('newStopwatchCLASS (class object): ', newStopwatchCLASS)

    // newChild.addEventListener('click', () => {
    //   console.log(stopwatchesList.indexOf(newStopwatchCLASS), '    ', newChild, ' has been touched');
    // })

    newStopwatchCLASS.addEL();
    

    
    return 'worked'
  
}

    

//addStopwatch()

firstStopwatchHTML = document.getElementById('firstStopwatch')
firstStopwatchCLASS = new stopwatch(0)

stopwatchesList.push(firstStopwatchCLASS);

firstStopwatchHTML.addEventListener('click', () => {
  console.log(stopwatchesList.indexOf(firstStopwatchCLASS), '    ', firstStopwatchHTML, ' has been touched');
})

