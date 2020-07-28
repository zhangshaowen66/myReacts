import React,{Component} from 'react'
import './index.scss';
 import { _queryCentre } from '../../api/server'

export default class index extends Component{
    constructor() {
        super();
        this.state = {
            details: [],
            list: [
                {
                    dicName: '全部',
                    colors: '#5078d4',
                    dicId: '0',
                    propRate: 1,
                    allTotal: 10,
                    usedTotal: 200,
                    rate: 10
                },
                {
                    dicName: '张江中心',
                    colors: '#8b75ff',
                    propRate: 2,
                    allTotal: 40,
                    usedTotal: 200,
                    rate: 10
                },
                {
                    dicName: '外高桥中心',
                    colors: '#78a0fd',
                    propRate: 2,
                    allTotal: 40,
                    usedTotal: 200,
                    rate: 10
                },
                {
                    dicName: '成都中心',
                    colors: '#ff766e',
                    propRate: 4,
                    allTotal: 60,
                    usedTotal: 200,
                    rate: 10
                },
                {
                    dicName: '天津中心',
                    colors: '#ff985e',
                    propRate: 2,
                    allTotal: 70,
                    usedTotal: 200,
                    rate: 10
                }
            ],
            listIndex: 0
        }
    }
    changeTitle = (index, item) => {
        this.setState({
            listIndex: index,
            details: item
        })

    }

    componentDidMount () {
        console.log('111222')
        _queryCentre({a: 111})
    }
    render() {
        let {list, listIndex, details} = this.state
        return (
            <div>
                <div className="list">
                    <ul>
                        {
                            list.map((item,index) => {
                                return (
                                    <li key={item.dicName} className={listIndex === index ? 'borbg' : ''} onClick={this.changeTitle.bind(this, index, item)}>
                                        <div className="bor" style={{'background': item.colors}}/>
                                        <p>{item.dicName}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    listIndex === 0 ? <div className="header" >
                        {
                            list.map(item => {
                                return (
                                    <div className="platform" key={item.dicName}>
                                        {item.dicName}
                                        <span> &nbsp; {item.propRate}% &nbsp;({item.allTotal}个)</span>
                                    </div>
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

            </div>
        )
    }
}


