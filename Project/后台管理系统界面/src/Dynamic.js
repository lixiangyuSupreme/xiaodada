import React from 'react'
import { Table } from 'antd'
import Delete from './icons/delete.png'
import './dynamic.css'

class Dynamic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // bottom: 'bottomRight',
    }
  }
  



  componentDidMount() {
    //通过接口获得数据
    let url = 'https://www.youlewazi.top:1234/information';
    fetch(url, {
      method: 'get',
    }).then(res => res.json())
      .then(data => {
        this.setState({
          dataSource:data
        })
      }
      )
  }



  //删除
  deleteItem = (id) =>{
    // console.log(text.id)
    // const DelDataSource = this.state.dataSource;
    // DelDataSource.splice(text.id-1, 1);//text.id为获取索引，后面的1为一次去除几行
    // this.setState({
    //   dataSource: DelDataSource,
    // });
    // console.log(this.state.dataSource)
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.id !== id),
    });
  }
  

  render() {

    //定义表头，一般放在render()中
    const columns = [
      {
        title: '序号',         //列名称
        dataIndex: 'id'      //数据源的字段名
      },
      {
        title: '昵称',
        dataIndex: 'name'
      },
      {
        title: '点赞数',
        dataIndex: 'heart'
      },
      {
        title: '评论数',
        dataIndex: 'comment'
      },
      // {
      //   title: '地址',
      //   dataIndex: 'position1',        
      // },
      {
        title: '省',
        dataIndex: 'position1',        
      },
      {
        title: '市',
        dataIndex: 'position2',        
      },
      {
        title: '区',
        dataIndex: 'position3',        
      },
      {
        title: '内容',
        dataIndex: 'title'
      },
      {
        title: '操作',
        dataIndex: 'option',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <img src={Delete} style={{ width: 15, height: 15 }} onClick={() => this.deleteItem(record.id)}></img>
          ) : null,
      }
    ]

    return (
      <div style={{width:'950px',float:'right',marginRight:'150px'}}>
        {/*columns:指定表头
          dataSource:指定数据源 
          borderd:加边框*/}
        <Table columns={columns} dataSource={this.state.dataSource} style={{border:"1"}}>
        </Table>
      </div>
    )
  }

}

export default Dynamic;
