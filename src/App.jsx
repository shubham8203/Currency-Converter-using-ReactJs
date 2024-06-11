import { useState ,useEffect} from 'react'
import UseCurrencyInfo from './custom.js'
import './App.css'
import  InputBox from './inputBox.jsx'

var x=false;
function App() {

  const [Amount, setAmount] = useState(0);
  const [from,setfrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [convertedAmount,setconvertedAmount]=useState(0);

  let data= UseCurrencyInfo(from)

  const options=Object.keys(data)
  
  if(x===true){
  }
  else{
    x=false;
  }
  const convert=()=>{
    console.log("Hello");
    console.log(x);
    if(x!==true){
    setconvertedAmount(Amount*data[to]);
    }
    else{
      x=false;
    }
  };

  const swap=()=>{
   
    x=true;
    setfrom(to)
    setTo(from)
    setconvertedAmount(Amount)
    setAmount(convertedAmount)

    

  }



  return (
       
      <div style={{backgroundImage:'url(https://www.livemint.com/lm-img/img/2023/11/03/1600x900/3-0-45337860-iStock-1152974275-0_1679813429320_1699006790219.jpg)'}} className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'>
        
        <div className='w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 '>
                <h1 className='text-center font-bold text-5xl mb-5 text-neutral-950'>Currency Converter</h1>
                <form onSubmit={(e)=>{
               e.preventDefault();
               
              convert()
                }} 
                >
                  <div className="w-full mb-1" >
                   <InputBox
                   label="From"
                   amount={Amount}
                   currencyOptions={options}
                   selectedCurrency={from}
                   onAmountChange={(Amount)=>{
                       setAmount(Amount)
                   }}
                   onCurrencyChange={(currency)=>{
                    setfrom(currency)
                   }}
                   />

                  </div>
                  <div className='relative w-full h-0.5'>
                  <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
                    Swap
                  </button>
                  </div>
                  <div className='w-full mb-1 '>
                <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectedCurrency={to}
                onAmountChange={(Amount)=>{
                  setconvertedAmount(Amount)
              }}
                onCurrencyChange={(currency)=>{
                 setTo(currency)
                }}
                 AmountDisabled
                
                
                />
                  </div>
                  <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                  

                </form>

        </div>
          
      </div>

    
  )
}

export default App
