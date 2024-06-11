import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    selectedCurrency="usd",
currencyOptions=[],
onCurrencyChange,
onAmountChange,
className="",
AmountDisabled=false,
CurrencyDisabled=false,
}){
    const Id=useId();
  return (

     
    <div className='${className} bg-white p-3 justify-between flex rounded-lg text-sm '>
        <div className='w-1/2'>
        <label  htmlFor={Id} className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input 
        id={Id}
        type="number"
        
        value={amount>=0?amount:0}
        disabled={AmountDisabled}
        className='outline-none py-1.5 w-full bg-transparent'
        onChange={
            (e)=>onAmountChange&&onAmountChange(Number(e.target.value))
        }
        
         />

        </div>
        <div>
            <p className='text-black/40 mb-2 w-full' >Currency Type</p>
            <select 
           
            className='rounded-lg outline-none px-1 py-1 bg-gray-400 cursor-pointer'
            disabled={CurrencyDisabled}
            value={selectedCurrency}
            onChange={(e)=>{
                onCurrencyChange&&onCurrencyChange(e.target.value);
            }}
            >
                {
                    currencyOptions.map((currency)=>(
                        <option value={currency} key={currency} >{currency}</option>
                    ))
                }
               

            </select>
        </div>

    </div>
  )
}

export default InputBox;