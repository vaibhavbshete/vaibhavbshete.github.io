import WorkInfo from "./WorkInfo"
export default function TabPanel({ tabs, openTab, tabWorks }) {
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
