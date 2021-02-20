import React from 'react';
import './ColorPicker.css'

// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 70,
//         height: 30,
//         margin: 4
//     }
// }

// Динамически прилетающие стили вполне можно инлайнить. Остальную статику выносим отдельно

const ColorPicker = ({ colors }) => {
    return (
        <div className='ColorPicker'>
            <h2 className='ColorPicker-title'>Color Picker</h2>
            {colors.map((color) => <span
                key={color.label}
                style={{
                    backgroundColor: color.color
                }}
                className='ColorPicker-options'>{color.color}</span>)}
        </div>
    );
};

export default ColorPicker;