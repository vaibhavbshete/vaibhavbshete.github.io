import Alpine from "alpinejs";

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
        openTab: 'dev',
        tabWorks: (role) => {
            return works.filter(work => (new Set(work.roles)).has(role))
        }
    }
})

Alpine.start();