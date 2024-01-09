

export default function TaskContainer({ children, mainTitle }) {
    return (
        <div className="px-2 w-96 bg-base-300">
            <h1 className="py-10 ">
                {mainTitle}
            </h1>
            <section>
                {children}

            </section>
        </div>
    )
}
