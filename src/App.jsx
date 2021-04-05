import React, { useState } from 'react'
import style from './App.module.css'
import HelloWorld from './components/HelloWorld.jsx'
import Counter from './components/Counter.jsx'
import Default from './components/Defaulte.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//root Componet
export default function App() {
    return (
        <Router>
            <div className={style.container}>
                <ul className={style.nav}>
                    <li className={style.navItem}>
                        <Link to='/helloworld'>Helloworld</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to='/counter'>Counter</Link>
                    </li>
                </ul>
                <div className={style.route}>
                    <Route exact path='/' component={Default} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/helloworld' component={HelloWorld} />
                </div>
            </div>
        </Router>
    )
}
