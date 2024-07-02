// Get references to HTML elements
const colorPicker = document.getElementById("color-picker");
const canvasColor = document.getElementById("canvas-color");
const canvas = document.getElementById("my-canvas");
const clearBtn = document.getElementById("clear-button");
const saveBtn = document.getElementById("save-button");
const fontPicker = document.getElementById("font-picker");
const retrieveBtn = document.getElementById("retrieve-button");

// Get the 2D drawing context of the canvas
const ctx = canvas.getContext("2d");

// Event listener for color picker change
colorPicker.addEventListener("change", (e) => {
	ctx.strokeStyle = e.target.value;
	ctx.fillStyle = e.target.value;
});

// Event listeners for drawing on the canvas
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	lastX = event.offsetX;
	lastY = event.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
	if (isDrawing) {
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();

		lastX = event.offsetX;
		lastY = event.offsetY;
	}
});

canvas.addEventListener("mouseup", () => {
	isDrawing = false;
});

// Event listener for canvas color change
canvasColor.addEventListener("change", (e) => {
	ctx.fillStyle = e.target.value;
	ctx.fillRect(0, 0, 800, 500);
});

// Event listener for font size change
fontPicker.addEventListener("change", (e) => {
	ctx.lineWidth = e.target.value;
});

// Event listener for clear button click
clearBtn.addEventListener("click", (e) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Event listener for save button click
saveBtn.addEventListener("click", (e) => {
	// Save the canvas content to local storage
	localStorage.setItem("canvasContent", canvas.toDataURL());

	// Create a link to download the canvas as an image
	let link = document.createElement("a");
	link.download = "my-canvas.png";
	link.href = canvas.toDataURL("image/png");

	link.click();
});

// Event listener for retrieve button click
retrieveBtn.addEventListener("click", () => {
	// Retrieve the saved canvas content from local storage
	let saveCanvas = localStorage.getItem("canvasContent");
	if (saveCanvas) {
		let img = new Image();
		img.src = saveCanvas;
		ctx.drawImage(img, 0, 0);
	}
});
