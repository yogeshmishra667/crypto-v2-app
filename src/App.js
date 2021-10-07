import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import { Typography, Layout, Space } from 'antd'
import {
    Navbar,
    Cryptocurrencies,
    CryptoDetails,
    News,
    Homepage,
    Exchanges,
} from './components'
import './app.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default App
