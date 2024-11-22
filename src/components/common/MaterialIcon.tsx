import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const MaterialIcon = ({icon,color,size}:{icon:string, color?:string, size?:number}) => {
    return (
        <Icon name={icon} size={size??25} color={color??colors.black} />
    );
}

export default MaterialIcon;