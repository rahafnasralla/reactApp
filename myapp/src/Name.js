import React,{useState,useEffect} from 'react' 


const Name = () => {

    const [myName,setName] = useState('')

    function onNameChanged (e) {
        setName(e.target.value)

    }



    return (
        <div>
        <label htmlFor="Name">Your Name</label>
        <input value={myName} onChange={onNameChanged} type="text" id='Name' name='Name' />
        <Hi my = {myName}/>
        </div>
        


    )

}


export default Name 

function Hi (props) {

    const [hi,setHi] = useState('')
    const [mot,setMot] = useState('')

    function onBtnClicked( ) {
        setHi('')  
        setMot('you can do it '+ props.my)
        
    }


    useEffect(()=> {
        if(props.my) {
        setHi('Hi '+ props.my + " How are you ?")
        }
        
    },[props.my])

    return (
        <>
        <div>
        <input value={hi} type="text" id='hi' name='hi' />
        <input value={mot} type="text" id='motivate' name='motivate' />
        <button onClick={onBtnClicked}>Motivate</button>
        </div>
        </>
    )
}
