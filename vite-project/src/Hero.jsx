import myimg from './image.jpg'
import "./Hero.css"
const Hero = () => {
    return(
        <>
            
            {/* <img src={myimg} alt="" /> */}
            <div className="form">
            <form action="" id='input'>
                <input type="text" placeholder='name' />
                <input type="text" placeholder='age' />
                <input type="text" placeholder='name' />
                <input type="textarea" />
                <button>Submit</button>
            </form>
            <img src="./download.jpg" alt="" />
            </div>
        </>
    )
}
export default Hero