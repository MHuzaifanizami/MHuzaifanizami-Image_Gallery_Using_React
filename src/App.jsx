import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Images from './Components/images'
import Image1 from './Assets/Image1.jpg'
import Image2 from './Assets/Image2.jpg'
import Image3 from './Assets/Image3.jpg'
import Image4 from './Assets/Image4.jpg'
import Image5 from './Assets/Image5.jpg'
import Image6 from './Assets/Image6.jpg'



function App() {

  return (
    <>
   
      <div className="images-box">
        <Images imageSrc={Image1} />
        <Images imageSrc={Image2} />
        <Images imageSrc={Image3} />
        <Images imageSrc={Image4} />
        <Images imageSrc={Image5} />
        <Images imageSrc={Image6} />

      </div>
    </>
  )
}

export default App
