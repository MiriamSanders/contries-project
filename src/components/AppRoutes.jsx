import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from '../context/Context';
import About from './About';
import Home from './Home';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Counter2 from './Counter2';
import Atlas from './Atlas';
import Pixa from './Pixa';
import VIP from './VIP';
function AppRoutes() {
    const [number, setNumber] = useState(33);
    const [coins, setCoins] = useState(6);
    const [counter, setCounter] = useState(0);
    return (
        <Router>
            <AppContext.Provider value={{
                val: "koko2",
                number, setNumber,
                coins, setCoins, counter, setCounter
            }}>
                <header className='p-2 container bg-info'>
                    <div className='float-end h5'>Coins : {coins}</div>
                    <Link to='/'>Home</Link> | 
                    <Link to='/about'>About</Link> | 
                    <Link to='/counter'>Counter</Link> | 
                    <Link to='/counter2'>Counter2</Link> | 
                    <Link to='/Atlas'>Atlas</Link> | 
                    <Link to='/pixa/cats'>Pixa</Link> | 
                    <Link to='/vip'>VIP</Link>
                </header>
                <Routes>
                    <Route index element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/counter' element={<Counter></Counter>}></Route>
                    <Route path='/counter2' element={<Counter2></Counter2>}></Route>
                    <Route path='/atlas' element={<Atlas></Atlas>}></Route>
                    <Route path='/pixa/cats' element={<Pixa></Pixa>}></Route>
                    <Route path='/vip' element={<VIP></VIP>}></Route>
                </Routes>
            </AppContext.Provider>
            <footer className='p-2 container bg-danger'>footer</footer>
        </Router>
    )
}

export default AppRoutes;
