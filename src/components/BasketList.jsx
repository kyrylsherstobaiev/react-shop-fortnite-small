import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Cart</li>
            {
                order.length ? order.map(item => (
                    <BasketItem
                        key={item.offerId}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                    />

                )) : <li className="collection-item ">Cart is empty</li>
            }
            <li className="collection-item">
                Total amount: {totalPrice}
            </li>
            <li className="collection-item">
                <button className="btn">ORDER</button>
            </li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export {BasketList};