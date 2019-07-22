// import _ from 'lodash';
import printMe from './print';
import './styles.css';
import { get } from 'http';


function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash')
        .then(({ default: _ }) => {
            const element = document.createElement('div');
            element.id = 'obj';
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');


            return element;
        }).catch(error => 'An error occorred while loading component');
}




getComponent().then(component =>{
    document.body.appendChild(component);
})

// hot module replacement example
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!!!');
        let element = document.getElementById('obj');

        document.body.removeChild(element);

        getComponent().then(component =>{
            document.body.appendChild(component);
            printMe();
        })
       
    })
}
