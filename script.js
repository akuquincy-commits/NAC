const home = document.getElementById("home")
const backBtn = document.getElementById("backBtn")
const navBar = document.getElementById("navBar")
const about = document.getElementById("about")
const showNavBtn = document.getElementById("showNavBtn")
const hero = document.getElementById("hero")
const backBtnsArea = document.getElementById("backBtnsArea")


showNavBtn.style.display = "none"

hideNavBtn.addEventListener("click", function(){
    navBar.style.animation = "slideOutOf 1s"
    navBar.style.display = "none"
    hideNavBtn.style.display = "none"
    showNavBtn.style.display = ""
    hero.style.width = "100vw"
    hero.style.marginLeft = "0vw"
    backBtnsArea.style.top = "3px"
    backBtnsArea.style.marginLeft = "3vw"
    about.style.padding = "30px"
    
})
showNavBtn.addEventListener("click", function(){
    navBar.style.display = ""
    showNavBtn.style.display = "none"
    hideNavBtn.style.display = ""
    navBar.style.animation = "slideInto 0.5s"
    hero.style.width = ""
    hero.style.marginLeft = ""
     backBtnsArea.style.top = ""
    backBtnsArea.style.marginLeft = ""
})

const observer = new IntersectionObserver((items) => {
    items.forEach((item)=>{
        if(item.isIntersecting){ 
          item.target.classList.add("show") 
        }else{
          item.target.classList.remove("show")  
        } 
    })
}, {
    threshold: 0.3
})

const presentp = document.querySelectorAll(".homePara")
presentp.forEach(presentItem => observer.observe(presentItem))

const presenth = document.querySelectorAll(".homeHead")
presenth.forEach(presentItem => observer.observe(presentItem))

const presentb = document.querySelectorAll(".homeContent #quoteBtn")
presentb.forEach(presentItem => observer.observe(presentItem))

const presentaboutText = document.querySelectorAll(".aboutTextContainer")
presentaboutText.forEach(presentItem => observer.observe(presentItem))

const presentaboutImg = document.querySelectorAll(".imageContainer #aboutImage")
presentaboutImg.forEach(presentItem => observer.observe(presentItem))

//work on this later we want to highlight the btn when the page is in display
// const observer2 = new IntersectionObserver((pages) =>{
//     // console.log(pages[0].target)
//     if()
// },{})

// const element = document.getElementById("home")
// observer2.observe(element)