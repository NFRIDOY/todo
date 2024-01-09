

export default function TaskContainer({ children, mainTitle }) {
    return (
        <div className="p-2 w-96 bg-violet-100 border-2 border-red-500 max-h-screen">
            <h1 className="pl-5 py-6 mb-3 border-2 border-blue-500">
                {mainTitle}
            </h1>
            <section className="">
                {children}

            </section>
        </div>
    )
}
