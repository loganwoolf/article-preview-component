const authorPanel = document.querySelector('.author-panel');
const avatar = document.querySelector('.avatar');
const shareLabel = document.querySelector('.share');
const postInfo = document.querySelector('.post-info');
const socialButtons = document.querySelector('.social');

const darkColor = 'hsl(217, 19%, 35%)';

const shareButton = document.querySelector('.share-button');

function toggleSharePanel() {
  if (!shareButton.classList.contains('dark')) {
    //darken background of authorPanel
    authorPanel.classList.add('dark');
    //switch to dark button;

    //hide avatar
    avatar.classList.add('hidden');
    //hide postInfo
    postInfo.classList.add('hidden');
    //unhide shareLabel
    shareLabel.classList.remove('hidden');
    //unhide socialButtons
    socialButtons.classList.remove('hidden');


  }

}
shareButton.addEventListener('click', toggleSharePanel);