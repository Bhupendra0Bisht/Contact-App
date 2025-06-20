import Modal from './Modal'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

const AddAndUpdate = ({isOpen,onClose, isUpdate,contact}) => {

  const addContact= async (contact)=>{
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef,contact)
      onClose()

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}> 
           <Formik 
           initialValues={ isUpdate ? {
              name: contact.name,
             email: contact.email,
           } : {
              name:"",
             email:"",
           }
            }
             onSubmit={(values)=> {
              console.log(values);
              addContact(values)
             }}
            >
             <Form className='flex flex-col'>
             <div className='flex flex-col pl-2 pt-2  '>
               <label htmlFor='name' className='font-semibold text-lg '>
                Name
              </label>
             <Field name='name'
             className="px-2 py-0.5 font-medium  mr-2  border-2 border-black rounded-md text-orange-900"/>
              <label htmlFor='email' className='pt-2 font-semibold text-lg  '>
                Email
              </label>
             <Field type='email' name='email' 
             className="px-2 py-0.5 font-medium mr-2  border-2 border-black rounded-md text-orange-900"/>
             </div>
             <button 
             className='bg-orange-600 hover:bg-orange-500 mx-20 rounded-2xl py-1 mt-5 font-medium'>
              { isUpdate ? "Update " : "Add" } Contact
              </button>
             </Form>
           </Formik>
       </Modal>
    </div>
  )
}

export default AddAndUpdate