function showScolaire() {
  var x = document.getElementById("study");
  if (x.style.display === "none") {
    document.getElementById("scoBtn").style.borderBottom = "solid #070b11";
    x.style.display = "grid";
  }
}

function showPro() {
  var x = document.getElementById("pro");
  if (x.style.display === "none") {
    document.getElementById("proBtn").style.borderBottom = "solid #070b11";
    x.style.display = "grid";
  }
}

function hidePro() {
  var x = document.getElementById("pro");
  if (x.style.display === "grid") {
    document.getElementById("proBtn").style.borderBottom = "none";
    x.style.display = "none";
  }
}

function hideStudy() {
  var x = document.getElementById("study");
  if (x.style.display === "grid") {
    document.getElementById("scoBtn").style.borderBottom = "none";
    x.style.display = "none";
  }
}
