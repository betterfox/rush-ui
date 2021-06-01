import React from 'react';
import * as FontAwesomeIcon from 'react-icons/fa'
import * as FiIcon from "react-icons/fi";

interface AppIconProps {
    iconName: string | null
};

const AppIcon = ({ iconName }: AppIconProps) => {
    if(iconName?.startsWith("Fa")) {
        // @ts-ignore
        const icon = FontAwesomeIcon[iconName];
        return React.createElement(icon)
    }
    if(iconName?.startsWith("Fi")) {
        // @ts-ignore
        const icon = FiIcon[iconName];
        return React.createElement(icon)
    }
    return null
}

export default AppIcon;