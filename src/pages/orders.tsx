import { data } from '@/data/data';
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'



import styles from "../styles/orders.module.css"


const orders = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>Customers</h2>
                <h2>Welcom Back, Clint</h2>
            </div>

            <div className={styles.schedule}>
                <div className={styles.customers}>
                    <div className={styles.headSchedul}>
                        <span>Order</span>
                        <span>Status</span>
                        <span>Last Order</span>
                        <span>Method</span>
                    </div>

                    <ul>
                        {
                            data.map((order, id) => {
                                return (
                                    <li key={id}>
                                        <div className={styles.bodySchedul}>
                                            <div className={styles.icon}>
                                                <FaShoppingBag />
                                            </div>
                                            <div className={styles.priceOrName}>
                                                <p className={styles.price}>${order.total.toLocaleString()}</p>
                                                <p className={styles.name}>{order.name.first}</p>
                                            </div>
                                        </div>
                                        <p className={
                                            order.status == 'On Hold' ? styles.onHold : order.status == 'Processing' ? styles.processing : styles.completed
                                        }>
                                            <span>{order.status}</span>

                                        </p>
                                        <p className={styles.data}>{order.data}</p>
                                        <div className={styles.method}>
                                            <p>{order.method}</p>
                                            <BsThreeDotsVertical />
                                            </div>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default orders