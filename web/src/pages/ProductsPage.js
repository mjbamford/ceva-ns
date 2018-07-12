import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '../components/AppBar'
import QrScanner from '../components/QrScanner'
import Logo from '../components/Logo'
import { Typography } from '../../node_modules/@material-ui/core';

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
                        <React.Fragment>
                            <main className={classes.main}>
                                <QrScanner onScan={onScan} />
                                <Logo />
                            </main>
                        </React.Fragment>
                    )
                } />
                <Route path='/products/:id' render={
                    ({ match }) => (
                        <React.Fragment>
                            <Typography className={classes.scannedUrl} align="center" variant='body1'>
                                {scannedUrl}
                            </Typography>
                        </React.Fragment>
                    )}
                />
            </Switch>
        </React.Fragment>
    )
}

export default withStyles(styles)(ProductsPage)