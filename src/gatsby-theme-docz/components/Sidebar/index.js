/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, { useState, useRef, useEffect } from 'react'
import { Global } from '@emotion/core'
import { jsx, Box } from 'theme-ui'
import { useMenus, useCurrentDoc } from 'docz'

import * as styles from './styles'
import { NavSearch } from '../NavSearch'
import { NavLink } from '../NavLink'
import { NavGroup } from '../NavGroup'
import {useMenuAlt} from "./menu";

export const Sidebar = React.forwardRef((props, ref) => {
  const [query, setQuery] = useState('')
  const menus = useMenus({ query })
  const currentDoc = useCurrentDoc()
  const currentDocRef = useRef()
  const handleChange = ev => {
    setQuery(ev.target.value)
  }
  useEffect(() => {
    if (ref.current && currentDocRef.current) {
      ref.current.scrollTo(0, currentDocRef.current.offsetTop)
    }
  }, [])

  const menuStructure = useMenuAlt(menus);

  return (
    <>
      <Box onClick={props.onClick} sx={styles.overlay(props)}>
        {props.open && <Global styles={styles.global} />}
      </Box>
      <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
        <NavSearch
          placeholder="Type to search..."
          value={query}
          onChange={handleChange}
        />
        {menuStructure &&
          menuStructure.map(menuItem => {
            if (menuItem.menu)
              return <NavGroup key={menuItem.id} item={menuItem} sidebarRef={ref} />
            if (menuItem.route === currentDoc.route) {
              return (
                <NavLink key={menuItem.id} item={menuItem} ref={currentDocRef}>
                  {menuItem.name}
                </NavLink>
              )
            }
            return (
              <NavLink key={menuItem.id} item={menuItem}>
                {menuItem.name}
              </NavLink>
            )
          })}
      </Box>
    </>
  )
})
