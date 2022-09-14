export const InputData = ({ nameDato, onChangeDatas }) => {

    const onChangeData = (e) => {
        onChangeDatas({
            name: e.target.name,
            value: e.target.value
        })
    }

    return (
        <div className="login__inputBox">
            <div className="login__box">
                <div className="login_icon">{nameDato.icon}</div>
                <div className='login__contInput'>
                    <input 
                        onChange={ onChangeData } 
                        className='login__input' 
                        name={ nameDato.name}
                        type={`${nameDato.name === `Password` ? `Password` : `text`}`} 
                        required="required" 
                    />

                    <p className='login__type '>{nameDato.name}</p>
                </div>
            </div>
        </div>
    )
}

