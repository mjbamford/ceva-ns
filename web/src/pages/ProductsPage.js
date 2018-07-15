import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

import AppBar from '../components/AppBar'
import QrScanner from '../components/QrScanner'
import QrChecker from '../components/QrChecker'
import Logo from '../components/Logo'

const styles = {
    appBar: {
        // flex: 'none'
    },
    scannedUrl: {
        marginTop: '2rem'
    },
    main: {
        flex: '1 0 auto',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

function ProductsPage(props) {
    const { classes, onScan, scannedUrl } = props
    return (
        <React.Fragment>
            <Switch>
                <Route path='/products/scan' render={
                    () => (
                        <React.Fragment>
                            <AppBar title="Products" />
                            <main className={classes.main}>
                                <QrScanner onScan={onScan} redirectTo='/products/666' />
                                <Logo />
                            </main>
                        </React.Fragment>
                    )
                } />

                <Route path='/products/check' render={
                    () => (
                        <React.Fragment>
                            <AppBar title="Stock Check" />
                            <main className={classes.main}>
                                <QrChecker />
                                <Logo />
                            </main>
                        </React.Fragment>
                    )
                } />

                <Route path='/products/:id' render={
                    () => (
                        <Typography className={classes.scannedUrl} align="center" variant='body1'>
                            {scannedUrl}
                        </Typography>
                    )}
                />
            </Switch>
        </React.Fragment>
    )
}

export default withStyles(styles)(ProductsPage)