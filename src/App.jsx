import { useEffect, useInsertionEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import {collection, getDocs, deleteDoc ,doc, onSnapshot, snapshotEqual} from 'firebase/firestore'
import { db } from './config/firebase'
import ContactCard from './components/ContactCard'
import { FaPlusCircle } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi'
import AddAndUpdate from './components/AddAndUpdate'
import useDisclouse from './Hooks/useDisclouse'

function App() {
  const [contacts, setcontacts] = useState([])
  const { onClose, onOpen, isOpen } = useDisclouse(false)

  useEffect(() => {
     const getContacts = async ()=> {

      try {
        const contactsRef = collection(db, 'Contacts')

        onSnapshot(contactsRef, (snapshot) => {
           const contactLists = snapshot.docs.map((doc)=> {
          return{
            id: doc.id,
            ...doc.data(),
          }
        })
           setcontacts(contactLists)
           return contactLists;
        });
      } catch (error) {
         console.log(error);
      }
     }
     getContacts()
  }, [])

  const filter = (e)=> {
    const value = e.target.value;

    const contactsRef = collection(db, 'Contacts')
      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc)=> {
          return{
            id: doc.id,
            ...doc.data(),
          }
        })
        
      const filteredContacts = 
        contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

         setcontacts( filteredContacts)
         return filteredContacts;
   })
  };

  
  return (
    <div className='mx-auto max-w-[440px] px-4 '>
       <Navbar/>
       <div className='flex gap-1 items-center'>
         <HiOutlineSearch className='absolute text-3xl pl-1.5'/>
        <input 
        onChange={filter }
        placeholder='Search Contact' type='text'
        className='flex-grow bg-transparent h-10 border-2 border-white rounded-lg pl-10 text-lg relative'/>
        <h1 
        onClick={onOpen}
        className='text-4xl cursor-pointer'>
          <FaPlusCircle  /> </h1>
       </div>
       {contacts.length > 0 ? (
         <div 
       className='h-12 flex items-center mt-4 flex-col gap-2 '>
             {contacts.map((contact) => (
           <ContactCard key={contact.id} contact={contact} setcontacts={setcontacts} 
                        onClose={onClose} isOpen={onOpen}/>
        ))}
       </div>
        ) : ( <p className='mt-8 pl-30 '>  No Contacts Found!</p> )} 

       <AddAndUpdate onClose={onClose} isOpen={isOpen} />
    </div>
  )
  
}

export default App


// more features are coming...

// add button to edit contacts.
// Add toast from react-toastify.
// add confirmation before deleting contact.
// add loading bar or circle.