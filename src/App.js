import { Pagination } from './components/pagination/pagination';
import { ResultSearchingBlock } from './components/resultSearchingBlock/resultSearchingBlock';
import { SearchInput } from './components/searchInput/serachInput';
import { Wrapper } from './components/wrapper/wrapper';

function App() {
    return (
        <Wrapper>
            <SearchInput />
            <ResultSearchingBlock />
            <Pagination/>
        </Wrapper>
    );
}

export default App;
