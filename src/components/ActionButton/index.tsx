import React from 'react'

type Props = {
  children: React.ReactNode;
  secondary?: boolean;
}

const ActionButton = ({children, secondary}: Props) => {
  return (
    <button className={`${secondary ? "bg-gray-400 hover:bg-primary-10" : "bg-primary-100 hover:bg-primary-200"} text-white transition-all rounded-md py-5 px-10 font-title font-bold text-lg`}>{children}</button>
  )
}

export default ActionButton