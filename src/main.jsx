// import Alpine from "alpinejs";
// import works from "./works.json";
// "use client";
import  { StrictMode, useState, Suspense } from "react";
import { createRoot } from "react-dom/client";
import  TabPanel  from "./components/TabPanel";
import TabBar from "./components/TabBar";

// window.works = works;
// window.Alpine = Alpine;
function TabWrapper() {
//    const worksPromise = import('./works.json')
    
    // console.log(works)    
    let hashLinkedOpenTab = window.location.hash.substring(1) || 'editor'
    let [ openTab, setOpenTab] = useState(hashLinkedOpenTab)
    const tabs = [
        {
            id: 'dev',
            name: 'PHP Web Developer',
        },
        {
            id: 'editor',
            name: 'Film Editor',
        },
        {
            id: 'colourist',
            name: 'Colourist',
        },
        {
            id: 'designer',
            name: 'Graphic Designer',
        }
    ];
    // {
    //     tabs:
    //     // openTab: openTab,
    //     // setOpenTab: setOpenTab,
    //     // works: works,
        
    // }
    // ;
    return <>
        <TabBar tabs={tabs} openTab={openTab} setOpenTab={setOpenTab} />
        <TabPanel tabs={tabs} openTab={openTab}/>
    </>
}
function App() {
    
    // console.log(works);
    
    return <Suspense fallback={<h1>Loading Works...</h1>}>
        <TabWrapper />
    </Suspense>
}


let tabsWrapper = document.getElementById('tabs');
if (tabsWrapper) {
    createRoot(tabsWrapper).render(<StrictMode>
        <App/>
    </StrictMode>
    );
}