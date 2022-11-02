import cx from 'classnames'

export default function Block({ as = 'div', className = '', children = null }) {
  const As = as
  return <As className={className}>{children}</As>
}

export const Section = ({ className, ...props }) => (
  <Block as="section" className={cx('p-6 md:p-12', className)} {...props} />
)
