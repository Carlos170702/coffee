import './styles.css'

export const Error = ({ aviso }) => {
  return (
    <>
        <div className="error">
            <p className='error__p'>{ aviso }</p>
        </div>
    </>
  )
}
