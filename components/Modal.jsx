import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Modal({ children, onClose, divStyle }) {
    return (
        <div className="bg-prim_black/20 z-20 h-screen w-screen fixed bottom-0 right-0 left-0 flex items-center justify-center">
            <div className={` ${divStyle} bg-prim_whit bg-red-100 rounded-md relative max-sm:mx-4 md:max-w-[65vw] overflow-y-auto`}>
            <span className="absolute right-2 top-2">
                      <IconButton onClick={() => onClose()}>
                        <Close />
                      </IconButton>
                    </span>
                {children}
            </div>
        </div>)
}

export default Modal