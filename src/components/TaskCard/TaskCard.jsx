import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

export default function TaskCard({taskOne}) {

    const { userName, clientName, taskDetails, date, status} = taskOne;
    // TODO: Make this dynamic from database. 
    return (
        <div className="card w-full bg-base-100 shadow-xl my-3">
            <div className="card-body p-4">
                <div className="flex justify-between">
                    {/* <h2 className="text-lg font-bold">Client Name: {task.clientName}</h2> */}
                    <h2 className="text-lg font-bold">{userName} </h2>
                </div>
                <p>Details</p>
                <div className="card-actions flex justify-end">
                    <div className="card-actions flex justify-between gap-10 px-2">
                        <button className="border-2 ">
                            <span className="flex ">
                                <span className="pt-2">
                                    <FaLink />
                                </span>
                                <span>
                                    10
                                </span>
                            </span>
                        </button>
                        <button className="">
                            <span className="flex ">
                                <span className="pt-2">
                                    <FaCalendarAlt />
                                </span>
                                <span className="pt-1">
                                    {/* Date: {taskDetails} */}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
