import Post from '@models/post';
// import json from './assets/json.json';
import css from './styles/styles.css';
import less from './styles/less.less';
import scss from './styles/scss.scss';
import myPicture from './assets/after.png';
// import xml from './assets/xml.xml'
// import csv from './assets/csv.csv'
import * as $ from 'jquery'

const post = new Post('Webpack post title', myPicture);

$('pre').addClass('code').html(post.toString());

//console.log('post to string: ', post.toString());
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);