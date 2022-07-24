export default function TodoInput(props) {
  const {
    inputVal,
    isEdit,
    handleChange,
    handleAddTodo,
    handleUpdateTodo,
    handleResetUpdate
  } = props;
  return (
    <>
      <input
        style={{ height: "1rem", padding: "0.5rem" }}
        name="inputVal"
        type="text"
        placeholder="Add Todo"
        value={inputVal}
        onChange={handleChange}
      />
      {isEdit ? (
        <>
          <button
            style={{
              marginLeft: "10px",
              color: "white",
              background: "black",
              fontFamily: "initial",
              border: "3px solid black",
              borderRadius: "10%",
              height: "2.3rem",
              width: "5rem"
            }}
            onClick={handleUpdateTodo}
          >
            Update
          </button>
          <button
            style={{
              marginLeft: "10px",
              color: "white",
              background: "red",
              fontFamily: "initial",
              border: "3px solid red",
              borderRadius: "10%",
              height: "2.3rem",
              width: "5rem"
            }}
            onClick={handleResetUpdate}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          style={{
            marginLeft: "10px",
            color: "white",
            background: "black",
            fontFamily: "initial",
            border: "3px solid black",
            borderRadius: "10%",
            height: "2.3rem",
            width: "5rem"
          }}
          onClick={handleAddTodo}
        >
          Add
        </button>
      )}
    </>
  );
}
