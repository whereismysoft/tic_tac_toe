import { connect } from "react-redux";
import { createAction } from 'actions'
import * as constants from 'constants';

import ExampleComponent from './component';

console.log('[CONSTANTS]', constants);

const MapStateToProps = state => {
	return {
		count: state.count
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
        increaseCount: () => dispatch(createAction(constants.INCREASE_COUNT))
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(ExampleComponent)
