import Post from './post';
import json from '../assets/json.json';
import css from '../styles/styles.css';
import myPicture from '../assets/after.png';

const post = new Post('Webpack post title', myPicture);

console.log('post to string: ', post.toString());
console.log('JSON: ', json)