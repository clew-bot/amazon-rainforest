
interface HeaderProps {
    content: string;
    }

const Header = ({content}: HeaderProps) => {
  return (
    <h2 className="font-display font-bold text-black text-6xl text-center py-1 h-screen flex justify-center items-center">{content}</h2>
  )
}

export default Header