import React from 'react'
import millify from 'millify'
import { Typography, Statistic, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography
const Homepage = () => {
    return (
        <>
            <Title level={2} className="heading">
                Global stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title="total cryptocurrency" value={5} />
                </Col>
                <Col span={12}>
                    <Statistic title="total exchanges" value={5} />
                </Col>
                <Col span={12}>
                    <Statistic title="total market cap" value={5} />
                </Col>
                <Col span={12}>
                    <Statistic title="total 24h volume" value={5} />
                </Col>
                <Col span={12}>
                    <Statistic title="total market" value={5} />
                </Col>
            </Row>
        </>
    )
}

export default Homepage
