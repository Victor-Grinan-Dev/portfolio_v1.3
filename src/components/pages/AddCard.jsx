import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddCard() {

    const DB_API = 'http://localhost:3001/database';
    const secondApi = 'https://restcountries.com/v2/all';
    const unsplash_head_api = 'https://source.unsplash.com/'
    const RANDOM_IMG_API = 'https://source.unsplash.com/500x400/?'

    const emptyState = {
        name: '',
        author: '',
        description: '',
        components: [],
        instruction: '',
        image: '',
      };

    const [data, setData] = useState(emptyState);
    const [secondData, setSecondData] = useState([]);

    useEffect(() => {
        axios.get(secondApi).then((response) => {
            setSecondData(response.data);
        });
      }, []);

    const [components, setComponents] = useState([
        { id: 1, component: '', quantity: '' },
    ]);
    
    const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    
    const changeData = (e) => {
        setData({ ...data, [e.target.name]: capitalStart(e.target.value) });
      };
    
    const chanImage = (e) => {
        ;
    
        if ((e.target.value.indexOf(unsplash_head_api) == -1)){
          const randomPic = RANDOM_IMG_API + e.target.value + '-food';
          setData({ ...data, [e.target.name]: randomPic }); 
        } else {
          setData({ ...data, [e.target.name]: e.target.value });
        } 
      };
    

      const clearFileds = () => { 
        this.myFormRef.reset();
      }

      const submitData = (e) => {
        e.preventDefault()
        if (!data.image || data.image === ""){
          const endPoint = data.name.split(' ').join('-')
          const randomPic = RANDOM_IMG_API + endPoint;
          setData(data.image = randomPic)
        }
        axios.post(DB_API, data);
        setData(emptyState);
      };
    
      const changeComponents = (e, i) => {
        const { name, value } = e.target;
        const compList = [...components];
        compList[i][name] = value;
        setComponents(compList);
        setData({ ...data, components: components });
      };
    
      const addComponent = (e) => {
        e.preventDefault();
        const newComponent = { id: components.length + 1, component: '', quantity: '' };
        setComponents([...components, newComponent])
      }
  return (
    <div className="addFood">
      
      <form>
      
      <h2>Add a Card: </h2>
      <br/>
        <table>
          
          <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" name="name" id="name" onChange={changeData} className="input1" /></td>
            </tr>
            <tr>
              <td><label htmlFor="author">Author</label></td>
              <td><input type="text" name="author" id="author" onChange={changeData} className="input1" /></td>
            </tr>
            <tr>
              <td><label htmlFor="description">Description</label></td>
              <td><textarea type="text" name="description" id="description" onChange={changeData} className="input1" /></td>
            </tr>
            <tr>
              <td>
                {/**
                 <label htmlFor="country_code">Origin Country :</label></td>
              <td><select name="country_code" id="country_code" onChange={changeCountry} className="input1" defaultValue='Select a Country'>
              <option hidden disabled value> Select a country... </option>
              {countries.map((country) => (
                <option key={country.name}>{country.name}</option>
              ))}
              </select>
                 */}
              </td>
            </tr>
            
            <tr>
              <td><label htmlFor="image">Image url <br/> or image name <br/> to search: </label></td>
              <td><input type="text" name="image" id="image" onChange={chanImage} className="input1" /></td>
            </tr>
            <tr>
              <td></td>
              <td>https://source.unsplash.com/[img_id]</td>
            </tr>
            
            <tr>
              <td><p>components</p></td>         
              <td>{components.map((_, i) => {
                    return (
                      <div key={i}>
                            <label htmlFor="component">Component </label>
                            <input type="text" name="component" id="component" onChange={(e) => changeComponents(e, i)} className="input2" />
                            <br></br>               
                          
                            <label htmlFor="quantity">Quantity </label>
                            <input type="text" name="quantity" id="quantity" onChange={(e) => changeComponents(e, i)} className="input2" />
                      </div>
                    );
              })}
              <button onClick={addComponent}>Add Component</button></td>
            </tr>
            
            <tr>
              <td><label htmlFor="instruction">Instructions</label></td>
              <td><textarea type="text" name="instruction" id="instruction" onChange={changeData} className="input1" /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Submit" onClick={submitData}/></td>
            </tr>
          </tbody>
          
        </table>
      </form>
    </div>
  )
}

export default AddCard