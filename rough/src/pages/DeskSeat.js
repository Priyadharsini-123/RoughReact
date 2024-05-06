import React from 'react';


const InputUI = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Input field placed 3 rows up */}
          <input type="text" className="input" style={{ marginTop: '-3rem' }} placeholder="Input field 3 rows up" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* Input field placed 2 rows down */}
          <input type="text" className="input" style={{ marginTop: '2rem' }} placeholder="Input field 2 rows down" />
        </div>
      </div>
    </div>
  );
};

export default InputUI;
