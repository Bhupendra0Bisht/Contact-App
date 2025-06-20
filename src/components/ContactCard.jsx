import { deleteDoc,doc, getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa'
import AddAndUpdate from '../components/AddAndUpdate'
import { useState } from 'react'

export const ContactCard = ({contact, setcontacts, onOpen, onClose, isOpen}) => {
     const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, "Contacts"));
      console.log(querySnapshot);
      
      const contactsArr = [];
      querySnapshot.forEach((doc) => {
        contactsArr.push({ ...doc.data(), id: doc.id });
      });
      console.log(contactsArr);
      
      setcontacts(contactsArr);
    };
      const deleteContact = async (id)=> {
        try {
          await deleteDoc(doc(db, "Contacts", id))
          await fetchContacts();
          }
          catch (error) {
          console.log(error);
        }
        }
  
  return (
          <div key={contact.id} className='flex items-center bg-amber-600 rounded font-medium max-w-[410px]'>
            <h2 className='pl-1.5 text-2xl text-blue-700'> <FaUser/> </h2>
          <div className='w-screen  flex flex-col items-center'>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
          <div className='flex gap-2'> 
            <h2 onClick={()=>  deleteContact(contact.id) }
            className='pr-2 text-lg cursor-pointer flex justify-end text-black'> <FaTrash/> </h2>
          </div>
          <AddAndUpdate contact={contact} isUpdate isOpen={onOpen} onClose={onClose}/>
          </div>
  )
}

export default ContactCard;