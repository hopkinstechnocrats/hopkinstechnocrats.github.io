import react from 'react';

export default function CounterInput({ value, setValue}) {
    const increment = () => setValue(value +1)
    const decrement = () => setValue(Math.max(value - 1, 0));

    return  (
        <div>
        <button onClick={decrement} disabled={value <= 0}>-</button>
        <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        />
        <button onClick={increment}>+</button>
        </div>
    );
}