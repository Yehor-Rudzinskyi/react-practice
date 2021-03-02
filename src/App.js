// Главный компонент приложения, который по простому - функция, принимающая настройки(props) и отдающая виртуальный DOM, который в итоге рендерится
//Тк имеем тут JSX выражение, то в обязательном порядке вызываем React, иначе не странспайлится. Также кидаем сюда компонент-конструктор и данные, которае будем туда передавать.

import React, {Component} from 'react';
import paintingsData from './painting.json'
import PaintingList from './components/PaintingList/PaintingList'
import Logo from './components/Logo';
import Panel from './components/Panel/Panel'
import ColorPicker from './components/ColorPicker/ColorPicker'
import Notifications from './components/Notifications/Notifications'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import Counter from './components/Counter'
import Dropdown from './components/Dropdown'
import ColorPickerD from './components/ColorPickerDinamic'
import TodoList from './components/Todo'

// Благодаря модулям джейсон парсится автоматом и залетает сюда уже просто массивом объектов. Нам остаётся только подставить данные.

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// Всё, что между закрывающимся и открывающимся тегом - это строка!!! Рендер коллекции можем осуществлять через map

// const numbers = [1,2,3,4,5,6]

class App extends Component {
    state = {
        todos: [
            { id: 'id-1', text: 'learn React', complited: true },
            { id: 'id-2', text: 'inderstand React Router', complited: false },
            { id: 'id-3', text: 'Try dont kill themself by Redux', complited: false }]
    }

    deleteTodo = (todoId) => {
        this.setState(prevState =>({
        todos: prevState.todos.filter((todo)=> todo.id !== todoId)
    }))
}

    render() {
        const { todos } = this.state
        // const complitedTodo = todos.filter(todo=> todo.complited).length
        const complitedTodo = todos.reduce((acc,todo)=> todo.complited ? acc + 1 : acc, 0)
        return (
            <>
                <AppBar />
                <Container>
 

                    <Panel title="News new"><p>Hello</p></Panel>
                    <Notifications text='Congratulations!' type='success' />
                    <Notifications text='No good today!' type='error' />
                    <ColorPicker colors={colorPickerOptions} />
                    <Panel><p>Privet</p> <p>lorem dfjkfj 3423 gjsfkj</p></Panel>

                    <Logo text="Главный компонент контейнер приложения" />
                    <PaintingList paintingsData={paintingsData} />

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
                </Container>
                <Counter initialValue={10} />
                <Dropdown />
                <ColorPickerD options={colorPickerOptions} />
                <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
                <div>
                    <p>Общее кол-во: {todos.length}</p>
                    <p>Завершённые: { complitedTodo}</p>
                </div>
            </>
        )
    
    }
}
    
export default App;

//Прокидываем его в наш index.js
//Там где рендерятся компоненты - передаются пропсы(props), которые собираются в один объект и далее можно использовать в компоненте. Для динамического рендера Реакт элементов, юзаем наш любимый метод перебора map. Однако, JSX НЕ распознаёт разницу между этими элементами. Соответственно нам необходимо дать каждому Реакт элементу ключ, который мы берём из прилетающих данных и ими являются их id! Ключи помогают Реакту опознать элементы динамической коллекции. Для КАЖДОЙ коллекции должны быть свои уникальные ключи. Если нет в рпилетающих данных id, то мы можем использовать уникальные данные из прилетающей коллекции. Например заголовки/имена/номера

//Список карточек, также является компонентом, который мы должны вынести отдельно!

//Между открывающимся и закрывающимся тегом компонента можем передавать детей (children). Если один - то элемент, если нескольео - то массив элементов. Сhildren увидим во вкладке компонентов и можем в компоненте передать(прокинуть) пропсом, после чего проставить для рендера. По умолчанию, если простовляем между JSX тегом элемент, то он не отобразится пока мы явно это не пропишем в компоненте!