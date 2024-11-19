import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroMain from './components/Hero'
import Card from './components/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <HeroMain/>
        <div className='flex'>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>


        </div>

    </div>

  )
}

export default App
