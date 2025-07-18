import React from 'react';

export default function CopyRight({ company, designer }) {
    return (<div className="pt-6 pb-20 text-white text-sm font-normal border-t-[1px] border-c-blue-4 ">
        <div className='flex justify-center'>
            © Copyright &nbsp;<div className='font-bold uppercase'>{company}</div>. All Rights Reserved
        </div>
        <div className='flex justify-center pt-3 '>
            Designed by &nbsp;<div className='text-c-green-3 hover:text-c-green-4 '>{designer}</div>
        </div>
    </div>);
}
