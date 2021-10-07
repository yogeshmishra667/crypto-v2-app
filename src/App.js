import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import { Typography, Layout, Space } from 'antd'
import { Navbar } from './components'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main"></div>
            <div className="footer"></div>
        </div>
    )
}

export default App
