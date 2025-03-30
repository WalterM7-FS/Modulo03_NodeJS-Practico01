import React from 'react'

const Header = ({ setIsModalOpen }) => {

  const onOpenModal = () => setIsModalOpen(true)


  return (
    <>
      <header className='bg-gray-800 text-white p-4 shadow-md'>

        <button
          className='bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer'
          onClick={onOpenModal}
        >
          Ver Lista
        </button>
      </header>
    </>
  )
}

export default Header