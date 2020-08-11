import { combineReducers } from 'redux'
import {SYSTEMDATA,PARTNERDATA,CENTERDATA,MECHANISM, ACTIONList} from "./actionType";
export const LOGIN = 'LOGIN'
export const DECREMENT = 'DECREMENT'
const initState = {
    systemData: [], // 查询系统
    partnerData: [], // 查询电话平台
    centerData: [], // 查询中心
    mechanism: [], // 查询二级机构
    status: [
        {
            label: '全部',
            value: ''
        },
        {
            label: '待分配',
            value: 'STAY_ASSIGN'
        },
        {
            label: '已分配',
            value: 'ASSIGNED'
        },
        {
            label: '待完成',
            value: 'STAY_COMPLETE'
        },
        {
            label: '已完成',
            value: 'COMPLETED'
        },
        {
            label: 'IT驳回',
            value: 'IT_REJECT'
        },
        {
            label: 'PT驳回',
            value: 'PT_REJECT'
        },
        {
            label: '已关闭',
            value: 'CLOSED'
        }
    ],
    statusText: {
        'STAY_ASSIGN': '待分配',
        'ASSIGNED': '已分配',
        'STAY_COMPLETE': '待完成',
        'COMPLETED': '已完成',
        'IT_REJECT': 'IT驳回',
        'PT_REJECT': 'PT驳回',
        'CLOSED': '已关闭'
    },
    isActive: {
        'ACTIVE': '生效',
        'INVALID': '失效'
    },
    action: {}
}
// 用户
const userData = (state = initState, action) => {
    switch (action.type) {
        // 查询系统
        case SYSTEMDATA:
            return {...state, systemData: action.data}
        // 查询电话平台
        case PARTNERDATA:
            return {...state, partnerData: action.data}
        // 查询中心
        case CENTERDATA:
            return {...state, centerData: action.data}
        // 查询二级机构
        case MECHANISM:
            return {...state, mechanism: action.data}
        default:
            return state
    }
}

// 系统

const systemData = (state = initState, action) => {
    switch (action.type) {
        case ACTIONList:
            return {...state, mechanism: action.data}
    }
}

export default combineReducers({
    userData
})