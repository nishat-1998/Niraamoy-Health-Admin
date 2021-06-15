import React, { createContext, useState } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState();


    const onSubmit = data =>{ 
        const eventData = {
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            imageURL: imageURL

        };

        const url = `http://localhost:5000/`;

        if(imageURL !== null){
            fetch(url,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(eventData)
            })
            .then(res => console.log('server site responded', res))
        }
        else{
            alert('image uploading. please wait...')
        }
        console.log(imageURL);
        setImageURL(null);
    }

// Just Test

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '53b5d9877011225bc9355aa79c8c0df0');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        
        <div className="row">
           <div className="col-md-4">
                <Sidebar />
           </div>
           <div className="col-md-8">
                <div className="product-form">
                        <div className="bg-danger text-center section-Heading">
                            <h4 style={{color: 'white'}}>Add Product</h4>
                        </div>
                        <div  className="product-input">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input name="name" placeholder="Product Name" {...register("name")}/>
                                        <input name="group name" type="text" placeholder="Group Name" {...register("group name")}/><br/>
                                    </div>
                                    <div className="col-md-6">
                                        <input name=" company name" placeholder="Company Name" {...register("company name")}/>
                                        <input name="type" type="text" placeholder="Type" {...register("type")}/><br/>
                                    </div>
                                    <div className="col-md-6">
                                        <input name=" regular price" placeholder="Regular Price" {...register("regular price")}/>
                                        <input name="discount price" type="text" placeholder="Discount Price" {...register("discount price")}/><br/>
                                    </div>
                                    <div className="col-md-6">
                                        <input name="quantity" type="text" placeholder="Quantity" {...register("quantity")}/>
                                        <input onChange={handleImageUpload} type="file"/>
                                    </div>
                                    {/* <input className="text-center" type="submit" />                 */}
                                    <Button className="text-center" type="submit">Save Product</Button>
                                </div>
                                
                            </form>
                        </div>
                 </div>

            
            </div>

            
        </div>
   
    );
};

export default Admin;