import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";
import useLoadTask from "../../hooks/useLoadTask"
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import Attachment from "../Attachment/Attachment";

export default function Doing({handleLeft, handleRight, doings,setDoings}) {

    // const taskdata = useLoadTask("/todo");
    const axios = useAxios();


    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContaint, setModalContaint] = useState();


    const { isPending, error, data: alltodos } = useQuery({
        queryKey: ['doings', doings],
        queryFn: () => axios.get(`/tasks?status=Incomplete`).then(
            (res) => {
                // console.log(res.data);
                return setDoings(res.data);
                // return res.data;
            })


    })

    if (isPending) return <LoadingAnimations></LoadingAnimations>


    return (
        <div>
            {
                doings?.map((taskOne) => {
                    // console.log("single task", taskOne);
                    return <TaskCard key={taskOne._id} taskOne={taskOne} setModalContaint={setModalContaint} handleLeft={handleLeft} handleRight={handleRight} />;
                    //   return <TaskCard key={taskOne._id} taskOne={taskOne} />;
                })
            }
        </div>
    )


}
