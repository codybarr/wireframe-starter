import cx from 'classnames'

export default function Footer({ children = null, className = '' }) {
  return <footer className={cx('p-12', className)}>{children}</footer>
}
