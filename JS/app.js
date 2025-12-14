// import "./SignIn_Page.js"
// import { placeholder } from "../JS/Navbar_Footer.js";
// placeholder();

// scroll button
const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("showScrollBtn");
  } else {
    scrollBtn.classList.remove("showScrollBtn");
  }
});

window.scrollUp = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let arrivals = [
  {
    img: "../Utilities/img/arrival_img_1.webp",
    caption: "New Accent Chairs",
    price: "Starting at $899",
  },
  
  {
    img: "../Utilities/img/arrival_img_2.webp",
    caption: "New Pillows",
    price: "Starting at $49.95",
  },

  {
    img: "../Utilities/img/arrival_img_3.webp",
    caption: "New Lighting",
    price: "Starting at $79.95",
  },

  {
    img: "../Utilities/img/arrival_img_4.webp",
    caption: "New End Tables",
    price: "Starting at $299",
  },
  {
    img: "../Utilities/img/arrival_img_5.webp",
    caption: "New Botanicals",
    price: "Starting at $16.95",
  },
  {
    img: "../Utilities/img/arrival_img_6.jpeg",
    caption: "New Dinnerware",
    price: "Starting at $8.95",
  },
  {
    img: "../Utilities/img/arrival_img_7.webp",
    caption: "New Rugs",
    price: "Starting at $799",
  },
  {
    img: "../Utilities/img/arrival_img_8.webp",
    caption: "New Decor",
    price: "Starting at $7.95",
  },
];

let arrivals_imgs = document.querySelector(".arrivals-imgs-container");
function renderArrivalImg(arrivals) {

  arrivals.forEach((val) => {
    let div = document.createElement("div");
    div.classList.add("arrival-items");

    let img = document.createElement("img");
    img.src = val.img;
    img.alt = val.caption;

    let caption = document.createElement("h3");
    caption.innerText = val.caption;

    let price = document.createElement("p");
    price.innerText = val.price;

    div.append(img, caption, price);
    arrivals_imgs.append(div);
  });
}
renderArrivalImg(arrivals);

let arrivalLeftBtn = document.querySelector(".arrival-arrow>.fa-angle-left");
let arrivalRightBtn = document.querySelector(".arrival-arrow>.fa-angle-right");

// Onclicking scroll behaviour
arrivalLeftBtn.addEventListener("click", () => {
  arrivals_imgs.scrollBy({
    left: -430,
    behavior: "smooth"
  });
});

arrivalRightBtn.addEventListener("click", () => {
  arrivals_imgs.scrollBy({
    left: 430,
    behavior: "smooth"
  });
});

// Auto Scroll behaviour
let scroll;

const arrivalAutoScroll = () => {
  scroll = setInterval(() => {
    const maxScroll =
      arrivals_imgs.scrollWidth - arrivals_imgs.clientWidth;

    if (arrivals_imgs.scrollLeft >= maxScroll) {
      arrivals_imgs.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      arrivals_imgs.scrollBy({
        left: 430,
        behavior: "smooth",
      });
    }
  }, 2000);
};

// start initially
arrivalAutoScroll();

// Hover pe pause
arrivals_imgs.addEventListener("mouseenter", () => {
  clearInterval(scroll);
});

// Hover hatao to wapas start
arrivals_imgs.addEventListener("mouseleave", () => {
  arrivalAutoScroll();
});

// video play start

let videoBtn = document.querySelector(".video-play>div");
let video = document.querySelector(".video");
let playIcon = document.querySelector(".fa-play");
let pauseIcon = document.querySelector(".fa-pause");
let isVideoOpen = true;

videoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!isVideoOpen) {
    video.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
    document.querySelector(".video-play").style.border = "2px dotted white";
    isVideoOpen = true;
  } else {
    video.pause();
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
    document.querySelector(".video-play").style.border = "2px dotted white";
    isVideoOpen = false;
  }
});

// when clicking anywhere else, remove border
document.addEventListener("click", (e) => {
  if (!document.querySelector(".video-play").contains(e.target)) {
    document.querySelector(".video-play").style.border = "none";
  }
});

// Hero Card

let heroCard = [
  {
    img: "../Utilities/img/HeroCarousel_Sofas_img_1.jpeg",
    caption: "Sofas",
  },
  {
    img: "../Utilities/img/HeroCarousel_CoffeeTables_img_2.webp",
    caption: "Coffee Tables",
  },
  {
    img: "../Utilities/img/HeroCarousel_Lighting_img_3.webp",
    caption: "Lighting",
  },
  {
    img: "../Utilities/img/HeroCarousel_AccentChairs_img_4.webp",
    caption: "Accent Chairs",
  },
  {
    img: "../Utilities/img/HeroCarousel_Pillows_img_5.webp",
    caption: "Pillows",
  },
  {
    img: "../Utilities/img/HeroCarousel_Rugs_img_6.jpeg",
    caption: "Rugs",
  },
  {
    img: "../Utilities/img/HeroCarousel_Candles_img_7.webp",
    caption: "Candles",
  },
  {
    img: "../Utilities/img/HeroCarousel_Botanicals_8.webp",
    caption: "Botanicals",
  },
  {
    img: "../Utilities/img/Baby_CBCC_Caro_1Cribs_img_9.webp",
    caption: "Cribes & Bassinates",
  },
  {
    img: "../Utilities/img/Baby_CBCC_Caro_2Dressers_img_10.webp",
    caption: "Dressers",
  },
  {
    img: "../Utilities/img/Baby_CBCC_Caro_3Seating_img_11.webp",
    caption: "Nursery Rocking Chairs & Gliders",
  },
  {
    img: "../Utilities/img/Kids_CBCC_Caro_6Bookcases_img_12.webp",
    caption: "Bookcases",
  },
  {
    img: "../Utilities/img/Baby_CBCC_Caro_5Bedding_img_13.webp",
    caption: "Bedding",
  },
  {
    img: "../Utilities/img/Baby_CBCC_Caro_6Rugs_img_14.webp",
    caption: "Rugs",
  },
  {
    img: "../Utilities/img/Kids_CBCC_Caro_9Lighting_img_15.webp",
    caption: "Lighting",
  },
];

let HeroCardContainer = document.querySelector(".hero-card-content");
const renderHeroCard = (heroCard) => {

  heroCard.forEach((val) => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("heroCard-items");

    let div = document.createElement("div");

    let heroImg = document.createElement("img");
    heroImg.src = val.img;
    heroImg.alt = val.caption;

    let heroCap = document.createElement("p");
    heroCap.innerText = val.caption;
    heroCap.style.fontWeight = "550";

    let arrow = document.createElement("span");
    arrow.classList.add("small-arrow");

    let heroCapArrow = document.createElement("div");

    heroCapArrow.append(heroCap, arrow);
    div.append(heroImg, heroCapArrow);
    mainDiv.append(div);
    HeroCardContainer.append(mainDiv);
  });
};

renderHeroCard(heroCard);

// Onclicking scroll behaviour
let heroLeftBtn = document.querySelector(".hero-arrow>.fa-angle-left");
let heroRightBtn = document.querySelector(".hero-arrow>.fa-angle-right");

heroLeftBtn.addEventListener("click", () => {
  HeroCardContainer.scrollBy({
    left: -430,
    behavior: "smooth"
  });
});

heroRightBtn.addEventListener("click", () => {
  HeroCardContainer.scrollBy({
    left: 430,
    behavior: "smooth"
  });
});

// Auto Scroll behaviour
let autoScroll;

const heroCardAutoScroll = () => {
  autoScroll = setInterval(() => {
    const maxScroll =
      HeroCardContainer.scrollWidth - HeroCardContainer.clientWidth;

    if (HeroCardContainer.scrollLeft >= maxScroll) {
      HeroCardContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      HeroCardContainer.scrollBy({
        left: 430,
        behavior: "smooth",
      });
    }
  }, 2000);
};

// start initially
heroCardAutoScroll();

// Hover pe pause
HeroCardContainer.addEventListener("mouseenter", () => {
  clearInterval(autoScroll);
});

// Hover hatao to wapas start
HeroCardContainer.addEventListener("mouseleave", () => {
  heroCardAutoScroll();
});


// Hosting Card

let hostingCard = [
  {
    img: "../Utilities/img/Hosting_Drinkware.webp",
    caption: "Drinkware",
  },
  {
    img: "../Utilities/img/Hosting_Dinnerware.webp",
    caption: "Dinnerware",
  },
  {
    img: "../Utilities/img/Hosting_Serveware.webp",
    caption: "Serveware",
  },
  {
    img: "../Utilities/img/Hosting_TableLinens.jpeg",
    caption: "Table Lines",
  },
  {
    img: "../Utilities/img/Hosting_Bakeware.jpeg",
    caption: "Bakeware",
  },
];

let hostingContent = document.querySelector(".hosting-content");
const renderHostingCard = (hostingCard) => {

  hostingCard.forEach((val) => {
    let mainDiv = document.createElement("div");

    let hostingImg = document.createElement("img");
    hostingImg.src = val.img;
    hostingImg.alt = val.caption;

    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "10px";

    let hostingCap = document.createElement("p");
    hostingCap.innerText = val.caption;
    hostingCap.style.textAlign = "center";
    hostingCap.style.fontWeight = "550";

    let arrow = document.createElement("span");
    arrow.classList.add("small-arrow");

    div.append(hostingCap, arrow);
    mainDiv.append(hostingImg, div);
    hostingContent.append(mainDiv);
  });
};

renderHostingCard(hostingCard);


// Onclicking scroll behaviour
let hostingLeftBtn = document.querySelector(".hosting-arrow>.fa-angle-left");
let hostingRightBtn = document.querySelector(".hosting-arrow>.fa-angle-right");

hostingLeftBtn.addEventListener("click", () => {
  hostingContent.scrollBy({
    left: -430,
    behavior: "smooth"
  });
});

hostingRightBtn.addEventListener("click", () => {
  hostingContent.scrollBy({
    left: 430,
    behavior: "smooth"
  });
});

// Auto Scroll behaviour
let hostingScroll;

const hostingAutoScroll = () => {
  hostingScroll = setInterval(() => {
    const maxScroll =
      hostingContent.scrollWidth - hostingContent.clientWidth;

    if (hostingContent.scrollLeft >= maxScroll) {
      hostingContent.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      hostingContent.scrollBy({
        left: 430,
        behavior: "smooth",
      });
    }
  }, 2000);
};

// start initially
hostingAutoScroll();

// Hover pe pause
hostingContent.addEventListener("mouseenter", () => {
  clearInterval(hostingScroll);
});

// Hover hatao to wapas start
hostingContent.addEventListener("mouseleave", () => {
  heroCardAutoScroll();
});


// Autumn decorate section

let autumnCard = [
  {
    img: "../Utilities/img/Autumn_1_Pillows.webp",
    caption: "Pillows",
  },
  {
    img: "../Utilities/img/Autumn_2_Botanicals.webp",
    caption: "Botanical",
  },
  {
    img: "../Utilities/img/Autumn_3_Vases.webp",
    caption: "Vases",
  },
  {
    img: "../Utilities/img/Autumn_4_CandleHolders.webp",
    caption: "Candle Holders",
  },
  {
    img: "../Utilities/img/Autumn_5_Throws.webp",
    caption: "Throws",
  },
  {
    img: "../Utilities/img/Autumn_6_Candles.webp",
    caption: "Candles",
  },
  {
    img: "../Utilities/img/Autumn_7_Halloween.webp",
    caption: "Halloween",
  },
];

let autumnContent = document.querySelector(".autumn-content");
const renderAutumnCard = (autumnCard) => {

  autumnCard.forEach((val) => {
    let mainDiv = document.createElement("div");

    let autumnImg = document.createElement("img");
    autumnImg.src = val.img;
    autumnImg.alt = val.caption;

    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "10px";

    let autumnCap = document.createElement("p");
    autumnCap.innerText = val.caption;
    autumnCap.style.textAlign = "center";
    autumnCap.style.fontWeight = "550";

    let arrow = document.createElement("span");
    arrow.classList.add("small-arrow");

    div.append(autumnCap, arrow);
    mainDiv.append(autumnImg, div);
    autumnContent.append(mainDiv);
  });
};

renderAutumnCard(autumnCard);


// Onclicking scroll behaviour
let autumnLeftBtn = document.querySelector(".autumn-arrow>.fa-angle-left");
let autumnRightBtn = document.querySelector(".autumn-arrow>.fa-angle-right");

autumnLeftBtn.addEventListener("click", () => {
  autumnContent.scrollBy({
    left: -430,
    behavior: "smooth"
  });
});

autumnRightBtn.addEventListener("click", () => {
  autumnContent.scrollBy({
    left: 430,
    behavior: "smooth"
  });
});

// Auto Scroll behaviour
let autumnScroll;

const autumnAutoScroll = () => {
  autumnScroll = setInterval(() => {
    const maxScroll =
      autumnContent.scrollWidth - autumnContent.clientWidth;

    if (autumnContent.scrollLeft >= maxScroll) {
      autumnContent.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      autumnContent.scrollBy({
        left: 430,
        behavior: "smooth",
      });
    }
  }, 2000);
};

// start initially
autumnAutoScroll();

// Hover pe pause
hostingContent.addEventListener("mouseenter", () => {
  clearInterval(autumnScroll);
});

// Hover hatao to wapas start
hostingContent.addEventListener("mouseleave", () => {
  autumnAutoScroll();
});



// shopping ways section

let shoppingCard = [
  {
    img: "../Utilities/img/WaysShop1.webp",
    caption: "Earn 10% Back",
    capDetail: "On Create purchase with your CozyNest Credit Card.",
  },
  {
    img: "../Utilities/img/WaysShop2.webp",
    caption: "Exclusive Perks on the App",
    capDetail: "Be the first to know about deals & new arrivals.",
  },
  {
    img: "../Utilities/img/WaysShop3.webp",
    caption: "The Design Desk",
    capDetail: "Get 100% free design help for any project, big or small.",
  },
  {
    img: "../Utilities/img/WaysShop4.webp",
    caption: "Wedding Registry",
    capDetail: "We'he helped more than 1 million couples---you're next!",
  },
  {
    img: "../Utilities/img/WaysShop5.webp",
    caption: "Kids & Baby",
    capDetail: "Create a beautiful home the whole family will love.",
  },
];

let shoppingCardContainer = document.querySelector(
  ".shopping-ways-card-container"
);
const shoppingCardRender = (shoppingCard) => {

  shoppingCard.forEach((el) => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("shopping-card-mainDiv");

    let shoppingImg = document.createElement("img");
    shoppingImg.src = el.img;
    shoppingImg.alt = el.caption;

    let captionDiv = document.createElement("div");
    captionDiv.style.display = "flex";
    captionDiv.style.flexDirection = "column";
    captionDiv.style.justifyContent = "center";
    captionDiv.style.alignItems = "center";
    captionDiv.style.gap = "10px";

    let capHeadDiv = document.createElement("div");
    capHeadDiv.style.display = "flex";
    capHeadDiv.style.justifyContent = "center";
    capHeadDiv.style.alignItems = "center";
    capHeadDiv.style.gap = "10px";

    let arrow = document.createElement("span");
    arrow.classList.add("small-arrow");

    let shoppingCap = document.createElement("p");
    shoppingCap.innerText = el.caption;
    shoppingCap.style.fontWeight = "550";

    let shoppingCapDtl = document.createElement("p");
    shoppingCapDtl.innerText = el.capDetail;
    shoppingCapDtl.style.width = "270px";
    shoppingCapDtl.style.textAlign = "center";
    shoppingCapDtl.style.fontSize = "18px";

    capHeadDiv.append(shoppingCap, arrow);
    captionDiv.append(capHeadDiv, shoppingCapDtl);
    mainDiv.append(shoppingImg, captionDiv);
    shoppingCardContainer.append(mainDiv);
  });
};

shoppingCardRender(shoppingCard);


// Onclicking scroll behaviour
let shoppingLeftBtn = document.querySelector(".shopping-arrow>.fa-angle-left");
let shoppingRightBtn = document.querySelector(".shopping-arrow>.fa-angle-right");

shoppingLeftBtn.addEventListener("click", () => {
  shoppingCardContainer.scrollBy({
    left: -430,
    behavior: "smooth"
  });
});

shoppingRightBtn.addEventListener("click", () => {
  shoppingCardContainer.scrollBy({
    left: 430,
    behavior: "smooth"
  });
});

// Auto Scroll behaviour
let shoppingScroll;

const shoppingAutoScroll = () => {
  shoppingScroll = setInterval(() => {
    const maxScroll =
      shoppingCardContainer.scrollWidth - shoppingCardContainer.clientWidth;

    if (shoppingCardContainer.scrollLeft >= maxScroll) {
      shoppingCardContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      shoppingCardContainer.scrollBy({
        left: 430,
        behavior: "smooth",
      });
    }
  }, 2000);
};

// start initially
shoppingAutoScroll();

// Hover pe pause
shoppingCardContainer.addEventListener("mouseenter", () => {
  clearInterval(shoppingScroll);
});

// Hover hatao to wapas start
shoppingCardContainer.addEventListener("mouseleave", () => {
  shoppingAutoScroll();
});


// Carousel

// Go to SingIn page
let signInPageBtn = document.querySelector("#goTo_singIn_page");
signInPageBtn.addEventListener("click", () => {
  window.location = "../HTML/SignIn_Page.html";
});

// Redirect to Cart page
let cartBtn = document.querySelector(".view-cart-btn");
// cartBtn.style.border= "4px solid red"

// cartBtn.addEventListener("click", () => {
//   window.location.href = "../HTML/Cart.html";
// });
