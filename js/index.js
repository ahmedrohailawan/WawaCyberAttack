// you have to change (a) values in (both) files to test this funtionality
// this function linked with index.js and will check battery continously and change html files if battery will be less than 15%

function battery() {
    return navigator.getBattery().then(function(battery) {
      // Get the battery level
      let a = battery.level*100;
      return a;
    });
  }
  let lowbattery = false; 
  function updateBatteryLevel() {
    battery().then(function(a) {
      console.log(a);
      if (a <= 15) {
        if(lowbattery == false){
          lowbattery = true
          window.location.href = "batterysaver.html"; 
        }else{
          console.log("battery low status")
        }
      }else{
        if(lowbattery == true){
          lowbattery = false
          window.location.href = "index.html"; 
        }else{
          console.log("battery high status")
        }
  
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
    updateBatteryLevel();
    setInterval(updateBatteryLevel, 1000);
  });