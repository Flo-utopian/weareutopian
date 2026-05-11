import styles from './Logo.module.css'

interface LogoProps {
  size?: number
}

export default function Logo({ size = 2 }: LogoProps) {
  return (
    <div
      className={styles.logo}
      style={{ '--sz': `${size}rem` } as React.CSSProperties}
    >
      <span className={styles.f}>F</span>
      <span className={styles.l}>L</span>
      <span className={styles.o}>O</span>
    </div>
  )
}
