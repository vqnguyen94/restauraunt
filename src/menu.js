//Menu page
import img from './menu.jpg';

const menuItems = {
    "Milk Tea": ["Bobar Classic", "Coconut", "Taro", "Wintermelon",
                "Honeydew", "Brown Sugar", "Matcha", "Mango"  ],
    "Fruit Tea": ["Lemon", "Strawberry", "Lychee", "Peach",
                "Mango", "Grapefruit", "Tropical", "Kumquat"  ],
    "Smoothie": ["Banana", "Avocado", "Coconut", "Taro", 
                "Mango", "Lychee", "Strawberry", "Pineapple"],
    "Toppings": ["Brown sugar boba", "Egg pudding", "Red bean", "Sea salt foam",
                "Cheese foam", "Passionfruit popping", "Strawberry popping", "Mango popping"],
    "Sweetness level": ["Sugar free: 0%", "Half sugar: 50%", "Regular sugar: 100%"]
}

export default function menu(){
    const mainContainer = document.createElement('div');
    const menuContent = document.createElement('div');
    const title = document.createElement('h1');
    const leftMenu = document.createElement('div');
    const rightMenu = document.createElement('div');
    const itemImg = new Image();

    title.textContent = "DRINKS";
    title.classList.toggle('menu-title');
    
    menuContent.setAttribute('id', 'menu-content'); 
    leftMenu.setAttribute('id', 'left-menu');
    rightMenu.setAttribute('id', 'right-menu');
    itemImg.setAttribute('id', 'item-img');
    
    itemImg.src = img;

    //Divide menu items into two columns
    leftMenu.appendChild(createMenuSection("Milk Tea"));
    leftMenu.appendChild(createMenuSection("Fruit Tea"));
    leftMenu.appendChild(createMenuSection("Smoothie"));
    rightMenu.appendChild(createMenuSection("Toppings"));
    rightMenu.appendChild(createMenuSection("Sweetness level"));
    
    mainContainer.appendChild(title);
    menuContent.appendChild(leftMenu);
    menuContent.appendChild(itemImg);
    menuContent.appendChild(rightMenu);
    mainContainer.appendChild(menuContent);

    mainContainer.classList.toggle('fade');

    return mainContainer;
}

//Creates menu item section with title and list items
function createMenuSection(category){
    const container = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = category;
    title.classList.toggle('menu-category');
    container.appendChild(title);
    container.appendChild(createMenuItems(category));
    
    return container;
}

//Create list based on category in menuItems object
function createMenuItems(category){
    const items = menuItems[category];

    const list = document.createElement('ul');
    for(let i = 0; i < items.length; i++){
        const listItem = document.createElement("li");
        listItem.textContent = items[i];
        list.appendChild(listItem);
    }

    return list;
}
