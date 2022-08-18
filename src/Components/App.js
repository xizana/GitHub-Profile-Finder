import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const gitApiUrl = 'https://api.github.com/users'

export default function App() {
    const [input, setInput] = useState("")
    const [users, setUsers] = useState([])

    // console.log(users)

    useEffect(() => {
        axios
            .get(gitApiUrl)
            .then(res => setUsers(res.data))
    }, [])

    const handleChange = (event) => {
        event.preventDefault()
        setInput(event.target.value)

    }

    const filtered = users.filter((val) => {
        if (input === "") {
            return ""
        } else if (val.login.toLowerCase().includes(input.toLowerCase())) {
            return val
        }
    })

    // this code displays filtered names 
    // after clicking image || name you can see github profile

    const display = filtered.map((value, id) => {
        return <div key={id}>
            <a href={value.html_url}><img className="image" src={value.avatar_url} alt="" /></a>
            <h2 className="userName"><a className="link" href={value.html_url}>{value.login}</a></h2>

        </div >

    })

    return (
        <div className="container">

            <header>Find GitHub User</header>

            <form>
                <input className="input" value={input} onChange={handleChange} />

            </form>

            <div className="display">
                {display}

            </div>

        </div>
    )
}

