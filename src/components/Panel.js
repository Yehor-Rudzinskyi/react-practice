import React from 'react';
import PropTypes from 'prop-types';



const Panel = ({ title, children }) => (<div>
 {title && <h2>{title}</h2>}
 {children}
</div>);


export default Panel
 
// Прокидываем children через пропс и рендерим в разметку. Деструктуризируем children и добавляем на приход title. Так как в один JSX тег мы передаём title а в другой нет, то для того чтобы не рендерился пустой заголовок ставим рендер по условию с помощью &&

Panel.defaultProps = {
    title: ''
};

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

// Так как title не обязателен, то ставим ему значение по дефолту. Когда желаем описать children, то ставим PropTypes.node