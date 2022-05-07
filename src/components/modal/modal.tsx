import React from 'react'
import ReactModal from 'react-modal'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div>
        <button onClick={() => onClose()} className="modal-close">
          <span className="fa fa-close"></span>
        </button>
        {children}
      </div>
    </ReactModal>
  )
}
