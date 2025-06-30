function ContentContainer({ children }) {
    return (
        <div className="flex flex-col gap-4 bg-neutral-950 h-screen w-full px-48">
            {children}
        </div>
    );
}

export default ContentContainer;