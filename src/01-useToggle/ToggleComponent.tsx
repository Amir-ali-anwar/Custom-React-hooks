import useToggle from "./useToggle"

const ToggleComponent = () => {
const [toggle,handleToggle]= useToggle(false)
console.log(toggle);

  return (
    <div>
      <div>{toggle.toString()}</div>
      <button onClick={()=>handleToggle(!toggle)}> Toggle {toggle.toString()} </button>
      <button onClick={()=>handleToggle(true)}>Make True</button>
      <button onClick={()=>handleToggle(false)}>Make False</button>
    </div>
  )
}

export default ToggleComponent