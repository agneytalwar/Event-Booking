import React from "react";
import {Disclosure} from '@headlessui/react'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'

const PlayFilter = (props) =>{
    return(<>
        <Disclosure>
            {({open}) =>(
                <>
                    <Disclosure.Button className='py-2 flex items-cenetr gap-3'>
                        {open ?<BiChevronUp/> : <BiChevronDown />}
                        <span className={open ? "text-red-500":"text-grey-500"}>
                            {props.title}
                        </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-grey-700">
                        <div className="flex items-center gap-3 flex-wrap">
                            {props.tags.map((tag) =>(
                                <div className="border-2 border-grey-200 rounded text-red-600 px-3 py-1">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure>
    </>)
}

export default PlayFilter;