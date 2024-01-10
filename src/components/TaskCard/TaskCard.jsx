import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";


export default function TaskCard({ taskOne }) {

    const [attachments, setAttachments] = useState(0);
    // const { userName, clientName, taskDetails, date, status} = taskOne;
    // TODO: Make this dynamic from database. 
    console.log(taskOne)
    return (
        <div className="card w-full bg-base-100 shadow-xl my-3 rounded-none">
            <div className="card-body p-4">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold">Client Name: {taskOne?.clientName}</h2>
                    <h2 className="text-lg font-bold">{taskOne?.userName} </h2>
                </div>
                <p>{taskOne?.taskDetails}</p>
                <div className="card-actions flex justify-end">
                    <div className="card-actions flex justify-between gap-10 px-0">
                        <button className="border-2 ">
                            <span className="flex ">
                                <span className="pt-2">
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
