import React from 'react'
import {update, remove} from "./ultis/topicControl"

export default function Topic(props) {
    const [text, setText] = React.useState(props.name);
    const modalRef = React.useRef();
    const inputRef = React.useRef();
    const updateRef = React.useRef();
    const removeRef = React.useRef();
    
    const openModal = () => {
        modalRef.current.classList.remove("hidden");
        inputRef.current.focus();
    }
    const closeModal = () => {
        modalRef.current.classList.add("hidden");
    }
    const toggleBtn = () => {
        updateRef.current.classList.toggle("hidden");
        removeRef.current.classList.toggle("hidden");
    }
    
    const updateTopic = () => {
        props.updateTP(text, props.index);
        toggleBtn();
        closeModal();
    }
    const removeTopic = () => {
        props.removeTP(props.index);
        toggleBtn();
    }

    return (
        <div className="flex justify-between flex-wrap">
            <span >{props.name}</span>
            <div className='flex flex-row justify-end'>
                <div className="btn" onClick={toggleBtn}>&lt;</div>
                <div 
                    className="btn hidden bg-green-300" 
                    ref={updateRef}
                    onClick={openModal}
                >
                    update
                </div>
                <div 
                    className="btn hidden bg-red-600"
                    ref={removeRef}
                    onClick={removeTopic}>
                    remove
                </div>
            </div>

            <div ref={modalRef} className="modal flex flex-row hidden border-2 border-black absolute bg-white">
                <input
                    ref={inputRef} 
                    onChange={()=>setText(inputRef.current.value)} 
                    type="text"
                    value={text}
                    className="w-5/6" />
                <div className="btn bg-green-600" onClick={updateTopic}>accept</div>
                <div className="btn bg-red-600" onClick={closeModal}>cancel</div>
            </div>
        </div>
    )
}
