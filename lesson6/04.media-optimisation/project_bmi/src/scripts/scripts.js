'use strict';

import style from "../assets/styles/global.scss";

require ('./cookies.js');

$("#navbarDropdownMenuLink").on('click',function(){
  $("#navbarDropdownMenu").toggleClass('show');
});

document.getElementById('js-current-year').appendChild(document.createTextNode(new Date().getFullYear()))