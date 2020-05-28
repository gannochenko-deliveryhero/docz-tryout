import React, {ReactNode} from 'react';
import parsePropTypes from 'parse-prop-types';

export const PropsAlt = ({ of }: { of: ReactNode }) => {

    const result = parsePropTypes(of);
    console.log(result);

    return 'LALA';
};
