import Bedroom from './Bedrooms'
import LivingRoom from './LivingRoom'
import Bath from './Bath'
import Kitchen from './Kitchen'

export default function FloorPlan(props) {
    return (
      <div className="container">
         <Bedroom member={"Child"} />
         <Bath size={"Half"} />
         <Bedroom member={"Parent"}  />
         <Bedroom member={"Baby"}  />
         <LivingRoom />
         <Kitchen />
         
         <Bath size={"Full"} />
         
      </div>
    );
  }