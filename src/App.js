import logo from './logo.svg';
import './App.css';
import OrderDetails from './venu/OrderDetails';
import RouterContainer from './RouterContainer';
import Search from './search/Search';
import { Provider } from 'react-redux';
import { store } from './reduxHooks/Store';
import CakeContainer, { CakeContainerHook } from './reduxHooks/CakeContainer';
import SearchAr from './search/SearchAr';
import GeoLocation from './geolocation/Geolocation';
import InputFile from './inputfile/InputFile';
import JWTToken from './JWT token/JWTToken';
import RegExps from './regexp/RegExp';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DataDisplay from './DataDisplay';
import Haldiram from './apolloclient/Haldiram';
import Parent from './children/Parent';
import Parenttt from './Parent';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000'
  })
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Haldiram/>
      </ApolloProvider>
      {/* <Parent/> */}
      {/* <Parenttt/> */}
    </div>
  );
}

export default App;

{/* <OrderDetails/> */ }
{/* <RouterContainer/> */ }
{/* <Search/> */ }
{/* <SearchAr/> */ }
{/* <Provider store = {store}>  */ }
{/* <CakeContainer/> */ }
{/* <CakeContainerHook/> */ }
{/* </Provider> */ }
{/* <GeoLocation/> */ }
{/* <InputFile/> */ }
{/* <JWTToken/> */ }
{/* <RegExps/> */ }
