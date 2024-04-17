/* eslint-disable react/prop-types */
export default function Counter({ className, counter, setCounter }) {

  function decrement () {
    if (counter <= 0) return
    setCounter(counter => counter - 1)
  }

  function increment () {
    if (counter >= 10) return
    setCounter(counter => counter + 1)
  }

  return (
    <div className={`flex justify-between items-center py-4 bg-grayish-light-blue font-bold text-xl ${className}`}>
      <button onClick={decrement} className="text-orange text-3xl">-</button>
      <span>{counter}</span>
      <button onClick={increment} className="text-orange text-3xl">+</button>
    </div>
  )
}
