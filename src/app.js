import React, { Component } from 'react';
import routes from './routes'
import './index.css';
import { Router, browserHistory } from 'react-router'
import {connect} from 'react-redux'
import 'element-theme-default';
import { _queryCentre, _querySystem, _queryPartner, _queryOrg } from './api/server'
import {_setSystemData, _setCenterData, _setPartnerData, _setMechanism} from './redux/actions'
class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        // 查询中心数据
        _queryCentre()
            .then(
                res => {
                    if (res.data.code === 0) {
                        this.props.dispatch(_setCenterData({
                            ...res.data.data
                        }))
                    }
                }
            )
        // 查询系统
        _querySystem()
            .then(
                res => {
                    if (res.data.code === 0) {
                        this.props.dispatch(_setSystemData({
                            ...res.data.data
                        }))
                    }
                }
            )
        // 查询电话平台
        _queryPartner()
            .then(
                res => {
                    if (res.data.code === 0) {
                        this.props.dispatch(_setPartnerData({
                            ...res.data.data
                        }))
                    }
                }
            )
        // 查询二级机构
        _queryOrg()
            .then(
                res => {
                    if (res.data.code === 0) {
                        this.props.dispatch(_setMechanism({
                            ...res.data.data
                        }))
                    }
                }
            )
    }
    render() {
        return (
            <Router history={browserHistory}  routes={routes} />
        );
    }
}

export default connect(state=>({
    action: state.userData.action
}), (dispatch) => ({ dispatch }))(App)