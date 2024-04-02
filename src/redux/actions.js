
export const addTask = (task) => (dispatch, getState) => {
  const {
    Task : {tasks},
  } = getState();

  const hasTask = tasks.find((i) => i.task === task);

  if(!hasTask && task !== ""){
    dispatch({
        type: "ADD_TASK",
        payload: [{id : task, task}, ...tasks],
    });
  }
};

export const deleteTask = (task) => (dispatch,getState) => {
    const {
        Task : {tasks},
    }=getState();
    
    dispatch({
        type : "DELETE_TASK",
        payload : tasks.filter((t) => t.id !== task.id),
    })
    };



