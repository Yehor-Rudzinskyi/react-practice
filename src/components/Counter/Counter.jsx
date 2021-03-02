import React from 'react';
import './Counter.css'
import Controls from './Controls'

// Создаём класс Counter, наследуя родительский Ract.Component, содержащий кучу методов и настроек

class Counter extends React.Component {
    // метод рендер возвращает только разметку!
    // State - внутреннее состояние, которое изменяется методами самого класса. По старинке юзаем через конструктор не забывая перед определением состояния вызвать метод super(). Это состояние мы можем передать в любое место разметки

    // constructor() {
    //     super()
    //     this.state = {
    //         value: 66,
    //     }
    // };

    // Но сейчас Бабел за нас транспилирует constructor в публичное свойство. Также с помощью Бабел можем проп по деолту и пропТайпы прописывать через static
    static defaultProps = {
        initialValue: 0
    }

    static propTypes = {

    }

    state = { value: this.props.initialValue }
    
    // Для обновления состояния (в данном случае value: 55), нам необходимо написать метод(setState(update,callback)), который поменяет значение, а Реакт при изменении сам автоматически отрендерит!

    handleIncrement = (event) => {
        console.log('Click Plus')
        console.log(this);
        setTimeout(() => {
            console.log(event)
        }, 1000)
        // В метод  this.setState () передаём объект, в котором бы хотелось обновить состояние. Но такой вариант одноразовый и статичен и не подойдёёт для обновления параматра относительно предидущего состояния

        // this.setState({ value: 15 })

        //Если желаем отталкиваться от предидущего состояния, то тут нам поможет вызов функции this.setState = (prevState) => {} , где в prevState автоматом ложится предидущее состояние

        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        })
    }

    // SyntheticEvent Object, приходит к нам на замену привычному, но с таким же интерфейсом. Однако event доступен только в синхронном коде! Ибо его значение сразу очищается. Чтобы сохранить значение в ассинхронном коде,необходимо записать необходимый event в переменную!
    handleDecrement = (event) => {
        console.log('Click Minus')
        console.log(event);
        this.setState(prevState => {
            return {
                value: prevState.value -1
            }
        })
    }

    render() {
        return (
            <div className='Counter'>
                <span className="Counter__value">{this.state.value }</span>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}/>
                {/* <div className='Counter__controls'>
                    <button type='button' onClick={this.handleIncrement}>Plus 1</button> */}
                    {/* Если желаем в виде коллбэка передать внешнюю функцию, то нам неоходимо создать метод класса с привязанным контекстом, ведь при передаче метода объекта в какой-либо обработчик события this будет ссылаться на сам элемент. Привязать можно переделав метод в стрелочную функцию  */}
                    {/* <button type='button' onClick={this.handleDecrement} >Minus 1</button>
                </div> */}
            </div>
        )
    }
}


// сОБЫТИЯ В РЕАКТ ЭЛЕМЕНТЫ ПЕРЕДАЁМ В ВИДЕ ПРОПСОВ "onСобытие", с колбек функциями(anonim) в литерале {}(onClick={}| onSubmit={}....)


// const Counter = () => {
//     return (
//         <div className='Counter'>
//             <span className="Counter__value">0</span>

//             <div className='Counter__controls'>
//                 <button type='button'>Plus 1</button>
//                 <button type='button'>Minus 1</button>
//             </div>
//         </div>

//     )
// }

export default Counter