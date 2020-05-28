import {useMemo} from "react";

export const useMenuAlt = (menus) => useMemo(() => {
    const struct = menus.reduce((result, menuItem) => {
        result.push({ route: menuItem.route, item: menuItem });
        return result;
    }, []).sort((a, b) => a.route < b.route ? -1 : 1);

    console.log(struct);
    console.log('2');

    menus[0].menu = [ menus[1], menus[2] ];

    return menus;
}, [ menus ]);
