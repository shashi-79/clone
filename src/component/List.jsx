import React from 'react';
import Iteam from './Iteam'

export default function List({list_data }) {
    if (!list_data) return <></>;

    const {heading, para, list_style, lists_data = {}, footer,style={} } = list_data;

    return (
        <div className={style.m}>
         {
             heading && <div className={style.h}>
                 {heading}
             </div>
         }
         {
             para && <p className={style.p}>
                 {para}
             </p>
         }
         {
            lists_data && <div className={style.l}>
                {lists_data.map((value,index)=>{
                   return <Iteam  key={index} data={{style:{...list_style},...value}}/>
                })}
            </div> 
         }
         {
             footer && <p className={style.f}>
                 {footer}
             </p>
         }
        </div>
    );
}
