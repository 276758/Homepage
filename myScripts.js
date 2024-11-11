 
  //POST-IT NOTE SHOW AND HIDE
  var show = false;
  function showNote(){
     if (show == false){
         document.getElementById("note").style.opacity = 1;
         show = true;
     }
     else if (show == true){
         document.getElementById("note").style.opacity = 0;
         show = false;
     }
  }
  
  function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
 }
 

 
   
 //CALCULATOR (JAVASCRIPT)
 var showCalc = false;
 function showCalculator(){
    if (showCalc == false){
        document.getElementById("calc").style.opacity = 1;
        showCalc = true;
    }
    else if (showCalc == true){
        document.getElementById("calc").style.opacity = 0;
        showCalc = false;
    }
 }
 

 
 