document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('wildlifeVideo');
  const videoFrame = document.getElementById('videoFrame');
  const toggleBtn = document.getElementById('toggleBtn');
  const btnText = toggleBtn.querySelector('.btn-text');
  const btnIcon = toggleBtn.querySelector('.btn-icon');

  toggleBtn.addEventListener('click', function () {
    const isHidden = videoFrame.style.display === 'none';

    if (isHidden || video.paused || video.ended) {
      videoFrame.style.display = 'block';
      video.play();
      btnText.textContent = 'Pause & hide video';
      btnIcon.textContent = '\u2759\u2759';
      toggleBtn.setAttribute('aria-pressed', 'false');
    } else {
      video.pause();
      videoFrame.style.display = 'none';
      btnText.textContent = 'Show & play video';
      btnIcon.textContent = '\u25B6';
      toggleBtn.setAttribute('aria-pressed', 'true');
    }
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