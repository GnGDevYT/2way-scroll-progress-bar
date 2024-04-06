import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ScrollProgressBar from './components/ScrollProgressBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const scrollListRef = useRef<HTMLDivElement>(null)
  // a list
  const list: string[] = ['see', 'hear', 'notice', 'smell', 'taste', 'listen']

  useEffect(() => {
    const scrollList = scrollListRef.current

    const updateScrollProgress = () => {
      const scrollList = scrollListRef.current

      if(scrollList) {
        const scrollTop = scrollList.scrollTop
        const scrollHeight = scrollList.scrollHeight
        const clientHeight = scrollList.clientHeight
        console.log(scrollTop)
        setScrollProgress(scrollTop / (scrollHeight - clientHeight)*100)
      }
    }

    if(scrollList) {
      scrollList.addEventListener('scroll', updateScrollProgress)
    }

    return () => {
      if(scrollList){
        scrollList.removeEventListener('scroll', updateScrollProgress)
      }
    }

  }, [])

  return (
    <div>
      <p className='text-2xl font-bold py-7'>Two way scrolling progress bar:</p>
      <ScrollProgressBar progressValue={scrollProgress} />
      <div className='overflow-auto h-96 w-96 custom-scrollbar' ref={scrollListRef}>
        <ul className='divide-y divide-cyan-300'>
          {list.map(word => {
            return(
              <li key={word} className='py-24'>
                {word}
              </li>
            )
          })}
        </ul>
      </div>
      <ScrollProgressBar progressValue={scrollProgress} inverted/>
    </div>
  )
}

export default App
