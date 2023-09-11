function GoodsItem(props) {

    let {
        offerId,
        displayName,
        displayDescription,
        displayAssets: [{full_background}],
        addToBasket = Function.prototype,
        price: {finalPrice: price}
    } = props;

    // const {price} = props.price.finalPrice;

    // console.log(props);
    // console.log(price);

    return (<div className="card">
        <div className="card-image">
            <img src={full_background} alt={displayName}/>
        </div>
        <div className="card-content">
            <span className="card-title">{displayName}</span>
            <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button
                className='btn'
                onClick={() => addToBasket({
                    offerId,
                    displayName,
                    price
                })}>
                Bye
            </button>
            <span className='right' style={{fontSize: '1.8rem'}}>{price}</span>
        </div>
    </div>)
}

export {GoodsItem};

// {
//     "mainId": "Character_FloodPlain",
//     "displayName": "Satoru Gojo",
//     "displayDescription":
//     "Widely known as the strongest Sorcerer of modern times.",
//     "displayType": "Outfit",
//     "mainType": "outfit",
//     "offerId": "v2:/c4ccef327ce74a43719a0a9c4aa17abeef4ae7117f0e26a4dbbaedc3c1af0bba",
//     "displayAssets": [
//     {
//         "displayAsset": "DAv2_Character_FloodPlain",
//         "materialInstance": "MI_Character_FloodPlain",
//         "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Character_FloodPlain/MI_Character_FloodPlain.png",
//         "flipbook": null,
//         "background_texture": null,
//         "background": "https://media.fortniteapi.io/images/shop/c4ccef327ce74a43719a0a9c4aa17abeef4ae7117f0e26a4dbbaedc3c1af0bba/v2/MI_Character_FloodPlain/background.png",
//         "full_background": "https://media.fortniteapi.io/images/shop/c4ccef327ce74a43719a0a9c4aa17abeef4ae7117f0e26a4dbbaedc3c1af0bba/v2/MI_Character_FloodPlain/info.en.png"
//     },
//     {
//         "displayAsset": "DAv2_Character_FloodPlain",
//         "materialInstance": "MI_Character_FloodPlain_02",
//         "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Character_FloodPlain/MI_Character_FloodPlain_02.png",
//         "flipbook": null,
//         "background_texture": null,
//         "background": "https://media.fortniteapi.io/images/shop/c4ccef327ce74a43719a0a9c4aa17abeef4ae7117f0e26a4dbbaedc3c1af0bba/v2/MI_Character_FloodPlain_02/background.png",
//         "full_background": "https://media.fortniteapi.io/images/shop/c4ccef327ce74a43719a0a9c4aa17abeef4ae7117f0e26a4dbbaedc3c1af0bba/v2/MI_Character_FloodPlain_02/info.en.png"
//     }
// ],
//     "firstReleaseDate": "2023-08-08",
//     "previousReleaseDate": "2023-08-08",
//     "giftAllowed": true,
//     "buyAllowed": true,
//     "price": {
//     "regularPrice": 1500,
//         "finalPrice": 1500,
//         "floorPrice": 1500
// },
//     "rarity": {
//     "id": "Epic",
//         "name": "Epic"
// },
//     "series": null,
//     "banner": null,
//     "offerTag": null,
//     "granted": [
//     {
//         "id": "Character_FloodPlain",
//         "type": {
//             "id": "outfit",
//             "name": "Outfit"
//         },
//         "name": "Satoru Gojo",
//         "description": "Widely known as the strongest Sorcerer of modern times.",
//         "rarity": {
//             "id": "Epic",
//             "name": "Epic"
//         },
//         "series": null,
//         "images": {
//             "icon": "https://media.fortniteapi.io/images/a2183427bcbc7ec00e4e16d0d6dea2bc/transparent.png",
//             "featured": "https://media.fortniteapi.io/images/a2183427bcbc7ec00e4e16d0d6dea2bc/full_featured.png",
//             "background": "https://media.fortniteapi.io/images/cosmetics/a2183427bcbc7ec00e4e16d0d6dea2bc/v2/background.png",
//             "icon_background": "https://media.fortniteapi.io/images/cosmetics/a2183427bcbc7ec00e4e16d0d6dea2bc/v2/icon_background.png",
//             "full_background": "https://media.fortniteapi.io/images/cosmetics/a2183427bcbc7ec00e4e16d0d6dea2bc/v2/info.en.png"
//         },
//         "video": null,
//         "audio": null,
//         "gameplayTags": [
//             "SoundLibrary.ID.StepType.ShoesDress",
//             "SoundLibrary.ID.ClothingType.Generic",
//             "SoundLibrary.ID.HandType.Bare",
//             "Cosmetics.UserFacingFlags.HasVariants",
//             "Cosmetics.Filter.Season.25",
//             "Cosmetics.Set.CleanWard"
//         ],
//         "set": {
//             "id": "CleanWard",
//             "name": "Jujutsu Kaisen",
//             "partOf": "Part of the Jujutsu Kaisen set."
//         }
//     },
//     {
//         "id": "Backpack_FloodPlain",
//         "type": {
//             "id": "backpack",
//             "name": "BackBling"
//         },
//         "name": "Sweet Selection",
//         "description": "Help yourself to one.",
//         "rarity": {
//             "id": "Epic",
//             "name": "Epic"
//         },
//         "series": null,
//         "images": {
//             "icon": "https://media.fortniteapi.io/images/c5c2ebba59c784bba8808389f0b2cebf/transparent.png",
//             "featured": null,
//             "background": "https://media.fortniteapi.io/images/cosmetics/c5c2ebba59c784bba8808389f0b2cebf/v2/background.png",
//             "icon_background": "https://media.fortniteapi.io/images/cosmetics/c5c2ebba59c784bba8808389f0b2cebf/v2/icon_background.png",
//             "full_background": "https://media.fortniteapi.io/images/cosmetics/c5c2ebba59c784bba8808389f0b2cebf/v2/info.en.png"
//         },
//         "video": null,
//         "audio": null,
//         "gameplayTags": [
//             "Cosmetics.Filter.Season.25",
//             "Cosmetics.Set.CleanWard",
//             "Cosmetics.Source.ItemShop"
//         ],
//         "set": {
//             "id": "CleanWard",
//             "name": "Jujutsu Kaisen",
//             "partOf": "Part of the Jujutsu Kaisen set."
//         }
//     }
// ],
//     "priority": -1,
//     "section": {
//     "id": "JujutsuKaisen",
//         "name": "Jujutsu Kaisen",
//         "landingPriority": 99
// },
//     "groupIndex": 0,
//     "storeName": "BRSpecialFeatured",
//     "tileSize": "Normal",
//     "categories": [
//     "Panel11"
// ]
// }