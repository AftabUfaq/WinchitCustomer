import { createStore, combineReducers,applyMiddleware} from 'redux';
import LoginReducer from './reducers/LoginReducer';
import vechileReducer from './reducers/vechileReducer';
import locationReducer from './reducers/locationReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['user','token','is_logged_in','location']
    };

    const rootReducer = combineReducers({
        vechileReducer:persistReducer(persistConfig, vechileReducer),
        locationReducer:persistReducer(persistConfig, locationReducer),
        LoginReducer:persistReducer(persistConfig, LoginReducer),
    });

    export const store =  createStore(rootReducer,applyMiddleware(thunk));
    export const persistor = persistStore(store);