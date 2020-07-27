import React,{Component} from 'react'
import './index.less';
export default class index extends Component{
    constructor() {
        super();
        this.state = {
            list: [
                {
                    dicName: '全部',
                    colors: '#5078d4',
                    dicId: '0'
                },
                {
                    dicName: '张江中心',
                    colors: '#8b75ff'
                },
                {
                    dicName: '外高桥中心',
                    colors: '#78a0fd'
                },
                {
                    dicName: '成都中心',
                    colors: '#ff766e'
                },
                {
                    dicName: '天津中心',
                    colors: '#ff985e'
                }
            ],
        }
    }
    render() {
        let {list} = this.state
        console.log(list, '1111')
        return (
            <div>
                <div className="list">
                    <ul>
                        {
                            list.map(item => {
                                return (
                                    <li key={item.dicName}>{item.dicName}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


