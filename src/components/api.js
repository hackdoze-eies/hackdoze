import { useEffect, useState } from "react";

const UserData = ({userData}) => {
    console.log("userData",userData)
    const [state, setState] = useState(null);
 
        useEffect(async () => {
          if(userData == null) {
              return (
                  <div> ko yako data</div>
              );
          }  
          const response = await fetch(
            `https://hackdozeapi.azurewebsites.net/api-hackdoze-eies/users`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              
              body: userData
            }
          );
          const data = await response.json();
          if (!response.ok) {
            console.log("hello");
            throw Error("coudn't fetch the data from the resource");
          } else 
          setState(data);
        }, []);
      

    return (
<div></div>
    );
}

export default UserData;