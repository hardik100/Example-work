export default function List(props) {
  const { todos, handleEdit, handleDelete } = props;
  // using inline styling, could have created seperate css files as well.
  return (
    <div
      style={{
        background: "rgba(240, 115, 115,1)",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px"
      }}
    >
      <h2>Tasks to do</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((i) => {
            return (
              <li
                style={{
                  display: "flex",
                  margin: "0 -3.7rem 4px",
                  padding: "1.1rem 3rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.1)"
                }}
                key={i.taskId}
              >
                <p style={{ fontSize: "1.5rem" }}>{i.task}</p>
                <div style={{ marginRight: "1.8rem" }}>
                  <button
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      background: "black",
                      fontFamily: "initial",
                      border: "1px solid black",
                      borderRadius: "10%",
                      height: "2rem"
                    }}
                    onClick={() => handleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      background: "red",
                      border: "1px solid red",
                      fontFamily: "initial",
                      borderRadius: "10%",
                      height: "2rem"
                    }}
                    onClick={() => handleDelete(i.taskId)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>No tasks are there!</div>
      )}
    </div>
  );
}
