import { Suspense, useState } from 'react'
import CustomerTickets from './components/CustomerTickets.jsx'
import TaskStatus from './components/TaskStatus.jsx'
import Resolved from './components/Resolved.jsx'

import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const fetchCards = async () => {
  const res = await fetch('/cards.json');
  return res.json();
}
  const cardsPromise = fetchCards();


function App() {
const [QueryTasks, setQueryTasks] = useState([])
const [resolvedTasks, setResolvedTasks] = useState([])
  
  return (
    <>
     <div className='nav_head flex justify-evenly max-w-auto mx-auto my-7'>
        <div><p className='font-bold text-md md:text-2xl'>CS-Ticket System</p></div>
        <div>
          <ul className='flex gap-8 items-center list'>
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
          <p className='text-3xl'>{QueryTasks.length}</p>
        </div>
        <div className='card2'>
          <p className='text-2xl'>Resolved</p>
          <p className='text-3xl'>{resolvedTasks.length}</p>
        </div>
     </div>
     <div className='main_body'>
      <div className='cards_container'><p className='text-2xl font-bold'>Customer Tickets</p>
        <div>
          <Suspense fallback={<div className='loading loading-spinner loading-xl'> Loading....</div>}>
            <CustomerTickets cardsPromise={cardsPromise} QueryTasks={QueryTasks} setQueryTasks={setQueryTasks} ></CustomerTickets>
          </Suspense>
        </div>
      </div>
      <div className='flex flex-col gap-7'>
        <div className='status'><p className='text-2xl font-bold'>Task Status</p>
          <div>
            <TaskStatus QueryTasks={QueryTasks} setQueryTasks={setQueryTasks} resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks}></TaskStatus>
          </div>
        </div>
        <div className='resolve'><p className='text-2xl font-bold'>Resolved Task</p>
          <div>
            <Resolved resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks}></Resolved>
          </div>
        </div>
      </div>

     </div>
     <div className='flex bg-black text-white justify-around mt-5 pb-15 footer_section'>
        <div className='mt-10 ml-10'>
        <p className='text-xl font-bold mb-5'>CS Ticket System</p>
        <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p></div>
        <div className='mt-10'><p className='text-xl font-bold mb-5'>Company</p>
        <ul className='gap-5'>
          <li>About us</li>
          <li>Our mission</li>
          <li>Contact Saled</li>  
        </ul></div>
        <div className='mt-10'><p className='text-xl font-bold mb-5'>Services</p>
        <ul className='gap-5'>
          <li>Products and Services</li>
          <li>Customer Stories</li>
          <li>Download Apps</li>
        </ul></div>
        <div className='mt-10'><p className='text-xl font-bold mb-5'>Information</p>
        <ul className='gap-5'>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>Join us</li>
        </ul></div>
        <div className='mt-10 mr-10'>
          <ul>
            <li><img src="./assets/x-twitter-logo-on-black-circle-5694247.png" alt="Logo of twitter X" /> @CS-Ticket System</li>
            <li><img src="./assets/isolated-linkedin-logo-vector-illustration-icon-minsk-belarus-march-142909970.webp" alt="logo of linkedin" /> @CS-Ticket System</li>
            <li><img src="./assets/images.png" alt="logo of facebook" /> @CS-Ticket System</li>
            <li><img src="./assets/images2.png" alt="logo of email" /> @CS-Ticket System</li>
          </ul>
        </div>
     </div>
     <div className='bg-black items-center text-white flex justify-center footer'>2025 CS-Ticket System. All Rights reserved.</div>
  <ToastContainer />
    </>
  )
}

export default App
