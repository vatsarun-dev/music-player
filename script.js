let play=document.querySelector(".music .icons #play")
let pause=document.querySelector(".music .icons #pause")
let prev=document.querySelector(".music .icons #prev")
let next=document.querySelector(".music .icons #next")
let page1 =document.querySelector(".page1")
let dets=document.querySelector(".music .details")
let music1=new Audio()
let currentIndex=0

const music = [
  {
    cover: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&w=900&q=80",
    name: "Devil In",
    title: "Glass",
    src: "./assets/weekend.mp3"
  },
  {
    cover: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80",
    name: "Velvet",
    title: "Rythm",
    src: "./assets/weekend.mp3"
  },
  {
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    name: "Blinding Lights",
    title: "The Weeknd",
    src: "./assets/weekend.mp3"
  },
  {
    cover: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
    name: "Sneha 1 Theme",
    title: "(Chennai)",
    src: "./assets/weekend.mp3"
  },
  {
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    name: "Lost In",
    title: "Raja, Illa...",
    src: "./assets/weekend.mp3"
  }
];

play.addEventListener("click",()=>{
    play.style.display="none"
    pause.style.display="block"
    renderMusic()
})



pause.addEventListener("click",()=>{
    play.style.display="block"
    pause.style.display="none"
    stopMusic()
})


prev.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex<0){
        currentIndex=music.length-1
    }
    renderMusic()
    loadMusic()
})
next.addEventListener("click",()=>{
    currentIndex++;
    if(currentIndex>=music.length){
        currentIndex=0
    }
    renderMusic()
    loadMusic()
})



function renderMusic(){
    dets.childNodes[1].src=music[currentIndex].cover
    dets.childNodes[3].childNodes[1].innerText=music[currentIndex].name
    dets.childNodes[3].childNodes[3].innerText=music[currentIndex].title
    dets.childNodes[4].childNodes[1].style.display="block"
    page1.style.setProperty("--bg-image",`url(${music[currentIndex].cover})`)
    music1.src=music[currentIndex].src
    music1.play()
}

function loadMusic(){
    music1.src=music[currentIndex].src
    music1.play()
}

function stopMusic(){
    dets.childNodes[4].childNodes[1].style.display="none"
    music1.pause()
}
