import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";
import useLoadTask from "../../hooks/useLoadTask"
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import Attachment from "../Attachment/Attachment";

export default function OverDated({
    handleLeft,
    handleRight,
    overDated,
    setOverDated,
}) {
    // const taskdata = useLoadTask("/todo");
    const axios = useAxios();


    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContaint, setModalContaint] = useState();


    const statusUnderReview = "OverDated"
    const { isPending, error, data: alltodos } = useQuery({
        queryKey: ['overDated', overDated],
        queryFn: () => axios.get(`/tasks?status=${statusUnderReview}`).then(
            (res) => {
                // console.log(res.data);
                return setOverDated(res.data);
                // return res.data;
            })


    })

    if (isPending) return <LoadingAnimations></LoadingAnimations>


    return (
        <div>
            {
                overDated?.map((taskOne) => {
                    // console.log("single task", taskOne);
                    return <TaskCard key={taskOne._id} taskOne={taskOne} setModalContaint={setModalContaint} handleLeft={handleLeft} handleRight={handleRight} />;
                    //   return <TaskCard key={taskOne._id} taskOne={taskOne} />;
                })
            }
        </div>
    )
}