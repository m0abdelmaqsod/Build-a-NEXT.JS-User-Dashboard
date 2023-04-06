import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import styles from '../styles/components/sidebar.module.css';
import Link from 'next/link';
// import Router, { useRouter } from 'next/router';



const Sidebar = () => {
// const router = useRouter()

    // const Navlink = [
    //     {
    //         id: 1,
    //         name: <RxSketchLogo />,
    //         link: '/',
    //     },
    //     {
    //         id: 2,
    //         name: <RxDashboard />,
    //         link: '/',
    //     },
    //     {
    //         id: 3,
    //         name: <RxPerson />,
    //         link: '/customers',
    //     },
    //     {
    //         id: 4,
    //         name: < HiOutlineShoppingBag />,
    //         link: '/orders',
    //     },
    //     {
    //         id: 5,
    //         name: <FiSettings />,
    //         link: '/',
    //     },
    // ]


    return (
        <div className={styles.sidebar}>
            {/* {
                Navlink.map(({ name, link, id }) => (

                    <Link key={id} href={link} className={`${router.pathname === link ? styles.mo : ' '}`}>
                        {name}
                    </Link>
                ))
            } */}

            
            <Link href="/">
                <div className={styles.home}>
                    <RxSketchLogo />
                </div>
            </Link>


            <Link href="/">
                <div className={styles.side}>
                    <RxDashboard />
                </div>
            </Link>


            <Link href="/customers">
                <div className={styles.side}>
                    <RxPerson />
                </div>
            </Link>

            <Link href="/orders">
                <div className={styles.side}>
                    <HiOutlineShoppingBag />
                </div>
            </Link>

            <Link href="/">
                <div className={styles.side}>
                    <FiSettings />
                </div>
            </Link>
            {/* <main>{children}</main> */}

        </div>
    );
}

export default Sidebar;
<div>Sidebar</div>