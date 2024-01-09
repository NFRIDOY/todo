

export default function TaskCard() {

    // TODO: Make this dynamic from database. 
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body p-4">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold">Client Name: </h2>
                    <h2 className="text-lg font-bold">User Name: </h2>
                </div>
                <p>Details</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
