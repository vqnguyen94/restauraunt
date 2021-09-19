//Contact page
import bobar from './bobar.jpg';

export default function contact(){
    const mainContainer = document.createElement('div');
    const locationInfo = document.createElement('div');
    const locationArea = document.createElement('h1');
    const locationAddress = document.createElement('h2');
    const locationImg = new Image();

    locationImg.src = bobar;
    locationImg.setAttribute('id', 'location-img');

    mainContainer.setAttribute('id', 'contact-content');
    locationArea.setAttribute('id', 'location-area');
    locationAddress.setAttribute('id', 'location-address');

    locationArea.innerHTML = "Bobar Elk Grove Village - <br>Strawberry Hill Plaza";
    locationAddress.innerHTML = "621 Meacham Rd <br> Elk Grove Village, 60007 <br> (773) 744-4284";

    locationInfo.appendChild(locationArea);
    locationInfo.appendChild(locationAddress);
    locationInfo.setAttribute('id', 'location-info');

    mainContainer.appendChild(locationImg);
    mainContainer.appendChild(locationInfo);
    mainContainer.classList.toggle('fade');
    return mainContainer;
}
