import React from 'react';
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle
  ]
  if (props.isOpen) cls.push(classes.open)

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    >
      
    </i>
  );
};

export default MenuToggle;