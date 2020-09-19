import sajek from './image/Sajek.png';
import sundorbon from './image/sundorbon.png';
import sreemongol from './image/Sreemongol.png';
import Rectangle26 from './image/Rectangle26.png';
import Rectangle27 from './image/Rectangle27.png';
import Rectangle28 from './image/Rectangle28.png';
import star from './image/Icon/star_1_.png'

export const data = {
    places: [
        {
            id: 1,
            placeName: "Sajek",
            picture: sajek,
            index: 0,
            description: `Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.`
        },
        {
            id: 2,
            placeName: "Sundorbon",
            picture: sundorbon,
            index: 1,
            description: `The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.`
        }, {
            id: 3,
            placeName: "Sreemongol",
            picture: sreemongol,
            index: 2,
            description: `It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. `
        }
    ],
    Sundorbon: [
        {
            lat: 22.474255,
            long: 89.597783
        },
        {
            lat: 22.473808,
            long: 89.597609
        },
        {
            lat: 22.474463,
            long: 89.597866
        },
    ],
    Sajek: [
        {
            lat: 23.380806,
            long: 452.294444
        },
        {
            lat: 23.381909,
            long: 452.293799
        },
        {
            lat: 23.382244,
            long: 452.294038
        },
    ],
    Sreemongol: [
        {
            lat: 24.310577,
            long: 91.725136
        },
        {
            lat: 24.309390,
            long: 91.725238
        },
        {
            lat: 24.309199,
            long: 91.724583
        },
    ],
    hotels: [
        {
            id: 3221,
            name: `Light bright airy stylish apt & safe peaceful stay`,
            picture: Rectangle26,
            price: 39,
            rating: 4.9,
            ratingPic: star
        },
        {
            id: 2113,
            name: `Apartment in Lost Panorama`,
            picture: Rectangle27,
            price: 52,
            rating: 4.9,
            ratingPic: star
        },
        {
            id: 4112,
            name: `AR Lounge & Pool (r&r + b&b)`,
            picture: Rectangle28,
            price: 44,
            rating: 4.9,
            ratingPic: star
        }
    ]
}