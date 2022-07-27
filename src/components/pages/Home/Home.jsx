import React, {useState, useRef} from 'react'
import { Header } from '../../layout/Header/Header'
import { ButtonUi } from '../../UI/ButtonUI/ButtonUi'
import { InputUI } from '../../UI/InputUI/InputUI'

export const Home = () => {
    
    const [useText, setUseText] = useState("")
    const [useListUsers, setuseListUsers] = useState(["pepe", "juan", "lucas"])
    
    const reead = (text) =>{
        setUseText(text.target.value)
    }

    const nameRef = useRef(null);
    const addUser = () =>{
        console.log("eeeen");
        console.log(nameRef.current.value);
    }
    
    return (
    <>
         <Header title='Practice Hooks'/>
         <section>
            <div className='user-register'>
                <div className='register'>
                    <InputUI event={reead}/>
                </div>
                <div className='inf-register'>
                    <h3 ref={nameRef} >{useText}</h3>
                </div>
                <div className='add-users'>
                    <ButtonUi styleButton="btn-add-home" text='Add User' event={addUser}/>
                </div>
            </div>

            <div className='list-users'>
                <h3>User List</h3>
                <ul>
                {
                    useListUsers.map( (item) => (
                        <li>{item}</li>
                    ))
                }
                </ul>
              
            </div>
         </section>
    </>
  )
}
