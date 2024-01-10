import { useState } from "react";
import useLoadTask from "../../hooks/useLoadTask"
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import TaskCard from "../TaskCard/TaskCard";



export default function ToDo() {
    // const taskdata = useLoadTask("/todo");
    const axios = useAxios();

    const [toDoTasks, setToDoTasks] = useState([]);

    const { isPending, error, data: alltodos } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get("/todo").then(
            (res) => {
                console.log(res.data);
                setToDoTasks(res.data);
                // return res.data;
            })


    })
    // toDoTasks?.map((task) => "a");
    console.log((toDoTasks));
    // for (task of toDoTasks) {
    // }
    // for (const task of toDoTasks) {

    //     console.log("object");
    // }

    if (isPending) return <LoadingAnimations></LoadingAnimations>

    // console.log(toDoTasks.length);
    return (
        <div>
            {
                // toDoTasks?.map((task) => console.log(task))
                toDoTasks?.map((taskOne) => <TaskCard key={taskOne._id} taskOne={taskOne} ></TaskCard>)
            }
        </div>
    )
}
