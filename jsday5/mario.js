const mario = document.querySelector('.gif'); 
const step = 30; 
let marioX = 10; 

function updateMarioPosition() {
    mario.style.left = `${marioX}px`; 
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        marioX += step; 

        if (marioX > window.innerWidth) {
            marioX = 0; 
        }

        updateMarioPosition(); 
    }
});

updateMarioPosition();


