import { FaHouseUser, FaUserCircle, FaUsers, FaList, FaUserCog, FaBookOpen, 
    FaColumns, FaUserGraduate, FaCogs, FaLayerGroup, FaRegListAlt } from 'react-icons/fa';

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
        name: "Administrators",
        link: "/student/admins",
        icon: <FaUserCog />
    },
    {
        id: 4,
        name: "Subjects",
        link: "/student/subjects",
        icon: <FaBookOpen />
    },
    {
        id: 5,
        name: "Classes",
        link: "/student/classes",
        icon: <FaColumns />
    },
    {
        id: 6,
        name: "Teachers",
        link: "/student/teachers",
        icon: <FaUserGraduate />
    },
    {
        id: 7,
        name: "Students",
        link: "/student/students",
        icon: <FaUsers />
    },
    {
        id: 8,
        name: "Tests",
        link: "/student/tests",
        icon: <FaList />
    },
    {
        id: 9,
        name: "Question Bank",
        link: "/student/questions",
        icon: <FaLayerGroup />
    },
    {
        id: 10,
        name: "Results",
        link: "/student/results",
        icon: <FaRegListAlt />
    }
];

function IntroIcon() {
    return (
        <h1><FaCogs /></h1>
    )
}

export { menu, IntroIcon };