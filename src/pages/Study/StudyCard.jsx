import RichTextEditor from '../View/Edit/Editor/RichTextEditor';

function StudyCard({id, isFlipped}) {
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