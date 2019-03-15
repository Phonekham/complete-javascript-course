import axios from 'axios';
export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9ae098ee739d17d4ca8dcd11dc6932ef';
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      // console.log(res);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}