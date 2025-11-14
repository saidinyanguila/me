const links = [
    {
        platform: "Instagram",
        name: "saidi.wav",
        img: "img/IMG_3844.jpg",
        url: "https://www.instagram.com/saidi.wav"
    },
    {
        platform: "Youtube",
        name: "Saidi",
        img: "img/IMG_3844.jpg",
        url: "https://www.youtube.com/channel/UCFbbdrpNYuxL40asEkhGblQ"
    },
    {
        platform: "TikTok",
        name: "𝙎♤𝙄𝘿𝙄",
        img: "img/IMG_3844.jpg",
        url: "https://www.tiktok.com/@24llammas"
    },
    {
        platform: "PlayStation",
        name: "jxst_stxtic",
        img: "img/IMG_3844.jpg",
        url: "https://profile.playstation.com/jxst_stxtic"
    }
]

const linksParent = document.getElementById("links-container");
let index = 0;
links.forEach(link => {
    let a = document.createElement("a");
    a.setAttribute("href", link.url)
    
    if (index == 0) {
        a.innerHTML = `
            <div class="link-item-large">
                <div class="link-bg img-box"><img src="${link.img}" alt="${link.name} Image"></div>
                <div class="link-header">
                    <a href="${link.url}">${link.platform}</a>
                </div>

                <div class="link-info">
                    <h3>${link.name}</h3>
                    <div class="link-action"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
            </div>
        `;
    } 
    else {
        a.innerHTML = `
            <div class="link-item">
                <div class="link-pfp img-box"><img src="${link.img}" alt="${link.name} ${link.platform} img"></div>
                <div class="link-name"><span>${link.platform}</span></div>
                <div class="link-action"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
        `;
    }

    a.querySelector(".link-action").addEventListener('click', function(event) {
        shareItem(event, link);
    });

    linksParent.appendChild(a);
    index++;
});

const closeShareLink = document.getElementById("close-section");
const shareLinkPage = document.getElementById("share-link");
const body = document.getElementById("bdy")

closeShareLink.addEventListener('click', function() {
    shareLinkPage.classList.remove("active");
    body.style.overflow = "auto";
});

function shareItem(event, itemObj) {
    event.preventDefault();
    
    const name = document.getElementById("share-preview-name");
    const img = document.getElementById("share-preview-image");
    const link = document.getElementById("share-preview-link");

    name.innerHTML = itemObj.name + " - " + itemObj.platform;
    img.setAttribute("src", itemObj.img);
    link.innerHTML = itemObj.url;
    
    shareLinkPage.classList.add("active");
    body.style.overflow = "hidden";
}

// Share Page 
const sharePageData = {
    title: 'Check this out!',
    text: 'Saidi\'s Website',
    url: window.location.href
};
document.getElementById('shareBtn').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } 
    catch (err) {
        console.error('Error sharing:', err);
    }
});

// Share Link
const shareData = {
    title: 'Check this out!',
    text: 'Found something cool on this website 👇',
    url: window.location.href
};
document.getElementById('share-more').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } 
    catch (err) {
        console.error('Error sharing:', err);
    }
});

// Copy link
const copyData = {
    title: document.title,
    text: 'Check this out 👇',
    url: window.location.href
};
document.getElementById('share_copy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    } 
    catch (err) {
        alert('Could not copy link.');
    }
});