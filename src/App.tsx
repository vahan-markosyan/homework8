import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import { IUser } from './types'
import { UserContext } from './context'

function App() {
  
  const [users, setUsers] = useState<IUser[]>([
    {id:101, name:"Artak", age:23, salary:200_000},
    {id:102, name:"Gexam", age:26, salary:250_000},
    {id:103, name:"Sargis", age:34, salary:400_000},
    {id:104, name:"Anna", age:22, salary:300_000}
  ])

  const removeUser = (id:number):void => {
    setUsers(users.filter(user => user.id != id))
  }

  const addUser = (newUser:IUser):void => {
    setUsers([...users, {...newUser, id:Date.now()}])
  }
  

  return <>
  <UserContext.Provider value = {{users, removeUser, addUser}}>
    <AddUser/>
    <UserList/>
    </UserContext.Provider>
    </>
  }

export default App
