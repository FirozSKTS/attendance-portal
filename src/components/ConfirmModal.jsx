import React from 'react'
import './ConfirmModal.css'

function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="btn-modal btn-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-modal btn-confirm">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
