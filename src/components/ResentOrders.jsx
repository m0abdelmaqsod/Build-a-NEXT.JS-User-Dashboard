import React from 'react'
import { data } from '../data/data';
import { FaShoppingBag } from "react-icons/fa"
import styles from '../styles/components/resentOrders.module.css'


const ResentOrders = () => {
    return (
        <div className={styles.ResentOrders}>
            <h1>Resent Orders</h1>
            <ul>
                {
                    data.map((order, id) => {
                        return (
                            <li key={id}>
                                <div className={styles.icon}><FaShoppingBag />
                                </div>
                                <div className={styles.priceOrName}>
                                    <p className={styles.price}>${order.total}</p>
                                    <p className={styles.name}>{order.name.first}</p>
                                </div>
                                <p className={styles.data}>{order.data}</p>
                            </li>
                        )
                    })}
            </ul>

        </div>
    );
}

export default ResentOrders;