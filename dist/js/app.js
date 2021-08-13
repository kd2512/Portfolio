//selecting DOM items
var menuBtn = document.querySelector(".menu-btn");
var btnLine = document.querySelector(".btn-line");
var menu = document.querySelector(".menu");
var menuBranding = document.querySelector(".menu-branding");
var menuNav = document.querySelector(".menu-nav");
var navItem = document.querySelectorAll(".nav-item");
var nav = document.querySelector("nav");
var scrollBtn = document.querySelector(".scroll-button a");

if (scrollBtn) {
  scrollBtn.style.display = "none";
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

if (
  document.getElementById("education-desc") &&
  document.getElementById("work-desc")
) {
  document.getElementById("education-desc").style.display = "block";
  document.getElementById("work-desc").style.display = "none";
  document.getElementById("education").classList.add("currentMenu");
  document.getElementById("work").classList.remove("currentMenu");
}

if (
  document.getElementById("toDoApp") ||
  document.getElementById("kharchaBook") ||
  document.getElementById("squadManagement")
) {
  document.getElementById("toDoApp").style.display = "none";
  document.getElementById("kharchaBook").style.display = "none";
  document.getElementById("squadManagement").style.display = "none";
}

var showMenu = false;

//menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}

function switchVisible(id) {
  if (id == "education") {
    if (document.getElementById("education-desc").style.display == "none") {
      document.getElementById("education-desc").style.display = "block";
      document.getElementById("work-desc").style.display = "none";
      document.getElementById("education").classList.add("currentMenu");
      document.getElementById("work").classList.remove("currentMenu");
    }
  } else if (id == "work") {
    if (document.getElementById("work-desc").style.display == "none") {
      document.getElementById("education-desc").style.display = "none";
      document.getElementById("work-desc").style.display = "block";
      document.getElementById("education").classList.remove("currentMenu");
      document.getElementById("work").classList.add("currentMenu");
    }
  }
}

function showDesc(id) {
  if (id == "todoApp-menu") {
    document.getElementById("toDoApp").style.display = "block";
    document.getElementById("kharchaBook").style.display = "none";
    document.getElementById("squadManagement").style.display = "none";
  } else if (id == "kharchaBook-menu") {
    document.getElementById("kharchaBook").style.display = "block";
    document.getElementById("toDoApp").style.display = "none";
    document.getElementById("squadManagement").style.display = "none";
  } else if (id == "squadManage-menu") {
    document.getElementById("squadManagement").style.display = "block";
    document.getElementById("toDoApp").style.display = "none";
    document.getElementById("kharchaBook").style.display = "none";
  }
}

function closeDesc() {
  console.log("Inside closeDesc function");
  document.getElementById("toDoApp").style.display = "none";
  document.getElementById("kharchaBook").style.display = "none";
  document.getElementById("squadManagement").style.display = "none";
}
