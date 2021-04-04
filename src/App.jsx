import React, { useState } from 'react'


import style from './App.module.css'

import HelloWorld from './components/HelloWorld.jsx'
import Counter from './components/Counter.jsx'

//root Componet
export default function App() {
    return (
        <div className={style.container}>
            <HelloWorld msg='你好世界' />
            <br></br>
            <Counter />
        </div>
    )
}
