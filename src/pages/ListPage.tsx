import ChattingRoom from 'components/ChattingRoom';
import ListHeader from 'components/headers/ListHeader';

import { MOCK_MOVIES } from 'mock/movies';

const ListPage = () => {
  return (
    <>
      <ListHeader />
      <div className='flex h-[calc(100%-56px)] w-full flex-col gap-12 overflow-scroll py-8'>
        {MOCK_MOVIES.map((movie) => (
          <ChattingRoom key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default ListPage;
