import React from 'react';

const List = () => {
  return (
    <div className="grid gap-x-7 gap-y-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {[...Array(10)].map((item, idx) => {
        return (
          <div key={idx} className="">
            item-{idx + 1}
          </div>
        );
      })}
    </div>
  );
};

export default List;
