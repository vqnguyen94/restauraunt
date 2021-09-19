import home from './home';
import menu from './menu';
import contact from './contact';
import navbar from './navbar';
import './style.css';

const container = document.querySelector('#content');

//Add nav bar
container.appendChild(navbar());

//Start on home page
container.appendChild(home());

//Get references to nav bar items
const logo = document.querySelector('#logo');
const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

//Logo and home both navigate to home
logo.addEventListener('click', navigateToHome);
homeTab.addEventListener('click', navigateToHome);

//Remove current display and replaces with new display
menuTab.addEventListener('click', () => {
    container.lastElementChild.remove();
    container.appendChild(menu());
    document.title = "Bobar | Menu";
});

contactTab.addEventListener('click', () => {
    container.lastElementChild.remove();
    container.appendChild(contact());
    document.title = "Bobar | Contact";
});

function navigateToHome(){
    container.lastElementChild.remove();
    container.appendChild(home());
    document.title = "Bobar | Home";
}