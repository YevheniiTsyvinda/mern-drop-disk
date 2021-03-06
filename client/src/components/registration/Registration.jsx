import React, {useState,useContext} from 'react'
import Input from '../../utils/input/Input'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {store} = useContext(Context)

  return (
    <div className='registration'>
        <div className='registration__header'>Registration</div>
        <Input value={email} setValue={setEmail} type="type" placeholder="Enter email..." />
        <Input value={password} setValue={setPassword} type="password" placeholder="Enter password..." />
        <button className='registration__btn' onClick={()=> store.registration(email,password)}>Enter</button>
    </div>
  )
}

export default observer(Registration);