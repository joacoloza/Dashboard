//buttons
const gitBtn = document.getElementById("gitBtn");
const linkdnBtn = document.getElementById("linkdnBtn");
const igBtn = document.getElementById("igBtn");

gitBtn.addEventListener('click',()=>{
    window.location.href="https://github.com/joacoloza";
})

linkdnBtn.addEventListener('click',()=>{
    window.location.href="https://www.linkedin.com/in/joaquin-loza-ciappa-b761352b2/";
})

igBtn.addEventListener('click',()=>{
    window.location.href="https://www.instagram.com/joacoloza/";
})

//projects grid
const colorTracker = document.getElementById("colorTracker");
const volumeGesture= document.getElementById("volumeGesture");
const ecomerce = document.getElementById("ecomerce");
const backtracking = document.getElementById("backtracking");
const DFS = document.getElementById("DFS");
const landingPage = document.getElementById("landingPage");

colorTracker.addEventListener('click',()=>{
  window.location.href="https://github.com/joacoloza/color-tracker";  
})

volumeGesture.addEventListener('click',()=>{
    window.location.href="https://github.com/joacoloza/gesture-volume-control";  
  })

ecomerce.addEventListener('click',()=>{
    window.location.href="https://github.com/joacoloza/ecommerce-chatbot";  
  })
backtracking.addEventListener('click',()=>{
    window.location.href="https://github.com/joacoloza/backtracking-project";  
  })
  DFS.addEventListener('click',()=>{
    window.location.href="https://github.com/joacoloza/DFS-project";  
  })
  landingPage.addEventListener('click',()=>{
    window.location.href="https://github.com/joacoloza/Landing-Page";  
  })