const videoTitle = document.getElementById('videoTitle')
const video = document.getElementById('video')

const changeVideo = e =>{
    e.preventDefault()
    const target = e.target.textContent


    videoTitle.textContent = target
    if(target == "1. Menu lateral"){
        video.setAttribute('src', './menu-lateral.mp4')
    }else if(target == "2. Disciplina"){
        video.setAttribute('src', './disciplina.mp4')
    }
}