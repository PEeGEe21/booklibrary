import React, {useState} from 'react'
import cn from 'classnames'
import './likebutton.css'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const particleList = Array.from(Array(10));

const LikeButton = () => {
    const [liked, setLiked ] = useState(null)
    const [clicked, setClicked ] = useState(false)

    return (
        <button onClick={() => {
            setLiked(!liked); 
            setClicked(true)
            }} 
            onAnimationEnd={() => setClicked(false)}
            className={cn("like-button-wrapper btn", {liked, clicked})}>

            {/* {liked && (
                <div className="particles">
                    {particleList.map((_, index) => (
                        <div className="particle-rotate" style={{transform: `rotate(${(360 / particleList.length) * index + 1}deg)`,}}>
                            <div className="particle-tick">

                            </div>

                        </div>
                    ))}
                </div>
            )} */}
            <div className="like-button">
                {liked ? <AiFillHeart className="liked-icon w-full h-full mr-1 "/> : <AiOutlineHeart className="w-full h-full mr-1"/>}
                
                {/* <i className="fab fa-heart"></i> */}

                {/* <span>Like</span> */}
                {/* <span className={cn("suffix", {liked})}>d</span> */}
            </div>

        </button>
        
    )
}

export default LikeButton;