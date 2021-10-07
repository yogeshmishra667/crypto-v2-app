import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className=" nav-container">
            <div className="logo-container">
                <Avatar size="large" src={icon} />
                <Typography.Title level={2} className="logo">
                    Crypto
                </Typography.Title>
            </div>
        </div>
    )
}

export default Navbar
