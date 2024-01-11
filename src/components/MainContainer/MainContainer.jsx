import Incomplete from '../Incomplete/Incomplete'
import ToDo from '../ToDo/ToDo'
import Doing from '../Doing/Doing'
import UnderReview from '../UnderReview/UnderReview'
import Completed from '../Completed/Completed'
import OverDated from '../OverDated/OverDated'
import TaskContainer from '../TaskContainer/TaskContainer'
import toast from 'react-hot-toast'
import useAxios from '../../hooks/useAxios'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function MainContainer({
    toDoTasks,
    setToDoTasks,
    incomplete,
    setIncomplete,
    doings,
    setDoings,
    UnderReviews,
    setUnderReviews,
    completeds,
    setCompleteds,
    overDated,
    setOverDated,
}) {


    // const { isPending, error, data: alltodos } = useQuery({
    //     queryKey: ['todos'],
    //     queryFn: () => axios.get(`/tasks?status=todo`).then(
    //         (res) => {
    //             // console.log(res.data);
    //             return setToDoTasks(res.data);
    //             // return res.data;
    //         })


    // })

    const axios = useAxios();
    const handleLeft = (task) => {
        // toast.success("Previous Step")
        axios.put(`/previousTask`, task)
            .then((res) => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success("Status Updated")
                }
            })
    }
    const handleRight = (task) => {
        // toast.success("Next Step")
        axios.put(`/nextTask`, task)
            .then((res) => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success("Status Updated")
                }
            })
    }

    return (
        <section className='flex gap-3 w-fit'>
            <TaskContainer mainTitle={"Incomplete"}>
                <Incomplete
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    incomplete={incomplete}
                    setIncomplete={setIncomplete}
                ></Incomplete>
            </TaskContainer>
            <TaskContainer mainTitle={"To Do"}>
                <ToDo
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    toDoTasks={toDoTasks}
                    setToDoTasks={setToDoTasks}
                ></ToDo>
            </TaskContainer>
            <TaskContainer mainTitle={"Doing"}>
                <Doing
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    doings={doings}
                    setDoings={setDoings}
                ></Doing>
            </TaskContainer>
            <TaskContainer mainTitle={"Under Review"}>
                <UnderReview
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    UnderReviews={UnderReviews}
                    setUnderReviews={setUnderReviews}
                ></UnderReview>
            </TaskContainer>
            <TaskContainer mainTitle={"Completed"}>
                <Completed
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    completeds={completeds}
                    setCompleteds={setCompleteds}
                ></Completed>
            </TaskContainer>
            <TaskContainer mainTitle={"OverDated"}>
                <OverDated
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    overDated={overDated}
                    setOverDated={setOverDated}
                ></OverDated>
            </TaskContainer>
        </section>
    )
}
