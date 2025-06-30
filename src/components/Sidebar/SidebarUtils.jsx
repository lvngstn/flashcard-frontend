export default function SidebarUtils({ text, icon: Icon, onClick }) {
  return (
    <div>
      <button onClick={onClick} className="flex items-center gap-1 px-2 py-0.5 hover:bg-neutral-800/90 rounded-lg w-full h-auto">
        {Icon && <Icon className="w-5 h-5 stroke-neutral-400 fill-none" />}
        <span className="font-normal text-sm text-neutral-50 tracking-[0] leading-[25.2px] whitespace-nowrap font-['Inter-Regular',Helvetica]">
          {text}
        </span>
      </button>
    </div>
  );
}

// Set default props if needed
SidebarUtils.defaultProps = {
  text: 'Menu Item',
  icon: null,
  onClick: () => {}
}