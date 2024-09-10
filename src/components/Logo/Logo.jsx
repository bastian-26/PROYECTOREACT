import './Logo.css'
import zap from '../../assets/image/zap.png'

export default function Logo(){
    const Logo = zap
    return(
    <>
        <a href="/" className="milogo"><img src={Logo} alt="Logo"/></a>  
    </>)
}