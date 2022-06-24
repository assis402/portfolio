window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("perfil").style.width = "0";
    // document.getElementById("logo").style.fontSize = "25px";
  }
  else {
    //document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("perfil").style.width = "3rem";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}
