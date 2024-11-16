import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'


const App = () => {
  return (
   <>
   <Header/>
   <Hero num='1'about="Building digital products, brands & experience" text="Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt" img="/hero-img.png" />
   <Hero num='2'about="Branding & Design system" text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" img="/sys.png" />
   <Hero num='3'about='Custome & Plugin Development' text='Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups' img='/plagin.png' />
   <Hero num='4'about='Be a part of the next big thing' text='We work with Brans, Startups, to SMEs. Colaborate for more impact and growt' img='/part.png' />
   <Hero num='5'about='Мы когда речь зашла про' text='font-size ' img='https://png.pngtree.com/png-clipart/20231115/original/pngtree-point-of-view-various-photo-png-image_13550532.png' />
   <Hero num='6'about='Что сделает Руслан ака с нашей' text='финалкой' img='https://png.pngtree.com/png-clipart/20220430/original/pngtree-graduation-season-student-silhouette-png-image_7609951.png' />
   <Hero num='7'about='Аббос ака когда кто-то напомнил ему про ' text='адаптив , анимации и бургер' img='https://png.pngtree.com/png-clipart/20230525/original/pngtree-silhouette-man-get-idea-png-image_9170186.png' />
   
  
   </>




  )
}

export default App