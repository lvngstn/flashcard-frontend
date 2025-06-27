import React from 'react'
import Button from '../../components/ui/Button'
import CloseIcon from '../../assets/svg/close.svg?react'
import SettingsIcon from '../../assets/svg/settings.svg?react'
import BackIcon from '../../assets/svg/back.svg?react'
import NextIcon from '../../assets/svg/next.svg?react'
import ShuffleIcon from '../../assets/svg/shuffle.svg?react'
import EditIcon from '../../assets/svg/edit-01.svg?react'
import PageLink from '../../components/ui/PageLink'

function StudyUtils({folderId, onNext, onBack, length, index, onShuffle, onEdit}) {
    return (
        <div className="flex flex-row gap-2 justify-between items-top h-fit w-full">
            <div className="flex flex-row gap-2">
                <PageLink to={`/view/${folderId}/cards`} h="h-7" w="w-7" children={<CloseIcon />} variant="tertiary_icon" />
                <Button h="h-7" w="w-7" children={<SettingsIcon />} variant="tertiary_icon" />
            </div>
            <div className="flex flex-row gap-2 items-center h-fit">
                <Button h="h-7" w="w-7" children={<BackIcon />} variant="primary_icon" onClick={onBack}/>
                <div className="text-neutral-300 font-normal text-sm">{index + 1} / {length}</div>
                <Button h="h-7" w="w-7" children={<NextIcon />} variant="primary_icon" onClick={onNext}/>
            </div>
            <div className="flex flex-row gap-2 pl-6">
                <Button h="h-7" w="w-7" children={<EditIcon />} variant="tertiary_icon" onClick={onEdit}/>
                <Button h="h-7" w="w-7" children={<ShuffleIcon />} variant="tertiary_icon" onClick={onShuffle}/>
            </div>
        </div>
    );
}
export default StudyUtils;