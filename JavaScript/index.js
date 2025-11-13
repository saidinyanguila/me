const optionBtns = document.querySelectorAll(".link-action");
const closeShareLink = document.getElementById("close-section");

const shareLink = document.getElementById("share-link");
const body = document.getElementById("bdy");

for (let i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener('click', function(event) {
        event.preventDefault();
        shareLink.classList.add("active");
        body.style.overflow = "hidden";
    });
}

closeShareLink.addEventListener('click', function() {
    shareLink.classList.remove("active");
    body.style.overflow = "auto";
});

// Copy link
const copyBtn = document.getElementById('share_copy');
const copyData = {
    title: document.title,
    text: 'Check out Saidi\s website',
    url: window.location.href
};

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    } 
    catch (err) {
        alert('Could not copy link.');
    }
});

// Share
const shareData = {
    title: 'Saidi',
    text: 'Check out Saidi\'s website',
    url: window.location.href
};

document.getElementById('share-more').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
        console.log('Shared successfully');
    } 
    catch (err) {
        console.error('Error sharing:', err);
    }

});
