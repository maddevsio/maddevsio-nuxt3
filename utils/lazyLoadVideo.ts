export const lazyLoadVideo = () => {
  const lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'))

  if ('IntersectionObserver' in window) {
    const lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          const target = video.target as HTMLVideoElement
          for (const source in target.children) {
            const videoSource = target.children[source] as HTMLVideoElement;
            target.poster = target.dataset.poster!
            if (videoSource.tagName === 'SOURCE') {
              videoSource.src = videoSource.dataset.src!
            }
          }

          target.load()
          target.classList.remove('lazy')
          observer.unobserve(target)
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo)
    });
  }
}
