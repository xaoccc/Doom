import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import { useState, useEffect } from 'react';


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
                    required
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    min="18"
                    max="70"
                />
                {/* if (age < 18) {
                    <small className="error">The minimum age is 18</small>
                } else if (age > 70) {
                    <small className="error">The maximum age is 70</small>
                } else {
                    null
                } */}
                {(age) ? null : <small className="error">This field is required</small>}
                <label htmlFor="height">Height:</label>
                <input
                    type="number"
                    className="form-input"
                    id="height"
                    name="height"
                    required
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                />
                {(height) ? null : <small className="error">This field is required</small>}
                <label htmlFor="skinColor">Skin Color:</label>
                <input
                    type="text"
                    className="form-input"
                    id="skinColor"
                    name="skinColor"
                    required
                    onChange={(e) => setSkinColor(e.target.value)}
                    value={skinColor}
                />
                {(skinColor) ? null : <small className="error">This field is required</small>}
                <label htmlFor="hairColor">Hair Color:</label>
                <input
                    type="text"
                    className="form-input"
                    id="hairColor"
                    name="hairColor"
                    required
                    onChange={(e) => setHairColor(e.target.value)}
                    value={hairColor}
                />
                {(hairColor) ? null : <small className="error">This field is required</small>}
                <label htmlFor="eyeColor">Eye Color:</label>
                <input
                    type="text"
                    className="form-input"
                    id="eyeColor"
                    name="eyeColor"
                    required
                    onChange={(e) => setEyeColor(e.target.value)}
                    value={eyeColor}
                />
                {(eyeColor) ? null : <small className="error">This field is required</small>}

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}