import React, { Component } from 'react'
import { Avatar, Comment, Drawer, Divider } from "antd"
import "./ArticleDrawer.css"

export default class ArticleDrawer extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        console.log(this.props)
    }
    onCloseChinder = () => {

        this.props.onClose();
    }
    render() {

        let CommentList = this.props.LeaveList.map((item, index) => {
            return <div>
                <Comment
                    key={index}
                    author={<a>{item.usersAtuoMapper.user_username}</a>}
                    avatar={<Avatar style={{ background: "linear-gradient(135deg, #329fff 1%, #8c00ff 100%)", verticalAlign: 'middle' }} size="large" >
                        {item.usersAtuoMapper.user_username.split("")[0]}
                    </Avatar>}
                    content={item.leave_text}
                    datetime={item.leave_creatTime}
                />
                <Divider plain>良言一句三冬暖</Divider>
            </div>
        })
        return (
            <div>
                <Drawer
                    title="评论区"
                    placement="right"
                    closable={false}
                    onClose={this.onCloseChinder}
                    visible={this.props.visible}
                    width={420}
                >
                    {CommentList}
                </Drawer>
            </div>
        )
    }
}
