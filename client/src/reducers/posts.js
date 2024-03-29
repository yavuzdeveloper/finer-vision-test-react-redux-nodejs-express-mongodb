import { FETCH_ALL, CREATE } from '../constants/actionTypes';


const posts = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL: 
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
      return posts;     
    }
};


export default posts;