import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '../components/AppBar'
import QrScanner from '../components/QrScanner'
import Logo from '../components/Logo'

const styles = {
    appBar: {
        // flex: 'none'
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
    const { classes } = props
    return (
        <React.Fragment>
            <AppBar classes={{ root: classes.appBar }} className={styles.appBar} />
            <main className={classes.main}>
                <QrScanner />
                <Logo />
            </main>
        </React.Fragment>
    )
}

export default withStyles(styles)(ProductsPage)