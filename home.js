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
    document.getElementById("proBtn").style.borderBottom = "solid #f1f1ef";
    x.style.display = "none";
  }
}

function hideStudy() {
  var x = document.getElementById("study");
  if (x.style.display === "grid") {
    document.getElementById("scoBtn").style.borderBottom = "solid #f1f1ef";
    x.style.display = "none";
  }
}

function findId(key) {
  return document.getElementById(key);
}

let _modalData = [
  ["modalContact", "id01"],
  ["modalStarship", "id02"],
  ["modalBsi", "id03"],
  ["modalCasino", "id04"],
  ["modalMcdo", "id05"],
  ["modalAh", "id06"],
  ["modalRobot", "id07"],
  ["modalGroupie", "id08"],
  ["modalAscii", "id09"]
]

window.onclick = function(event) {
  _modalData.forEach((_data) => {
      _data[0] = findId(_data[1]);
      if (event.target == _data[0]) {
          _data[0].style.display = "none";
      };
  });
};

