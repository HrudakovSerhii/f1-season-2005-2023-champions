import React from 'react'

const ScreenTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div role="textbox" className="w-[100%] p-4">
            <h2 className="text-lg text-gray-600 font-medium">{title}</h2>
        </div>
    )
}

export default ScreenTitle
