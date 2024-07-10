import React, { ChangeEvent, useState } from 'react'
import InputComp from '../shared/InputComp';
import { Button } from '../ui/button';


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;

}



const Contact = () => {


    

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });


    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData);
      };


    return (
        <div>
            <form  className='grid grid-flow-row gap-6 px-4 py-16 rounded-xl bg-primary text-white font-poppins'>

                <div className='grid grid-cols-2 gap-3'>
                    <div>

                        <label htmlFor="">First Name</label>
                        <InputComp
                            placeholder="First Name"
                            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
                            name={"firstName"}
                            value={formData.firstName}
                            onChange={handleChange}

                        />
                    </div>
                    <div>

                        <label htmlFor="">Last Name</label>
                        <InputComp
                            placeholder="Last Name"
                            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
                            name={"lastName"}
                            value={formData.lastName}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div>

                <label htmlFor="">Email</label>
                <InputComp
                    placeholder="Email"
                    classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}

                />
                </div>
                <div>

                <label htmlFor="">Message</label>
                <InputComp
                    placeholder="Message"
                    classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
                    name={"message"}
                    value={formData.message}
                    onChange={handleChange}

                />
                </div>
                <Button className='bg-white text-primary font-bold'>Submit</Button>
            </form>
        </div>
    )
}

export default Contact