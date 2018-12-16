import React from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from '@material-ui/icons/InsertInvitation'
import DirectionsIcon from '@material-ui/icons/Security'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import IndicationsIcon from '@material-ui/icons/Textsms'
import InfoIcon from '@material-ui/icons/Info'
import PdfIcon from '@material-ui/icons/InsertDriveFile'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    paddingLeft: theme.spacing.unit * 2,
    fontSize: theme.typography.pxToRem(15),
  },
  icon: {
    opacity: 0.6
  }
})

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  render() {
    const { classes, product } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <InfoIcon className={classes.icon}/>
            {/* <Typography className={classes.heading}>General settings</Typography> */}
            <Typography className={classes.heading}>
              Product Information
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span dangerouslySetInnerHTML={{__html: product.information}} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {product.schedule &&
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <CalendarIcon className={classes.icon}/>
              {/* <Typography className={classes.heading}>Users</Typography> */}
              <Typography className={classes.heading}>
                Notification Schedule
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {product.schedule}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        }

        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <IndicationsIcon className={classes.icon}/>
            {/* <Typography className={classes.heading}>Advanced settings</Typography> */}
            <Typography className={classes.heading}>
              Indications
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span dangerouslySetInnerHTML={{__html: product.indications}} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <DirectionsIcon className={classes.icon}/>
            <Typography className={classes.heading}>
              Directions for Use
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span dangerouslySetInnerHTML={{__html: product.directions}} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <PdfIcon className={classes.icon}/>
            <Typography className={classes.heading}>
              Related PDFs
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {product.pdfs}
              (Links to the product's PDFs will go here)
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ControlledExpansionPanels)
