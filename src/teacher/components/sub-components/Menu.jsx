import { FaHouseUser, FaUserCircle, FaUsers, FaList, FaBookOpen, FaColumns, FaUserGraduate, FaLayerGroup } from 'react-icons/fa';

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
        name: "Subjects",
        link: "/student/subjects",
        icon: <FaBookOpen />
    },
    {
        id: 4,
        name: "Classes",
        link: "/student/classes",
        icon: <FaColumns />
    },
    {
        id: 5,
        name: "Students",
        link: "/student/students",
        icon: <FaUsers />
    },
    {
        id: 6,
        name: "Tests",
        link: "/student/tests",
        icon: <FaList />
    },
    {
        id: 7,
        name: "Question Bank",
        link: "/student/questions",
        icon: <FaLayerGroup />
    }
];

function IntroIcon() {
    return (
        <h1><FaUserGraduate /></h1>
    )
}

export { menu, IntroIcon };