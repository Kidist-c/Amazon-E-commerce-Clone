import React, { useContext } from 'react'
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { DataContext } from '../../utility/DataProvider/DataProvider';
import { auth } from '../../utility/firebase';


function Header() {
    const[{user,cart},dispatch]=useContext(DataContext)
    const totalItem=cart.reduce((amount,item)=>{
        return item.amount + amount
    },0)
  return (
    <section className={classes.fixed_header}>
        <section>
            <div className={classes.header_container}>
            <div className={classes.logo_container}>
                {/*logo */}
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo"  />
                </Link>
                <div className={classes.delivery}>
                    {/*delivery*/}
                <span>
                    {/*icon*/}
                    <CiLocationOn />

                </span>
                <div>
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={classes.search}>
                <select name="" id="">
                    <option value="all" selected>All</option>
                </select>
                <input type="text" name="" id="" placeholder='search product'></input>
                <IoSearch  size={38}/>
            </div>
            <div className={classes.order_container}>
                <div className={classes.language} >
                    <img src="https://image.shutterstock.com/image-vector/american-flag-usa-clipart-us-260nw-2477337295.jpg "
                    alt="flag"  />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </div>
                <Link to={  !user &&"/auth"}>
                    <div>
                        { user ?
                            <>
                            <p>Hello, {user.email.split("@")[0]}</p>
                            <span onClick={()=>{auth.signOut()}}>sign out</span>
                            </> :
                            <>
                            <p> Hello sign in</p>
                            <span> Account & list</span>
                            </>
                             
                            
                            
                        }
                        
                        
                    </div>
                    </Link>
                   
                <Link to="/orders">
                    <div>
                        <p>returns</p>
                        <span>& orders</span>
                    </div>
                    

                </Link>
                <Link to="/cart"  className={classes.cart}>
                {/*icon*/}
                <CgShoppingCart />
                <span>{totalItem}</span>
                </Link>
            </div>
            </div>

      
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header