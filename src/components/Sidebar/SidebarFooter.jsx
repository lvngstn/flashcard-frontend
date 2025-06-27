import React from 'react'
import HelpIcon from '../../assets/svg/help.svg?react'
import Button from '../ui/Button'

function SidebarFooter() {
    return (
        <div>
            <Button h="h-6" w="w-6" children={<HelpIcon />} variant="tertiary_icon" />
        </div>
    );
}
export default SidebarFooter;