import './MyProfileCard.css'
import { auth, db } from '../../firebaseConfig';
import { useEffect,useState } from 'react';
import { doc,getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';




const MyProfile = ()=>{

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, 'users', uid);
                getDoc(userRef)
                    .then((doc) => {
                        if (doc.exists()) {
                            console.log('User data found', doc.data());
                            setUserData(doc.data());
                        } else {
                            console.log('User data not found');
                        }
                    })
                    .catch((error) => {
                        console.log('Error getting user data', error);
                    });
            } else {
                setUserData(null); // Clear user data when user logs out
            }
        });
    
        return () => {
            unsubscribe(); // Clean up the subscription
        };
    }, []); // Remove 'auth' from the dependency array if it's stable
    
    if (!userData) {
        return <div>Loading...</div>;
    }
    

    return(
        <div className="userSetup">
        <div className="userProfile">
            <div className="profilePic">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity="0.2"/><path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"/></g></svg>
            </div>
            <div className="userText">
                <h4>{userData?.firstName} {userData?.lastName}</h4>
                <div className="farmer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" color="gray"><g fill="currentColor"><path d="M13.52 13.32c.43.23.94.36 1.48.36s1.05-.13 1.48-.36c.14-.07.3.09.21.23c-.36.55-.98.92-1.69.92s-1.33-.37-1.69-.92c-.09-.14.06-.31.21-.23m1.16-3.02l-.53 1.71c-.11.35.15.7.52.7h.78c.37 0 .63-.35.52-.7l-.52-1.71a.403.403 0 0 0-.77 0m-3.5-.03a1.417 1.417 0 0 1 2.77.07a.23.23 0 0 1-.23.28h-.07q.03-.12.03-.24c0-.5-.41-.91-.91-.91a.913.913 0 0 0-.88 1.15h-.44c-.19 0-.32-.17-.27-.35m7.64 0c-.15-.62-.71-1.08-1.38-1.08c-.7 0-1.27.5-1.39 1.15c-.03.15.08.28.23.28h.07a1 1 0 0 1-.03-.24c0-.5.4-.91.91-.91a.913.913 0 0 1 .88 1.15h.44c.18 0 .31-.17.27-.35"/><path d="M13.29 10.38c0-.29-.23-.52-.52-.52a.5.5 0 0 0-.21.043a.16.16 0 1 1-.239.212a.52.52 0 0 0-.011.505h.92c.03-.07.06-.16.06-.24m3.757-.487a.516.516 0 0 1 .643.727h-.92a.52.52 0 0 1 .032-.538a.16.16 0 1 0 .245-.19m-5.549-1.214a.562.562 0 0 1-.348-1a3.02 3.02 0 0 1 2.11-.525a.563.563 0 0 1-.13 1.117a1.96 1.96 0 0 0-1.293.3a.56.56 0 0 1-.34.108m6.998.008a.56.56 0 0 1-.341-.116a1.94 1.94 0 0 0-1.293-.3a.562.562 0 1 1-.131-1.117a3.04 3.04 0 0 1 2.11.525a.562.562 0 0 1-.345 1.006z"/><path d="M27.11 31H4a1 1 0 0 1-1-1v-3.531a11.95 11.95 0 0 1 6.238-10.516a4.3 4.3 0 0 1-.375-1A5.5 5.5 0 0 1 8.94 4.019a7.55 7.55 0 0 1 12.075 0a5.5 5.5 0 0 1 4.794 4.14c.163.654.236 1.29.176 1.928a1.52 1.52 0 0 1 1.003 1.432a1.523 1.523 0 0 1 1.4-1.518h.108a1.514 1.514 0 0 1 1.5 1.5v7.076a2.413 2.413 0 0 1-2.41 2.41h-.34v.78q0 .18-.052.352a2 2 0 0 1 1.78 1.988v4.937A1.915 1.915 0 0 1 27.11 31M25 12.5l-.006.009v3.462a1.02 1.02 0 0 1-.95 1.03h-.052a1 1 0 0 1-1-1v-2.78l-.022.015V11.51c0-.19-.1-.36-.252-.451a.5.5 0 0 0-.196-.058h-.035a.5.5 0 0 0-.5.5v7.076a1.407 1.407 0 0 0 1.41 1.41h1.34v1.78a.22.22 0 0 0 .22.22h1.064a.22.22 0 0 0 .22-.22V19.99h1.34a1.407 1.407 0 0 0 1.41-1.41V11.5a.51.51 0 0 0-.5-.5l.015.001h-.035a.514.514 0 0 0-.47.52v4.45a1.02 1.02 0 0 1-.95 1.03h-.052a1 1 0 0 1-1-1v-4.48a.514.514 0 0 0-.47-.52h-.035a.5.5 0 0 0-.486.382A1 1 0 0 0 25 11.5zm-1.28 9.267v-.156a10 10 0 0 0-.377-.618a2.4 2.4 0 0 1-1.323-.422V29h.54q.04-.205.14-.382a1.24 1.24 0 0 1-.003-1.245a1.24 1.24 0 0 1 .006-1.251a1.24 1.24 0 0 1-.163-.657c.018-.648.538-1.137 1.142-1.198a.5.5 0 0 1 .128-.017h.17v-1.731a1.22 1.22 0 0 1-.26-.752m-7.381-4.297h-2.704c.26.402.75.69 1.355.69c.597 0 1.086-.288 1.349-.69m9.641 5.517h-1v1.263h1zm1 2.263h-3.07a.5.5 0 0 1-.1.01c-.162 0-.267.126-.27.233v.006a.27.27 0 0 0 .117.221a.5.5 0 0 1-.015.83a.25.25 0 0 0-.112.2c0 .09.043.157.103.195a.5.5 0 0 1 .01.844a.25.25 0 0 0-.113.201c0 .09.043.157.103.195a.5.5 0 0 1 .05.815h3.297zM18.99 29v-2.7a.517.517 0 0 0-.51-.5h-6.94c-.28 0-.5.22-.5.5V29zM8 29v-9.669a9.95 9.95 0 0 0-2.998 7.137L5 29zm2.06-11.216v4.786c0 .23.18.41.41.41h9.07c.23 0 .41-.18.41-.41v-4.768q-.466-.266-.96-.482v3.754c0 .457-.51.715-.88.457l-1.977-1.38l-.544.485a.913.913 0 0 1-1.208 0l-.004-.003l-.535-.478l-1.972 1.376c-.37.258-.88-.01-.88-.447V17.32q-.48.208-.93.463m4.93 1.376q-.46-.002-.877-.143q.13.155.281.291l.591.527l.591-.527q.15-.135.278-.288c-.273.09-.564.14-.864.14M10.378 8.62v.01l.033.492l-.466.06c-.566.072-1.025.576-1.025 1.21c0 .687.537 1.219 1.17 1.219h.01l.472-.004l.146 2.265c.15 1.536 1.327 2.598 2.732 2.598h3.22c1.405 0 2.582-1.062 2.732-2.598l.15-2.229l.427-.036c.587-.051 1.071-.565 1.071-1.215c0-.596-.407-1.079-.926-1.193l-.43-.095l.047-.524C19.765 7.715 19.092 7 18.31 7h-6.5c-.833 0-1.508.734-1.432 1.62"/></g></svg>
                    <span>{userData.accountType}</span>
                </div>
            </div>
        </div><br/>
            <div className="line">
            </div>

            <div className='farmerDetails'>
                <ul>
                    <li><strong>Farm Area: </strong>{userData.farmArea}</li>
                    <li><strong>Annual Production: </strong>{userData.annualProduction}</li>
                    <li><strong>Location: </strong>{userData.villageCityName}{userData.district} {userData.state}{userData.pincode}</li>
                    <li><strong>Crops Grown (in last 5yrs): <br/>
                        <ul>
                            {
                                userData.cropsGrown.map((crop,index)=>{
                                    return(
                                        <li key={index}>{crop}</li>
                                    )
                                })
                            }
                        </ul>
                            
                         </strong></li>
                    <li><strong>Financial Services: <br/>
                                <ul>
                                    <li>Loan Grants: {userData.leanGrants?'Available':'Not available'}</li>
                                    <li>Crop Insurance: {userData.cropInsurance?'Available':'Not available'}</li>
                                </ul>
                     </strong></li>
                    <li><strong>Transportation service: </strong>{userData.transportationAvailability?'Available':'Not available'}</li>
                    <li><strong>Acess to cold storage: </strong>{userData.coldStorageAccess?'Available':'Not available'}</li>
                </ul>
            </div>
        
    </div>);
}

export default MyProfile;