function ContentContainer({ children }) {
    return (
        <div className="flex flex-col gap-4 bg-neutral-950 h-fit w-full px-48">
            {children}
        </div>
    );
}

export default ContentContainer;