// чтобы создавать элементы
import React from 'react';
// чтобы рендерить элементы
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
// Базовые Css стили можем просто заимпортировать тутоньки
import './style.css';


//Создаём виртуальный элемент DOM-дерева. Указываем тип элемента(тег)/ в объект его атрибуты(props) \ значение внутри тега(контент) - дети, то что будет стоять между закрывающим и открывающим тегом <а> ... </a>
const link = React.createElement("a", { href: "reactjs.org", target:"_blank" }, "Ccылочка");
// JSX - расширение синтаксиса JS. С помощью Babel происходит трансформация из /|\ в \|/
const jsxLink = <a href="reactjs.org" target="_blank"> Ccылочка</a >;
console.log(link);
console.log(jsxLink);
// Для того чтобы перенести из виртуального дома, в начтоящий - рендерим
// Предаём объекту  ReactDOM метод render в который необходимо передать: "что рендерить" и "куда"
// ReactDOM.render(link, document.getElementById('root')); 

 const painting = {
    "id": "id-1",
    "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    "title": "Feathers. Art abstract. No fuck",
    "price": 666,
    "author": {
      "tag": "ractapopulous",
      "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
  }

  // Сoздаём выражение с шаблоном/разметкой. Атрибуты в кавычках. TextContent - без. 

const template = (
  <div>
    <img src={painting.url} alt={painting.title} width="480" />
    <h2>{painting.title}</h2>
    <p>Цена: {painting.price} кредитов</p>
    <p>Автор: <a href= {painting.author.url }> {painting.author.tag } </a></p>
    <button type="button" >Добавить в корзину</button>
    </div> 
  );
  
console.log(template);
console.log(template.props.children);

//ReactDOM.render выполняется ток один раз. Рендерится родитель.
// ReactDOM.render(template, document.getElementById('root'));

//JSX тег - это встроенный Реакт.компонент и когда передаём атрибуты - мы передаём свойства(как propsы) В том месте, где хотим юзать динамическое значение - юзаем интерполяцию {}. Также это выражение юзаем при подставлении в значение атрибутов(полностью без кавычек)

// Компонент (App) рендерится как бы React.createElement(App), однако, юзая JSX будет происходить:

// ReactDOM.render(<App />, document.getElementById('root')); 

// Возьми компонент App и зарендери его в руут, НО необходимо также использовать открывающий и закрывающий тег компонента. Который поможет найти потенциальные проблемы в создаваемом приложени

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)