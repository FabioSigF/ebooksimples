import React from 'react'

type Props = {
  darkMode?: boolean;
  header: string;
  title: string;
}
//Header de título de cada seção
const TitleSection = ({header, title, darkMode}: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h6 className='text-primary-100 uppercase tracking-widest font-bold'>{header}</h6>
      <h2 className={`${darkMode ? "text-white" : "text-black-50"} w-3/5 text-6xl text-center font-bold`}>{title}</h2>
    </div>
  )
}

export default TitleSection