import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
export const Restaurant = ({ restaurantInfo }) => {
    
    return (
        <div className="restaurant-info">
            <h1>{ restaurantInfo?.name }</h1>
            <Menu items={ restaurantInfo.menu }/>
            <Reviews items={ restaurantInfo?.reviews }/>
        </div>
    )
}