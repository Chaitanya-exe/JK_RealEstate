import React from 'react'

function Modal({ children }) {
    return (
        <div className="bg-prim_black/20 z-20 h-screen w-screen fixed bottom-0 right-0 left-0 flex items-center justify-center">
            <div className="bg-prim_white rounded-md relative max-w-[65vw] max-h-[80vh] w-full p-4 overflow-y-auto">
                {children}
            </div>
        </div>)
}

export default Modal