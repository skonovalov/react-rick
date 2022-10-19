import React from 'react';
import '../assets/css/menu.css';

const menuList = [
  {
    id: 1,
    link: '/characters',
    name: 'Персонажи'
  },
  {
    id: 2,
    link: '/locations',
    name: 'Локации'
  },
  {
    id: 3,
    link: '/episodes',
    name: 'Эпизоды'
  }
];

function Menu() {
  return (
    <nav className="menu">
      {
        menuList.map(item => (
          <a
            key={item.id}
            href={item.link}
            className="menu-item"
          >
            { item.name }
          </a>)
        )
      }
    </nav>
  );
}

export default Menu;