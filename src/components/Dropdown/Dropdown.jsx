import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
}

    // show = () => {
    //     this.setState({ visible: true })
    // };
    
    // hide = () => {
    //     this.setState({ visible: false })
    // };

    render() {
        const {visible} = this.state
        return (
            <div className='Dropdown'>
                {/* <button type='button' className='Dropdown__toggle' onClick= {this.show}>Show</button>
                <button type='button' className='Dropdown__toggle' onClick={this.hide}>Hide</button> */}
                <button type='button' className='Dropdown__toggle' onClick={this.toggle}>{visible ? 'Hide' : 'Show'}</button>
                {visible && ( <div className='Dropdown__menu'>Dropdown Menu</div>)}
               
            </div>
        ) 
    }
};

// Сделали методы изменяющие при кликах значение visible и теперь в рендере открывая выражение {} ставим условие при котором будет рендериться наша вкладка. Также можно оптимизировать, создав метод toggle для одной кнопки, но для него нам понадобится пред идущее состояние. Поэтому будем юзать prevState. При отображении контента кнопки, также удобно юзать тернарник

export default Dropdown;