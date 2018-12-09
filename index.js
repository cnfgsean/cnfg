var navbar = document.getElementById("navbar");
var navbar_topics = document.getElementById("navbar-topics");
var navbar_topics_links = navbar_topics.getElementsByTagName("A");
var sticky = navbar.offsetTop;

window.onscroll = function() {
  // console.log(window.pageYOffset);
  // console.log(sticky);
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (navbar.classList.contains("sticky")) {
    navbar.style.backgroundColor = "#555";
    for (var i = 0; i < navbar_topics_links.length; i++){
      navbar_topics_links[i].style.color = "#fff";
    }
  } else {
    navbar.style.backgroundColor = "#ddd";
    for (var i = 0; i < navbar_topics_links.length; i++){
      navbar_topics_links[i].style.color = "#000";
    }
  }
};
