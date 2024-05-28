
// listen for keydown, 
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const ovalKey = document.querySelector(`div[data-key='${e.keyCode}']`)

    console.log('oval key is ', ovalKey)
    ovalKey.classList.remove('elevation')
    console.log(e.keyCode)
    console.log('audio is ', audio)
    audio.currentTime = 0; //set audio time to the start
    audio.play()
    audio.loop = false;
    audio.onended = (e) => audio.pause()

    
    // if (audio.currentTime = audio.duration) {
    //     ovalKey.classList.add('elevation')
    //     console.log('time')
    // }

})

window.addEventListener('keyup', (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const ovalKey = document.querySelector(`div[data-key='${e.keyCode}']`)
    ovalKey.classList.add('elevation')
    
})

