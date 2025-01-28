//  |||||||||||||||||||||||||||||||||||||||||  RATING ||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const ratingElements = document.querySelectorAll('.rating'); 

ratingElements.forEach(element => {
    const rating = parseFloat(element.getAttribute('data-rating'));
    const stars = element.querySelectorAll('.star');
    applyGradientToStars(stars, rating); 
});

function applyGradientToStars(stars, rating) {
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const gradient = getGradient(rating);
        

        if (i < Math.floor(rating)) {
            star.style.background = `linear-gradient(to right, gold ${gradient.gold}%, #ccc ${gradient.white}%)`;
        } else {
            star.style.background = `linear-gradient(to right, #ccc ${gradient.white}%, gold ${gradient.gold}%)`;
        }

        star.style.webkitBackgroundClip = 'text';
        star.style.color = 'transparent';
    }
}

function getGradient(rating) {
    switch (rating) {
        case 4.9:
            return { gold: 90, white: 10 };
        case 4.8:
            return { gold: 80, white: 20 };
        case 4.7:
            return { gold: 70, white: 30 };
        case 4.6:
            return { gold: 60, white: 40 };
        case 4.5:
            return { gold: 50, white: 50 };
        case 4.4:
            return { gold: 40, white: 60 };
        case 4.3:
            return { gold: 30, white: 70 };
        case 4.2:
            return { gold: 20, white: 80 };
        case 4.1:
            return { gold: 10, white: 90 };
        default:
            return { gold: 0, white: 100 };
    }
}

//  |||||||||||||||||||||||||||||||||||||||||||||  Games Filter ||||||||||||||||||||||||||||||||||||||||||||||||

document.addEventListener("DOMContentLoaded", () => {
    const genreFilters = document.querySelectorAll('input[data-filter="genre"]');
    const companyFilters = document.querySelectorAll('input[data-filter="company"]');
    const allGamesFilter = document.getElementById("all-games");
    const gameCards = document.querySelectorAll(".Game-card");
    
    allGamesFilter.addEventListener('change', () => {
        if (allGamesFilter.checked) {
            gameCards.forEach(card => card.style.display = 'block');
            companyFilters.forEach(filter => filter.checked = false);
            genreFilters.forEach(filter => filter.checked = false);
        } else {
            gameCards.forEach(card => card.style.display = 'none');
        }
    });
    

    const handleFilterChange = (filterType, filterValue) => {
        const checkedFilters = Array.from(filterType).filter(filter => filter.checked).map(filter => filter.value);
        gameCards.forEach(card => {
            if (checkedFilters.includes(card.getAttribute(`data-${filterValue}`))) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        if (checkedFilters.length === 0) {
            allGamesFilter.checked = true;
            gameCards.forEach(card => card.style.display = 'block');
        } else {
            allGamesFilter.checked = false;
        }
    };

    genreFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            handleFilterChange(genreFilters, 'genre');
            companyFilters.forEach(filter => filter.checked = false);
        });
    });

    companyFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            handleFilterChange(companyFilters, 'company');
            genreFilters.forEach(filter => filter.checked = false);
        });
    });
});


// ||||||||||||||||||||||||||||||||      Filter toggle       |||||||||||||||||||||||||||||||||||||||||||||

const filterButton = document.querySelector('.Filter');
const filters = document.querySelector('.Filters');
let autoCloseTimeout; // Variable to hold the timeout reference

function resetAutoClose() {

    clearTimeout(autoCloseTimeout);


    autoCloseTimeout = setTimeout(() => {
        if (filters.classList.contains('open')) {
            closeFilters();
        }
    }, 3000);
}

function openFilters() {
    filters.style.display = 'block'; 
    filters.classList.add('open');
    resetAutoClose(); // 
}

function closeFilters() {
    filters.classList.remove('open');
    filters.classList.add('closing');

    
    filters.addEventListener('animationend', () => {
        if (filters.classList.contains('closing')) {
            filters.classList.remove('closing');
            filters.style.display = 'none';
        }
    }, { once: true });

    clearTimeout(autoCloseTimeout);
}

filterButton.addEventListener('click', () => {
    if (filters.classList.contains('open')) {
        closeFilters();
    } else {
        openFilters();
    }
});

filters.addEventListener('mousemove', resetAutoClose);
filters.addEventListener('keydown', resetAutoClose);
filters.addEventListener('scroll', resetAutoClose);
filters.addEventListener('click', resetAutoClose);


// ||||||||||||||||||||||||||||||||||||||||||    Signin-page   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Signin(){
    document.querySelector('.SignOn').style.display = 'flex ';
}


function SignupOpen(){
    document.querySelector('.sign-On-cover').style.transform = 'translateX(0px)';
    document.querySelector('.sign-in-cover').style.transform = 'translateX(0px)';
    document.querySelector('.sign-in-cover').style.zIndex = '4';
    document.querySelector('.sign-On-cover').style.zIndex = '3';
    document.querySelector('.sign-in-cover').style.borderRadius="15px 0px 0px 15px" ;
    document.querySelector('.sign-On-cover').style.borderRadius="15px 15px 15px 15px" ;
    
}     

function SigninOpen(){
    document.querySelector('.sign-On-cover').style.transform = 'translateX(456px)';
    document.querySelector('.sign-in-cover').style.transform = 'translateX(456px)';
    document.querySelector('.sign-in-cover').style.zIndex = '3';
    document.querySelector('.sign-On-cover').style.zIndex = '4';
    document.querySelector('.sign-On-cover').style.borderRadius=" 0px 15px 15px  0px " ;
    document.querySelector('.sign-in-cover').style.borderRadius="15px 15px 15px 15px" ;
    
}    


function Next(){
    const signUpForm = document.querySelector('.signUpForm');
    const signUpback = document.querySelector('.signUpback');
    const requiredFields = signUpForm.querySelectorAll('[required]');
    let allFieldsFilled = true;

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        signUpForm.style.transform = 'rotateY(-180deg)';
        signUpback.style.transform = 'rotateY(0deg)';
    } else {
        alert('Please fill all required fields.');
    }
}

function signinupclose(){
    document.querySelector('.SignOn').style.display = 'none';
}


function signupcom(){
    document.querySelector('.SignOn').style.display = 'none';
}

function signupcom(){
    document.querySelector('.SignOn').style.display = 'none';
}