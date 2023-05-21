import { ChangeEvent, DragEvent } from "react";

const EventComponent: React.FC = () => {

  const onChange = (e: ChangeEvent<HTMLInputElement>):void => {
    console.log(e);
  }

  const onDragStart = (e: DragEvent<HTMLDivElement>):void => {
    console.log(e);
  }

  return (
    <div>
      <h3>Event Component</h3>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        DragMe
      </div>
    </div>
  )
};

export default EventComponent;