import { restaurants } from '../../constants/mock.js'
import { Tabs } from '../Tabs/components.jsx'
import { Restaurant } from '../Restaurant/components'
import { useState } from "react";


export const Restaurants = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    return (
    <>
        <Tabs tabs={restaurants.map((item) => item.name)} onClick={setActiveRestaurantIndex} />
        <Restaurant restaurantInfo={ restaurants[activeRestaurantIndex] }/>
    </>
    );
}