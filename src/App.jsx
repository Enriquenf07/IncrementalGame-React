import { useState, useEffect } from 'react'
import { useSave } from './hooks/gameSave'
import Panzoom from '@panzoom/panzoom'
import ButtonMain from './components/buttons/ButtonMain'
import TableMain from './components/tables/TableMain'
import TableInfo from './components/tables/TableInfo'


function App() {
  const [books, setBooks] = useSave("books", 0)
  const [knowledge, setKnowledge] = useSave("knowledge", 0)
  const [langPerSec, setLangPerSec] = useSave("langPerSec", 0)
  const [bookPrice, setBookPrice] = useSave("bookPrice", 0)
  const [bookPriceIncrease, setBookPriceIncrease] = useSave("bookPriceIncrease", 0.20)
  const [randomBook, setRandomBook] = useSave("RandomBook", Math.floor(Math.random() * 40))

  const element = document.querySelector('.screen')

  const buyBook = () => {
    if (books % 30 == 0 && books > 0 ){
      setBookPriceIncrease((prev) => prev + 0.05) 
    }
    if (knowledge >= bookPrice) {
      setBooks((prev) => prev + 1)
      setKnowledge((prev) => prev - bookPrice)
      if (books <= 3) {
        setLangPerSec((prev) => prev + 0.5)
        setBookPrice((prev) => prev + 7) 
        return
      }
      if (books <= 6) {
        setLangPerSec((prev) => prev + 0.5)
      }
      setLangPerSec((prev) => prev * 1.15)
      setBookPrice((prev) => prev * 1.20)
    }
    return
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setKnowledge((prev) => prev + langPerSec)
      
    }, 1000)

    return () => clearTimeout(timer)
  })
  

  return (
    <div className='h-[500vh] w-[500vh] bg-stone-900 '>
        <TableInfo>
          <p>Knowledge: {knowledge.toFixed()}</p>
          <p>Books: {books.toFixed()}</p>
          <p>Lang/Sec: {langPerSec.toFixed(2)}</p>
        </TableInfo>
        <TableMain position="top-1/3 left-1/3" h="h-[16rem]" w="w-[18rem]" color="bg-blue-200" title="Infinity Library">
          <ButtonMain name="Book" event={buyBook} price={bookPrice.toFixed()} color='bg-emerald-700'></ButtonMain>
        </TableMain>
    </div>
        
    
  )
}

export default App
