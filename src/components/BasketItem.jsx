function BasketItem(props) {
    const {
        offerId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item ">
            {displayName}
            <i className="material-icons basket-quantity"
               onClick={() => decQuantity(offerId)}>remove_circle_outline</i> x {quantity}{' '}
            <i className="material-icons basket-quantity"
               onClick={() => incQuantity(offerId)}>add_circle_outline</i> = {price * quantity}

            <span className="secondary-content" onClick={() => removeFromBasket(offerId)}>
                <i className="material-icons basket-delete">close</i>
                </span>
        </li>
    )
}

export {BasketItem};