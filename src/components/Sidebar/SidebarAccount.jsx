import React from 'react'
import UserIcon from '../../assets/svg/user.svg?react'
import ChevronDownIcon from '../../assets/svg/chevron-down.svg?react'

function SidebarAccount() {
    return (
        <div className="flex justify-between items-center px-2 py-1 hover:bg-neutral-800/90 rounded-lg">
            <div className="flex flex-row items-center gap-4">
                <UserIcon className="w-4 h-4 stroke-neutral-100  fill-neutral-100 stroke-1.5" />
                <span className="font-semibold text-md text-neutral-50 tracking-[0] leading-[25.2px] whitespace-nowrap font-['Inter-Regular',Helvetica]">Aiden L</span>
            </div>
            <ChevronDownIcon className="w-3 h-3 fill-neutral-400" />
        </div>
    );
}
export default SidebarAccount;