import { FaHouseUser, FaUserCircle, FaUser, FaList } from 'react-icons/fa';

const menu = [
    {
        id: 1,
        name: "Dashboard",
        link: "/student",
        icon: <FaHouseUser />
    },
    {
        id: 2,
        name: "Profile",
        link: "/profile",
        icon: <FaUserCircle />
    },
    {
        id: 3,
        name: "Results",
        link: "/student/admins",
        icon: <FaList />
    }
];

function IntroIcon() {
    return (
        <h1><FaUser /></h1>
    )
}

export { menu, IntroIcon };