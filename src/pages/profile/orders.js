import React, { useContext } from 'react';
import { StockManSty } from '../../component';
import { Context } from '../../Context'


function Orders(props) {


  const { orderCur, orderHist, userData } = useContext(Context)

  const Complete = () => {
    console.log("complete")
  }

  const Refund = () => {
    console.log("complete")
  }

  return (
    <div>
      {userData.isAdmin?
    
      <>
      <h2>Orders currently needing fulfilling:</h2>
      {/* <h3>Total Amount needing fulfillment: {orderCur.reduce((a, c) => (a.totalQty + c.totalQty))}</h3>
      <h3>Total value of fulfilments: {orderCur.reduce((a, c) => (a.totalPrice + c.totalPrice))} </h3> */}

      <StockManSty.ExisStock>
        <StockManSty.Table>

          <StockManSty.TableHead>
            <StockManSty.TableHeadList>
              <StockManSty.TableHeader>ID</StockManSty.TableHeader>
              <StockManSty.TableHeader>Name</StockManSty.TableHeader>
              <StockManSty.TableHeader>Price</StockManSty.TableHeader>
              <StockManSty.TableHeader>Category</StockManSty.TableHeader>
              <StockManSty.TableHeader>Paid?</StockManSty.TableHeader>
              <StockManSty.TableHeader>Ship Details</StockManSty.TableHeader>
              <StockManSty.TableHeader>Est Delivery Time</StockManSty.TableHeader>
              <StockManSty.TableHeader>Action</StockManSty.TableHeader>
            </StockManSty.TableHeadList>
          </StockManSty.TableHead>

          <StockManSty.TableBody>
            {orderCur.map((product) => (
              <StockManSty.TableBodyList key={product.orderItems[0]._id}>
                <StockManSty.TableBodyLI>{product.orderItems[0]._id}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.orderItems[0].name}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.productPrice}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.orderItems[0].category}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.isPaid}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.shipping}</StockManSty.TableBodyLI>
                <StockManSty.TableBodyLI>{product.deliveryDate}</StockManSty.TableBodyLI>
                <StockManSty.TableActions>
                  <StockManSty.Button onClick={() => Complete(product)}>
                    Complete
                  </StockManSty.Button>
                  <StockManSty.Button
                    onClick={() => Refund(product)}
                  >
                    Refund
                  </StockManSty.Button>
                </StockManSty.TableActions>
              </StockManSty.TableBodyList>
            ))}
          </StockManSty.TableBody>

        </StockManSty.Table>
      </StockManSty.ExisStock>

      <h2>Order History:</h2>
      {/* <h3>Total Amount of items sold: {orderHist.reduce((a, c) => (a.totalQty + c.totalQty))}</h3>
      <h3>Total value of all sales: {orderHist.reduce((a, c) => (a.totalPrice + c.totalPrice))} </h3> */}

      <StockManSty.ExisStock>
        <StockManSty.Table>

          <StockManSty.TableHead>
            <StockManSty.TableHeadList>
              <StockManSty.TableHeader>ID</StockManSty.TableHeader>
              <StockManSty.TableHeader>Name</StockManSty.TableHeader>
              <StockManSty.TableHeader>Price</StockManSty.TableHeader>
              <StockManSty.TableHeader>Category</StockManSty.TableHeader>
              <StockManSty.TableHeader>Paid?</StockManSty.TableHeader>
              <StockManSty.TableHeader>Ship Details</StockManSty.TableHeader>
              <StockManSty.TableHeader>Est Delivery Time</StockManSty.TableHeader>
              <StockManSty.TableHeader>Action</StockManSty.TableHeader>
            </StockManSty.TableHeadList>
          </StockManSty.TableHead>

          <StockManSty.TableBody>
            {orderHist.map((product) => (
             <StockManSty.TableBodyList key={product.orderItems[0]._id}>
             <StockManSty.TableBodyLI>{product.orderItems[0]._id}</StockManSty.TableBodyLI>
             <StockManSty.TableBodyLI>{product.orderItems[0].name}</StockManSty.TableBodyLI>
             <StockManSty.TableBodyLI>{product.productPrice}</StockManSty.TableBodyLI>
             <StockManSty.TableBodyLI>{product.orderItems[0].category}</StockManSty.TableBodyLI>
             <StockManSty.TableBodyLI>{product.isPaid}</StockManSty.TableBodyLI>
             <StockManSty.TableBodyLI>{product.shipping}</StockManSty.TableBodyLI>
             <StockManSty.TableBodyLI>{product.deliveryDate}</StockManSty.TableBodyLI>
                <StockManSty.TableActions>
                  <StockManSty.Button onClick={() => Refund(product)}>
                    Refund
                  </StockManSty.Button>
                </StockManSty.TableActions>
              </StockManSty.TableBodyList>
            ))}
          </StockManSty.TableBody>

        </StockManSty.Table>
      </StockManSty.ExisStock>

      </>
    
      :

      <></>}
    
    </div>
)
}

export default Orders;