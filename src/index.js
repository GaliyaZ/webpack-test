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


document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('.form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    //let error = formValidate(form);
    let formData = new FormData(form);
    let response = await fetch('sendmail.php', {
      method="GET",
      body: formData
    });
  }
  
  // function formValidate(form) {
  //   let error = 0;
  //   let formReq = document.querySelectorAll('._req');
  //   return error;
  // }
})


