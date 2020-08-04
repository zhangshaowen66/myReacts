import {SYSTEMDATA,PARTNERDATA,CENTERDATA,MECHANISM}  from "./actionType";

// 设置查询系统
export const _setSystemData = (data) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type: SYSTEMDATA,
                data:data
            })
        },2000);
    }
}
// 设置查询电话平台
export const _setPartnerData = (data) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type: PARTNERDATA,
                data:data
            })
        },2000);
    }
}

// 设置查询中心
export const _setCenterData = (data) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type: CENTERDATA,
                data:data
            })
        },2000);
    }
}

// 设置查询二级机构
export const _setMechanism = (data) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type: MECHANISM,
                data:data
            })
        },2000);
    }
}
