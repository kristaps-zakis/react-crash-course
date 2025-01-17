import './Accordion.css';

function Accordion({ children, labelText, open, onClick, id }) {
  //   console.log(props);
  return (
    <div className="accordion">
      <div className="label-text" onClick={() => onClick(id)}>
        {labelText}{' '}
      </div>
      {!!open && <div className="content">{children}</div>}
    </div>
  );
}

export default Accordion;
