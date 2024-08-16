import React from 'react';

function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-teal-300 mb-2 mt-4"></div>
            <p className="text-gray-600 mt-2">Sedang ada kendala server</p>
        </div>
    );
}

export default Loading;
