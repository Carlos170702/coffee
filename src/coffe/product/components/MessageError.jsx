import './css/messageError.css'

export const MessageError = ({ data }) => {
  console.log(data)

  const { titulo, message } = data

  return (
    <div className="Error">
      <div className='Error__content'>
        <h2>{titulo}</h2>
        <ol>
          {
            message.map((item, index) => (
              <li key={index}>{item.msg}</li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
