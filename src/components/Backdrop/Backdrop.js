//Prop Types
import PropTypes from 'prop-types';

//Css
import classes from './Backdrop.module.css'

const Backdrop = ({show, clicked, style}) =>
{
	return (
		show
		? <div className={classes.Backdrop} onClick={clicked} style={{...style}}/>
		: null
	)
}

Backdrop.propTypes =
{
	show: PropTypes.bool,
	clicked: PropTypes.func,
	style: PropTypes.object,
};

export default Backdrop;