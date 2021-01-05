import React, { useEffect, useState, useContext } from 'react';
import { StockManSty } from '../../component';
import { Context } from '../../Context'

function StockManage(props) {

  const { allProducts, setAllProducts } = useContext(Context)


  const [FormVisible, setFormVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  

  const openForm = (product) => {
    setFormVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };


  const submitForm = (e) => {
    e.preventDefault();
    
  };


  const deleteProduct = (product) => {
  
  };

  const uploadImage = (e) => {
 
  };


  return (
    <StockManSty.Container>
      
      <StockManSty.ProdHead>
        <StockManSty.Title>Products</StockManSty.Title>
        <StockManSty.Button onClick={() => openForm({})}>
          Create Product
        </StockManSty.Button>
      </StockManSty.ProdHead>

      {FormVisible?
        <StockManSty.Form>
          <StockManSty.FormMain onSubmit={submitForm}>
            <StockManSty.FormList>

              <StockManSty.FormLI>
                <StockManSty.SubTitle>Create Product</StockManSty.SubTitle>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Label htmlFor="name">Name</StockManSty.Label>
                <StockManSty.FormInput
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></StockManSty.FormInput>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Label htmlFor="price">Price</StockManSty.Label>
                <StockManSty.FormInput
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></StockManSty.FormInput>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Label htmlFor="image">Image</StockManSty.Label>
                <StockManSty.FormInput
                  type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                ></StockManSty.FormInput>
                <StockManSty.FormInput type="file" onChange={uploadImage}></StockManSty.FormInput>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Label htmlFor="countInStock">CountInStock</StockManSty.Label>
                <StockManSty.FormInput
                  type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                ></StockManSty.FormInput>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Label htmlFor="name">Category</StockManSty.Label>
                <StockManSty.FormInput
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></StockManSty.FormInput>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Label htmlFor="description">Description</StockManSty.Label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Button type="submit">
                  {id ? 'Update' : 'Create'}
                </StockManSty.Button>
              </StockManSty.FormLI>

              <StockManSty.FormLI>
                <StockManSty.Button
                  type="button"
                  onClick={() => setFormVisible(false)}
                >
                  Back
                </StockManSty.Button>
              </StockManSty.FormLI>

            </StockManSty.FormList>
          </StockManSty.FormMain>
        </StockManSty.Form>
        :
        <></>}



      <StockManSty.ExisStock>
        <StockManSty.Table>

          <StockManSty.TableHead>
            <StockManSty.TableHeadList>
              <StockManSty.TableHeader>ID</StockManSty.TableHeader>
              <StockManSty.TableHeader>Name</StockManSty.TableHeader>
              <StockManSty.TableHeader>Price</StockManSty.TableHeader>
              <StockManSty.TableHeader>Category</StockManSty.TableHeader>
              <StockManSty.TableHeader>Action</StockManSty.TableHeader>
            </StockManSty.TableHeadList>
          </StockManSty.TableHead>

          <StockManSty.TableBody>
            {allProducts.map((product) => (
              <StockManSty.TableBodyList key={product._id}>
                <StockManSty.TableBodyLI>{product._id}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.name}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.price}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.category}</StockManSty.TableBodyLI>
                <StockManSty.TableActions>
                  <StockManSty.Button onClick={() => openForm(product)}>
                    Edit
                  </StockManSty.Button>
                  <StockManSty.Button
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </StockManSty.Button>
                </StockManSty.TableActions>
              </StockManSty.TableBodyList>
            ))}
          </StockManSty.TableBody>

        </StockManSty.Table>
      </StockManSty.ExisStock>

    </StockManSty.Container>
  );
}
export default StockManage;
