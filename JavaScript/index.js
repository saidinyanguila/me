const links = [
    {
        platform: "Instagram",
        name: "saidi.wav",
        img: "img/profile_instagram.jpg",
        url: "https://www.instagram.com/saidi.wav"
    },
    {
        platform: "Youtube",
        name: "Saidi",
        img: "img/profile_youtube.jpg",
        url: "https://www.youtube.com/channel/UCFbbdrpNYuxL40asEkhGblQ"
    },
    {
        platform: "TikTok",
        name: "𝙎♤𝙄𝘿𝙄",
        img: "img/profile_tiktok.jpg",
        url: "https://www.tiktok.com/@saidi.wav"
    },
    {
        platform: "PlayStation",
        name: "jxst_stxtic",
        img: "img/profile_psn.png",
        url: "https://profile.playstation.com/jxst_stxtic"
    }
]

const linksParent = document.getElementById("links-container");
const linkIcons = document.getElementById("link-icons");
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

    let li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}"><i class="fa-brands fa-${link.platform.toLowerCase()}"></i></a>`;
    linkIcons.appendChild(li);

    index++;
});

const closeShareLink = document.getElementById("close-section");
const shareLinkPage = document.getElementById("share-link");
const body = document.getElementById("bdy")

closeShareLink.addEventListener('click', function() {
    shareLinkPage.classList.remove("active");
    body.style.overflow = "auto";
});

let copyData;
let shareData;

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
    
    // Copy & Share
    copyData = itemObj.url;
    shareData = {
        title: `${itemObj.name} is on ${itemObj.platform}`,
        text: `Check out ${itemObj.name} on ${itemObj.platform}`,
        url: itemObj.url
    };
}

// #region Copy link
document.getElementById('share_copy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(copyData);
        flash_message('Copied to clipboard');
    } 
    catch (err) {
        flash_message('Could not copy.');
    }
});
// #endregion

// #region Share More
document.getElementById('share-more').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } 
    catch (err) {
        console.error('Error sharing:', err);
    }
});
// #endregion

// Share Page 
document.getElementById('shareBtn').addEventListener('click', async () => {
    try {
        await navigator.share({
            title: 'Check this out!',
            text: 'Saidi\'s Website',
            url: window.location.href
        });
    } 
    catch (err) {
        console.error('Error sharing:', err);
    }
});

// Message 
function flash_message(text) {
    let msg = document.createElement("div");
    msg.innerHTML = `<span>${text}</span>`;
    msg.className = "message-item";
    document.getElementById("bdy").appendChild(msg);

    setTimeout(function() {
        msg.classList.add("show");
    }, 100);

    setTimeout(function() {
        msg.classList.remove("show");
    }, 3000);

    setTimeout(function() {
        msg.remove();
    }, 5000);
}

