//Home page
import boba from './boba.jpg';

export default function home(){
    const mainContainer = document.createElement('div');
    const slogan = document.createElement('div');
    const orderNow = document.createElement('button');
    const homeImg = new Image();

    homeImg.src = boba;

    mainContainer.setAttribute('id', 'home-content');
    slogan.setAttribute('id', 'slogan'); 
    orderNow.setAttribute('id', 'order-now'); 

    slogan.textContent = "Freshly made teas and sweets";
    orderNow.textContent = "ORDER NOW";

    mainContainer.appendChild(slogan);
    mainContainer.appendChild(orderNow);

    mainContainer.classList.toggle('fade');
    
    return mainContainer;
}