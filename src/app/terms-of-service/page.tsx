import styles from '../css/layout.module.css';

export default function ToSPage() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Terms of Service</h1>
            <div className={styles.flex}>
                <div className={`${styles.left} ${styles.bgOpacity}`}>
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
                <div className={`${styles.right} ${styles.bgOpacity}`}>
                    <h3 className={styles.subtitle}>Delivery Time</h3>
                    <p>
                        The completion time for the commission may vary between 3 days and a week once I start working on yours. If your commission has a deadline,
                        please specify it beforehand so we can discuss it. You are allowed to request updates on the progress at any time. Usually, I will send the
                        sketch or progress for your approval before proceeding with any changes.
                    </p>
                    <h3 className={styles.subtitle}>Copyright</h3>
                    <p>
                        I have the right to post the final product on my social media, unless we have previously discussed otherwise. The finished illustration is
                        intended for personal use only. If you require commercial use rights, this must be stated in advance and discuss price.<br></br><br></br>
                        Thank you for your interest in commissioning me!
                    </p>
                </div>
            </div>
        </main>
    )
}