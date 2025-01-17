import {
  Input,
} from "reactstrap";
import { ReactComponent as Icon } from './trash.svg';

export default function TaskView(props: any) {

  return (
    <div key={props.task.id} className="mb-3">
      <div className="d-flex align-items-center">
        <Input type="checkbox" onChange={() =>
          props.onChange(props.task.id, props.task.title, props.task.solved === "true" ? "false" : "true")
        } checked={props.task.solved === "true" ? true : false } />
        <p className="mb-0" style={{ marginRight: "auto", marginLeft: "20px" }}>
          <span>{props.task.title} </span>
          {props.task.url ? <a href={props.task.url}>link</a> : ""}
        </p>
        <div style={{ "cursor": "pointer" }}>
          <Icon onClick={() => props.onDelete(props.task.id)} width="1rem" />
        </div>
      </div>
    </div>
  )
}
