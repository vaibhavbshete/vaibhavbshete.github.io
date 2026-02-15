export default function TabBar({ tabs, openTab, setOpenTab }) {
    return <nav className=" text-gray-500 text-center flex flex-wrap justify-center">
        {
            tabs.map((tab,index) => {
                return <a
                    className={"text-gray-400 hover:text-gray-600 hover:bg-gray-100 px-3 py-2"
                        + (openTab === tab.id ? " bg-gray-400 text-gray-50" : "")}
                    
                    href={ '#' + tab.id } x-text="tab.name"
                
                    onClick={
                    ()=>setOpenTab(tab.id)
                    }

                    key={index}
                >
                {tab.name}
                </a>
            })
        }
            
                    
    </nav>
}
