import Button from "../ui/Button";
import HomeIcon from "../../assets/svg/home-alt.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import SettingsIcon from "../../assets/svg/settings.svg?react";

const icons = {
  "home": <HomeIcon />,
  "search": <SearchIcon />,
  "settings": <SettingsIcon />,
}

export default function SidebarUtils({ text, icon, onClick }) {
  return (
    <div className="flex flex-row gap-2 items-center">
        <Button h="h-4" w="w-4" children={icons[icon]} variant="tertiary_icon" onClick={onClick}/>
        <span className="font-normal text-sm text-neutral-50 tracking-[0] leading-[25.2px] whitespace-nowrap font-['Inter-Regular',Helvetica]">{text}</span>
    </div>
  );
}