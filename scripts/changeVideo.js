const videoTitle = document.getElementById('videoTitle')
const video = document.getElementById('video')

const changeVideo = e =>{
    e.preventDefault()
    const target = e.target.textContent


    videoTitle.textContent = target
    if(target == "1. Entrando no portal e Esqueci minha senha"){
        video.setAttribute('src', './videos/1.mp4')
    }else if(target == "2. Tela inicial - Mural"){
        video.setAttribute('src', './videos/2.mp4')
    }
}