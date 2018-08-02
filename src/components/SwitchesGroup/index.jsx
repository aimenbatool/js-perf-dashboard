import PropTypes from 'prop-types';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    align: 'left',
  },
});

const SwitchesGroup = ({
  classes, switches, onChange,
}) => (
  <FormControl component="fieldset" className={classes.root}>
    <FormGroup>
      {Object.values(switches).map(({ checked, key, label }) => (
        <FormControlLabel
          key={key}
          control={
            <Switch
              checked={checked}
              value={key}
              onChange={event => onChange(event)}
            />
          }
          label={label}
        />
      ))}
    </FormGroup>
  </FormControl>
);

SwitchesGroup.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  switches: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SwitchesGroup);
