import {useMemo} from "react";

export const useMenuAlt = (menus) => useMemo(() => {
    const structure = { menu: [] };

    console.log('menus');
    console.log(menus);

    menus.forEach((menuItem) => {
        let path = [];
        if (menuItem.menuChain) {
            path = menuItem.menuChain.split(',').map(item => item.trim());
        }

        let pointer = structure;
        path.forEach(pathItem => {

            let currentItem = pointer.menu.find(item => item.name === pathItem);
            if (!currentItem) {
                const id = Math.round(Math.random() * 10000).toString();
                currentItem = {
                    name: pathItem,
                    id,
                    slug: id,
                    menu: [],
                };

                pointer.menu.push(currentItem);
            }

            pointer = currentItem;
        });

        pointer.menu.push(menuItem);
    });

    return structure.menu;
}, [ menus ]);

// filepath: "src/content/technical-guide/technical-components/Message.mdx"
// fullpath: "/Users/s.gannochenko/proj/tryouts/docz/src/content/technical-guide/technical-components/Message.mdx"
// headings: (4) [{…}, {…}, {…}, {…}]
// hidden: false
// id: "b51a16bea95e0eaa682ebd484f1ac835"
// link: ""
// menuChain: "Technical guide, Components"
// name: "Message"
// parent: undefined
// route: "/technical-guide/technical-components/message/"
// slug: "src-content-technical-guide-technical-components-message"
