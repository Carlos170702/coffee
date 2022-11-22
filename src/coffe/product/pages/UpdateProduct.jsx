//icons
import { FiX } from 'react-icons/fi';

//hook
import { useUpdateProduct } from '../hooks/useUpdateProduct'
//css
import '../css/UpdateProduct.css'
import { Loading } from '../../components';

export const UpdateProduct = () => {
    const { isLoading, error, infError, updateProduct, formState, updateProductPage, onInputChange, newImage, makeUpdateProduct } = useUpdateProduct();

    return (
        <>
            {
                isLoading && <Loading />
            }
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
                                placeholder={updateProduct.data?.name}
                                onChange={onInputChange}
                                value={formState?.name}
                            />
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Precio:</label>
                            <input
                                type="text"
                                name='price'
                                placeholder={updateProduct.data?.price}
                                onChange={onInputChange}
                                value={formState?.price}
                            />
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Cantidad:</label>
                            <input
                                type="number"
                                name='stock'
                                placeholder={updateProduct.data?.stock}
                                onChange={onInputChange}
                                value={formState?.stock}
                            />
                        </div>
                        <div className='newProductContainer__form__data'>
                            <label>Descripcion:</label>
                            <textarea
                                name="description"
                                rows="2"
                                placeholder={updateProduct.data?.description}
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
                                onClick={(e) => makeUpdateProduct(e, updateProduct.data?._id)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
