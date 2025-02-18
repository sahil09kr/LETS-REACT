// import React,{useId} from 'react'

// function InputBox( {
//     label,//from OR to
//     amount,//amount which we get or which we provide
//     onAmountchange,//function to run when amount changes
//     onCurrencychange,//function to run when currency change
//     currencyOptions=[],//diff types of currrency which we ll be using in option in select 
//     selectCurrency="usd",//now in options we will select a currency "usd" being default
//     amountDisable=false,//do we want to disable the input 
//     currencyDisable=false,//same as above 
//     className="",//extra css given
// }) {
//     const amountInputId = useId()
//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
// {/* 2 div each covers half of the screen and in each 2...1 label and 1 input  */}
//             <div className="w-1/2">
//                 <label className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
//                 />   
// {/* if the onAmountchange exists then execute */}
//             </div>
//             <div className='w-1/2 flex flex-wrap justify-end text-right'>
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency}
//                     onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
//                     disabled={currencyDisable}
//                 >
// {/* now we map the options with the currencyOptions provided */}
//                     {currencyOptions.map((currency)=>(
//                         <option key={currency} value={currency}>
//                             {currency}
//                         </option>
//                     ))}
//                 </select>
// e
// {/* in every option we need a key with a value that is what done above  */}

//             </div>

//         </div>
//     )
// }

// export default InputBox
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
