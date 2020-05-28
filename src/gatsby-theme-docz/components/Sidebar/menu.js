import {useMemo} from "react";

export const useMenuAlt = (menus) => useMemo(() => {

    console.log(menus);

    const structure = { menu: {} };

    menus.forEach((menuItem) => {
        let path = [];
        if (menuItem.menuChain) {
            path = menuItem.menuChain.split(',').map(item => item.trim());
        }

        let pointer = structure;
        path.forEach(pathItem => {
            
            if (!pointer.menu[pathItem]) {
                pointer.menu[pathItem] = {
                    name: pathItem,
                    id: 'blah',
                    menu: {},
                };
            }

            pointer = pointer.menu[pathItem];
        });

        pointer.menu[menuItem.id] = menuItem;
    });

    console.log(structure);

    return menus;
}, [ menus ]);
