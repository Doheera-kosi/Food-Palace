// import _ from 'lodash';
import './style.css';

const fetchData = async () => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  const data = await res.json();
};
fetchData();