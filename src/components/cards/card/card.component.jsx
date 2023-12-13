import './card.style.scss';

export const Card = ({ itemData }) => {
    return (
        <div className='item' >
            <img src={itemData.imageUrl} alt='1' />
            <span>{itemData.name}</span>
        </div>
    )
}