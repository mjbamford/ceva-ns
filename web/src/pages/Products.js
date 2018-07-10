import React, { Component } from 'react'
import AppBar from '../components/AppBar'
import QrScanner from '../components/QrScanner'
import logo from '../logo-96x96.png'

function ProductsPage() {
    return (
        <React.Fragment>
            <AppBar />
            <QrScanner />
            <img src={logo} className="App-logo" alt="logo" />
        </React.Fragment>
    )
}

export default ProductsPage