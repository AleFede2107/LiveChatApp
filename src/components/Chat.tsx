import { useState } from "react"
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { auth, db } from "../firebase-config"

export const Chat = (props) => {
    const {room} = props

    const [newMessage, setNewMessage] = useState("")

    const messagesRef = collection(db,"messages");

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room,
        });

        setNewMessage("")
    }

    return <div className="#"> 
        <form className="#">
            <input onSubmit={handleSubmit} className="#" placeholder="Type your message here" onChange={(e) => setNewMessage(e.target.value)} value={newMessage}/>
            <button type="submit" className="#">Send</button>
        </form>
    </div>
}