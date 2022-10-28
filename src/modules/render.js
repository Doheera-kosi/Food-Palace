import likesCounter from './likesCounter.js';

const getlikesCounter = (item) => {
  const span = document.querySelector('#likesCounter');
  const result = likesCounter(item);
  span.textContent = result;
};

const render = (data, element) => {
  element.innerHTML = '';
  data.forEach((cat) => {
    element.innerHTML += `
      <div id="${cat.idCategory}" class="card-a">
      <img src="${cat.strCategoryThumb}" alt="Picture">
        <div class="space-like">
          <p>${cat.strCategory}</p>
          <i class="fa fa-heart" id=${cat.idCategory} aria-hidden="true"></i>
        </div>
        <div class="like">
          <label for="text" class="show" >${cat.likes || 0}</label>
          <label for="text">Likes</label>
        </div>
        <div class="btns">
        <button type="button" id=${
  cat.idCategory
} class="reserve">Reserve</button>
        <button type="button" id=${
  cat.idCategory
} class="comment">Comments</button>
        </div>
        </div>
        `;
  });
  getlikesCounter(element.children);
};
export default render;
