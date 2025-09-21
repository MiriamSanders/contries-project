import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function PixaInput(props) {
    const inputRef = useRef();
    const onSearchClick = () => {
        props.doApi(inputRef.current.value)
    }
    return (
        <div className='bg-warning p-2'>
            <div className='col-md-6 d-flex'>
                <input onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        props.doApi(inputRef.current.value)
                    }
                }}
                    ref={inputRef} placeholder='search for pics and press enter...' type="text" className='form-control' />
                <button onClick={onSearchClick} className='btn btn-info'>Search</button>
            </div>
        </div>
    )
}