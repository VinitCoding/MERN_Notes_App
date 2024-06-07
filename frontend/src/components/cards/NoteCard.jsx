import React from 'react'
import { MdOutlinePushPin } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit,
    onDelete, onPinNote
}) => {
    return (
        <div>
            <div className=''>
                <div>
                    <h6 className='font-medium text-md'>{title}</h6>
                    <span className='text-s text-slate-500'>{date}</span>
                </div>
                <MdOutlinePushPin className='' onClick={onPinNote}/>
            </div>

            <p className=''> {content?.slice(0, 60)} </p>
        </div>
    )
}

export default NoteCard