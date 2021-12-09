type Props = {
  isStay: boolean;
  onToggle: () => void;
};

function IsStayComponent(props: Props) {
  return (
    <>
      <label htmlFor="isStay">재실유무</label>
      <input
        type="checkbox"
        id="isStay"
        checked={props.isStay}
        onChange={props.onToggle}
      />
    </>
  );
}

export default IsStayComponent;
