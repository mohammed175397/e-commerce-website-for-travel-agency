
function Counter({value, onChange, min=0, max = Infinity}) {

  const dec = () => onChange(value - 1);
  const inc = () => onChange(value + 1 )

  return (
    <div className="flex items-center border justify-between rounded-sm  border-black/20 px-2 w-25">
      <button
        className="cursor-pointer w-3 hover:text-2xl transition-all"
        onClick={dec}
        // disabled={value <= min}
      >
        -
      </button>
      <p className="bg-gray-200 p-2">{value}</p>
      <button
        className="cursor-pointer w-3 text-lg hover:text-2xl transition-all"
        onClick={inc}
        // disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}

export default Counter