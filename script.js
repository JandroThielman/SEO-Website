function openPannel() {

    const burger = document.getElementById("burger");
    const pannel = document.getElementById("pannel");

    burger.style.visibility = "hidden";
    pannel.style.visibility = "visible";

    const keyframes = `
        @keyframes open {
            0%   {right: -400px;}
            100% {right: 0px;}
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.body.appendChild(styleSheet);
    pannel.style.animation = "open .5s 1";
    
}

function closePannel() {

    const burger = document.getElementById("burger");
    const pannel = document.getElementById("pannel");

    const keyframes = `
        @keyframes close {
            0%   {right: 0px;}
            100% {right: -400px;}
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.body.appendChild(styleSheet);
    pannel.style.animation = "close .5s 1";
    setTimeout(() => {
        pannel.style.visibility = "hidden";
        burger.style.visibility = "visible";
    }, 500);
}