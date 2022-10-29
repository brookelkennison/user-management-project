import React, { useEffect, useState } from 'react';

export const SortUsers = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='sortUsers' style={{alignSelf: 'start'}}>
            <button id="dropdownDefault" onClick={() => {setDropdown(!dropdown)}} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" style={{backgroundColor: dropdown ? "darkgrey" : "rgb(29 78 216)"}}>Sort Users<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{transform: dropdown ? "scaleY(-1)" : "none"}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            {dropdown && (
            <div id="dropdown" className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{position: 'absolute'}}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Alphabetical</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ascending</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</a>
                    </li>
                </ul>
            </div>
            )}
        </div>
    )
}