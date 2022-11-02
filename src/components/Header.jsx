import Block from 'components/shared.jsx'
import LogoUrl from 'images/logo.png'

export default function Header({ title = '' }) {
  return (
    <Block as="header" className={'flex flex-col items-center p-6 md:p-12'}>
      <img src={LogoUrl} className="w-16" />
      <h1 className="text-3xl text-center md:text-4xl tracking-huge">
        {title}
      </h1>
    </Block>
  )
}
