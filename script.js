let play=document.querySelector(".music .icons #play")
let pause=document.querySelector(".music .icons #pause")
let prev=document.querySelector(".music .icons #prev")
let next=document.querySelector(".music .icons #next")
let page1 =document.querySelector(".page1")
let dets=document.querySelector(".music .details")
let img=document.querySelector(".cards .box img")
let h=document.querySelector(".cards .box .dets h3")

let music1=new Audio()
let currentIndex=0
let currentSong=0

const music = [
  {
    cover: "https://i.scdn.co/image/ab67616d0000b27324ad9302d36c1e36ed025963",
    name: "Uska Hi Banana",
    title: "1920 Evils Return",
    src: "./assets/Uska Hi Banana 1920 Evil Returns 320 Kbps.mp3"
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Lady_Gaga_-_Judas_%28single%29.png/250px-Lady_Gaga_-_Judas_%28single%29.png",
    name: "Judas",
    title: "Lady Gaga",
    src: "./assets/Lady Gaga - Judas - GOJO VS SUKUNA.mp3"
  },
  {
    cover: "https://i.pinimg.com/736x/d0/59/d1/d059d1b638a74803d493cb12f5fec22c.jpg",
    name: "Blinding Lights",
    title: "The Weeknd",
    src: "./assets/weekend.mp3"
  },
  {
    cover: "https://i.pinimg.com/736x/1c/3a/1f/1c3a1f747cd206933c9dadfdc38e07e2.jpg",
    name: "Mockingbird",
    title: "Eminem",
    src: "./assets/Eminem - Mockingbird.mp3"
  },
  {
    cover: "https://i.ytimg.com/vi/1rVY08gRGmA/maxresdefault.jpg",
    name: "Fairy Tale",
    title: "Alexander",
    src: "./assets/Alexander Rybak - Fairytale.mp3"
  }
];

play.addEventListener("click",()=>{
    if(currentSong==0){
      play.style.display="none"
    pause.style.display="block"
      renderMusic()
    }
    else{
      play.style.display="none"
    pause.style.display="block"
    dets.childNodes[4].childNodes[1].style.display="block"
      music1.play()
    }
    
})



pause.addEventListener("click",()=>{
    play.style.display="block"
    pause.style.display="none"
    dets.childNodes[4].childNodes[1].style.display="none"

    music1.pause()
})


prev.addEventListener("click",()=>{
  play.style.display="none"
    pause.style.display="block"
    currentIndex--;
    console.log(currentIndex)
    if(currentIndex<0){
        currentIndex=music.length-1
    }
    renderMusic()
   
})
next.addEventListener("click",()=>{
  play.style.display="none"
    pause.style.display="block"
    currentIndex++;
    console.log(currentIndex)
    if(currentIndex>=music.length){
        currentIndex=0
    }
    renderMusic()
    
})



function renderMusic(){
    dets.childNodes[1].src=music[currentIndex].cover
    dets.childNodes[3].childNodes[1].innerText=music[currentIndex].name
    dets.childNodes[3].childNodes[3].innerText=music[currentIndex].title
    dets.childNodes[4].childNodes[1].style.display="block"
    page1.style.setProperty("--bg-image",`url(${music[currentIndex].cover})`)
    music1.src=music[currentIndex].src
    music1.play()
    currentSong++
}


