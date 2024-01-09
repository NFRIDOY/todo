import Incomplete from '../Incomplete/Incomplete'
import ToDo from '../ToDo/ToDo'
import Doing from '../Doing/Doing'
import UnderReview from '../UnderReview/UnderReview'
import Completed from '../Completed/Completed'
import OverDated from '../OverDated/OverDated'
import TaskContainer from '../TaskContainer/TaskContainer'

export default function MainContainer() {
    return (
        <section className='flex gap-3 w-fit'>
            <TaskContainer mainTitle={"Incomplete"}>
                <Incomplete></Incomplete>
            </TaskContainer>
            <TaskContainer mainTitle={"ToDo"}>
                <ToDo></ToDo>
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
