import React from 'react';


export default function Iteam({ key, data }) {
    if (!data) return <></>;

    const { icon, heading, para, style = {} } = data;
    var grid = (!!(heading) && !!(para));
    return (
        <div key={key} className={style.m}>
 
                {
                    icon && <div className={style.i}>

                        <i className={icon}></i>
                    </div>
                }


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

        </div>
    );
}
