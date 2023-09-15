const images = ["4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];
const pics = document.createElement("img");
pics.src = `imgs/${chosenImages}`;

document.body.appendChild(pics);
