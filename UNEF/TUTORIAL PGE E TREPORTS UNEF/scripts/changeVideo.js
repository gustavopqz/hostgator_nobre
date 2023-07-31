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
    if(stepNumber.match('PGE')){
        video.setAttribute('src','./videos/1.mp4')
        step.classList.add('active')
    }else if(stepNumber.match('TREPORTS')){
        video.setAttribute('src','./videos/2.mp4')
        step.classList.add('active')
    }
    
    if(window.innerWidth < 1040){
        video.scrollIntoView({ behavior: 'smooth' });
        // video.requestFullscreen()
    }
}