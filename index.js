
document.addEventListener('DOMContentLoaded', (event) => {
    let keysPressed = {};
  
    window.addEventListener('keydown', (e) => {
      if (!keysPressed[e.keyCode]) {
          keysPressed = true;
          console.log('what is keysPressed here', keysPressed)
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const ovalKey = document.querySelector(`div[data-key='${e.keyCode}']`);
  
        if (audio) {
          console.log(e);
          console.log('oval key is ', ovalKey);
          ovalKey.classList.remove('elevation');
          console.log(e.keyCode);
          console.log('audio is ', audio);
          audio.currentTime = 0; // set audio time to the start
          audio.play();
        }
      }
    });
  
    window.addEventListener('keyup', (e) => {
      const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
      const ovalKey = document.querySelector(`div[data-key='${e.keyCode}']`);
      
      if (ovalKey) {
        ovalKey.classList.add('elevation');
      }
        keysPressed[e.keyCode] = false;
    });
  });
  