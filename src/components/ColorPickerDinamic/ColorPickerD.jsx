import React, { Component } from 'react';
import './ColorPickerD.css'

class ColorPickerD extends Component {
    // Когда мы работаем с массивом, то мы храним именно его индекс!!! 
    state = {
    activeOptionIndx: 1
    }

// Создадим метод который при клике(ображении к нему) будет перезаписывать значение activeOptionIndx! Используем просто this.setState({}) с изменением значения, а если бы нам нужно было отталкиваться от предИдущего значения, то мы бы использовали  this.setState(prevState => ({})
setActiveIndex = (index) => {this.setState({activeOptionIndx : index})}

   optionClassName = (index) => {
        const optionClasses = ['ColorPicker__option']
        if (index === this.state.activeOptionIndx) {
            optionClasses.push('ColorPicker__option--active')
        }
        return optionClasses.join(' ')
    };

// Выносим в публичный метод добавление стиля по условию, упаковывая стиль в массив, после чего при выполнении условия - добавляем его к реакт элементу.

    
    // Вычисляемое свойств- это то , что можем вычислить на базе пропсов и стэйта. Например текущий Лейбл. Таким образом мы можем найти активный элемент
    render() {

        const {label} = this.props.options[this.state.activeOptionIndx]

        return (
            <div className='ColorPicker'>
                <h2 className='ColorPicker__title'>Color Picker</h2>
                <p>Choose color: {label}</p>
                <div>
                    {this.props.options.map(({ label, color }, index) => {
                        const optionClass = this.optionClassName(index)
                        return (<button
                            key={label}
                    
                            style={{
                                backgroundColor: color
                            }}       
                            onClick={() => this.setActiveIndex(index)}
                            className={optionClass}></button>)
                    //   ВНИМАНИЕ! При клике на кнопку, нам тут не нужен результат метода setActiveIndex, а нам нужно просто чтобы эта фенкция при клике отработала, поэтому вызываем при клике анонимную функцию, которая при событии "клика" вызывает/просит отработать метод setActiveIndex
                        // когда должны передать параметр, то анонимная функция, если без параметра, то просто ссылка
                    })}
                </div>
            </div>
        )
    }
}

// Пропсы, которые передаём, булькаются в контекст 'this.props.options'. Мы можем сравнить индекс при переборе и индекс(map), которы находится в state

export default ColorPickerD