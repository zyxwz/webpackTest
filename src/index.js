//import _ from 'lodash';
//import printMe from './print.js';
//import './style.css';
import { cube } from './math.js';
import moment from 'moment';

console.log(moment().format());

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
	/*var element = document.createElement('div');
	var btn = document.createElement('button');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);*/

	var element = document.createElement('pre');

	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	return element;
}

var element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

 if (module.hot) {
	 module.hot.accept('./print.js', function() {
		 console.log('Accepting the updated printMe module!');
		 document.body.removeChild(element);
		 element = component(); // Re-render the "component" to update the click handler
		 document.body.appendChild(element);
	 })
 }