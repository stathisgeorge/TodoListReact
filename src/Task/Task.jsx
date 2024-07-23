import Checkbox from "../Helpers/Checkbox";
import TrashButton from "../Helpers/TrashButton";

export default function Task({ name, description, done, onToggle, onTrash }) {
  return (
    <div className={"task " + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <div className="task-record">
        <span className="TaskName"> {name}</span>
        <br></br>
        <span>{description}</span>
      </div>
      <TrashButton onTrash={onTrash} />
    </div>
  );
}
