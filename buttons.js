let GoToYoutube = () => {

    window.location.href = "https://www.youtube.com";

  }
document.getElementById("youtube").addEventListener("click", GoToYoutube );

function ShowPicture() {
  var pic = document.getElementById("myDIV");
  if (pic.style.display === "none") {
    pic.style.display = "block";
  } else {
    pic.style.display = "none";
  }
}
function ShowAnimation() {
  var x = document.getElementById("animation-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}