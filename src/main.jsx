import React from 'react'
import ReactDOM from 'react-dom/client'
import {restaurants} from './constants/mock.js'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div className="restaurants">
    <div className="restaurant-item">
      <h2 className="restaurant-item__name"> {restaurants[0].name} </h2>
      <strong className="restaurant-item__subtitle">Меню</strong>
      <ul className="restaurant-item__menu">
        <li> {restaurants[0].menu[0].name} </li>
        <li> {restaurants[0].menu[1].name} </li>
        <li> {restaurants[0].menu[2].name} </li>
      </ul>
      <strong className="restaurant-item__subtitle">Отзывы</strong>
      <dl className="restaurant-item__views">
        <dt> {restaurants[0].reviews[0].user} </dt>
        <dd> {restaurants[0].reviews[0].text} </dd>
        <dt> {restaurants[0].reviews[1].user} </dt>
        <dd> {restaurants[0].reviews[1].text} </dd>
      </dl>
    </div>
    <hr />
    <div className="restaurant-item">
      <h2 className="restaurant-item__name"> {restaurants[1].name} </h2>
      <strong className="restaurant-item__subtitle">Меню</strong>
      <ul className="restaurant-item__menu">
        <li> {restaurants[1].menu[0].name} </li>
        <li> {restaurants[1].menu[1].name} </li>
      </ul>
      <div className="restaurant-item__subtitle">Отзывы</div>
      <dl className="restaurant-item__views">
        <dt> {restaurants[1].reviews[0].user} </dt>
        <dd> {restaurants[1].reviews[0].text} </dd>
        <dt> {restaurants[1].reviews[1].user} </dt>
        <dd> {restaurants[1].reviews[1].text} </dd>
        <dt> {restaurants[1].reviews[2].user} </dt>
        <dd> {restaurants[1].reviews[2].text} </dd>
      </dl>
    </div>
    <hr />
    <div className="restaurant-item">
      <h2 className="restaurant-item__name"> {restaurants[2].name} </h2>
      <strong className="restaurant-item__subtitle">Меню</strong>
      <ul className="restaurant-item__menu">
        <li> {restaurants[2].menu[0].name} </li>
        <li> {restaurants[2].menu[1].name} </li>
        <li> {restaurants[2].menu[2].name} </li>
      </ul>
      <strong className="restaurant-item__subtitle">Отзывы</strong>
      <dl className="restaurant-item__views">
        <dt> {restaurants[2].reviews[0].user} </dt>
        <dd> {restaurants[2].reviews[0].text} </dd>
      </dl>
    </div>
    <hr />
    <div className="restaurant-item">
      <h2 className="restaurant-item__name"> {restaurants[3].name} </h2>
      <strong className="restaurant-item__subtitle">Меню</strong>
      <ul className="restaurant-item__menu">
        <li> {restaurants[3].menu[0].name} </li>
        <li> {restaurants[3].menu[1].name} </li>
      </ul>
      <strong className="restaurant-item__subtitle">Отзывы</strong>
      <dl className="restaurant-item__views">
        <dt> {restaurants[3].reviews[0].user} </dt>
        <dd> {restaurants[3].reviews[0].text} </dd>
        <dt> {restaurants[3].reviews[1].user} </dt>
        <dd> {restaurants[3].reviews[1].text} </dd>
      </dl>
    </div>
    <hr />
  </div>
);