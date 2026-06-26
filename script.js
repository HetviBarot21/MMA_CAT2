document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('wildlifeVideo');
  const videoFrame = document.getElementById('videoFrame');
  const toggleBtn = document.getElementById('toggleBtn');
  const btnText = toggleBtn.querySelector('.btn-text');
  const btnIcon = toggleBtn.querySelector('.btn-icon');
  const skipBackBtn = document.getElementById('skipBackBtn');
  const skipForwardBtn = document.getElementById('skipForwardBtn');

  function revealAndPlay() {
    videoFrame.style.display = 'block';
    video.play();
    btnText.textContent = 'Pause & hide video';
    btnIcon.textContent = '\u2759\u2759';
    toggleBtn.setAttribute('aria-pressed', 'false');
  }

  toggleBtn.addEventListener('click', function () {
    const isHidden = videoFrame.style.display === 'none';

    if (isHidden || video.paused || video.ended) {
      revealAndPlay();
    } else {
      video.pause();
      videoFrame.style.display = 'none';
      btnText.textContent = 'Show & play video';
      btnIcon.textContent = '\u25B6';
      toggleBtn.setAttribute('aria-pressed', 'true');
    }
  });

  skipBackBtn.addEventListener('click', function () {
    if (videoFrame.style.display === 'none') {
      revealAndPlay();
    }
    video.currentTime = Math.max(0, video.currentTime - 10);
  });

  skipForwardBtn.addEventListener('click', function () {
    if (videoFrame.style.display === 'none') {
      revealAndPlay();
    }
    video.currentTime = Math.min(video.duration || Infinity, video.currentTime + 10);
  });

  video.addEventListener('pause', function () {
    if (videoFrame.style.display !== 'none') {
      btnText.textContent = 'Play video';
      btnIcon.textContent = '\u25B6';
    }
  });

  video.addEventListener('play', function () {
    btnText.textContent = 'Pause & hide video';
    btnIcon.textContent = '\u2759\u2759';
    toggleBtn.setAttribute('aria-pressed', 'false');
  });
});