// PIXELS

const container = document.querySelector(".pixels-container");

if(container){
    const totalPixels = 10000;

    for(let i = 0; i < totalPixels; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}

