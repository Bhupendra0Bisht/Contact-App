import { IoMdClose } from 'react-icons/io'

const Modal = ({onClose, isOpen, children}) => {
  return (    
    <div className='flex justify-center'>

      {isOpen && 
      <>
      <div 
      className='bg-orange-200 text-black h-60 w-70 rounded relative z-50'>
       <div className='flex justify-end mr-2 cursor-pointer p-2 hover:rounded-full hover:bg-orange-300 ml-60 mt-0.5'>
        {/* <button onClick={onClose}
        > < IoMdClose/> </button> */}
       </div> 
        {children}        
       </div>
        <div 
       onClick={onClose}
        className='absolute top-0 z-40 h-screen w-screen backdrop-blur'/>
         </>
      }
    </div>
    
  )
}


export default Modal