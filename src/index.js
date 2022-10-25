// import _ from 'lodash';
import './style.css';

const element = document.querySelector('#container');
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  render(data);
  return data;
};
fetchData(mealUrl);

const render = (data) => {
  const { categories } = data;
  categories.forEach((cat) => {
    element.innerHTML += `
    <div id="card-a" class="card-a">
      <img src="${cat.strCategoryThumb}" alt="Picture">
      <div class="space-like">
        <p>Space</p>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
      <div class="like">
        <label for="text">0</label>
        <label for="text">Likes</label>
      </div>
      <div class="btns">
        <button type="button" id="comment" class="comment">Comments</button>
        <button type="button" id="reserve" class="reserve">Reserve</button>
      </div>
    </div>
  `;
  });
};
