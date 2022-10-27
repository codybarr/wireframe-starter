import cx from 'classnames'

export default function Section({ children = null, className = '' }) {
  return <section className={cx('p-6 md:p-12', className)}>{children}</section>
}
