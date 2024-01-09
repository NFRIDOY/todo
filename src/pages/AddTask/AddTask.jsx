

export default function AddTask() {
    return (
        <div className="flex lg:flex-row flex-col items-center pt-20">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <h1 className="text-5xl lg:text-8xl font-bold">
                    Add Task Here
                </h1>
            </div>
            <form className="card-body w-full lg:w-1/2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Client Name</span>
                    </label>
                    <input type="text" placeholder="Client Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task</span>
                    </label>
                    <input type="text" placeholder="Task" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
