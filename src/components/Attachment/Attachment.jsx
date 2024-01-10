

export default function Attachment() {
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Attachment Your Files Here</h3>
                <p className="py-4">You can choose multiple attachments</p>
                <div className="modal-action">
                    <form method="dialog">
                        <input type="file" />
                        <button className="btn">Done</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

// export default function Attachment() {
//     return (
//         <div>
//             <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()
//             }> open modal</button >
//             <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     <h3 className="font-bold text-lg">Hello!</h3>
//                     <p className="py-4">Press ESC key or click the button below to close</p>
//                     <div className="modal-action">
//                         <form method="dialog">
//                             {/* if there is a button in form, it will close the modal */}
//                             <button className="btn">Close</button>
//                         </form>
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     )
// }

// // Modal.js
// import React from 'react';

// const Attachment = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <button className="close-button" onClick={onClose}>
//                     Close
//                 </button>
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Attachment;

