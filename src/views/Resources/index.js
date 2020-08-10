import React,{Component} from 'react'
import './index.scss';
 import { _queryCentreSummary, _querySummaryById } from '../../api/server'
import {connect} from 'react-redux'
import _forEach from 'lodash/forEach'
import {Card, Layout} from 'element-react'
 class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            dataIndex: [],
            summaryData: [],
            list: [
                {
                    dicName: '全部',
                    colors: '#5078d4',
                    dicId: '0',
                },
                {
                    colors: '#8b75ff',
                },
                {
                    colors: '#78a0fd',
                },
                {
                    colors: '#ff766e',
                },
                {
                    colors: '#ff985e',
                }
            ],
            listIndex: 0
        }
    }
    changeTitle = (index, item) => {
        this.setState({
            listIndex: index,
            details: item
        }, () => {
            this.getSummaryById()
        })
    }

    componentDidMount () {
        this.getCenter()
        this.getSummaryById()
    }
     setBgData =  (index,dex, data) => {
        let dataIndex = this.state.dataIndex
         dataIndex[index].index = dex
         dataIndex[index].rate = data
         this.setState({
             dataIndex: dataIndex
         })
     }
    getCenter = async ()=> {
        let arr = this.state.list
        await _queryCentreSummary()
            .then(
                res => {
                    if (res.data.code === 0) {
                        _forEach(res.data.data, (item,index) => {
                            arr[index + 1] = Object.assign({}, item, arr[index + 1])
                        })
                    }
                }
            )
        await this.setState({
            list: arr
        })
    }
     getSummaryById = async () => {
         let id = this.state.list[this.state.listIndex].dicId
         this.setState({
             dataIndex: []
         })
         let dataIndex = this.state.dataIndex
         await _querySummaryById({centreId: id})
             .then(
                 res => {

                     if (res.data.code === 0) {
                         this.setState({
                             summaryData: res.data.data
                         })
                         _forEach(res.data.data, item => {
                             dataIndex.push({'index': 8, 'rate': item.partnerSumModel.rate})
                         })
                     }
                 }
             )
         await this.setState({
             dataIndex: dataIndex
         })
     }
    render() {
        let {list, listIndex, details, summaryData, dataIndex} = this.state
        return (
            <div>
                <div className="list">
                    <List list={list} fun={this.changeTitle} listIndex={listIndex}></List>
                </div>
                {
                    listIndex === 0 ? <div className="header" >
                        {
                            list.map((item,index) => {
                                return (
                                    index !== 0 ? <div className="platform" key={index}>
                                        {item.dicName}
                                        <span> &nbsp; {item.propRate}% &nbsp;({item.allTotal}个)</span>
                                    </div> : null

                                )
                            })
                        }

                    </div> :
                        <div>
                            <div className="alone" >
                                <span className="text">已使用：{list[listIndex].usedTotal}个 &nbsp; {list[listIndex].rate}%</span>
                                <div className="content" style={{background:details.colors, width: list[listIndex].rate + '%'}}></div>
                        </div>
                    </div>
                }
                <div className="body">
                    {
                        summaryData.map((item,index)=> {
                            return (
                                <Card  className="box-card "
                                       key={item.partnerSumModel.dicName}
                                       header = {
                                           <div className="clearfix">
                                               <span>{item.partnerSumModel.dicName}</span>
                                           </div>
                                       }
                                >
                                    <Layout.Row gutter="24">
                                        <Layout.Col span="3">
                                            <div className="grid-left">
                                                <div className="item-title ">业务系统</div>
                                                <div className="item-title ">工号资源总量</div>
                                                <div className="item-title ">已用数量</div>
                                                <div className="item-title ">可用数量</div>
                                                <div className="item-title">使用率</div>
                                            </div>
                                        </Layout.Col>
                                        <Layout.Col span="17">
                                            <div className="grid-content">
                                                {
                                                    item.systemSumModels.map((datas,dex) => {
                                                        return (
                                                            <div className="item" onClick={
                                                                ()=>{
                                                                    this.setBgData(index, dex, datas.rate)
                                                                }
                                                            } key={'i' + datas.dicId} style={{width: dex == 6 ? '18%' : null}}>
                                                                <div className="item-child " className={ dataIndex[index] && dataIndex[index].index === dex ? 'bgef6' : null }>{datas.dicName}</div>
                                                                <div className={ dataIndex[index] && dataIndex[index].index === dex ? 'bgef6' : null }>
                                                                    <div className="item-child ">{datas.allTotal}</div>
                                                                    <div className="item-child ">{datas.usedTotal}</div>
                                                                    <div className="item-child ">{datas.canTotal}</div>
                                                                    <div className="item-child ">{datas.rate}%</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="item" onClick={
                                                    ()=>{
                                                        this.setBgData(index, 8, item.partnerSumModel.rate)
                                                    }
                                                }>
                                                    <div className="item-child" className={ dataIndex[index] && dataIndex[index].index === 8 ? 'bgef6' : null }>合计</div>
                                                        <div className={ dataIndex[index] && dataIndex[index].index === 8 ? 'bgef6' : null }>
                                                        <div className="item-child ">{item.partnerSumModel.allTotal}</div>
                                                        <div className="item-child ">{item.partnerSumModel.usedTotal}</div>
                                                        <div className="item-child ">{item.partnerSumModel.canTotal}</div>
                                                        <div className="item-child ">{item.partnerSumModel.rate}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Layout.Col>
                                        <Layout.Col span="4">
                                            {
                                                dataIndex[index] ?
                                                    <div className="circle" >
                                                        <div className="pie_left">
                                                            <div className="left" className={dataIndex[index].rate * 3.6 >= 180 ? 'traleft' : null} style={{transform: `rotate(${dataIndex[index].rate * 3.6 <= 180 ?  -180 : dataIndex[index].rate * 3.6 - 360}deg)`}}/>
                                                        </div>
                                                        <div className="pie_right">
                                                            <div className="right"  style={{transform: `rotate(${dataIndex[index].rate * 3.6 <= 180 ?  dataIndex[index].rate * 3.6 - 180 : 0}deg)`}}/>
                                                        </div>
                                                        <div className="mask">
                                                            <div>
                                                                <span>{dataIndex[index].rate}</span>%
                                                                <p>使用率</p>
                                                            </div>
                                                        </div>
                                                    </div> : null
                                            }

                                        </Layout.Col>
                                    </Layout.Row>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

const List = ({list, fun, listIndex}) => {
     return (
         <ul>
             {list.map((item,index) => {
                 return (
                     <li key={index} onClick={ ()=> fun(index, item)} className={listIndex === index ? 'borbg' : ''}>
                         <div className="bor" style={{'background': item.colors}}/>
                         <p>{item.dicName}</p>
                     </li>
                 )
             })}
         </ul>
     )
}

export default index
