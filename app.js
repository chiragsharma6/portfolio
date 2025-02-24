const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const video4 = document.getElementById('projectvideo4');
const video5 = document.getElementById('projectvideo5');
const video6 = document.getElementById('projectvideo6');
const hoversign = document.querySelector(".hover-sign");


const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');



const videolist = [video1 , video2 , video3 , video4 , video5 , video6];

videolist.forEach(function(video){
    video.muted = true;
    video.addEventListener('mouseover', function(){
        video.play();
        hoversign.classList.add("active");
    })

    video.addEventListener('mouseout', function() {
        video.pause();
        hoversign.classList.remove("active");
    })
})


menu.addEventListener("click" , function(){

    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
})

close.addEventListener("click" , function(){
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
})
