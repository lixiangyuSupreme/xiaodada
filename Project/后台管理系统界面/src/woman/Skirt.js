
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Form } from 'antd';
import './add_del_edit.css';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
};


class Skirt extends React.Component {
  constructor(props) {
    super(props);
    //设置表头
    this.columns = [
      {
        title: '序号',
        dataIndex: 'id',
        editable: true,
      },
      {
        title: '主图',
        dataIndex: 'src',
        editable: true,
      },
      {
        title: '类型',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <a onClick={() => this.handleDelete(record.id)}>Delete</a>
          ) : null,
      },
    ];
    this.state = {
      //设置原始数据
      dataSource: [
        
      ],
    };
  }

  componentDidMount() {
    //获得数据
    let url = 'https://www.youlewazi.top:1234/skirt';
    fetch(url, {
      method: 'get',
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          dataSource:data
        })
      }
      )
  }

  //删除
  handleDelete = (key) => {
    console.log(key)
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.id !== key),
    });
    //打印删除后的数据
    console.log(this.state.dataSource)
  };
  //添加
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      id: '',
      src: '',
      srcdetails: '',
      photo: '',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  //保存信息
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    console.log(dataSource);
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div style={{width:'900px',float:'right',marginRight:'190px'}}>
        <Button
          onClick={this.handleAdd}
          type="primary"
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          style={{
            marginTop:'10px'
          }}
        />
      </div>
    );
  }
}


export default Skirt;