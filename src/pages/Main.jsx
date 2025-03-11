import React from 'react';
import { useSelector } from 'react-redux';

function Main() {
  const patchmovieListData = useSelector(state => state.movie);

  return (
    <div>
      {patchmovieListData?.data?.length > 0 ? (
        patchmovieListData.data.map(el => (
          <section key={el.id}>
            <div>{el.name}</div>
          </section>
        ))
      ) : (
        <p>영화 목록이 없습니다.</p>
      )}
    </div>
  );
}

export default Main;
