import { Pagination } from './components/pagination/pagination';
import { ResultSearchingBlock } from './components/resultSearchingBlock/resultSearchingBlock';
import { SearchInput } from './components/searchInput/searchInput';
import { Wrapper } from './components/wrapper/wrapper';
import { NewCurrentPage } from './store/actions/creators/search.creators';
import { store } from './store/store';

function App() {
    store.dispatch(NewCurrentPage(1));

    return (
        <Wrapper>
            <SearchInput />
            <ResultSearchingBlock />
            <Pagination />
        </Wrapper>
    );
}

export default App;
