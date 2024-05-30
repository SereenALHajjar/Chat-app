import { RxAvatar } from "react-icons/rx";
const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-1 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        {/* <img src="" /> */}
                        <RxAvatar className="w-10 h-10"/>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">Abdullah alattar</p>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation;