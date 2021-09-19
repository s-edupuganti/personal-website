function openNavBar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
};

function closeNavBar() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
};

// function change() {
//   document.body.classList.toggle("light-mode");

//   if(document.body.classList.contains("light-mode")){ //when the body has the class 'dark' currently
//        localStorage.setItem("lightMode", "enabled"); //store this data if dark mode is on
//    }else{
//        localStorage.setItem("lightMode", "disabled"); //store this data if dark mode is off
//    }

// };

// if(localStorage.getItem('lightMode') == "enabled"){
//    document.body.classList.toggle("light-mode");
// };








