import Oven from './Oven'
import Sink from './Sink'

export default function Kitchen(props) {
    return (
      <div className="kitchen">
        <h2>Kitchen</h2>
         <Oven />
         <Sink />
      </div>
    )
  }