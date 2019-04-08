require('./alert.js');

import greetings from './robot.js'
document.write(greetings('Hello', 'Dave'));

import styles from './app.scss'
// let element = `
//   <div class="element">
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
//   </div>
// `
let element = `
  <div class="${styles.element}">
    <h1 class="${styles.title}">Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`

document.write(element);
