export default function Result() {
    return (
        <div className="max-w-96 h-screen m-auto gap-6 grid items-center content-center grid-cols-12 text-center">
            <div className="col-span-12 text-4xl">
                Hurray! You made it!
            </div>
            <div className="col-span-12 text-2xl">
                You are simply the best,<br/> keep going practicing and you will be <br/>
                <span className="relative font-bold">
                    FinOps champion of AH Tech soon
                    <span className="animate-pulse font-bold text-blue-400 absolute left-0 -top-[2px]">FinOps champion of AH Tech soon</span>
                </span>
            </div>
        </div>
    )
}