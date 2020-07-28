import {$axios} from './requset';
export function _closeOrder (data) {
    // 关闭工单
    return $axios('/closeOrder', data, 'post')
}

export function _downLoadItemExcel (data) {
    // 工单详情模板下载
    return $axios('/downLoadItemExcel', data, 'post')
}

export function _downLoadNumberExcel (data) {
    // 下载号码模板
    return $axios('/downLoadNumberExcel', data, 'get')
}

export function _exportAgentExcel (data) {
    // 导出坐席信息
    return $axios('/exportAgentExcel', data, 'post')
}

export function _exportFee (data) {
    // 导出fee列表
    return $axios('/exportFee', data, 'post')
}

export function _exportNumber (data) {
    // 导出号码
    return $axios('/exportNumber', data, 'post')
}

export function _exportOrgUM (data) {
    // 导出人工座席列表
    return $axios('/exportOrgUM', data, 'post')
}

export function _getToken (data) {
    // 登录认证，获取token
    return $axios('/getToken', data, 'post')
}

export function _importItemExcel (data) {
    // 批量导入工单详情
    return $axios('/importItemExcel', data, 'post')
}

export function _importNumberExcel (data) {
    // 导入号码
    return $axios('/importNumberExcel', data, 'post')
}

export function _insertUser (data) {
    // 添加用户
    return $axios('/insertUser', data, 'post')
}

export function _monthEndSql (data) {
    // 月末sql
    return $axios('/monthEndSql', data, 'post')
}

export function _ptCompleteOrder (data) {
    // pt完成工单
    return $axios('/ptCompleteOrder', data, 'post')
}

export function _ptRejectOrder (data) {
    // pt驳回工单
    return $axios('/ptRejectOrder', data, 'post')
}

export function _queryAgentAll (data) {
    // 查询所有坐席信息准备导出
    return $axios('/queryAgentAll', data, 'post')
}

export function _queryAgentByUM (data) {
    // 根据UM查询坐席信息
    return $axios('/queryAgentByUM', data, 'post')
}

export function _queryAgentList (data) {
    // 查询坐席信息
    return $axios('/queryAgentList', data, 'post')
}

export function _queryBaseData (data) {
    // 查询基础数据
    return $axios('/queryBaseData', data, 'post')
}

export function _queryCentre (data) {
    // 查询中心
    return $axios('/queryCentre', data, 'post')
}

export function _queryCentreSummary (data) {
    // 中心资源概览
    return $axios('/queryCentreSummary', data, 'post')
}

export function _queryConfig (data) {
    // 查询回收资源配置
    return $axios('/queryConfig', data, 'post')
}

export function _queryDataTimeList (data) {
    // 检索条件 月份列表接口
    return $axios('/queryDataTimeList', data, 'get')
}

export function _queryFeeAmountManage (data) {
    // 获取费用管理数量
    return $axios('/queryFeeAmountManage', data, 'get')
}

export function _queryFeeDataList (data) {
    // 查询费用管理列表
    return $axios('/queryFeeDataList', data, 'post')
}

export function _queryFeePriceManage (data) {
    // 获取费用管理单价
    return $axios('/queryFeePriceManage', data, 'get')
}

export function _queryHistoryList (data) {
    // 查询工号历史记录
    return $axios('/queryHistoryList', data, 'post')
}

export function _queryOrderItemAll (data) {
    // 查询该工单所有坐席准备导出
    return $axios('/queryOrderItemAll', data, 'post')
}

export function _queryOrderItemList (data) {
    // 查询工单详情
    return $axios('/queryOrderItemList', data, 'post')
}

export function _queryOrderList (data) {
    // 查询工单
    return $axios('/queryOrderList', data, 'post')
}

export function _queryOrderStepList (data) {
    // 查询工单审批流程
    return $axios('/queryOrderStepList', data, 'post')
}

export function _queryOrg (data) {
    // 查询二级机构
    return $axios('/queryOrg', data, 'post')
}

export function _queryOrgList (data) {
    // 查询费用机构列表
    return $axios('/queryOrgList', data, 'get')
}

export function _queryOrgUm (data) {
    // 查询机构人员
    return $axios('/queryOrgUm', data, 'get')
}

export function _queryPartner (data) {
    // 查询电话平台
    return $axios('/queryPartner', data, 'post')
}

export function _querySegmentList (data) {
    // 查询工号段
    return $axios('/querySegmentList', data, 'post')
}

export function _querySummaryById (data) {
    // 查询相关资源汇总
    return $axios('/querySummaryById', data, 'post')
}

export function _querySystem (data) {
    // 查询系统
    return $axios('/querySystem', data, 'post')
}

export function _rejectOrder (data) {
    // 中心it驳回工单
    return $axios('/rejectOrder', data, 'post')
}

export function _removeAgent (data) {
    // 删除坐席信息
    return $axios('/removeAgent', data, 'post')
}

export function _removeConfig (data) {
    // 删除回收资源配置
    return $axios('/removeConfig', data, 'post')
}

export function _saveConfig (data) {
    // 添加回收资源配置
    return $axios('/saveConfig', data, 'post')
}

export function _saveOrderItem (data) {
    // 保存工单详情提交至IT中心
    return $axios('/saveOrderItem', data, 'post')
}

export function _saveSegment (data) {
    // 添加工号段
    return $axios('/saveSegment', data, 'post')
}

export function _startAssign (data) {
    // 开始分配工号
    return $axios('/startAssign', data, 'post')
}

export function _stayHandleOrder (data) {
    // 查询待处理工单
    return $axios('/stayHandleOrder', data, 'post')
}

export function _submitPartner (data) {
    // 提交至电话平台
    return $axios('/submitPartner', data, 'post')
}

export function _syncCtiSignInLog (data) {
    // syncCtiSignInLog
    return $axios('/syncCtiSignInLog', data, 'post')
}

export function _syncLog (data) {
    // syncLog
    return $axios('/syncLog', data, 'post')
}

export function _test (data) {
    // test
    return $axios('/test', data, 'get')
}

export function _updateAgent (data) {
    // 更新坐席信息提交至IT中心
    return $axios('/updateAgent', data, 'post')
}

export function _updateCtiActive (data) {
    // 更新工号活动状态
    return $axios('/updateCtiActive', data, 'post')
}

export function _updateFeeAmountManage (data) {
    // 更新费用管理数量
    return $axios('/updateFeeAmountManage', data, 'post')
}

export function _updateFeeDic (data) {
    // 更新说明
    return $axios('/updateFeeDic', data, 'post')
}

export function _updateFeePriceManage (data) {
    // 更新费用管理单价
    return $axios('/updateFeePriceManage', data, 'post')
}

export function _updateLastLoginAt (data) {
    // 更新坐席最后登录时间
    return $axios('/updateLastLoginAt', data, 'post')
}

export function _updateOrderItem (data) {
    // 更新工单详情提交至IT中心
    return $axios('/updateOrderItem', data, 'post')
}

export function _updateOrgUm (data) {
    // 修改机构人员
    return $axios('/updateOrgUm', data, 'post')
}

export function _updatePassword (data) {
    // updatePassword
    return $axios('/updatePassword', data, 'post')
}
