//Navigation bar
import bobar from './bobar.png';

export default function navbar() {
    const navbar = document.createElement('div');

    const logoContainer = document.createElement('div');
    const logo = new Image();
    const tabs = document.createElement('div');

    logo.src = bobar;
    logoContainer.appendChild(logo);

    navbar.setAttribute('id', 'navbar');
    logo.setAttribute('id', 'logo');
    tabs.setAttribute('id', 'tabs');

    const homeTab = document.createElement('div');
    homeTab.textContent = "HOME";
    homeTab.setAttribute('id', 'home'); 

    const menuTab = document.createElement('div');
    menuTab.textContent = "MENU";
    menuTab.setAttribute('id', 'menu'); 

    const contactTab = document.createElement('div');
    contactTab.textContent = "CONTACT";
    contactTab.setAttribute('id', 'contact'); 

    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    navbar.appendChild(logoContainer);
    navbar.appendChild(tabs);

    return navbar;
}
