import {useMemo} from "react";

export const useMenuAlt = (menus) => useMemo(() => {

    console.log(menus);

    const index = {};

    menus.forEach((menuItem) => {
        let path = [];
        if (menuItem.menuChain) {
            path = menuItem.menuChain.split(',').map(item => item.trim());
        }

        console.log(path);
    });

    // const struct = menus.reduce((result, menuItem) => {
    //     result.push({ route: menuItem.route, item: menuItem });
    //     return result;
    // }, []).sort((a, b) => a.route < b.route ? -1 : 1);
    //
    // console.log(struct);
    // console.log('2');

    return menus;
}, [ menus ]);
