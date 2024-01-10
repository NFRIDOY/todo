import Incomplete from '../Incomplete/Incomplete'
import ToDo from '../ToDo/ToDo'
import Doing from '../Doing/Doing'
import UnderReview from '../UnderReview/UnderReview'
import Completed from '../Completed/Completed'
import OverDated from '../OverDated/OverDated'
import TaskContainer from '../TaskContainer/TaskContainer'
import toast from 'react-hot-toast'

export default function MainContainer() {
    const handleLeft = () => {
        toast.success("Left")
    }
    const handleRight = () => {
        toast.success("Right")
    }
    return (
        <section className='flex gap-3 w-fit'>
            <TaskContainer mainTitle={"Incomplete"}>
                <Incomplete handleLeft={handleLeft} handleRight={handleRight}></Incomplete>
            </TaskContainer>
            <TaskContainer mainTitle={"To Do"}>
                <ToDo handleLeft={handleLeft} handleRight={handleRight}></ToDo>
            </TaskContainer>
            <TaskContainer mainTitle={"Doing"}>
                <Doing></Doing>
            </TaskContainer>
            <TaskContainer mainTitle={"Under Review"}>
                <UnderReview></UnderReview>
            </TaskContainer>
            <TaskContainer mainTitle={"Completed"}>
                <Completed></Completed>
            </TaskContainer>
            <TaskContainer mainTitle={"OverDated"}>
                <OverDated></OverDated>
            </TaskContainer>
        </section>
    )
}
