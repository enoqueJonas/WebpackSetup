import _ from 'lodash';
import './style.css'
import Icon from './speaker_01.png'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // Lodash is imported above
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    console.log(Data);
    console.log(Notes);
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());