import getLikes, { addLikes } from './modules/likes.js';
import renderPopUp from './modules/popup.js';
import render from './modules/render.js';
import './style.css';

const element = document.querySelector('#container');
const popupWindow = document.querySelector('.meal-details');

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const fetchRecipes = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const fetchData = async (url) => {
  const data = await fetchRecipes(url);
  const likes = await getLikes();
  const storage = [];
  data.categories.forEach((item) => {
    storage.push({
      ...likes.find(
        (innerItem) => innerItem.item_id.toString() === item.idCategory.toString(),
      ),
      ...item,
    });
  });
  return storage;
};

window.onload = async () => {
  const storage = await fetchData(mealUrl);
  render(storage, element);
  element.addEventListener('click', async (e) => {
    if (e.target.className === 'fa fa-heart') {
      const likeContainer = e.target.parentNode.parentNode.querySelector('.show');
      await addLikes(e.target.id);
      const newVal = +likeContainer.innerHTML + 1;
      likeContainer.innerHTML = newVal;
    } else if (e.target.className === 'comment') {
      const recipes = await fetchRecipes(mealUrl);
      renderPopUp(e.target.id, popupWindow, recipes);
    }
  });
};
