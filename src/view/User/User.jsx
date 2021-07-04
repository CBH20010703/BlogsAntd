import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Input, Tag } from 'antd';
import "./User.css"
import {
    CalendarOutlined,
    DropboxOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editInputValue: '',
            inputValue: '',
            tags: ['Unremovable', 'Tag 2', 'Tag 3'],
            editInputIndex: -1,
            inputVisible: false,
        }

    }
    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    handleEditInputChange = e => {
        this.setState({ editInputValue: e.target.value });
    };

    handleEditInputConfirm = () => {
        this.setState(({ tags, editInputIndex, editInputValue }) => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;

            return {
                tags: newTags,
                editInputIndex: -1,
                editInputValue: '',
            };
        });
    };

    saveInputRef = input => {
        this.input = input;
    };

    saveEditInputRef = input => {
        this.editInput = input;
    };

    render() {
        let { editInputValue,
            inputValue,
            tags,
            editInputIndex,
            inputVisible, } = this.state
        return (
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]} style={{ background: "#f0f2f5" }}>
                    <Col span={24} lg={7}>
                        <Card bordered={false}>
                            <div className="UserAvatar">
                                <Avatar style={{ background: "linear-gradient(135deg, #329fff 1%, #8c00ff 100%)", verticalAlign: 'middle' }} size="large" >
                                    C
                                </Avatar>
                                <p className="UserName">CenBoHao</p>
                                <p className="UserTitle">卧龙安知凤雏之志</p>
                                <div>
                                    <p><CalendarOutlined /> 小开发 </p>
                                    <p><DropboxOutlined /> xxxx－某某某事业群－某某平台部－某某技术部－UED</p>
                                    <p><EnvironmentOutlined /> 河南省信阳市</p>
                                </div>
                            </div>
                            <div className="ant-divider-dashed">

                            </div>
                            <div className="ant-tagbox">
                                <p>标签</p>
                                <div>
                                    {tags.map((tag, index) => {
                                        if (editInputIndex === index) {
                                            return (
                                                <Input
                                                    ref={this.saveEditInputRef}
                                                    key={tag}
                                                    size="small"
                                                    className="tag-input"
                                                    value={editInputValue}
                                                    onChange={this.handleEditInputChange}
                                                    onBlur={this.handleEditInputConfirm}
                                                    onPressEnter={this.handleEditInputConfirm}
                                                />
                                            );
                                        }

                                        const isLongTag = tag.length > 20;

                                        const tagElem = (
                                            <Tag
                                                className="edit-tag"
                                                key={tag}
                                                closable={index !== 0}
                                                onClose={() => this.handleClose(tag)}
                                            >
                                                <span
                                                    onDoubleClick={e => {
                                                        if (index !== 0) {
                                                            this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                                                this.editInput.focus();
                                                            });
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                                </span>
                                            </Tag>
                                        );
                                        return isLongTag ? (
                                            <Tooltip title={tag} key={tag}>
                                                {tagElem}
                                            </Tooltip>
                                        ) : (
                                            tagElem
                                        );
                                    })}
                                    {inputVisible && (
                                        <Input
                                            ref={this.saveInputRef}
                                            type="text"
                                            size="small"
                                            className="tag-input"
                                            value={inputValue}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleInputConfirm}
                                            onPressEnter={this.handleInputConfirm}
                                        />
                                    )}
                                    {!inputVisible && (
                                        <Tag className="site-tag-plus" onClick={this.showInput}>
                                            <PlusOutlined /> New Tag
                                        </Tag>
                                    )}

                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sspan={24} lg={17}>
                        <Card bordered={false}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
