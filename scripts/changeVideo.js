const videoTitle = document.getElementById('videoTitle')
const video = document.getElementById('video')

const changeVideo = e =>{
    e.preventDefault()
    const target = e.target.textContent

    video.setAttribute('autoplay', '')
    videoTitle.textContent = target
    if(target == "1. Entrando no portal e Esqueci minha senha"){
        video.setAttribute('src', './videos/1.mp4')
    }else if(target == "2. Tela inicial - Mural"){
        video.setAttribute('src', './videos/2.mp4')
    }else if(target == "3. Menu lateral"){
        video.setAttribute('src', './videos/3.mp4')
    }else if(target == "4. Disciplinas"){
        video.setAttribute('src', './videos/4.mp4')
    }else if(target == "5. Entraga de trabalho"){
        video.setAttribute('src', './videos/5.mp4')
    }else if(target == "6. Central do aluno - Desempenho"){
        video.setAttribute('src', './videos/6.mp4')
    }else if(target == "7. Central do aluno - Faltas"){
        video.setAttribute('src', './videos/7.mp4')
    }else if(target == "8. Central do aluno - Histórico"){
        video.setAttribute('src', './videos/8.mp4')
    }else if(target == "9. Central do aluno - Notas"){
        video.setAttribute('src', './videos/9.mp4')
    }else if(target == "10. Central do aluno - Ocorrências"){
        video.setAttribute('src', './videos/10.mp4')
    }else if(target == "11. Financeiro"){
        video.setAttribute('src', './videos/11.mp4')
    }
}