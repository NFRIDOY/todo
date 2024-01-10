import { useState } from "react";
import useLoadTask from "../../hooks/useLoadTask"
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import TaskCard from "../TaskCard/TaskCard";
import Attachment from "../Attachment/Attachment";



export default function ToDo() {
    // const taskdata = useLoadTask("/todo");
    const axios = useAxios();

    const [toDoTasks, setToDoTasks] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContaint, setModalContaint] = useState();


    const { isPending, error, data: alltodos } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get("/todo").then(
            (res) => {
                // console.log(res.data);
                return setToDoTasks(res.data);
                // return res.data;
            })


    })
    console.log(toDoTasks);
    // toDoTasks?.map((task) => "a");
    // for (task of toDoTasks) {
    // }
    // for (const task of toDoTasks) {

    //     console.log("object");
    // }

    if (isPending) return <LoadingAnimations></LoadingAnimations>

    // console.log(toDoTasks.length);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            {
                toDoTasks?.map((taskOne) => {
                    console.log("single task", taskOne);
                    return <TaskCard key={taskOne._id} taskOne={taskOne} setModalContaint={setModalContaint} />;
                    //   return <TaskCard key={taskOne._id} taskOne={taskOne} />;
                })
            }
            <Attachment isOpen={isModalOpen} onClose={closeModal}>
                {/* Content for the modal goes here */}
                <h2>Modal Content</h2>
                <p>This is some content inside the modal.</p>
            </Attachment>
        </div>
    )
}
