

export const LoadingScreen = ({ className, text }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center h-screen w-full ${className}`}
        >
            <img src="/Images/loading-cup.gif" alt="loading" width={100} height={100} />
            <div className="flex items-center gap-1 mt-1">
                <p className="text-primary text-sm font-semibold">
                    {text ? text : "loading"}
                </p>
                <span className="loading-dot" />
                <span className="loading-dot" />
                <span className="loading-dot" />
            </div>
        </div>
    );
};
