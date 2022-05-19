// import React, { useState, useEffect } from "react";
import React from "react";
import BookForm from "../components/BookForm/BookForm";
import BookList from "../components/BookList/BookList";
import { useAuthContext } from "../hooks/useAuthContext";
// import { db } from "../firebase/config";
// import { collection, getDocs } from "firebase/firestore";
import { useCollection } from "../hooks/useCollection";

const Home = () => {

  const {user} = useAuthContext()

  const {documents:books} = useCollection('books',["uid","==",user.uid]);

  // const [books, setBooks] = useState(null);

  // useEffect(() => {
  //   const ref = collection(db, "books");
  //   getDocs(ref).then((snap) => {
  //     let result = [];
  //     snap.forEach((doc) => {
  //       result.push({id:doc.id,...doc.data()})
  //     });
  //     setBooks(result)
  //   });
  // }, []);


  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
};

export default Home;
