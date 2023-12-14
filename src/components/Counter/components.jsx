import { useState } from "react";
import { Button } from "../Button/component"
export const Counter = () => {
    const [amount, setAmount] = useState(0);
    return (
        <>
            <Button title="-" onClick={() => setAmount(amount - 1)} disabled={amount == 0}/>
            {amount}
            <Button title="+" onClick={() => setAmount(amount + 1)} disabled={amount >= 10}/>
        </>
    )
}