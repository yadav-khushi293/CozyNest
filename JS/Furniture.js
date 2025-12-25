// import { placeholder } from "../JS/Navbar_Footer.js";
// placeholder();


// const fetchApi = async () => {
//   let api = "https://api-server-zecj.onrender.com/Modern-Furniture";

//   let loading = document.querySelector(".loading");

//   try {
//     // Show loading message before fetch
//     let loading = document.querySelector(".loading");
//     loading.style.display = "block";

//     let res = await fetch(api);
//     let data = await res.json();
//     appendFurnitureData(data.Furniture.largeVisNav);
//     console.log("🚀 ~ appendFurnitureData:", data.Furniture.main_product);
//     console.log(data.Furniture.main_product.lounge);

//     let mainProduct = Object.values(data.Furniture.main_product.lounge).flat();
//     let mainProduct1 = Object.values(data.Furniture.main_product.axis).flat();
//     let mainProduct2 = Object.values(data.Furniture.main_product.retreat).flat();
//     let mainProduct3 = Object.values(data.Furniture.main_product.unwind).flat();

//     furnitureData(mainProduct);
//     furniture(mainProduct1)
//     furniture2(mainProduct2)
//     furniture3(mainProduct3)
//   } catch (error) {
//     console.log("🚀 ~ error:", error);
//   } finally {
//     loading.style.display = "none";
//   }
// };

// const furnitureData = (val) => {
//   let productCardContainer = document.querySelector(".product-card-container");

//   val.forEach((el) => {
//     let productCardContent = document.createElement("div");
//     productCardContent.classList.add("product-card-content");

//     productCardContent.innerHTML = `
//       <ul>
//           <li class="product-card">
//               <div class="product-img">
//                   <img src=${el.img[0]} alt="img">
//                   <img src=${el.img[1]} alt="img">
//                   <img src=${el.img[2]} alt="img">
//                   <img src=${el.img[3]} alt="img">
//                   <img src=${el.img[4]} alt="img">
//               </div>
//               <div class="product-details">
//                   <div class="product-colorbar-container">
//                       <div class="colorbar-box">
//                         <img src=${el.colorBar[0]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[1]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[2]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[3]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[4]} alt="img">
//                       </div>
//                   </div>
//                   <div class="product-details-description">
//                       <div class="product-name">${el.caption}</div>
//                       <div class="product-range-price">
//                           <span>${el.price}</span>
//                       </div>
//                   </div>
//               </div>
//           </li>
//       </ul>
//     `;

//     productCardContainer.append(productCardContent);

//     // Select newly created elements
//     let bigImgs = productCardContent.querySelectorAll(".product-img img");
//     let smallImgs = productCardContent.querySelectorAll(".colorbar-box img");

//     // Default: show only first big image
//     bigImgs.forEach((img, i) => {
//       img.style.display = i === 0 ? "block" : "none";
//     });

//     // On clicking small image → show corresponding big image
//     smallImgs.forEach((thumb, index) => {
//       thumb.addEventListener("click", () => {
//         bigImgs.forEach((img, i) => {
//           img.style.display = i === index ? "block" : "none";
//         });
//       });
//     });
//   });
// };

const fetchApi = async () => {
  let api = "https://api-server-zecj.onrender.com/Modern-Furniture";
  let loading = document.querySelector(".loading");

  try {
    // Show loading message before fetch
    loading.style.display = "block";

    let res = await fetch(api);
    let data = await res.json();

    // Slider data
    renderLargeVisNavFurniture(data.Furniture.largeVisNav);

    // Convert into arrays
    let lounge = Object.values(data.Furniture.main_product.lounge).flat();
    let axis = Object.values(data.Furniture.main_product.axis).flat();
    let retreat = Object.values(data.Furniture.main_product.retreat).flat();
    let unwind = Object.values(data.Furniture.main_product.unwind).flat();
    let walnut_storage = Object.values(
      data.Furniture.main_product.walnut_storage
    ).flat();
    let walnut_bookshelf = Object.values(
      data.Furniture.main_product.walnut_bookshelf
    ).flat();
    let bisou_chair = Object.values(
      data.Furniture.main_product.bisou_chair
    ).flat();
    let keane = Object.values(data.Furniture.main_product.keane).flat();

    // All use same function
    renderFurniture(lounge);
    renderFurniture(axis);
    renderFurniture(retreat);
    renderFurniture(unwind);
    renderFurniture(walnut_storage);
    renderFurniture(walnut_bookshelf);
    renderFurniture(bisou_chair);
    renderFurniture(keane);
  } catch (error) {
    console.log("🚀 ~ error:", error);
  } finally {
    loading.style.display = "none";
  }
};

const renderLargeVisNavFurniture = (arr) => {
  let largeVisNavSlider = document.querySelector(".largeVisNav-slider");

  arr.forEach((el) => {
    let slide = document.createElement("div");
    slide.classList.add("slide");

    slide.innerHTML = `
      <a href="#">
          <div class="media-container">
              <img src=${el.img} alt="">
          </div>
          <div class="renew-copy-container">
              <p>${el.caption}</p>
          </div>
      </a>
    `;

    largeVisNavSlider.append(slide);
  });
};

// Reusable function for rendering product cards
const renderFurniture = (arr) => {
  let productCardContainer = document.querySelector(".product-card-container");

  arr.forEach((el) => {
    let productCardContent = document.createElement("div");
    productCardContent.classList.add("product-card-content");

    // Make dynamic images + color bars safely
    let bigImages = el.img
      .map((img) => `<img src="${img}" alt="img">`)
      .join("");
    let colorBars = el.colorBar
      .map(
        (c) => `<div class="colorbar-box"><img src="${c}" alt="color"></div>`
      )
      .join("");

    productCardContent.innerHTML = `
      <ul>
          <li class="product-card">
              <div class="product-img">${bigImages}</div>
              <div class="product-details">
                  <div class="product-colorbar-container">${colorBars}</div>
                  <div class="product-details-description">
                      <div class="product-name">${el.caption}</div>
                      <div class="product-range-price">
                          <span>${el.price}</span>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
    `;

    productCardContainer.append(productCardContent);

    // Select images
    let bigImgs = productCardContent.querySelectorAll(".product-img img");
    let smallImgs = productCardContent.querySelectorAll(".colorbar-box img");

    // Default: show only first big image
    bigImgs.forEach((img, i) => {
      img.style.display = i === 0 ? "block" : "none";
    });

    // On clicking colorbar → switch image
    smallImgs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        bigImgs.forEach((img, i) => {
          img.style.display = i === index ? "block" : "none";
        });
      });
    });
  });
};

// Open dropdown
// let filterType = document.querySelector(".filter-type");
// let filterTypeDrop = document.querySelector(".type-dropdown-content");
// let typeDown = document.querySelector(".bi-chevron-down")
// let typeUp = document.querySelector(".bi-chevron-up")

// filterType.addEventListener("click", () => {
//   filterTypeDrop.classList.toggle("type-dropdown");
//   filterCategoryDrop.classList.remove("category-dropdown");

//   // If dropdown is open → show UP icon
//   if (filterTypeDrop.classList.contains("type-dropdown")) {
//     typeDown.style.display = "none";
//     typeUp.style.display = "inline-block";
//   }
//   // If dropdown is closed → show DOWN icon
//   else {
//     typeDown.style.display = "inline-block";
//     typeUp.style.display = "none";
//   }
// });

// let filterCategory = document.querySelector(".filter-category");
// let filterCategoryDrop = document.querySelector(".category-dropdown-content");
// let catDown = document.querySelector(".bi-chevron-down")
// let catUp = document.querySelector(".bi-chevron-up")

// filterCategory.addEventListener("click", () => {
//   filterCategoryDrop.classList.toggle("category-dropdown");
//   filterTypeDrop.classList.remove("type-dropdown");

//   if (filterCategoryDrop.classList.contains("category-dropdown")) {
//     // hideFunction();
//     catDown.style.display = "none";
//     catUp.style.display = "inline-block";
//   }
//   // If dropdown is closed → show DOWN icon
//   else {
//     catDown.style.display = "inline-block";
//     catUp.style.display = "none";
//   }
// });

// function setupDropdown(dropSelector) {
//     const dropBox = document.querySelector(dropSelector);
//     if (!dropBox) return;

//     // use button if exists, else use the first div as click trigger
//     const toggleBtn = dropBox.querySelector("button") || dropBox.firstElementChild;

//     const dropdownContent = dropBox.querySelector("div[class$='dropdown-content']");
//     const iconDown = dropBox.querySelector(".bi-chevron-down");
//     const iconUp = dropBox.querySelector(".bi-chevron-up");

//     if (!dropdownContent || !toggleBtn) return;

//     toggleBtn.addEventListener("click", (e) => {
//         e.stopPropagation();

//         // close other dropdowns
//         document.querySelectorAll(".filter-box, .dropdown-filter").forEach(box => {
//             if (box !== dropBox) {
//                 const content = box.querySelector("div[class$='dropdown-content']");
//                 const down = box.querySelector(".bi-chevron-down");
//                 const up = box.querySelector(".bi-chevron-up");

//                 if (content) content.style.display = "none";
//                 if (down) down.style.display = "inline-block";
//                 if (up) up.style.display = "none";
//             }
//         });

//         // Toggle this dropdown
//         const isOpen = dropdownContent.style.display === "grid";
//         dropdownContent.style.display = isOpen ? "none" : "grid";

//         if (iconDown) iconDown.style.display = isOpen ? "inline-block" : "none";
//         if (iconUp) iconUp.style.display = isOpen ? "none" : "inline-block";
//     });
// }
// setupDropdown(".filter-type");
// setupDropdown(".filter-category");
// setupDropdown(".filter-color");
// setupDropdown(".filter-price");
// setupDropdown(".filter-material");

// const filterDropdownData = {
//   type: [
//     { label: "Sectionals", count: 871 },
//     { label: "Lounge Chairs", count: 243 },
//     { label: "Dining Chairs", count: 150 },
//     { label: "Furniture Covers", count: 127 },
//     { label: "Sofas", count: 102 },
//     { label: "Media Consoles", count: 78 },
//     { label: "Media Consoles", count: 78 },
//     { label: "Sectional Pieces", count: 319 },
//     { label: "Chaises", count: 237 },
//     { label: "Ottomans", count: 136 },
//     { label: "Sofa Cushions", count: 122 },
//     { label: "Swivel Chairs", count: 86 },
//   ],
//   category: [
//     { label: "Living Room Furniture", count: 2251 },
//     { label: "Dining And Kitchen Furniture", count: 341 },
//     { label: "Bedroom Furniture", count: 168 },
//     { label: "Storage And Modular Furniture", count: 151 },
//     { label: "Outdoor Furniture", count: 122 },
//     { label: "Home Office Furniture", count: 95 },
//     { label: "Baby And Kids Furniture", count: 36 },
//     { label: "Storage And Organization", count: 19 },
//     { label: "Baby And Kids Lighting", count: 2 },
//     { label: "Kids Gear", count: 1 },
//   ],
//   colors: [
//     { label: "White", count: 407 },
//     { label: "Black", count: 287 },
//     { label: "Natural", count: 743 },
//     { label: "Customizable", count: 1295 },
//     { label: "Multicolor", count: 17 },
//     { label: "Blue", count: 142 },
//     { label: "Gold", count: 17 },
//     { label: "Yellow", count: 3 },
//     { label: "Pink", count: 1 },
//     { label: "Off White", count: 388 },
//     { label: "Brown", count: 811 },
//     { label: "Grey", count: 879 },
//     { label: "Green", count: 203 },
//     { label: "Clear", count: 7 },
//     { label: "Red", count: 10 },
//     { label: "Silver", count: 16 },
//     { label: "Orange", count: 6 },
//   ],
//   priceRanges: [
//     { label: "$0 to $10", count: 5 },
//     { label: "$10 to $20", count: 7 },
//     { label: "$50 to $100", count: 36 },
//     { label: "$250 to $500", count: 352 },
//     { label: "$1000 to $1500", count: 521 },
//     { label: "$2000 to $3000", count: 595 },
//     { label: "$4000 to $5000", count: 226 },
//     { label: "$20 to $50", count: 36 },
//     { label: "$100 to $250", count: 187 },
//     { label: "$500 to $1000", count: 469 },
//     { label: "$1500 to $2000", count: 515 },
//     { label: "$3000 to $4000", count: 337 },
//     { label: "$5000 to $7000", count: 344 },
//     { label: "Over $7000", count: 170 },
//   ],
//   materials: [
//     { label: "Fabric", count: 1735 },
//     { label: "Metal", count: 179 },
//     { label: "Performance", count: 86 },
//     { label: "Acrylic", count: 155 },
//     { label: "Concrete", count: 22 },
//     { label: "Teak", count: 26 },
//     { label: "Performance Blend", count: 15 },
//     { label: "Wood", count: 1091 },
//     { label: "Glass", count: 96 },
//     { label: "Natural Material", count: 24 },
//     { label: "Stone", count: 22 },
//     { label: "Marble", count: 53 },
//     { label: "Leather", count: 629 },
//     { label: "Rattan", count: 25 },
//   ],
//   sortingOptions: [
//     "Most Relevant",
//     "Price, low to high",
//     "Price, high to low",
//     "New",
//     "Top Rated",
//   ],
// };

// let filterTypeBtn = document.querySelector(".filter-type");
// let container = document.querySelector(".type-dropdown-content");
// filterTypeBtn.addEventListener("click", () => {
//   filterDropdownData.type.forEach((el) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <input type="checkbox" />
//       <label>${el.label} (${el.count})</label>
//     `;
//     container.appendChild(div);
//   });
//   console.log("🚀 ~ filterDropdownData:", filterDropdownData.type);
// });

window.onload = () => {
  fetchApi();
};
