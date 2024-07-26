const btnCreate = document.querySelector('.create-btn');
const createcreateCommentBox = document.querySelector('.create-comment-box');
const exitButtonFromCreatecreateCommentBox = document.querySelector('.create-comment-box > .exit');

btnCreate.addEventListener('click', () => {
  return createcreateCommentBox.style.display = 'block';
});

exitButtonFromCreatecreateCommentBox.addEventListener('click', () => {
  return createcreateCommentBox.style.display = 'none';
})
