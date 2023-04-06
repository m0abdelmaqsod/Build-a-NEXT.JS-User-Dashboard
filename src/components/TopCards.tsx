import styles from '../styles/components/topCards.module.css'






const TopCards = () => {
    return (
        <div className={styles.statistics}>

            <div className={styles.statistic }>
                <div className={styles.info}>
                <p className={styles.price}>$8,768</p>
                <p className={styles.typeOfInfo}>Daily Revenue</p>
                </div>
                <div className={styles.rate}>
                    <p>+18%</p>
                </div>
            </div>


            <div className={styles.statistic }>
                <div className={styles.info}>
                <p className={styles.price}>$1,437,876</p>
                <p className={styles.typeOfInfo}>Customer</p>
                </div>
                <div className={styles.rate}>
                    <p>+11%</p>
                </div>
            </div>


            <div className={styles.statistic }>
                <div className={styles.info}>
                <p className={styles.price}>$11,437</p>
                <p className={styles.typeOfInfo}>YTD Revenue</p>
                </div>
                <div className={styles.rate}>
                    <p>+17%</p>
                </div>
            </div>

        </div>
    );
}

export default TopCards;