import React, { useEffect }  from 'react'
import { Link,useHistory } from 'react-router-dom'
import styles from './styles.module.css'
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/userActions";
import { myDetails } from "../../redux/actions/userActions";


const Navigation = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(myDetails());
      }, [dispatch]);
    
    const history = useHistory();
    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const logoutHandler = ()=> {
    dispatch(logOut());
    history.push("/login");
    };
    return (
        <div className={styles.navigation}>
            <div className={styles.title}>
                <h3>E-Interview</h3>
            </div>
            <div className={styles.btnContainer}>
                {user ? <>
                    <h3>  candidate: {user && user.firstName}</h3>
                    <Link to="/#" className="btn gold" onClick={logoutHandler} >Logout</Link>
                </> : <>
                    <Link to="/login" className="btn white" >Sign in</Link>
                    <Link to="/signup" className="btn gold">Sign Up</Link>
                </>}
            </div>
        </div>
    )
}

export default Navigation
