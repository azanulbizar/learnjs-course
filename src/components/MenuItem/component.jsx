import { Counter } from "../Counter/components"

export const MenuItem = ({ dishInfo }) => {
    return (
        <div>{ dishInfo.name } <Counter /></div>
    )
}