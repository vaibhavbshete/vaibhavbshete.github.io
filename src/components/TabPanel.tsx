'use client'
// import { use } from "react"
import WorkInfo from "./WorkInfo"

import works from "../works.json";
export default function TabPanel({ tabs, openTab }) {
    // const works = use(worksPromise)
    // console.log(works, typeof works, works.default);
    
    const tabWorks = (role) => {
        return works.filter(work => (new Set(work.roles)).has(role))
    }
    // console.log(tabs,openTab,tabWorks('editor'));
    return <>
        {
            tabs.map((tab) => {

                return <div style={{ display: (openTab === tab.id) ? 'block' : 'none' }} key={tab.id}>
                    <div className="text-gray-400 my-4">
                        <ul className="space-y-6">
                            {
                                tabWorks(tab.id).map((currwork) => {
                                    return <li key={ currwork.name}>
                                         <WorkInfo work={currwork} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
            )
        }
  
    </>
}
