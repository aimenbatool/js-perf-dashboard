import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../../components/Picker';
import { BENCHMARKS, CONFIG } from '../../config';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

const Header = ({
  classes, benchmark, onChange, platform,
}) => (
  <div className={classes.root} >
    <Picker
      key="Platform selection"
      identifier="platform"
      topLabel="Platform"
      onSelection={onChange}
      selectedValue={platform}
      options={
        Object.keys(CONFIG.platforms).reduce((res, platformKey) => {
          res.push({ value: platformKey, label: CONFIG.platforms[platformKey].label });
          return res;
        }, [])
      }
    />
    <Picker
      key="Benchmark selection"
      identifier="benchmark"
      topLabel="Benchmark"
      onSelection={onChange}
      selectedValue={benchmark}
      options={
        CONFIG.platforms[platform].benchmarks.reduce((res, benchmarkKey) => {
          res.push({
            value: benchmarkKey,
            label: BENCHMARKS[benchmarkKey].label,
          });
          return res;
        }, [])
      }
    />
  </div>
);

Header.propTypes = ({
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
});

export default withStyles(styles)(Header);
