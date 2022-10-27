import logo from '../assets/images/logo.svg';
import home from '../assets/images/home.svg';
import location from '../assets/images/location.svg';
import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row py-5 border-bottom">
                    <div className="col-md-5     col-12">
                        <ul>
                            <li>
                                <img className='logo' src={logo} alt="" />
                            </li>
                            <li>
                                <img className='icon' src={home} alt="" />
                                <span>Company number: 14335671</span>
                            </li>
                            <li>
                                <img className='icon' src={location} alt="" />
                                <span>12 Greenway Farm, Bath Road, BS30 5RL, Bristol</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-12">
                        <ul>
                            <li>
                                <h3>EXPLORE</h3>
                            </li>
                            <li>
                                <a href='#home'>Home</a>
                            </li>
                            <li>
                                <a href='#news'>News</a>
                            </li>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12">
                        <ul className='social'>
                            <li>
                                <h3>FOLLOW US</h3>
                            </li>
                            <li>
                                <img className='icon' src={facebook} alt="" />
                                <a href='/'>facebook</a>
                            </li>
                            <li>
                                <img className='icon' src={linkedin} alt="" />
                                <a href='/'>linkedin</a>
                            </li>
                            <li>
                                <img className='icon' src={instagram} alt="" />
                                <a href='/'>instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center py-4">
                        <span>© Sleek Homes 2022</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
