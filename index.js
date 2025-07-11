// Text Counter
const texts = document.querySelectorAll(".usr_info");

texts.forEach(text => {
    const target = +text.getAttribute("data-target");
    const title = text.getAttribute("title");
    let current = 0;
        
    function updateCounter() {
        text.innerHTML = `${current} ${title}`;
            
        if (current < target) {
            current += 1;
            setTimeout(updateCounter, 5);
        }
        else if (current > target) {
            text.innerHTML = `${target} ${title}`;
        }
    }

    updateCounter();
});

//Help
document.getElementById("lnk_query").addEventListener('click', showHelp);
document.getElementById("pop-up-close").addEventListener('click', hideHelp);

function showHelp() {
    document.getElementById("pop-up").classList.add("show");
    document.getElementById("bdy").style.overflowY = "hidden";
}

function hideHelp() {
    document.getElementById("pop-up").classList.remove("show");
    document.getElementById("bdy").style.overflowY = "scroll";
}

// Toggle Background
document.getElementById("btn_pfp").addEventListener('click', toggleBg);
let container = document.getElementById("container");
let currentBg = 0;

function toggleBg() {
    document.getElementById("btn_pfp").classList.remove("flash");

    if (currentBg == 0) { container.style.backgroundImage = " url('Images/IMG_3844.jpg')"; currentBg = 1; }
    else if (currentBg == 1) { container.style.backgroundImage = " url('Images/IMG_3839.jpg')"; currentBg = 0; }
}
