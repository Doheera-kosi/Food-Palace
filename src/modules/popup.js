import { addComments, getComments } from './comment.js';
const createComment = (commentID) => {
  const formBtn = document.querySelector('.form_btn');
  formBtn.addEventListener('click', () => {
    const id = commentID;
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#input').value;
    const cObj = {
      item_id: id,
      username: name,
      comment,
    };
    addComments(cObj).then((res) => {
      fetchComments(id);
      document.querySelector('#name').value = '';
      document.querySelector('#input').value = '';
    });
  });
};
const fetchComments = async (id) => {
  const cList = document.querySelector('#comment_list');
  await getComments(id).then((data) => {
    if (data.length > 0) {
      const list = data.map((item) => {
        return `<li>
        <span>${item.creation_date}</span>
        <span>${item.username}</span>
        <span>${item.comment}</span>
        </li>`;
      });
      cList.innerHTML = list.join('');
    } else {
      throw Error('No comment available')
    }
  }).catch((error) => {
    const list = `<li>
      ${error.message}
    </li>`;
    cList.innerHTML = list;
  })
}
const renderPopUp = (id, element, data) => {
  // console.log(data);
  element.style.display = 'flex';
  data.categories.forEach((cat) => {
    if (id.toString() === cat.idCategory.toString()) {
      element.innerHTML = `
    <button type="button" class="btn recipe-close-btn" id="recipe-close-btn">
    <i class="fas fa-times"></i>
    </button>
    <div class="meal-details-content">
    <img src=${cat.strCategoryThumb} alt="">
    <h2 class="recipe-title">${cat.strCategory}</h2>
    <p class="recipe-category">Category Name</p>
    <div class="recipe-instruct">
      <h3>Discriptions:</h3>
      <p>${cat.strCategoryDescription}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam voluptatibus ad obcaecati magnam,
        esse numquam nisi ut adipisci in?</p>
    </div>
    <div class="comment__container">
    <p class="recipe-category"></p>
    <ul id='comment_list'></ul>
      <h2 class="post__comment__title">Comments<span></span></h2>
      <div class="comments">
        <div class="comments__item post__comment">
        </div>
      </div>
      <form action='' class="comment_form">
        <input name='name' class="input_field" type="text" id="name" placeholder="Your name">
        <textarea class="text-area" id="input" cols="30" rows="10" placeholder="Your message"></textarea>
        <button type='button' class="form_btn">Comment</button>
        <div class="message">
          <p class="success">Form successfully submited</p>
          <p class="danger">Please fill in the form</p>
        </div>
      </form>
    </div>
  </div>
`;
      fetchComments(cat.idCategory);
      createComment(cat.idCategory);
}
  });
  const popupCloseBtn = document.querySelector('.recipe-close-btn');
  popupCloseBtn.addEventListener('click', () => {
    element.style.display = 'none';
  });
};
export default renderPopUp;