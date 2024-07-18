const clipboardContainer = document.getElementById("clipboard-container");
const toggleBtn = document.getElementById("toggle-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");

let mostRecentClipboard = "";
let toggle = false;

const getClipboardContents = async () => {
//   If toggle is false, do not log clipboard content
  if(!toggle) return;
	console.log("hi")
  const clipboardContents = await navigator.clipboard.readText();
  if(mostRecentClipboard !== clipboardContents){
    createClipboardDiv(clipboardContents);
    mostRecentClipboard = clipboardContents;
  }
}

const createClipboardDiv = (text) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `${text}`
  clipboardContainer.appendChild(newDiv);
}

const onToggleBtnClick = () => {
  toggle = !toggle;
  status.textContent = toggle ? "Active" : "Inactive";
}

const onClearBtnClick = () => {
  const clearConfirm = window.confirm("Do you want to clear all clipboard history?");
  if(clearConfirm) {
    clipboardContainer.innerHTML = "";
  }
}

toggleBtn.addEventListener("click", onToggleBtnClick);
clearBtn.addEventListener("click", onClearBtnClick);

setInterval(getClipboardContents, 1000);