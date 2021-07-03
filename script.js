const arrow = document.querySelector('.arrow');
const authorPanel = document.querySelector('.author-panel');
const avatar = document.querySelector('.avatar');
const postInfo = document.querySelector('.post-info');
const shareButton = document.querySelector('.share-button');
const shareLabel = document.querySelector('.share');
const socialButtons = document.querySelector('.social');

const body = document.querySelector('body');
const post = document.querySelector('.post');
const image = document.querySelector('.image');

function toggleSharePanel() {
  if (!shareButton.classList.contains('medium')) {
    console.log('showing')
    //darken background of authorPanel
    authorPanel.classList.add('dark');
    //switch to dark button;
      //background of button
    shareButton.classList.add('medium');
      //arrow on button
    arrow.classList.add('brighten');
    //hide avatar
    avatar.classList.add('hidden');
    //hide postInfo
    postInfo.classList.add('hidden');
    //unhide shareLabel
    shareLabel.classList.remove('hidden');
    //unhide socialButtons
    socialButtons.classList.remove('hidden');
  } else {
    console.log('hiding');
    authorPanel.classList.remove('dark');
    shareButton.classList.remove('medium');
    arrow.classList.remove('brighten');
    avatar.classList.remove('hidden');
    postInfo.classList.remove('hidden');
    shareLabel.classList.add('hidden');
    socialButtons.classList.add('hidden');
  }
}

function hideSharePanel() {
  if (shareButton.classList.contains('medium')) {
    console.log('hiding');

  }
}



shareButton.addEventListener('click', toggleSharePanel);
// body.addEventListener('click', hideSharePanel);
// post.addEventListener('click', hideSharePanel);
// image.addEventListener('click', hideSharePanel);
