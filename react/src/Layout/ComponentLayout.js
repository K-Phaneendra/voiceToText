import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const ComponentLayout = (props) => {
  const { Content } = Layout;
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{props.heading}</Breadcrumb.Item>
        {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        {props.children}
      </div>
    </Content>
  )
}

export default ComponentLayout;
