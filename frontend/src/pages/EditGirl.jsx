import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import { useState, useEffect } from 'react';
import { validate, changeInput } from '../helpers';


export default function EditEscapeRoom() {
    const { girlId } = useParams();
    const [girls, setGirls] = useState([]);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");    
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [skinColor, setSkinColor] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [eyeColor, setEyeColor] = useState("");  
    const navigate = useNavigate();

    const getGirls = async () => {
        api.get("/api/girls/")
        .then((response) => {
            setGirls(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));;
    }

    useEffect(() => {
        getGirls();
    }, []);

    useEffect(() => {
        const girlToUpdate = girls.find(girl => girl.id == girlId);
        if (girlToUpdate) {
            setImage(girlToUpdate.image);
            setName(girlToUpdate.name);
            setBio(girlToUpdate.bio);
            setAge(girlToUpdate.age);
            setHeight(girlToUpdate.height);
            setSkinColor(girlToUpdate.skin_color);
            setHairColor(girlToUpdate.hair_color);
            setEyeColor(girlToUpdate.eye_color);            
        }
    }, [girls, girlId]);

    const editGirl = async (e) => {
        e.preventDefault();
        const requestData = { image, name, bio, age, skin_color: skinColor, hair_color: hairColor, eye_color: eyeColor, height };
        console.log("Request Data:", requestData);
        api.put(`/api/girls/${girlId}/`, requestData)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Girl updated successfully!");
                    navigate('/strip-club/');
                } else {
                    console.log("Girl was not updated!");
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    }
    return (
        <div>
            <h2 className="crud-title">Edit Girl</h2>
            <form className="form-container" onSubmit={editGirl}>
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    className="form-input"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    required
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                {/^https?:\/\/\S+$/.test(image) ? '' : <small className="error">Enter a valid web address. It should start with http:// or https://</small>}
                <label htmlFor="name">Name:</label>
                <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                {(name) ? null : <small className="error">This field is required</small>}
                <label htmlFor="description">Bio:</label>
                <textarea
                    className="form-input"
                    id="bio"
                    name="bio"
                    required
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                />
                {(bio) ? null : <small className="error">This field is required</small>}
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    className="form-input"
                    id="age"
                    name="age"                    
                    onChange={(e) => {
                        changeInput(e);
                        setAge(e.target.value);
                    }}
                    onInvalid={(e) => validate(e, 'Please enter a valid age. Age must be between 18 and 70')}
                    value={age}
                    min="18"
                    max="70"
                    required
                />
                {(age) ? null : <small className="error">This field is required</small>}
                <label htmlFor="height">Height:</label>
                <input
                    type="number"
                    className="form-input"
                    id="height"
                    name="height"
                    onChange={(e) => {
                        changeInput(e);
                        setHeight(e.target.value);
                    }}
                    onInvalid={(e) => validate(e, 'Please enter a valid height. Height must be between 100cm and 200cm')}
                    value={height}
                    min="100"
                    max="200"
                    required
                />
                {(height) ? null : <small className="error">This field is required</small>}
                <label htmlFor="skinColor">Skin Color:</label>
                <select                     
                    type="text"
                    className="form-input"
                    id="skinColor"
                    name="skinColor"
                    required
                    onChange={(e) => {
                        changeInput(e);
                        setSkinColor(e.target.value);
                    }}
                    value={skinColor}
                    >
                    <option value="">--Please choose an option--</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select>
                {(skinColor) ? null : <small className="error">This field is required</small>}
                <label htmlFor="hairColor">Hair Color:</label>
                <select
                    type="text"
                    className="form-input"
                    id="hairColor"
                    name="hairColor"
                    required
                    onChange={(e) => setHairColor(e.target.value)}
                    value={hairColor}
                >
                    <option value="">--Please choose an option--</option>
                    <option value="blonde">Blonde</option>
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="pink">Pink</option>
                    <option value="white">White</option>
                    <option value="bald">Bald</option>
                </select>
                {(hairColor) ? null : <small className="error">This field is required</small>}
                <label htmlFor="eyeColor">Eye Color:</label>
                <select
                    type="text"
                    className="form-input"
                    id="eyeColor"
                    name="eyeColor"
                    required
                    onChange={(e) => setEyeColor(e.target.value)}
                    value={eyeColor}
                >
                    <option value="">--Please choose an option--</option>
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                {(eyeColor) ? null : <small className="error">This field is required</small>}

                <input type="submit" value="Submit" />
                <Link className="button" to="/strip-club">Back</Link>
            </form>
        </div>
    )
}