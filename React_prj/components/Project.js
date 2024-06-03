import React from "react";
// import "./Hook_Reg1.css";

import ProLogin from "./ProLogin";
import { useForm } from "react-hook-form";

function Project() {
    const {register , handleSubmit , formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem(data.email, JSON.stringify({
            name: data.name, password: data.password
        }));
    }
    return(
            <div>
        <table> 
            <tr>
                <td>
                <p className="title">Registration Form</p>

                <form className="App" onSubmit={handleSubmit(onSubmit)}>
                    Name: <input type="text" {...register("name",{required:true})}/>
                        {errors.name && <span>This field is required</span>}
                    Email: <input type="email" {...register("email",{required:true})}/>
                        {errors.email && <span style={{color :"red"}}> Email is mandatory</span>}
                    Password: <input type="password" {...register("password")}/>
                  
                    Confirm Password: <input type=" password" {...register("confirm password")}/>
                    Mobile No: <input type="text" {...register("Mobile No")}/>
                    <input type={"submit"} style={{backgroundColor: "#aleafb"}}/>
                    
                </form>
            </td>
        </tr>
        <tr>
            <td>
            <ProLogin></ProLogin>
            </td>
       </tr>
    </table> 
    <p>&nbsp;</p>
        </div>
    );
}
export default Project;