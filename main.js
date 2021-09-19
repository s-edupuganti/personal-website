function openNavBar() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}

function closeNavBar() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}



function change() {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains('dark-mode')){ //when the body has the class 'dark' currently
       localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
   }else{
       localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
   }

};

if(localStorage.getItem('darkMode') == 'enabled'){
   document.body.classList.toggle('dark-mode');
};



