import Alpine from "alpinejs";
import works from "./works.json";

// window.works = works;

window.Alpine = Alpine;


Alpine.data('tabs', () => {
    return {
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
        openTab: 'editor',
        works: works,
        tabWorks: (role) => {
            return works.filter(work => (new Set(work.roles)).has(role))
        }
    }
})

Alpine.start();