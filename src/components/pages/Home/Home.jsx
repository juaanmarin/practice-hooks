import React, {useState} from 'react'
import { Header } from '../../layout/Header/Header'
import { ButtonUi } from '../../UI/ButtonUI/ButtonUi'
import { InputUI } from '../../UI/InputUI/InputUI'

export const Home = () => {
    
    const [useText, setUseText] = useState("")
    const [useListUsers, setuseListUsers] = useState(["pepe", "juan", "lucas"])
    
    const reead = (text) =>{
        setUseText(text.target.value)
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
                    <h3>{useText}</h3>
                </div>
                <div className='add-users'>
                    <ButtonUi styleButton="btn-add-home" text='Add User'/>
                </div>
            </div>

            <div className='list-users'>
                <h3>User List</h3>
                
                {
                    useListUsers.map((name, i) => {
                        <div key={i}>
                            <h2>{name}</h2>
                        </div>
                    })
                }
                <ul>
                    <li>{useListUsers[0]}</li>
                    <li>{useListUsers[1]}</li>
                    <li>{useListUsers[2]}</li>
                </ul>                
            </div>
         </section>
    </>
  )
}
