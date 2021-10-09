import React from 'react'
import { Typography, Statistic, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptoQuery } from '../services/cryptoApi'
import millify from 'millify'
import { Cryptocurrencies, News } from '../components'
const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptoQuery()
    const globalStats = data?.data?.stats

    if (isFetching) return 'ruk bsdk load hone de'

    console.log(globalStats)
    return (
        <>
            <Title level={2} className="heading">
                Global stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title="total cryptocurrency"
                        value={millify(globalStats.total)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="total exchanges"
                        value={millify(globalStats.totalExchanges)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="total market cap"
                        value={millify(globalStats.totalMarketCap)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="total 24h volume"
                        value={millify(globalStats.total24hVolume)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="total market"
                        value={millify(globalStats.totalMarkets)}
                    />
                </Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top 10 cryptocurrency in the world
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/cryptocurrencies"> Show more</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest crypto news
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/news"> Show more</Link>
                </Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
