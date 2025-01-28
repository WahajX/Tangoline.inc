// loader section
var loader = document.getElementById("loader")

window.addEventListener("load",function() {
    loader.style.display = "none";
})
// loader section
  
// navbar section
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20) {
            $('.navbar').addClass('navbar2', 500)
        } else {
            $('.navbar').removeClass('navbar2', 500)
        }
    });
});
// navbar section

// slideshow section
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
// slideshow section

// ||||||||||||||||||||||||||  MENU BAR |||||||||||||||||||||||||
function toggleMenu(x) {
    x.classList.toggle("change");
    const navhead = document.querySelector('.navhead');
    const navlist = document.querySelector('.navhead ul');

    if (x.classList.contains("change")) {
        navlist.classList.add('show');
        navlist.classList.remove('hide');
        navhead.style.height = '39vh';
    } else {
        navlist.classList.add('hide');
        setTimeout(() => {
            navlist.classList.remove('show');
            navhead.style.height = '8vh'; 
        }, 200); 
    }
}

// |||||||||||||||||||||||||||||||| slider height |||||||||||||||||||||||||||||||||||||

document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector('.G-slider-container');
    const slider = document.querySelector('.G-slider');
    const slides = document.querySelectorAll('.G-slide');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    let isDragging = false;
    let startX, scrollLeft;

    // Drag/Touch Functionality
    sliderContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener('mouseleave', () => (isDragging = false));
    sliderContainer.addEventListener('mouseup', () => (isDragging = false));
    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2.1; 
        sliderContainer.scrollLeft = scrollLeft - walk;
    });

    sliderContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener('touchend', () => (isDragging = false));
    sliderContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2.1;
        sliderContainer.scrollLeft = scrollLeft - walk;
    });

    // Slide navigation using buttons
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 13; 

    const updateSlider = () => {
        const maxIndex = slides.length - 3;
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex)); 

        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === maxIndex ? 'none' : 'block';
    };

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex--;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex++; 
            updateSlider();
        });

        updateSlider(); 
    }
});

// |||||||||||||||||||||||||||||||||  2nd product color slide||||||||||||||||||||||||||||||||||||||||||||||||

document.querySelector('.slide-btn').addEventListener('click', () => {
    const secondCard = document.querySelector('.product-card2');


    if (secondCard.style.display === 'block') {
        setTimeout(() => {
            secondCard.style.display = 'none';
        }, 380);
    } else {
        secondCard.style.display = 'block';
    }
    setTimeout(() => {
        secondCard.classList.toggle('slide-right');
    }, 0);

});



// ||||||||||||||||||||||||||||||||| pre product compare||||||||||||||||||||||||||||||||||||||||||||||||||||||
// /||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


function preCompare() {
  const comparecover = document.getElementsByClassName('compare-cover');
    const compareDiv = document.getElementsByClassName('compareDiv');
    comparecover[0].style.display = 'flex';
    compareDiv[0].style.display = 'block';
}

function compareclose() {
  const comparecover = document.getElementsByClassName('compare-cover');
  const compareDiv = document.getElementsByClassName('compareDiv');
  comparecover[0].style.display = 'none';
  compareDiv[0].style.display = 'none';
  const dropdown = document.getElementById("Dropdown");
const dropdown2 = document.getElementById("Dropdown2");
dropdown.selectedIndex = 0;
dropdown2.selectedIndex = 0;
document.getElementById("product1-name").textContent = "Select a product";
document.getElementById("product2-name").textContent = "Select a product";
document.getElementById("product1-type").textContent = "";
document.getElementById("product2-type").textContent = "";
document.getElementById("product1-manufacturer").textContent = "";
document.getElementById("product2-manufacturer").textContent = "";
document.getElementById("product1-price").textContent = "";
document.getElementById("product2-price").textContent = "";
document.getElementById("product1-features").textContent = "";
document.getElementById("product2-features").textContent = "";
document.getElementById("product1-img").src = "./Console/no-image.png";
document.getElementById("product2-img").src = "./Console/no-image.png";
document.getElementById("compareResult").textContent = "";
document.getElementsByClassName(".compareDiv-card").css.style.border="orange";
document.getElementByByClassName("compareDiv-card").css.style.border="orange";
}

// ||||||||||||||||||||||||||||||||||||||  Product Comparison  |||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  
let comparisonType = "Price";

n
function CompareSelection() {
    const compareBy = document.getElementById("compareDiv-by").value;
    if (compareBy === "Compare by Price$") {
        comparisonType = "Price";
    } else if (compareBy === "Compare by Quality") {
        comparisonType = "Quality";
    }
}

function updateSelection(productNumber) {
    const dropdown = productNumber === 1 ? "Dropdown" : "Dropdown2";
    const selectedProduct = document.getElementById(dropdown).value;

    const productData = {
      "PlayStation 5 (White)": {
        type: "Gaming Console",
        manufacturer: "Sony",
        price: 499,
        features: "Supports VR; exclusive games.",
        img: "./Console/PS5.png"
      },
      "PlayStation 5 (Black)": {
        type: "Gaming Console",
        manufacturer: "Sony",
        price: 499,
        features: "Supports VR; exclusive games.",
        img: "./Console/PS5-B.jpg"
      },
      "PlayStation 4": {
          type: "Gaming Console",
          manufacturer: "Sony",
          price: 299,
          features: "Large game library; VR support with add-ons.",
          img: "./Console/PS4.jpg"
        },
      "Xbox Series X": {
        type: "Gaming Console",
        manufacturer: "Microsoft",
        price: 499,
        features: "Powerful hardware, Game Pass.",
        img: "./Console/XBOX.png"
      },
      "Nintendo Switch OLED": {
        type: "Gaming Console",
        manufacturer: "Nintendo",
        price: 349,
        features: "Portable hybrid console.",
        img: "./Console/OLED.jpg"
      },
      "Meta Quest 3": {
        type: "VR Headset",
        manufacturer: "Meta (Facebook)",
        price: 499,
        features: "Standalone, good for gaming/fitness.",
        img: "./Console/VR-H/META.png"
      },
      "PlayStation VR2": {
        type: "VR Headset",
        manufacturer: "Sony",
        price: 549,
        features: "PS5-exclusive, high resolution.",
        img: "./Console/VR-H/PSVR2.jpeg"
      },
      "HTC Vive XR Elite": {
        type: "VR Headset",
        manufacturer: "HTC",
        price: 999,
        features: "PCVR and standalone hybrid features.",
        img: "./Console/VR-H/VIVE.png"
      },
      "Valve Index VR Kit": {
        type: "VR Headset",
        manufacturer: "Valve",
        price: 999,
        features: "Best for PCVR gaming.",
        img: "./Console/VR-H/VALVE.jpg"
      },
      "Pico 4": {
        type: "VR Headset",
        manufacturer: "Pico",
        price: 429,
        features: "Standalone, lightweight.",
        img: "./Console/VR-H/PICO4.jpg"
      },
      "NeuroSky MindWave": {
        type: "Half-Dive Device",
        manufacturer: "NeuroSky",
        price: 399,
        features: "Brainwave interface, basic immersion.",
        img: "./Console/H-DIVE/N-SKY.jpg"
      },
      "Neuralink (concept only)": {
        type: "Full-Dive Prototype",
        manufacturer: "Neuralink (Elon Musk)",
        price: 2099,
        features: "Brain-Computer Interface (BCI).",
        img: "./Console/F-DIVE/NEURALINK.jpg"
      },
      "Emotiv Insight (BCI)": {
        type: "Full-Dive Prototype",
        manufacturer: "Emotiv",
        price: 599,
        features: "EEG-based, experimental immersion.",
        img: "./Console/F-DIVE/EMOTIV.jpg"
      }
    };

    const productCardId = productNumber === 1 ? "product1-card" : "product2-card";
    const productImgId = productNumber === 1 ? "product1-img" : "product2-img";
    const productNameId = productNumber === 1 ? "product1-name" : "product2-name";
    const productTypeId = productNumber === 1 ? "product1-type" : "product2-type";
    const productManufacturerId = productNumber === 1 ? "product1-manufacturer" : "product2-manufacturer";
    const productPriceId = productNumber === 1 ? "product1-price" : "product2-price";
    const productFeaturesId = productNumber === 1 ? "product1-features" : "product2-features";

    if (productData[selectedProduct]) {
        const product = productData[selectedProduct];
        document.getElementById(productImgId).src = product.img;
        document.getElementById(productNameId).textContent = selectedProduct;
        document.getElementById(productTypeId).textContent = product.type;
        document.getElementById(productManufacturerId).textContent = product.manufacturer;
        document.getElementById(productPriceId).textContent = `$${product.price}`;
        document.getElementById(productFeaturesId).textContent = product.features;
    }
}

// Function to compare the selected products
function compareProducts() {
    const product1Name = document.getElementById("product1-name").textContent;
    const product2Name = document.getElementById("product2-name").textContent;

    if (product1Name === "Select a product" || product2Name === "Select a product") {
        alert("Please select two products to compare.");
        return;
    }

    const product1Price = parseFloat(document.getElementById("product1-price").textContent.replace("$", ""));
    const product2Price = parseFloat(document.getElementById("product2-price").textContent.replace("$", ""));
    const resultDiv = document.getElementById("compareResult");


    resetStyles();

    if (comparisonType === "Price") {
        if (product1Price < product2Price) {
            resultDiv.textContent = `${product1Name} is cheaper than ${product2Name}.`;
            highlightResult(1, "win");
            highlightResult(2, "lose");
        } else if (product1Price > product2Price) {
            resultDiv.textContent = `${product2Name} is cheaper than ${product1Name}.`;
            highlightResult(1, "lose");
            highlightResult(2, "win");
        } else {
            resultDiv.textContent = `${product1Name} and ${product2Name} have the same price.`;
            highlightResult(1, "tie");
            highlightResult(2, "tie");
        }
    } else if (comparisonType === "Quality") {
        const product1Features = document.getElementById("product1-features").textContent;
        const product2Features = document.getElementById("product2-features").textContent;
        resultDiv.textContent = `Quality Comparison:${product1Name}: ${product1Features}\n${product2Name}: ${product2Features}`;
        highlightResult(1, "tie");
        highlightResult(2, "tie");
    }
}


function highlightResult(productNumber, result) {
    const card = productNumber === 1 ? "product1-card" : "product2-card";
    const cardElement = document.getElementById(card);

    if (result === "win") {
        cardElement.style.border = "7px solid green";
    } else if (result === "lose") {
        cardElement.style.border = "7px solid red";
    } else if (result === "tie") {
        cardElement.style.border = "7px solid orange";
    }
}

// Function to reset styles
function resetStyles() {
    document.getElementById("product1-card").style.border = "1px solid #ccc";
    document.getElementById("product2-card").style.border = "1px solid #ccc";
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||        VR Zone.html      |||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */


function sortProducts() {
    const sortOption = document.getElementById("sortOptions").value;
    const container = document.getElementById("productContainer");
    const products = Array.from(container.getElementsByClassName("VR-card"));

    const sortedProducts = products.sort((a, b) => {
        if (sortOption === "price") {
            
            const priceA = parseFloat(a.querySelector("#price").textContent.replace(/[^0-9.]/g, ""));
            const priceB = parseFloat(b.querySelector("#price").textContent.replace(/[^0-9.]/g, ""));
            return priceA - priceB;
        } else if (sortOption === "name") {
        
            const nameA = a.querySelector("h2").textContent.toLowerCase();
            const nameB = b.querySelector("h2").textContent.toLowerCase();
            return nameA.localeCompare(nameB); 
        }
    });

  
    container.innerHTML = "";
    sortedProducts.forEach(product => container.appendChild(product));
}


function slidebut(){
    const firstCard = document.querySelector('.VR-card2');

    if (firstCard.style.display === 'block') {
        setTimeout(() => {
            firstCard.style.display = 'none';
        }, 380);
    } else {
        firstCard.style.display = 'block';
    }
    setTimeout(() => {
        firstCard.classList.toggle('VRslide');
    }, 0);

}



// ||||||||||||||||||||||||||||||||||||||||||  Game .html     ||||||||||||||||||||||||||||||||||||||


