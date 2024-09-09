import { useContext, useState } from "react"
import { UserContext } from "../context"

export const AddUser = () => {
    const context = useContext(UserContext)
    if (!context) { 
        throw new Error("Context not found")
    }

    const { addUser } = context
    const [newUser, setNewUser] = useState({ name: '', age: '', salary: '' })
    const [error, setError] =  useState<string | null>(null)  //es pahy nayel em

    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //es pahnel em nayel
        e.preventDefault()
        if(!newUser.name || !newUser.age || !newUser.salary) {
            return setError("please fill all the fields")
        }
        if(+newUser.age<0 || +newUser.age>150) {
            return setError("please enter a valid age")
        }
        if(+newUser.salary<0) {
            return setError("please enter a valid age")
        }
        const userToAdd = {
            ...newUser,
            id:Date.now(),
            name:newUser.name,
            age: +newUser.age,
            salary: +newUser.salary
        };
        
        setError("")
        addUser(userToAdd)
        setNewUser({name:"", age:"", salary:""})
        console.log(userToAdd)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <h3>Add User</h3>

            <input
                type="text"
                value={newUser.name}
                onChange={e => setNewUser({...newUser, name:e.target.value})}
                placeholder="Name"
            />
            <input
                type="number"
                value={newUser.age}
                onChange={e => setNewUser({...newUser, age:e.target.value})}  
                placeholder="Age"
            />
            <input
                type="number"
                value={newUser.salary}
                onChange={e => setNewUser({...newUser, salary:e.target.value})} 
                placeholder="Salary"
            />
            <button>Add</button>
        </form>
    )
}
