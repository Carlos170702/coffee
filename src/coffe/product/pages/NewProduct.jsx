// icons
import { FiX } from 'react-icons/fi'
import { MessageError } from '../components/messageError'

//hook
import { useNewProduct } from '../hooks/useNewProduct'

// css
import '../css/newproduct.css'
import { Loading } from '../../components'

export const NewProduct = ({ handleActive }) => {
    const { newImage, createNewProduct, onInputChange, formState, error, infError, isLoading } = useNewProduct()
    const { name, stock, price, description } = formState;
    return (
        <>
            {
                error && <MessageError data={infError} isLoading={isLoading} />
            }
            {
                isLoading && <Loading />
            }
            
            <div className='newProduct'>
                <FiX className='newProduct__cancel' onClick={handleActive} />
                <div className='newProductContainer'>
                    <h2 className='newProductContainer__subtittle'>Nuevo producto</h2>
                    <form className='newProductContainer__form'>
                        <div className='newProductContainer__form__data'>
                            <label>Nombre:</label>
                            <input required type="text" name='name' value={name} onChange={onInputChange} />
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Precio:</label>
                            <input required type="text" name='price' value={price} onChange={onInputChange} />
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Cantidad:</label>
                            <input required type="number" name='stock' value={stock} onChange={onInputChange} />
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Descripcion:</label>
                            <textarea required name="description" rows="2" value={description} onChange={onInputChange}></textarea>
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Imagen:</label>
                            <input type="file" accept="image/png,image/jpeg" name='file' onChange={newImage} required />
                        </div>

                        <div className='newProductContainer__form__data'>
                            <input type="submit" value={'Nuevo producto'} onClick={(e) => {
                                const data = createNewProduct(e, formState, handleActive)
                            }} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


