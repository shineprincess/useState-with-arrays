import React , {useState} from 'react' 

const App = () => {

    let curTime = new Date().toLocaleTimeString();

    const [time,setTime] = useState(curTime)

    const UpdatedTime = () => {
        curTime = new Date().toLocaleTimeString();
        setTime(curTime);
    };

    setInterval(UpdatedTime,10000)

    return (
        <>
            <button className = "heading">Digital Clock</button>
            <h1> {time }</h1>
        </>
    )
}

export default App