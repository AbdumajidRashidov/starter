// in src/Menu.js
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuItemLink, useSidebarState, useResourceDefinitions, useGetResourceLabel } from 'react-admin'
import DefaultIcon from '@mui/icons-material/ViewList'
import { Link } from 'react-router-dom'

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'))
    const [open] = useSidebarState();
    const resources = useResourceDefinitions();
    const getResLabel = useGetResourceLabel();
    return (
        <div>
            <Link to="/" className="logo">CTO</Link>
            {Object.values(resources).filter(r => r.hasList).map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        getResLabel(resource.name) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            {/* <MenuItemLink
                to="/custom-route"
                primaryText="Miscellaneous"
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            /> */}
            {isXSmall && logout}
        </div>
    )
}

export default Menu