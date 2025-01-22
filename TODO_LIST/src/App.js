//Import the Styles as a module
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [List, setList] = useState([]);
  const [InputValue, setInputValue] = useState("");
  const [EditId, setEditId] = useState(0);
  const [CurrentEdit, setCurrentEdit] = useState(false);
  const [EditValue, setEditValue] = useState("");

  return (
    <div className={styles.App}>
      <TodoList
        List={List}
        setList={setList}
        InputValue={InputValue}
        setInputValue={setInputValue}
        CurrentEdit={CurrentEdit}
        setCurrentEdit={setCurrentEdit}
        EditValue={EditValue}
        setEditValue={setEditValue}
        EditId={EditId}
        setEditId={setEditId}
      />
    </div>
  );
}

const TodoList = (Props) => {

  const UpdateValue = (e) => {
    Props.setInputValue(e.target.value);
  };

  const AddList = () => {
    Props.setList((prev) => {
      return [
        ...prev,
        { Id: Props.List.length, name: Props.InputValue, status: false, Edit: false },
      ];
    });

    Props.setInputValue("");
  };

  const RemoveList = (id) => {
    const NewList = Props.List.filter((L) => L.Id !== id);

    console.log(NewList);

    Props.setList(NewList);
  };

  const UpdateList = (id) => {
    const NewList = Props.List.map((L) => {
      if (L.Id === id) {
        return { ...L, status: !L.status };
      }
      return L;
    });

    Props.setList(NewList);
  };

  const Edit = (id) => {
    Props.setCurrentEdit (!Props.CurrentEdit);
    Props.setEditId(id)

    const NewList = Props.List.map((L) => {
      if (L.Id === id) {
        return { ...L, Edit: !L.status };
      }
      return L;
    });

    Props.setList(NewList);
  }

  const EditValue = (e) =>{
    Props.setEditValue(e.target.value);
  }

  const Save = () => {
    const NewList = Props.List.map((L) => {
      if (L.Id === Props.EditId) {
        return { ...L, name: Props.EditValue};
      }
      return L;
    });

    Props.setList(NewList);
    Props.setCurrentEdit (!Props.CurrentEdit);
  }

    
   

  return (
    <div>
      
      

      {Props.CurrentEdit=== true ?<> <input type="text" placeholder="Edit here" onChange={EditValue}></input> <br></br> <button onClick={Save}>Save</button> </>: <><input onChange={UpdateValue} type="text" placeholder="Type in your list" value={Props.InputValue}></input><br></br> <button onClick={AddList}>Add</button></>}


      


      {Props.List.map((Lists, Key) => {
        return (
          <h1 key={Lists.Id}>
            {Lists.name}{" "}
            <button onClick={() => RemoveList(Lists.Id)}>Remove</button>{" "}
            <button onClick={()=>{
              Edit(Lists.Id);
            }}>Edit</button>
            <button
              onClick={() => UpdateList(Lists.Id)}
              style={{ backgroundColor: Lists.status ? "green" : "red" }}
            >
              Update
            </button>
          </h1>
        );
      })}
    </div>
  );
};

export default App;
