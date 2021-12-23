import React from 'react';
import classNames from 'classnames';

const COLORS = {
  primary: '#13939E',
  error: '#D40000',
  warn: '#F1924E',
  success: '#2DA641',
  unavailable: '#D0D9D9', // 不可用状态圆点颜色等
};

enum Size {
  default = 8,
  lg = 12,
}

interface IProps {
  type?: 'primary' | 'error' | 'success' | 'warn' | 'unavailable';
  className?: string;
  size?: number | 'default' | 'lg';
  color?: string;
}

const ColorDot = ({ type = 'primary', className, size = 'default', color }: IProps) => {
  const sizeNumber = typeof size === 'number' ? size : Size[size] || 8;
  return (
    <span
      className={classNames('cube-color-dot', className)}
      style={{
        backgroundColor: color ? color : COLORS[type],
        width: sizeNumber,
        height: sizeNumber,
      }}
    />
  );
};

export default ColorDot;
