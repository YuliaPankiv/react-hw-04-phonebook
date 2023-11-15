import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ filterValue, onChange }) => (
  <>
    <Label>
      Find ny name
      <input
        type="text"
        name="filter"
        value={filterValue}
        required
        onChange={onChange}
      />
    </Label>
  </>
);

export default Filter;
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
