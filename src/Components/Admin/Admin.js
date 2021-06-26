import React,{useState,Component} from 'react';
import Select from 'react-select';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    const [info,setInfo] =useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
      const formData = new FormData()
     // console.log(info);
      formData.append('file', file); 
      formData.append('name', info.name);
      formData.append('group', info.group);
      formData.append('company', info.company);
      formData.append('type', info.type);
      formData.append('regular',info.regular);
      formData.append('selling', info.selling);
      formData.append('size', info.size);
      formData.append('mg', info.mg);
      formData.append('quantity', info.quantity);


      fetch('http://localhost:5055/addProduct', {
          method: 'POST',
          body: formData
      })
          .then(response => response.json())
          .then(data => {
              console.log(data)
          })
          .catch(error => {
              console.error(error)
          })
  }

 /* const Companies = [
    { label: "Square Pharmaceuticals Ltd.", value: 355 },
    { label: "Ziska Pharmaceuticals Ltd.", value: 54 },
    { label: "Beximco Pharmaceuticals Ltd.", value: 43 },
    { label: "Sun Pharmaceutical Ltd.", value: 61 },
    { label: "ACI Limited", value: 965 },
    { label: "ACME Laboratories Ltd.", value: 46 },
    { label: "Aristopharma Ltd.", value: 58 }
  ];
  */
  
    
    return (
      <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-2" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
          <h5 style={{color: 'red'}}>Add Product</h5>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product Name</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Product Name" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Group Name</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="group" placeholder="Group Name" />
              </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Company Name</label><br></br>
                <select onBlur={handleBlur} type="drop-down" className="form-control" name="company">
                    <option value="">--Select--</option>
                    <option value="Square Pharmaceuticals Ltd.">Square Pharmaceuticals Ltd.</option>
                    <option value="Beximco Pharmaceuticals Ltd.">Beximco Pharmaceuticals Ltd.</option>
                    <option value="ACI Limited">ACI Limited</option>
                </select> <br></br>
                </div>      
                 
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Type</label><br></br>
                  <select onBlur={handleBlur} type="drop-down" className="form-control" name="type">
                    <option value="">--Select--</option>
                    <option value="Capsul"> Capsul</option>
                    <option value="Tablet">Tablet</option>
                </select><br></br>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Regular price</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="regular" placeholder="Regular price" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Seeling Price</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="selling" placeholder="Selling Price" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Pack size</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="size" placeholder="Pack size" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Quantity</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="quantity" placeholder="Quantity" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Mg</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="mg" placeholder="Mg" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Upload a image</label>
                  <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
              </div>
             
              <button type="submit" className="btn btn-danger">Submit</button>
          </form>
      </div>
  </section>
    );
};
export default Admin;