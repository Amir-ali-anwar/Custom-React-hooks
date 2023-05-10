import useToggle from "./useToggle"

const ToggleComponent = () => {
const [toggle,handleToggle]= useToggle({initialValue:false})
  return (
    <div>
      <button onClick={handleToggle}> Toggle {toggle} </button>
      <button onClick={() => handleToggle({toggle:true})}>Make True</button>
      <button onClick={() => handleToggle({toggle:false})}>Make False</button>
    </div>
  )
}

export default ToggleComponent