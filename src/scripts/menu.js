window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "8px";
    document.getElementById("navbar").style.boxShadow = "0 1px 6px 0 rgb(0 0 0 / 15%)"
    document.getElementById("perfil").style.width = "0";
    document.getElementById("menu-text").style.fontSize = "small";
  }
  else {
    document.getElementById("navbar").style.padding = "24px";
    document.getElementById("navbar").style.boxShadow = "none"
    document.getElementById("perfil").style.width = "3rem";
    document.getElementById("menu-text").style.fontSize = "medium";
  }
}
