export const CryptoReducer = (state = {}, action) => {
	switch (action.type){
		case("FETCH_CRYPTO_LIST"):
			return {
                ...state,
                loading:true,
                error:null
            }
        
        case("FETCH_CRYPTO_LIST_SUCCESS"):
			return {
                ...state,
                loading:true,
                error:null,
                cryptoItems: action.payload
            }
        
        case("FETCH_CRYPTO_LIST_ERROR"):
			return {
                ...state,
                loading:true,
                error:null
            }
        }
    
}
