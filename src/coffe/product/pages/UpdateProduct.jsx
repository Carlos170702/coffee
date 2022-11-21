//icons
import { FiX } from 'react-icons/fi';

//hook
import { useUpdateProduct } from '../hooks/useUpdateProduct'
//css
import '../css/UpdateProduct.css'

export const UpdateProduct = ({ Product }) => {
    const { updateProduct, formState, updateProductPage, onInputChange, newImage, makeUpdateProduct } = useUpdateProduct();
    const { data } = Product

    return (
        <div className={`${updateProduct.status ? 'UpdateProduct' : 'isInactive'}`}>
            <FiX className='UpdateProduct__cancel' onClick={() => updateProductPage(null)} />
            <div className='newProductContainer'>
                <h2 className='newProductContainer__subtittle'>Actualizar producto</h2>
                <form className='newProductContainer__form'>
                    <div className='newProductContainer__form__data'>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name='name'
                            placeholder={data?.name}
                            onChange={onInputChange}
                            value={formState?.name}
                        />
                    </div>
                    <div className='newProductContainer__form__data'>
                        <label>Precio:</label>
                        <input
                            type="text"
                            name='price'
                            placeholder={data?.price}
                            onChange={onInputChange}
                            value={formState?.price}
                        />
                    </div>
                    <div className='newProductContainer__form__data'>
                        <label>Cantidad:</label>
                        <input
                            type="number"
                            name='stock'
                            placeholder={data?.stock}
                            onChange={onInputChange}
                            value={formState?.stock}
                        />
                    </div>
                    <div className='newProductContainer__form__data'>
                        <label>Descripcion:</label>
                        <textarea
                            name="description"
                            rows="2"
                            placeholder={data?.description}
                            onChange={onInputChange}
                            value={formState?.description}
                        ></textarea>
                    </div>
                    <div className='newProductContainer__form__data'>
                        <label>Imagen:</label>
                        <input
                            type="file"
                            accept="image/png,image/jpeg"
                            name='file'
                            onChange={newImage}
                        />
                    </div>
                    <div className='newProductContainer__form__data'>
                        <input
                            type="submit"
                            value={'Actualizar producto'}
                            onClick={(e) => makeUpdateProduct(e, data?._id)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
