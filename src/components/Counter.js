import react from 'react';

export default function Counter({ value, setValue}) {
    const increment = () => setValue((prev) => prev +1)
    const decrement = () => setValue((prev) => Math.max(prev - 1, 0));

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