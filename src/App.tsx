import { useState } from 'react'
import './App.css'
import { CryptoCard } from "./components/index";
import { CryptoListsType } from './types';
import cryptoList from './data/cryptodata.json';
function App() {

  const [cryptoCoinLists, setCryptoCoinLists] = useState<CryptoListsType[]>(cryptoList);


  return (
    <main>
      <div className='crypto-title'>
        <img src="https://res.cloudinary.com/dwhsfh3sc/image/upload/v1660081071/tasks/relative/assets/activity_tfvesl.png"
          className='crypto-title-img'
          alt="crypto-cards" />
        <h2>Trending Assets</h2>
      </div>
      <section className='cryptocard-container'>

        {
          cryptoCoinLists.map(cryptoCoin => <CryptoCard key={cryptoCoin.id} cryptoDetail={cryptoCoin} />)
        }
      </section>
    </main>
  )
}

export default App
