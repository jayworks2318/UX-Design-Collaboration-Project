// import coverImage from "./"
import { Link } from "react-router-dom"
import styles from "./UPPC.module.css"
import coverImage from "./Cover-Image.jpg"
export default function UserBioBar({loggedInUser,followUser, unfollowUser, updatedUser,user, id}) {

    const loaded = () => {
        return (
            
            <div className={styles.userBioWrapper}>
                {console.log("following is",loggedInUser.following)}
                <div className={styles.userCoverImage}>
                    <img className={styles.coverImage} src={coverImage} alt="user cover image" />
                </div>
                <div className={styles.userInfo}>
                    {/* Change User.avatar to actual props once implimented */}
                    {/* {console.log(user.avatar)} */}
                    <div style={{backgroundImage: `url(${updatedUser.avatar})`}} className={styles.profilePic}></div>
                    <div className={styles.rightHalf}>
                        <div className={styles.userUpperOptions}>
                            <div className="welcome">
                                {/* replace NAME with user.name once implimented */}
                                <p className={styles.welcomeUser}>{`Hello, ${updatedUser.firstName}.`}</p> 
                            </div>
                        </div>
                        <div className={styles.userBottomOptions}>
                        {user._id === id ?
                            <Link to={`/user/edit/${updatedUser._id}`}><button className={styles.clickButton}>Edit Profile</button></Link>
                            //check if current user has id in their following array
                            : loggedInUser.following.some(follower => follower._id === id) ?
                            <button onClick={()=> {unfollowUser(id,user._id)}} className={styles.clickButton}>Unfollow User</button>
                            :
                            <button onClick={()=> {followUser(id,user._id)}} className={styles.clickButton}>Follow User</button>
                            
                        }   
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     updatedUser && loggedInUser && loggedInUser.following ? loaded() : loading()
    )

    
}