import Link from 'next/link'
import { 
  StyledButtonSolid,
  StyledButtonOutline 
} from './style'

interface ButtonProps {
  variant?: string
  color?: 'primary' | 'default'
  label?: React.ReactElement | string
  url: string | ""
  onClick?: () => void
}



const Button = ({
  variant,
  label, 
  color,
  url,
  onClick,
}: ButtonProps) => {

console.log(variant)

  return(
    <Link href={url}>
      {variant === "outline" ? (
        <StyledButtonOutline
          border={color === 'primary' ? 'solid 2px #007eff' : 'solid 2px #3B4252'}
          colorfont={color === 'primary' ? '#007eff' : '#3B4252'}
          colorbackground={color === 'primary' ? '#007eff' : 'transparent'}
          onClick={onClick}
        >
          <span>
            {label}
          </span>

        </StyledButtonOutline>
      ): (
        <StyledButtonSolid
          colorbackground={color === 'primary' ? '#007eff' : 'transparent'}
          colorfont={color === 'primary' ? '#FFFFFF' : '#3B4252'}
          onClick={onClick}
        >
          <span>
            {label}
          </span>

        </StyledButtonSolid>
      )}
      
    </Link>
  )
};

export default Button;
