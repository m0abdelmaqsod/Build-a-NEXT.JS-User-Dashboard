import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '@/data/data';
import styles from '../styles/customers.module.css';


const customers = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Customers</h2>
        <h2>Welcom Back, Clint</h2>
      </div>

      <div className={styles.schedule}>
        <div className={styles.customers}>
          <div className={styles.headSchedul}>
            <span>Name</span>
            <span>Email</span>
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
                        <BsPersonFill />
                      </div>

                      <p className={styles.name}>{order.name.first + ' ' + order.name.last}</p>
                    </div>
                    <p className={styles.gmail}>{order.name.first}@gmail.com</p>
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

export default customers;