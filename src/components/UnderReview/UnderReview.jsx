import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";
import useLoadTask from "../../hooks/useLoadTask"
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import Attachment from "../Attachment/Attachment";

export default function UnderReview({
    handleLeft,
    handleRight,
    UnderReviews,
    setUnderReviews,
}) {
    // const taskdata = useLoadTask("/todo");
    const axios = useAxios();


    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContaint, setModalContaint] = useState();


    const statusUnderReview = "Under Review"
    const { isPending, error, data: alltodos } = useQuery({
        queryKey: ['UnderReviews', UnderReviews],
        queryFn: () => axios.get(`/tasks?status=${statusUnderReview}`).then(
            (res) => {
                // console.log(res.data);
                return setUnderReviews(res.data);
                // return res.data;
            })


    })

    if (isPending) return <LoadingAnimations></LoadingAnimations>


    return (
        <div>
            {
                UnderReviews?.map((taskOne) => {
                    // console.log("single task", taskOne);
                    return <TaskCard key={taskOne._id} taskOne={taskOne} setModalContaint={setModalContaint} handleLeft={handleLeft} handleRight={handleRight} />;
                    //   return <TaskCard key={taskOne._id} taskOne={taskOne} />;
                })
            }
        </div>
    )
}
