import React from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/cards/NoteCard'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <NoteCard title={"Meeting on 8th June"} date={"08-06-2024"} content={"Meeting on 8th June Meeting on 8th June"} tags={"#Meeting"} isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}}/>
      </div>
    </>
  )
}

export default Home