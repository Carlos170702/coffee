export const CardInf = ({data}) => {
    const { name, about } = data
    return (
        <>
            <div className="carProducts__data__product">
                <h4>{ name }</h4>
                <p>{ about }</p>
            </div>
        </>
    )
}
