import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
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
            <AppBar classes={{root: classes.appBar}} className={styles.appBar} />
            <Switch>
                <Route path='/products/scan' render={
                    () => (
                        <main className={classes.main}>
                            <QrScanner onScan={onScan} redirectTo='/products/666' />
                            <Logo />
                        </main>
                    )
                } />

                <Route path='/products/check' render={
                    () => (
                        <main className={classes.main}>
                            <QrChecker />
                            <Logo />
                        </main>
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