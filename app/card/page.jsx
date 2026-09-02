import styles from './Card.module.css'
export default function CardPage(){
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Card Title</h1>
            <p className={styles.description}>Card Description</p>
        </div>
    )
}
