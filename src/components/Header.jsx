import cx from 'classnames'
import LogoUrl from 'images/logo.png'

export default function Header({ title = '', className = '' }) {
  return (
    <header className={cx('flex flex-col items-center p-6 md:p-12', className)}>
      <img src={LogoUrl} className="w-16" />
      <h1 className="text-3xl text-center md:text-4xl tracking-huge">
        {title}
      </h1>
    </header>
  )
}
