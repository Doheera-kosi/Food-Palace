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
      <h2 class="post__comment__title">Comments<span></span></h2>
      <div class="comments">
        <div class="comments__item post__comment">
        </div>
      </div>
      <form action='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' class="comment__form">
        <input name='name' class="input__field" type="text" id="name" placeholder="Your name">
        <textarea class="text-area" id="input" cols="30" rows="10" placeholder="Your message"></textarea>
        <button type='submit' class="form_btn">Comment</button>
        <div class="message">
          <p class="success">Form successfully submited</p>
          <p class="danger">Please fill in the form</p>
        </div>
      </form>
    </div>
  </div>
`;
    }
  });
  const popupCloseBtn = document.querySelector('.recipe-close-btn');
  popupCloseBtn.addEventListener('click', () => {
    element.style.display = 'none';
  });
};
export default renderPopUp;
