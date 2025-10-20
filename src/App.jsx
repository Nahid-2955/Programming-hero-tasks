

import './App.css'

function App() {

  return (
    <>
     <div className='nav_head flex justify-between max-w-400 mx-auto my-7'>
        <div><p className='font-bold text-2xl'>CS-Ticket System</p></div>
        <div>
          <ul className='flex gap-8 items-center'>
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
            <li><button className='btn'>+ New Ticket</button></li>
          </ul>
        </div>
     </div>
     <div className='counting-cards flex justify-center gap-10 my-15'>
        <div className='card1'>
          <p className='text-2xl'>In-Progress</p>
          <p className=''></p>
        </div>
        <div className='card2'>
          <p className='text-2xl'>Resolved</p>
          <p className=''></p>
        </div>
     </div>
     <div className='main_body'>
      <div className='cards'><p className='text-2xl font-bold'>Customer Tickets</p></div>
      <div className='status'><p className='text-2xl font-bold'>Task Status</p></div>
     </div>
    </>
  )
}

export default App
