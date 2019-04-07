import constants from 'constants';

const initialState = {
    data: [],
    count: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case(constants.INCREASE_COUNT): {
            return {
                ...state,
                count: state.count + 1
            }
        };

        default:
            return state;
    }

}