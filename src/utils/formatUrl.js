function formaterUrl(videoUrl){
  return videoUrl.replace('https://www.youtube.com/watch?v=', '');
}

function generateThumb(videoId){
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export {
  formaterUrl,
  generateThumb
}