import { MenuItem } from "../MenuItem/component"

export const Menu = ({ items }) => {
    return (
        <>
            <h2>Меню</h2>
            <div className="restaurant-menu">
            { items.map( (dish) => <MenuItem key={dish?.id} dishInfo={ dish }/>)}
            </div>
        </>
    )
}