import axios from 'axios';
async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = '9ae098ee739d17d4ca8dcd11dc6932ef';
  try {
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults('pizza');