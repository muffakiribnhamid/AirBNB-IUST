import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroMain from './components/Hero'
import Card from './components/Cards'
import Icons from './components/Icons'
import Input from './components/Search'
import Footer from './components/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <HeroMain/>
        <hr></hr>
        <div className='flex'>
        <Icons title={"Icons"} logo={'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'} />
        <Icons title={"countryside"} logo={'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'} />
        <Icons title={"Icons"} logo={'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'} />
        <Icons title={"countryside"} logo={'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'} />
        <Icons title={"Icons"} logo={'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'} />
        <Icons title={"countryside"} logo={'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'} />
        <Icons title={"Icons"} logo={'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'} />
        <Icons title={"countryside"} logo={'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'} />
        <Icons title={"Icons"} logo={'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'} />
        <Icons title={"countryside"} logo={'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'} />


        </div>
        <hr/>
        
        <div className='flex'>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-1212899480748712728/original/d709b7a1-50a8-4bb9-9788-57986cfa9b50.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-1212899480748712728/original/d709b7a1-50a8-4bb9-9788-57986cfa9b50.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-1212899480748712728/original/d709b7a1-50a8-4bb9-9788-57986cfa9b50.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>


        </div>

        <div className='flex'>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-1212899480748712728/original/d709b7a1-50a8-4bb9-9788-57986cfa9b50.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-1212899480748712728/original/d709b7a1-50a8-4bb9-9788-57986cfa9b50.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>
        <Card heading={'Gurguram India'} image={'https://a0.muscache.com/im/pictures/miso/Hosting-1212899480748712728/original/d709b7a1-50a8-4bb9-9788-57986cfa9b50.jpeg?im_w=720&im_format=avif'} title={'43 November  22 Km Away'}/>


        </div>

        <Footer/>


    </div>

  )
}

export default App
