import { connect } from "react-redux";
import { createAction } from 'actions'
import * as constants from 'constants';

import ExampleComponent from './component';

const MapStateToProps = state => {
	return {
		count: state.count
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
        // unshiftLastCard: () => dispatch(createAction(constants.UNSHIFT_LAST_CARD)),
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(ExampleComponent)
