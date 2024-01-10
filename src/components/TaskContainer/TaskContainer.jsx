

export default function TaskContainer({ children, mainTitle }) {
    return (
        <div className="p-2 w-96 bg-base-200 max-h-screen rounded-sm">
            <h1 className="pl-5 py-6 mb-3 font-bold  ">
                {mainTitle}
            </h1>
            <section className="max-h-[70vh] overflow-auto">
                {children}
            </section>
        </div>
    )
}
