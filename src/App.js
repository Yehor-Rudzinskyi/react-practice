// Главный компонент приложения, который по простому - функция, принимающая настройки(props) и отдающая виртуальный DOM, который в итоге рендерится
//Тк имеем тут JSX выражение, то в обязательном порядке вызываем React, иначе не странспайлится. Также кидаем сюда компонент-конструктор и данные, которае будем туда передавать.

// import React from 'react';
import paintingsData from './painting.json'
import PaintingList from './components/PaintingList'
import Logo from './components/Logo';
import Panel from './components/Panel'

// Благодаря модулям джейсон парсится автоматом и залетает сюда уже просто массивом объектов. Нам остаётся только подставить данные.

console.log(paintingsData);

// Всё, что между закрывающимся и открывающимся тегом - это строка!!! Рендер коллекции можем осуществлять через map

const numbers = [1,2,3,4,5,6]

const App = () => {
    return (
        <div>
            <Panel title="News new"><p>Hello</p></Panel>
            <Panel><p>Privet</p> <p>lorem dfjkfj 3423 gjsfkj</p></Panel>
         <Logo text = "Главный компонент контейнер приложения" />
            <PaintingList paintingsData={paintingsData}/>

            {/* <ul>
                {paintingsData.map(number => <li key= {number.id}>
                    <Painting
                url={number.url}
                title={number.title}
                price={number.price}
                profileUrl = {number.author.url}
                tag={number.author.tag}
                quantity = {number.quantity} /></li>)}
                </ul>
            
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
                */}
        </div>
    );
};

export default App;

//Прокидываем его в наш index.js
//Там где рендерятся компоненты - передаются пропсы(props), которые собираются в один объект и далее можно использовать в компоненте. Для динамического рендера Реакт элементов, юзаем наш любимый метод перебора map. Однако, JSX НЕ распознаёт разницу между этими элементами. Соответственно нам необходимо дать каждому Реакт элементу ключ, который мы берём из прилетающих данных и ими являются их id! Ключи помогают Реакту опознать элементы динамической коллекции. Для КАЖДОЙ коллекции должны быть свои уникальные ключи. Если нет в рпилетающих данных id, то мы можем использовать уникальные данные из прилетающей коллекции. Например заголовки/имена/номера

//Список карточек, также является компонентом, который мы должны вынести отдельно!

//Между открывающимся и закрывающимся тегом компонента можем передавать детей (children). Если один - то элемент, если нескольео - то массив элементов. Сhildren увидим во вкладке компонентов и можем в компоненте передать(прокинуть) пропсом, после чего проставить для рендера. По умолчанию, если простовляем между JSX тегом элемент, то он не отобразится пока мы явно это не пропишем в компоненте!