import { useEffect, useReducer, useCallback } from 'react';
import Cards from './components/Cards';
import NavBar from './components/Navbar';
import Pagination from './components/Pagination';
import Container from './components/Container';
import { reducer, initialState, fetchData } from './model/reducer';
import Filter from './components/Filter';
import { PER_PAGE } from './constants';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData({dispatch, params: {page: 1}, concat: state.params});
  }, []);

  const handleSearchClick = useCallback(
    async (value: string) => {
      const beer_name = value.toLowerCase().trim()

      if(state.params.beer_name === beer_name) return
      if (!value) return;
      fetchData({dispatch, params: { page: 1, beer_name}});
    },
    [state.params.beer_name],
  );

  const filterByAbv = useCallback(
    (filterNumber: number) => {
      if(state.params.abv_gt === filterNumber) return 
      fetchData({dispatch, params: { abv_gt: filterNumber, page: 1 }, concat: state.params});
    },
    [state.params],
  );

  const updateData = useCallback(
    async (page: number) => {
      fetchData({dispatch, params: { page }, concat: state.params});
      window.scrollTo({ top: 0});
    },
    [state.params],
  );

  const clearState = useCallback(
    () => {
      fetchData({dispatch, params: {page: 1}});
    },
    [],
  )
  return (
    <Container>
      <>
        <NavBar search={handleSearchClick} clearState={clearState} initialValue={state.value} />
        <Filter
          filterByAbv={filterByAbv}
          filterValues={state.filterValues}
          activeFilter={state.params?.abv_gt || 0}
        />
        {state.data && <Cards bears={state.data} loading={state.loading} />}
        {!!state.data.length && <Pagination
          onPageChange={updateData}
          activePage={state.params?.page}
          countOfEl={state.data.length}
          per_page={PER_PAGE}
        />}
      </>
    </Container>
  );
}

export default App;
