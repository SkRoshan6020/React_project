import React from "react";
import "./HookReg1.css";

import HookLogin from "./HookLogin";

import { useForm } from "react-hook-form";

function Hook_Reg1() {
    const { register , handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        localStorage.setItem(data.email, JSON.stringify({
            name: data.name, password: data.password

        }));
    }
         return (
                  <div>
                <table>
                    <tr>
                         <td>
                            <p className="title">Registration Form</p>

                            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                                Name : <input type="text" {...register("name", {required: true})}/>
                                     {errors.name && <span>This field is required</span>}
                                Email : <input type="email" {...register("email", {required: true})}/>
                                   {errors.email && <span style={{ color: "red"}}>*Email* is mandatory </span>} 
                                Password : <input type="password" {...register("password")}/>
                                <input type={"submit"} style={{ backgroundColor: "#a1eafb "}} />  
                            </form>
                            </td>
                            </tr>
                            <tr>
                                 <td>
                                      <HookLogin></HookLogin>
                                 </td>
                            </tr>
                            </table>
                            <p>&nbsp;</p>
                                </div>    
                  
         );
}

export default Hook_Reg1;