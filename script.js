// select top down element

const topDownElements = document.querySelectorAll(".top-down-elements");

const navbar = document.querySelector(".navbar");

const allTopDowns = document.querySelectorAll(".fa-chevron-down");
const searchIcon  = document.querySelector(".search-items-upper-navbar-icon");


// console.log(allTopDowns)
// languages
const languageTopdown = allTopDowns[3]; 
const differentLanguages = document.querySelector(".different-languages");

// category
const categoryTopDown = allTopDowns[2];
const differentCategory = document.querySelector(".category-div");



const searchBar = document.querySelector(".bottom-portion-navbar");


function TopDownElem(){

  allTopDowns.forEach((elem,index)=>{


    elem.addEventListener("mouseenter",()=>{
  
    console.log('hello')
    topDownElements[index].style.display="block";
  
  })
  
  // when we leave the navbar it closes
  navbar.addEventListener("mouseleave",()=>{
  
    // console.log('hello')
    topDownElements[index].style.display="none";
  
  })
  
  
  
  })
  
  
  topDownElements.forEach((elem)=>{
    
    elem.addEventListener("mouseenter",()=>{
        elem.style.display="block";
    
    })
    
    elem.addEventListener("mouseleave",()=>{
          elem.style.display="none";
    })
  })
  

}
TopDownElem();



function searchFunctionality(){

searchIcon.addEventListener("mouseenter",()=>{
   searchBar.style.opacity = "1";
  searchBar.style.pointerEvents = "all";
})

navbar.addEventListener("mouseleave",()=>{
  searchBar.style.opacity = "0";
 searchBar.style.pointerEvents = "none";
})



}
searchFunctionality()


function showLanguages(){

languageTopdown.addEventListener("mouseenter",()=>{
  differentLanguages.style.opacity = "1";
  differentLanguages.style.pointerEvents = "all";
})
  

differentLanguages.addEventListener("mouseleave",()=>{
  differentLanguages.style.opacity = "0";
  differentLanguages.style.pointerEvents = "none";
})

}
showLanguages()


function showCategory(){

  categoryTopDown.addEventListener("mouseenter",()=>{
    differentCategory.style.opacity = "1";
    differentCategory.style.pointerEvents = "all";
  })
    
  
  differentCategory.addEventListener("mouseleave",()=>{
    differentCategory.style.opacity = "0";
    differentCategory.style.pointerEvents = "none";
  })
  


}
showCategory()



// search movies functionality

// script.js

