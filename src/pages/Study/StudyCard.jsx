import React from 'react'
import RichTextEditor from '../View/Edit/Editor/RichTextEditor';
import { useParams } from 'react-router-dom';

function StudyCard({id, isFlipped, editing}) {

    // if editing is false, isFlipped can be true or false
    // if editing is true, stays at the state it is, because you're editing whatever side of the flashcard you're on
    return (
        <div className="flex flex-row gap-2 bg-neutral-800 rounded-lg h-full w-full justify-center items-center cursor-pointer">
            {!isFlipped ? (
                <div className="text-neutral-100 font-normal text-left text-2xl cursor-pointer p-8">
                    <RichTextEditor isQuestion={true} id={id}/>
                </div>
            ) : (
                <div className="text-neutral-100 font-normal text-left text-2xl cursor-pointer p-8">
                    <RichTextEditor isQuestion={false} id={id}/>
                </div>
            )}
        </div>
    );
}
export default StudyCard;