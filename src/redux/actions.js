import {SYSTEMDATA,PARTNERDATA,CENTERDATA,MECHANISM, ACTIONList}  from "./actionType";

// 设置查询系统
export const _setSystemData = (data) =>{
    return ({
        type: SYSTEMDATA,
        data:data
    })
}
// 设置查询电话平台
export const _setPartnerData = (data) =>{
    return ({
        type: PARTNERDATA,
        data:data
    })
}

// 设置查询中心
export const _setCenterData = (data) =>{
    return ({
        type: CENTERDATA,
        data:data
    })
}

// 设置查询二级机构
export const _setMechanism = (data) =>{
    return ({
        type: MECHANISM,
            data:data
    })
}

export const _setActionList = (data) => {
    return async dispatch => {
        dispatch({
            type: ACTIONList,
            data:data
        })
    }
}