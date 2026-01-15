import React from 'react'
// css-> css in JS
// emotion or sytled-component

export default function NavItem({id, label, isActive, onClick}) {
  return (
    <li
        onClick={() => onClick(id)}
        style={{cursor: "pointer", fontWeight: isActive ? "700" : "200"}}
    >
        {label}
    </li>
  )
}
