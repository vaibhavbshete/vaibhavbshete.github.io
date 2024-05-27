// import Alpine from "alpinejs";
import works from "./works.json";
import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import  TabPanel  from "./components/TabPanel";
import TabBar from "./components/TabBar";
window.React = React
// window.works = works;

// window.Alpine = Alpine;
function TabWrapper() {
    let hashLinkedOpenTab = window.location.hash.substring(1) || 'editor'
    let [ openTab, setOpenTab] = useState(hashLinkedOpenTab)
    let tabs = {
        tabs: [
            {
                id:'dev',
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
        ],
        openTab: openTab,
        setOpenTab: setOpenTab,
        works: works,
        tabWorks: (role) => {
            return works.filter(work => (new Set(work.roles)).has(role))
        }
    }
    return <>
        <TabBar {...tabs}/>
        <TabPanel {...tabs}/>
    </>
}

// Alpine.data('tabs', () => {
//     return tabs
// })

// Alpine.start();

let tabsWrapper = document.getElementById('tabs');
if (tabsWrapper) {
    createRoot(tabsWrapper).render(<StrictMode>
        <TabWrapper/>
        </StrictMode>
    );
}