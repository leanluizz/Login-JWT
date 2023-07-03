import { Context } from './context.tsx'
import { useContext } from 'react';

export default function Status ({boxClass, textClass ,success,fail}: any){
    const {Is}: any = useContext(Context)
    
    return(
        <div id='boxstatus' className={boxClass}>
        <p className={textClass}>{Is === true ? success : fail }</p>
        </div>
    )
}