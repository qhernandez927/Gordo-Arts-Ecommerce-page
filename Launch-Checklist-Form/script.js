// Write your JavaScript code here!

let isEmptyError = false
let isFaulty = false 
let isCoPilotError = false
let isCargoError = false
let isPilotError = false
let isFuelError = false



window.addEventListener('load',function(){


   let form = document.querySelector("form");

   form.addEventListener("submit", function (event) {
      isEmptyError = false
      isFaulty = false 
      isCoPilotError = false
      isCargoError = false
      isPilotError = false
      isFuelError = false

      let pilotNameInput = document.querySelector("input[name = pilotName]")
      let coPilotNameInput = document.querySelector("input[name = copilotName]")
      let fuelLevelInput = document.querySelector("input[name = fuelLevel]")
      let cargoMassInput = document.querySelector("input[name = cargoMass]")
      
      

      processPilot (pilotNameInput.value);
      processCoPilot (coPilotNameInput.value);
      checkFuelLevel (fuelLevelInput.value);
      checkCargoMass (cargoMassInput.value);
      flagCheck ();
      setLaunchStatusElement ();
      event.preventDefault();
      
   })
})

function checkIfEmptyInput (input){
   if(input == null || input == ''){
      isEmptyError = true
      event.preventDefault()
   }
};

function checkStringInput (input){
   checkIfEmptyInput (input)
   if(!isNaN(input) && !isEmptyError){
      
      event.preventDefault()
      return true;
   }
   return false;
}

function checkNumberInput (input){
   checkIfEmptyInput (input)
   if(isNaN(input) && !isEmptyError){
      
      event.preventDefault()
      return true;
   }
   return false;
}

function flagCheck (){
   if(isEmptyError){
      alert("All fields must have input")
   }
   else if(isInvalidInputs()){
      alert("All fields must have valid input")
   }
}

function isInvalidInputs(){
   if(isPilotError || isCoPilotError || isFuelError || isCargoError){
      //alert("hi againg!!")
      return true;
      
   }


   return false
}

function setLaunchStatusElement (){
   let launchStatus = document.getElementById("launchStatus")
  
   if(isFaulty) {
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = 'red' 
      //alert("hi!!!!") 
   } else if (!isInvalidInputs() && !isEmptyError){
      launchStatus.innerHTML = "Shuttle ready for launch"
      launchStatus.style.color = 'green'
      document.getElementById("faultyItems").style.visibility = "visible";
      event.preventDefault()
   }
   //alert("hi againg!!")
}

function checkCargoMass (input){
   isCargoError = checkNumberInput (input)
   if(input > 10000  && !isCargoError && !isEmptyError  ){
      isFaulty = true
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
      event.preventDefault()
   }else{
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
      isFaulty = false
   }
}

function checkFuelLevel (input){
   isFuelError = checkNumberInput (input)
   if(input < 10000 && !isFuelError && !isEmptyError ){
      isFaulty = true
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey."
      event.preventDefault()
   }else{
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
      isFaulty = false
   }
}

function setPilotNameElement (input){
   document.getElementById('pilotStatus').innerHTML = `Pilot ${input} ready `
   
}

function setCoPilotNameElement (input){
   document.getElementById('copilotStatus').innerHTML = `Co-pilot ${input} ready `
   
}

function processPilot (input){
   isPilotError = checkStringInput (input)
   if(!isPilotError && !isEmptyError){
      setPilotNameElement (input)
   }
}

function processCoPilot (input){
   isCoPilotError = checkStringInput (input)
   if(!isCoPilotError && !isEmptyError){
      setCoPilotNameElement (input)
   }
}

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
