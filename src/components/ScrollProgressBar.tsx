import React from 'react'

interface ScrollProgressBarProps {
    progressValue: number
    inverted? : boolean
}

const ScrollProgressBar = ( {progressValue, inverted}: ScrollProgressBarProps ) => {

  const progressPercent = inverted ? (100-progressValue) : progressValue

  return (
    <div className="bg-green-700 w-auto h-2">
        <div className='bg-green-400 h-full' style={{width: `${progressPercent}%`}} />
    </div>
  )
}

export default ScrollProgressBar