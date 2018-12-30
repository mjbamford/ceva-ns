import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import QrReader from 'react-qr-reader'

const styles = {
  qrReader: {
    display: 'inline-block',
    width: '180px',
    height: '180px',
    boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.25), 0 3px 14px 5px rgba(0, 0, 0, 0.15)',
    marginBottom: '2rem',
    '& section::before': {
      top: 0,
      left: 0,
      zIndex: 1,
      boxSizing: 'border-box',
      border: '40px solid rgba(0, 0, 0, 0.3)',
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
    this.state = { delay: 250, url: null }
  }

  handleScan = data => {
    if (data) {
      this.setState({ url: data })
    }
  }
  handleError = err => {
    console.error(err)
  }

  render() {
    const { classes } = this.props
    const { url, delay } = this.state

    if (!!url) {
      window.location = url
    }

    return (
      <React.Fragment>
        <QrReader
          delay={delay}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode="environment"
          className={classes.qrReader}
          showViewFinder={false}
        />
        <Typography paragraph variant="body1" color="textSecondary">
          Point at Code to Scan
        </Typography>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(QrScanner)
