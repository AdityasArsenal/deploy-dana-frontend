export function WindowsAppPromotion() {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div>
                <h3 className="font-medium text-white">Introducing our Windows App</h3>
                <p className="text-gray-400">Install the native Windows App</p>
            </div>
            <div className="text-blue-400">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
            </div>
        </div>
    );
}