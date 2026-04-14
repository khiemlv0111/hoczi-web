import { X } from "lucide-react";
import { useState } from "react";

export function CommonModal({ open = false, onClose, children }: Readonly<{ open?: boolean, onClose: Function; children: React.ReactNode }>) {
    // const [open, setOpen] = useState(true)
    const closeAnswerModal = () => {
        // setOpen(false);

    }
    return (
        <>
            {open ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3" onClick={closeAnswerModal}>
                <div className="bg-white rounded-xl shadow-lg w-full max-w-xl px-5 pt-2 pb-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-end mb-0">

                        <button onClick={() => { onClose() }} className="text-gray-400 cursor-pointer hover:text-gray-600 text-xl leading-none"><X /></button>
                    </div>
                    <div>
                        <h2 className="text-[15px] font-semibold text-gray-900">{'Modal Title'}</h2>
                    </div>

                    {children}
                </div>
            </div> : null}


        </>
    )
}