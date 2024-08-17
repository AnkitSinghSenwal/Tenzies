 import {nanoid} from 'nanoid'
export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const dieFaces = [
        
        <div 
            className="die face-1" 
            style={styles}
            onClick={props.holdDie} 
            key={nanoid()}
        >
            <div className="dot"></div>
        </div>,

        <div 
            className="die face-2" 
            style={styles}
            onClick={props.holdDie} 
            key={nanoid()}
        >
          <div className="dot"></div>
          <div className="dot"></div>
        </div>,
        
        <div 
            className="die face-3" 
            style={styles}
            onClick={props.holdDie} 
            key={nanoid()}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>,
        
        <div 
            className="die face-4" 
            style={styles}
            onClick={props.holdDie} 
            key={nanoid()}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>,

        <div 
            className="die face-5" 
            style={styles}
            onClick={props.holdDie} 
            key={nanoid()}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>,

        <div 
            className="die face-6" 
            style={styles}
            onClick={props.holdDie} 
            key={nanoid()}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
    ]

    return(
        dieFaces[props.value - 1]    
    )
}

// <div 
//             className="die-face" 
//             style={styles}
//             onClick={props.holdDie}
//         >
//             <h2 className="dot"> {props.value} </h2>
//         </div>