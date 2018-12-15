import React from 'react'
import { Pagination } from 'antd'

class paginationList extends React.Component {
    render() {
        return <div>
            <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
    }
}

export default paginationList;