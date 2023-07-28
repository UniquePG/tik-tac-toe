// import Icon from '../icons/Icon'
import Icon from '../icons/icon';
import './card.css'

function Card({ gameEnd, player, onPlay, index }){
    let icon = <Icon />;    // default icon of pen

    if(player == 'X'){
        icon = <Icon name='cross' />
    }
    else if( player == 'O'){
        icon = <Icon name='circle' />
    }


    return (
        <div className='card' onClick={ () => !gameEnd && player == '' && onPlay(index)} >
            {icon}
        </div>
    )


}

export default Card;