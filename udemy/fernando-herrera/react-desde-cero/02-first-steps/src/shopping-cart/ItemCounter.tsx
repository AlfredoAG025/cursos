import { useState } from "react";

// import './itemCounter.css';
import styles from './itemCounter.module.css';

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    const [counter, setCounter] = useState(quantity);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        if (counter === 1) return;
        setCounter(counter - 1);
    }

    return (
        <section className={styles['item-row']}>
            <span className={styles['item-text']} style={{
                color: counter === 1 ? 'red' : 'black',
            }}>
                {name}
            </span>
            <button onClick={() => handleAdd()}>+1</button>
            <span>{counter}</span>
            <button onClick={() => handleSubstract()}>-1</button>
        </section>
    );
}
