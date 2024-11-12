const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
            stopSongs();
        } else {
            const audio = panel.querySelector('audio');
            stopSongs();
            removeActiveClasses();
            panel.classList.add('active');
            audio.play();
        }
    });
});


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function stopSongs() {
    panels.forEach(panel => {
        const audios = panel.querySelector('audio');
        if (audios) {
            audios.pause();
            audios.currentTime = 0;
        }
    })
}