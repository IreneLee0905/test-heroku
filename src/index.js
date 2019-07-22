import _ from 'lodash';
import printMe from './print';
import './styles.css';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    
    element.innerHTML = _.join(['hello', 'webpack'], '');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());
let element = component(); // store the element to re-render on print.js changes
document.body.appendChild(element);

// hot module replacement example
if( module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        // printMe();

        document.body.removeChild(element);
        element = component(); //Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}
