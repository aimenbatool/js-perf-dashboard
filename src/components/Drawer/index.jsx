import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../../components/Picker';
import SwitchesGroup from '../../components/SwitchesGroup';
import CONFIG from '../../config';

const styles = () => ({
  root: {},
});

const Header = ({
  classes, benchmark, legends, onChangeSelection, onToggleLegend, platform,
}) => (
  <div className={classes.root} >
    <Picker
      key="Platform selection"
      identifier="platform"
      topLabel="Platform"
      onSelection={onChangeSelection}
      selectedValue={platform}
      options={
        Object.keys(CONFIG).reduce((res, platformKey) => {
          res.push({ value: platformKey, label: CONFIG[platformKey].label });
          return res;
        }, [])
      }
    />
    <Picker
      key="Benchmark selection"
      identifier="benchmark"
      topLabel="Benchmark"
      onSelection={onChangeSelection}
      selectedValue={benchmark}
      options={
        Object.keys(CONFIG[platform].benchmarks).reduce((res, benchmarkKey) => {
          res.push({ value: benchmarkKey, label: CONFIG[platform].benchmarks[benchmarkKey].label });
          return res;
        }, [])
      }
    />
    <SwitchesGroup switches={legends} onChange={onToggleLegend} />
  </div>
);

Header.propTypes = ({
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  legends: PropTypes.shape({}).isRequired,
  onChangeSelection: PropTypes.func.isRequired,
  onToggleLegend: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
});

export default withStyles(styles)(Header);
