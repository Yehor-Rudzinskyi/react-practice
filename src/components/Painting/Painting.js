import React from 'react';
import defaultImg from './default.jpg';
import propTypes from 'prop-types';
import './Painting.css'

const Painting = ({url,title,price,profileUrl,tag,quantity}) => (<div className="Painting">
    <img src={url} alt={title} />
    <h2>{title}</h2>
    <p>Цена: {price} кредитов</p>
    <p>Автор: <a href={profileUrl}> {tag} </a></p>
    <p>Наличие: {quantity < 10 ? 'маловато' : 'хватит'}</p>
    <button type="button" >Добавить в корзину</button>
    </div> 
);

//Можем как деструктуризировать, так и делать неявный возврат без return, просто в ()

//Указываем картинку по дефолту, импортируя её сюда с локального расположения
Painting.defaultProps = {
    url : defaultImg
};

// Для описания пропов юзаем пакет propTypes? где указываем тип свойства и обязательный/не

Painting.propTypes = {
    url: propTypes.string,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    profileUrl: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    quantity: propTypes.number.isRequired
    
}

// Если пропс обязательный, то дефолт Пропа НЕ нужно прописывать, а если НЕ обязательный, то (неожиданно) нужно!!!

export default Painting;