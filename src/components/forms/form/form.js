import React from 'react';

export function Form(props) {
    const { children, ...restProps } = props;
    return (<form {...restProps}>
        {children}
    </form>
    )

}