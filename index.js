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
    document.getElementById("container").style.overflowY = "hidden";
}

function hideHelp() {
    document.getElementById("pop-up").classList.remove("show");
    document.getElementById("container").style.overflowY = "scroll";
}

