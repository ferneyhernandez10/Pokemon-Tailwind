import React from 'react'

export const InformationModal = ({isOpen, closeModal}) => {
    const handleModalClick = (e) => e.stopPropagation();
  return (
    <>
    { isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center" onClick={closeModal}>
            <div className="bg-white p-4 border-2 border-black w-1/2 h-auto" onClick={handleModalClick}>
                InformationModal
            </div>
        </div>
    )}
    </>
  )
}
