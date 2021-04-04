import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/index'
export default function HelloWorld() {
    const dispatch = useDispatch();
    const _msg = useSelector(state => state.msg);
    const ref = useRef();
    const setMsg = () => {
        let value = ref.current.value;
        dispatch(actions.setMsg({ msg: value }))
    }
    return (
        <div className="container">
            <h1>{_msg}</h1>
            <input type="text" ref={ref} />
            <button onClick={() => setMsg()}>改变</button>
        </div>
    )
}