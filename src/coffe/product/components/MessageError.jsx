import './css/messageError.css'

export const MessageError = ({ data }) => {
  const { titulo, messages } = data
  return (
    <div className="Error">
      <div className='Error__content'>
        <h2>{titulo}</h2>
        <ol>
          {
            messages.map((item, index) => (
              <li key={index}>{item.msg}</li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
