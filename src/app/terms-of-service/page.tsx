import styles from '../css/layout.module.css';

export default function ToSPage() {
    return (
        <>
            <h1 className={styles.title}>Terms of Service</h1>
            <div className={styles.flex}>
                <div className={styles.left}>
                    <h3 className={styles.subtitle}>Contact</h3>
                    <p>
                    Send me a message via Twitter, Steam with a clear reference of the character, pose, background or props you would like on the illustration.
                    Payment is through Paypal, You must send the full payment before I start working on the commission.
                    </p>
                    <h3 className={styles.subtitle}>Terms of Service</h3>
                    <p>
                    Once I start with your commission, refunds are not accepted. You're only getting a digital illustration, the final product will be sent on
                    email or private message, I won't remove my watermarks on my Illustrations. I will consistently provide progress updates on the illustration
                    (sketch, lineart, base color and shading), allowing the client to add minor suggestions or adjustments. (Maximum response time: 3 days)
                    After the commission is finished, you can do whatever you want without removing the watermark.
                    </p>
                </div>
            </div>
        </>
    )
}