import axios from 'axios';

const API_KEY = 'wWhJflg1xDEIRL-HZC-426jmMZHpLxgn_nS_Gk5zfFbL-FT9BqEfFPCD7bhR8k3UY0zXOyjqdIQmKXZ5BR9oJddyjCkisceKQhLp_EHoYX72d7O-cSiiXxhfDo9JX3Yx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
})