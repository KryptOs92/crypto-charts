const TestReducer = (state = {}, action) => {
	switch (action.type){
		case("TEST"):
			return {
                ...state,
                loading:"test"
            }
        
        
        default:
            return state
        }
        
    
}
export default TestReducer;