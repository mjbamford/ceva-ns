import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import QrReader from 'react-qr-reader'
import YesNoIcon from './YesNoIcon'
import './animation.css'

const scannerBox = {
  display: 'inline-block',
  width: '210px',
  height: '210px',
  marginBottom: '2rem',
}

const styles = {
  yesNoBox: {
    ...scannerBox,
    paddingTop: '60px'
  },

  qrScannerBox: {
    ...scannerBox,
    boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.25), 0 3px 14px 5px rgba(0, 0, 0, 0.15)',
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

const StyledYesNoIcon = withStyles(styles)(YesNoIcon)

class QrChecker extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  scanDelay = 250 // milliseconds
  initialState = { result: null, isValid: null }

  handleScan = data => {
    if (data) {
      const isValid = Math.random() > 0.5
      this.setState({ result: data, isValid })
      setTimeout(() => { this.setState(this.initialState) }, 3000)
    }
  }

  handleError = err => {
    console.error(err)
  }

  handleReset = () => {
    this.setState(this.initialState)
  }

  render() {
    const { classes } = this.props
    const Instructions = ({ children }) => (
        <Typography paragraph variant="body1" color="textSecondary">
          {children}
        </Typography>
    )

    return (
      !!this.state.result ? (
        <React.Fragment>
          <div onClick={this.handleReset}>
            <StyledYesNoIcon yes={this.state.isValid} className={classes.yesNoBox} />
          </div>
          <Instructions>{this.state.result}</Instructions>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div onClick={this.handleReset}>
            <QrReader
              delay={this.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              facingMode="environment"
              className={classes.qrScannerBox}
              showViewFinder={false}
            />
          </div>
          <Instructions>Point at Code to Scan</Instructions>
        </React.Fragment>
      )
    )
  }
}

export default withStyles(styles)(QrChecker)