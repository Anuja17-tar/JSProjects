console.log("hi");
const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.querySelectorAll(".whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("dragstart");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "drop";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("dragend");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover");
  });
  whiteBox.addEventListener("dragenter", (e) => {
    e.target.className += " dashed";
    console.log("dragenter");
  });
  whiteBox.addEventListener("dragleave", (e) => {
    e.target.className = "whiteBox";
    console.log("dragleave");
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("drop");
    e.target.append(imgBox);
  });
}
