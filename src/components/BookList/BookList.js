import { deleteDoc,doc } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase/config';
const BookList = ({books}) => {
    const handleClick = async (id) => {
        // console.log(id);

        const ref = doc(db,'books',id)
        await deleteDoc(ref)
    }
  return (
    <div className="book-list">
        <ul>
            {books.map(book => (
                <li key={book.id} onClick={() => handleClick(book.id)}> {book.title} </li>
            ))}
        </ul>
    </div>
  )
}

export default BookList