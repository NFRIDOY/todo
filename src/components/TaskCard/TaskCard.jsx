import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";


export default function TaskCard({ taskOne, setModalContaint, handleLeft, handleRight }) {

    const [attachments, setAttachments] = useState(0);
    // const { userName, clientName, taskDetails, date, status} = taskOne;
    // TODO: Make this dynamic from database. 
    // console.log(taskOne)
    
    return (
        <div className="card w-full bg-base-100 my-3 rounded-none shadow-none">
            <div className="card-body p-4">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold">Client Name: {taskOne?.clientName}</h2>
                    <h2 className="text-lg font-bold">{taskOne?.userName} </h2>
                </div>
                <p>{taskOne?.taskDetails}</p>
                <div className="card-actions flex justify-end">
                    <div className="card-actions flex justify-between gap-10 px-0">
                        {/* <button className="btn btn-xs" onClick={()=> handleLeft(taskOne?._id)}>{"<"}</button> */}
                        <button className="btn btn-xs" onClick={()=> handleLeft()}>{"<"}</button>
                        {/* <button className="btn btn-xs" onClick={()=> handleRight(taskOne?._id)}>{">"}</button> */}
                        <button className="btn btn-xs" onClick={()=> handleRight()}>{">"}</button>
                        <button className=" " onClick={()=>document.getElementById('my_modal_5').showModal()}>
                            <span className="flex ">
                                <span className="pt-2" >
                                    <FaLink />
                                </span>
                                <span className="pl-1">
                                    {attachments}
                                </span>
                            </span>
                        </button>
                        <button className="">
                            <span className="flex ">
                                <span className="pt-2">
                                    <FaCalendarAlt />
                                </span>
                                <span className="pt-1 pl-1">
                                    {taskOne?.date}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
