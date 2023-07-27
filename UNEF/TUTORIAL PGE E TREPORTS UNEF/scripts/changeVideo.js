const videoTitle = document.getElementById('videoTitle')
const video = document.getElementById('video')
const steps = Array.from(document.getElementsByClassName('step'))

const changeVideo = e =>{
    e.preventDefault()

    steps.forEach(element =>{
        element.classList.remove('active')
    })
    const step = e.target
    const stepNumber = e.target.children[1].children[0].textContent
    const stepDescription = e.target.children[1].children[1].textContent

    
    video.setAttribute('autoplay', '')
    videoTitle.textContent = stepNumber + ': ' + stepDescription
    if(stepNumber.match('Primeiro')){
        video.setAttribute('src','./videos/1.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Segundo')){
        video.setAttribute('src','./videos/2.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Terceiro')){
        video.setAttribute('src','./videos/3.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Quarto')){
        video.setAttribute('src','./videos/4.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Quinto')){
        video.setAttribute('src','./videos/5.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Sexto')){
        video.setAttribute('src','./videos/6.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Sétimo')){
        video.setAttribute('src','./videos/7.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Oitavo')){
        video.setAttribute('src','./videos/8.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Nono')){
        video.setAttribute('src','./videos/9.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo Passo')){
        video.setAttribute('src','./videos/10.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo primeiro')){
        video.setAttribute('src','./videos/11.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo segundo')){
        video.setAttribute('src','./videos/12.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo terceiro')){
        video.setAttribute('src','./videos/13.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo quarto')){
        video.setAttribute('src','./videos/14.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo quinto')){
        video.setAttribute('src','./videos/15.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo sexto')){
        video.setAttribute('src','./videos/16.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo sétimo')){
        video.setAttribute('src','./videos/17.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo oitavo')){
        video.setAttribute('src','./videos/18.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('Décimo nono')){
        video.setAttribute('src','./videos/19.mp4')
        step.classList.add('active')
    }
    
    if(window.innerWidth < 1040){
        video.scrollIntoView({ behavior: 'smooth' });
        // video.requestFullscreen()
    }
}