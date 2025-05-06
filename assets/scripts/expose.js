// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    let imageSrc = '';
    let audioSrc = '';
    let imageAlt = '';

    switch (selectedHorn) {
      case 'air-horn':
        imageSrc = 'assets/images/air-horn.svg';
        imageAlt = 'Air horn'
        audioSrc = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        imageSrc = 'assets/images/car-horn.svg';
        imageAlt = 'Car horn'
        audioSrc = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        imageSrc = 'assets/images/party-horn.svg';
        imageAlt = 'Party horn'
        audioSrc = 'assets/audio/party-horn.mp3';
        break;
    }
    hornImage.src = imageSrc;
    hornImage.alt = imageAlt;
    audioElement.src = audioSrc;
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = parseInt(volumeSlider.value);
    audioElement.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', () => {
    if (audioElement.src) {
      audioElement.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti({
          emojis: ['CSE110','⭐️','✨','⚡️','💥','🌸'],
          confettiNumber: 100
       })

      }
    }
  });
}
