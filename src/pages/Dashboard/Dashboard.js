import React from 'react'
import Topic from '../Topics/Topic'
import { add, update, remove} from "../Topics/ultis/topicControl"

export default function Dashboard() {
    if(!localStorage.getItem("todo"))
        localStorage.setItem("todo", [])
    
    const [text, setText] = React.useState("");
    const [topicDetail, setTopicDetail] = React.useState(null);
    const [topics, setTopics] = React.useState(localStorage.getItem("todo").split(","));
    let inputRef = React.useRef();

    const createTopic = () => {
        setTopics(add(text));
        inputRef.current.value = "";
    }
    const quickCreate = e=>{
        switch(e.key){
            case "Enter":
                createTopic();
                break;
            case "Escape":
                inputRef.current.value="";
                console.log(e.key);
                break;
            default:
                break;
        }
    }
    const updateTopic = (txt, idx) => {
        setTopics(update(txt, idx))
    }
    const removeTopic = (idx) => {
        setTopics(remove(idx))
    }
    const TopicDetail = (idx)=>{

    }

    return (
        <div>
            <div className='relative'>
                <div 
                    className="btn absolute top-0 left-0"
                    onClick={()=>setTopicDetail(null)}>
                    &lt;
                </div>
                Dashboard
            </div>
            <div className="flex flex-row content-center justify-between mb-10 border-2 border-black" >
                <input 
                    type="text" 
                    ref={inputRef}
                    className='w-5/6' 
                    placeholder='add topic' 
                    onChange={()=>setText(inputRef.current.value)}
                    onKeyPress={quickCreate}
                    />
                <div 
                    className="btn border-2 bg-green-500 w-10 h-10" 
                    onClick={createTopic}>
                    +
                </div>
            </div>

            { !topics || !topics[0] 
                ?null
                :topics.map( (topic,index)=>{
                    return <Topic 
                        name={topic} 
                        key={index} 
                        index={index}
                        updateTP={updateTopic}
                        removeTP={removeTopic}>

                        </Topic>
            }) }
            
        </div>
    )
}
