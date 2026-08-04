const home = document.getElementById("home")
const services = document.getElementById("services")
const testimonials = document.getElementById("testimonials")
const contact = document.getElementById("contact")
const projects = document.getElementById("projects")
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
    threshold: 0.5
    
})

const cardService1 = document.querySelectorAll(".card")
cardService1.forEach(presentItem => observer.observe(presentItem))




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


const observer2 = new IntersectionObserver((page)=>{
   const currentId = page[0].target.id 
   const links = Array.from(document.querySelectorAll(".links"))
   const elementToHighlight = links.find(el => el.href.includes(currentId))
    if(page[0].isIntersecting){
    elementToHighlight.style.backgroundColor = "#e7ba6071"
  }else{
    elementToHighlight.style.backgroundColor = ""
  }
},
  {
    threshold: 0.5
  }  
)

observer2.observe(home)
observer2.observe(services)
observer2.observe(testimonials)
observer2.observe(contact)
observer2.observe(projects)
observer2.observe(about)






    
