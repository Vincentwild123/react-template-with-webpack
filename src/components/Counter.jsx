import React from 'react'
import * as actions from '../actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import style from './counter.module.css'
export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
    return (
        <div className={style.container}>
            <div className={style.count}>{count}</div>
            <button className={style.btn} onClick={() => dispatch(actions.incCount())}>增加</button>
            <button className={style.btn} onClick={() => dispatch(actions.decCount())}>减少</button>
        </div>
    )
}