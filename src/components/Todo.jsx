function Todo({ title, time, remove, isComplete, onIsComplete }) {
  const checkTime = () => {
    if (typeof time === "object") {
      const date = time.toLocaleDateString();
      const current_time = time.toLocaleTimeString();
      return (time = date + " " + current_time);
    }
    const date = new Date(time).toLocaleDateString();
    const current_time = new Date(time).toLocaleTimeString();
    return (time = date + " " + current_time);
  };

  checkTime();

  return (
    <div className="row">
      <li className="list-group-item d-flex justify-content-between">
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={isComplete}
          onChange={onIsComplete}
        />
        <span className="flex-fill text-uppercase fw-bold col-2">{title}</span>
        <span className="flex-fill col-4">{time}</span>
        <button onClick={remove} className="btn btn-danger btn-sm">
          <i className="bi bi-trash"></i>
        </button>
      </li>
    </div>
  );
}

export default Todo;
