import React from 'react';
import t from 'prop-types';

const kinds = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
};

type Props = {
    kind: { [k: string]: string };
} & { [k: string]: string };

export const Alert = ({ children, kind, ...rest }: Props) => (
    <div
        style={{
            padding: 20,
            background: 'white',
            borderRadius: 3,
            color: 'white',
            background: kinds[kind],
        }}
        {...rest}
    >
        LALALA
        {children}
    </div>
);

const annotate = (type: any, label: string) => {
    type.label = label;

    return type;
};

Alert.propTypes = {
    /**
     * The kind prop is used to set the alert's background color
     */
    kind: annotate(t.oneOf(['info', 'positive', 'negative', 'warning']), 'Kind of'),
};

Alert.defaultProps = {
    kind: 'info',
};
