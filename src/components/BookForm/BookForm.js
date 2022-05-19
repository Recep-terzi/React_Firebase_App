import React,{useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
const BookForm = () => {
    const [newBook,setNewBook] = useState('')
    const {user} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ref = collection(db,'books');
        await addDoc(ref,{
          title:newBook,
          uid:user.uid
        })
        setNewBook('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <label >
            <span>Yeni Kitap Ekle</span>
            <input type="text" required onChange={(e) => setNewBook(e.target.value)}
            value={newBook}/>
        </label>
        <button>EKLE</button>
    </form>
  )
}

export default BookForm