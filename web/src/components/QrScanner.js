import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import QrReader from 'react-qr-reader'
import { Typography } from '../../node_modules/@material-ui/core';

const styles = {
    qrReader: {
        display: 'inline-block',
        width: '250px',
        boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.25), 0 3px 14px 5px rgba(0, 0, 0, 0.15)',
        marginBottom: '2rem',
        '& section::before': {
            top: 0,
            left: 0,
            zIndex: 1,
            boxSizing: 'border-box',
            border: '50px solid rgba(0, 0, 0, 0.3)',
            boxShadow: 'inset 0 0 0 5px rgba(255, 255, 255, 0.5)',
            position: 'absolute',
            width: '100%',
            height: '100%',
            content: '""',
        },
    }
}

class QrScanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 250,
            result: null
        }
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data,
            })
            this.props.onScan(data)
        }
    }
    handleError = err => {
        console.error(err)
    }

    render() {
        const { classes, redirectTo } = this.props
        return (
            !this.state.result ?
                (<React.Fragment>
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        facingMode="environment"
                        className={classes.qrReader}
                        showViewFinder={false}
                    />
                    {
                        !!this.state.result ? (
                            <p>{this.state.result}</p>
                        ) : (
                            <Typography paragraph variant="body1" color="textSecondary">
                                Point at Code to Scan
                            </Typography>
                        )
                    }
                </React.Fragment>
            ) : (
                <Redirect push to={redirectTo} />
            )
        )
    }
}

export default withStyles(styles)(QrScanner)