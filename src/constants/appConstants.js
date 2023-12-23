import { Movie, People as PeopleIcon, Public } from "@mui/icons-material"
import Films from "../pages/Films"
import People from "../pages/People"
import Planets from "../pages/Planets"
import Species from "../pages/Species"
import Starships from "../pages/Starships"
import Vehicles from "../pages/Vehicles"
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import RocketIcon from '@mui/icons-material/Rocket';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
export const SWAPI_BASE_URL = "https://swapi.dev/api"
export const PICSUM_BASE_URL = "https://picsum.photos/200"

export const navigationRoutes = [
    {
        name: 'Films',
        to: '/films',
        element: <Films />,
        icon: <Movie />
    }, {
        name: 'People',
        to: '/people',
        element: <People />,
        icon: <PeopleIcon />
    },
    {
        name: 'Planets',
        to: '/planets',
        element: <Planets />,
        icon: <Public />
    },
    {
        name: 'Species',
        to: '/species',
        element: <Species />,
        icon: <EmojiNatureIcon />
    },
    {
        name: 'Starships',
        to: '/starships',
        element: <Starships />,
        icon: <RocketIcon />

    }, {
        name: 'Vehicles',
        to: '/vehicles',
        element: <Vehicles />,
        icon: <DeliveryDiningIcon />
    },
]