import ChevronDownIcon from '../../assets/svg/chevron-down.svg?react'
import UserIcon from '../../assets/svg/user.svg?react'
import Button from '../ui/Button'

function SidebarAccount({ username }) {
    return (
        <div className="flex justify-between items-center px-2 py-1 hover:bg-neutral-800/90 rounded-lg">
            <div className="flex flex-row items-center gap-4">
                <UserIcon className="w-4 h-4 stroke-neutral-100  fill-neutral-100 stroke-1.5" />
                <span className="font-semibold text-md text-neutral-50 tracking-[0] leading-[25.2px] whitespace-nowrap font-['Inter-Regular',Helvetica]">{username}</span>
            </div>
            <Button h="h-4" w="w-4" children={<ChevronDownIcon />} variant="tertiary_icon"/>
        </div>
    );
}
export default SidebarAccount;