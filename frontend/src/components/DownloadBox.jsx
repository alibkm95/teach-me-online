import React from 'react'

import { FaDownload } from "react-icons/fa";

const DownloadBox = () => {
  return (
    <div className='bg-base-200 p-4 rounded-box'>
      <p className="text-lg flex items-center gap-2 px-4 pb-2 border-b border-b-gray-700">
        <FaDownload className='text-2xl text-amber-500' />
        Download box
      </p>
      <ul className="menu rounded-box">
        <span className="text-emerald-600 text-sm">current lesson:</span>
        <li>
          <a>Download video</a>
        </li>
        <li>
          <a>Download attachment</a>
        </li>
        <span className="text-emerald-600 text-sm">current course:</span>
        <li>
          <a>Download all videos</a>
        </li>
        <li>
          <a>Download all attachments</a>
        </li>
      </ul>
    </div>
  )
}

export default DownloadBox