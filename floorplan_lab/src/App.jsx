import Bedroom from './components/Bedroom'
import Bath from './components/Bath'
import LivingRoom from './components/LivingRoom'
import Kitchen from './components/Kitchen'
import './App.css'

function FloorPlan() {
  let First = 'Bedroom'
  let Second = 'Library'
  let Third = 'Closet'

  let Full = 'Full'
  let Half = 'Half'

  return (
    <>
      <Bedroom member={First}/>
      <Kitchen/>
      <Bath size={Full}/>
      <Bedroom member={Second}/>
      <LivingRoom/>
      <Bath size={Half}/>
      <Bedroom member={Third}/>
    </>
  )
}

export default FloorPlan
