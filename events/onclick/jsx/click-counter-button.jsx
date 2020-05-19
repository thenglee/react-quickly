// @format

const ClickCounterButton = props => {
  return (
    <button onClick={props.handler} className="btn btn-info">
      Don't touch me with your dirty hands!
    </button>
  );
};
