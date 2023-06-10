import {useEffect} from 'react'

type Props = {}

const ConditionalComponent = (props: Props) => {
useEffect(() => {
  console.log('useEffect runs');
  return ()=>{
    console.log('cleanup');
  }
}, [])

  return (
    <div>ConditionalComponent</div>
  )
}
export default ConditionalComponent