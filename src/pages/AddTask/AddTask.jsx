
import toast from 'react-hot-toast';
import useAxios from './../../hooks/useAxios';

export default function AddTask() {

    const axios = useAxios();

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const clientName = form.clientName.value;
        const taskDetails = form.taskDetails.value;
        const date = form.date.value;


        const newTask = {
            userName,
            clientName,
            taskDetails,
            date,
            status: "todo"
        }
        // Output
        console.log(newTask)
        
    }

    return (
        <div className="flex lg:flex-row flex-col items-center pt-20">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <h1 className="text-5xl lg:text-8xl font-bold">
                    Add Task Here
                </h1>
            </div>
            <form className="card-body w-full lg:w-1/2 " onSubmit={handleAddTask}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='userName' id='userName' placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Client Name</span>
                    </label>
                    <input type="text" name='clientName' placeholder="Client Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task</span>
                    </label>
                    <input type="text" name='taskDetails' placeholder="Task" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
