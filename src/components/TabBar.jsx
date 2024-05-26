export default function TabBar({ tabs, openTab, setOpenTab }) {
    return <nav className=" text-gray-500 text-center flex flex-wrap justify-center">
        {
            tabs.map((tab) => {
                return <a
                    className={"text-gray-400 hover:text-gray-600 border-b-2  px-3 py-2 "
                        + (openTab === tab.id ? " border-b-gray-600 text-gray-600" : "border-b-transparent")}
                    
                    href={ '#' + tab.id } x-text="tab.name"
                
                    onClick={
                    ()=>setOpenTab(tab.id)
                    }
                >
                {tab.name}
                </a>
            })
        }
            
                    
    </nav>
}