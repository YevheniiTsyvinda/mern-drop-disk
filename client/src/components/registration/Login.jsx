import React, {useContext, useState} from 'react'
import Input from '../../utils/input/Input'
import { login } from '../../actions/user'
import {observer} from "mobx-react-lite"
import { Context } from '../..'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {store} = useContext(Context)
  return (
    <div className='registration'>
        <div className='registration__header'>Login</div>
        <Input value={email} setValue={setEmail} type="type" placeholder="Enter email..." />
        <Input value={password} setValue={setPassword} type="password" placeholder="Enter password..." />
        <button className='registration__btn' onClick={()=>store.login(email,password)}>Enter</button>
    </div>
  )
}

export default observer(Login)