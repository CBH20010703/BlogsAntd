import React, { Component } from 'react'
import "./Home.css"
import { Button } from 'antd';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one'
export default class Home extends Component {
    state = {
        show: true,
    }
    geInterval = (e) => {
        switch (e.index) {
            case 0:
                return 0;
            case 1:
                return 150;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 150 + 450 + (e.index - 2) * 10;
            default:
                return 150 + 450 + (e.index - 6) * 150;
        }
    }
    getEnter = (e) => {
        const t = {
            opacity: 0,
            scale: 0.8,
            y: '-100%',
        };
        if (e.index >= 2 && e.index <= 6) {
            return { ...t, y: '-30%', duration: 150 };
        }
        return t;
    }

    getSplit = (e) => {
        const t = e.split(' ');
        const c = [];
        t.forEach((str, i) => {
            c.push((
                <span key={`${str}-${i}`}>
                    {str}
                </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    }
    onClick = () => {
        this.setState({
            show: false,
        }, () => {
            this.setState({
                show: true
            });
        });
    }
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (

            <div>
                <div className="combined-wrapper">

                    {this.state.show && (
                        <div className="combined">
                            <div className="combined-shape">
                                <div className="shape-left">
                                    <TweenOne
                                        animation={[
                                            { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                            { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                                        ]}
                                    />
                                </div>
                                <div className="shape-right">
                                    <TweenOne
                                        animation={[
                                            { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                            { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                                        ]}
                                    />
                                </div>
                            </div>
                            <Texty
                                className="title"
                                type="mask-top"
                                delay={400}
                                enter={this.getEnter}
                                interval={this.geInterval}
                                component={TweenOne}
                                componentProps={{
                                    animation: [
                                        { x: 130, type: 'set' },
                                        { x: 100, delay: 500, duration: 450 },
                                        {
                                            ease: 'easeOutQuart',
                                            duration: 300,
                                            x: 0,
                                        },
                                        {
                                            letterSpacing: 0,
                                            delay: -300,
                                            scale: 0.9,
                                            ease: 'easeInOutQuint',
                                            duration: 1000,
                                        },
                                        { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                                    ],
                                }}
                            >
                                Cen Blogs
                            </Texty>
                            <TweenOne
                                className="combined-bar"
                                animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
                            />
                            <Texty
                                className="content"
                                type="bottom"
                                split={this.getSplit}
                                delay={2200}
                                interval={30}
                            >
                                欢迎来到我的个人博客
                            </Texty>
                            <Texty>{this.state.show && 'Ant Motion'}</Texty>
                        </div>
                    )}
                </div>
            </div>

        )
    }
}
