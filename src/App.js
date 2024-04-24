import { Pagination } from './components/pagination/pagination';
import { ResultSearchingBlock } from './components/resultSearchingBlock/resultSearchingBlock';
import { SearchInput } from './components/searchInput/searchInput';
import { SortButton } from './components/sortButton/sortButton';
import { Wrapper } from './components/wrapper/wrapper';

function App() {
    return (
        <Wrapper>
            <SearchInput />
            <ResultSearchingBlock />
            <Pagination />
        </Wrapper>
    );
}

export default App;
