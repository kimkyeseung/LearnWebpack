import _ from 'lodash';
require('./style.css');

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','weeeeee!eeeebpack'], ' ');

  return element;
}

document.body.appendChild(component());