import Child from "./Child";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return ( 
    <>
      <div>Parent</div>
      <ChildAsFC 
        color={"red"} 
        onClick={() => console.log('Clicked')}
      >
        children
      </ChildAsFC>
    </>
  )
};

export default Parent;