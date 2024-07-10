import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        username: '',
        profilePicture: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleFileChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         profilePicture: e.target.files[0]
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-light text-white text-center">
                            <h2>Register</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="">Select...</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Zip Code</label>
                                    <input type="text" className="form-control" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                                </div>
                               
                                
                                
                                
                                {/* <div className="form-group">
                                    <label>Profile Picture</label>
                                    <input type="file" className="form-control-file" name="profilePicture" onChange={handleFileChange} />
                                </div> */}
                                <button type="sumbit" class="btn btn-dark">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
