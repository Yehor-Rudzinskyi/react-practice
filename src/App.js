// Главный компонент приложения, который по простому - функция, принимающая настройки(props) и отдающая виртуальный DOM, который в итоге рендерится
//Тк имеем тут JSX выражение, то в обязательном порядке вызываем React, иначе не странспайлится. Также кидаем сюда компонент-конструктор и данные, которае будем туда передавать.

import React from 'react';
import Painting from './components/Painting';
import paintingsData from './painting.json'

// Благодаря модулям джейсон парсится автоматом и залетает сюда уже просто массивом объектов. Нам остаётся только подставить данные.

console.log(paintingsData);

// Всё, что между закрывающимся и открывающимся тегом - это строка!!! Рендер коллекции можем осуществлять через map

const numbers = [1,2,3,4,5,6]

const App = () => {
    return (
        <div>
            <ul>
                {paintingsData.map(number => <li>
                    <Painting
                url={number.url}
                title={number.title}
                price={number.price}
                profileUrl = {number.author.url}
                tag={number.author.tag}
                quantity = {number.quantity} /></li>)}
                </ul>
            
            <h1>Главный компонент контейнер</h1>
            <Painting
                url={paintingsData[2].url}
                title={paintingsData[2].title}
                price={paintingsData[2].price}
                profileUrl = {paintingsData[2].author.url}
                tag={paintingsData[2].author.tag}
                quantity = {paintingsData[2].quantity} />
              
            
            <Painting
                url='https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg' title='Bird. Animal art abstract'
                price={400}
                profileUrl='https://pixabay.com/users/ractapopulous-24766/'
                tag="ractapopulous"
                quantity={45} />
               
        </div>
    );
};

export default App;

//Прокидываем его в наш index.js
//Там где рендерятся компоненты - передаются пропсы(props), которые собираются в один объект и далее можно использовать в компоненте