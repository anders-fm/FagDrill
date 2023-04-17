import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 120,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 30,
		fontFamily: 'PoppinsBold',
		top: 90,
		left: 22,
		position: 'absolute',
	},
	searchsection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgrey',
		borderRadius: 5,
		top: 120,
		width: 320,
		alignSelf: 'center',
		marginBottom: 10,
	},
	searchinput: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		backgroundColor: 'lightgrey',
		borderRadius: 5,
		color: '#424242',
		fontWeight: '600',
	},
	searchicon: {
		padding: 10,
	},
	title: {
		fontSize: 14,
		paddingHorizontal: 15,
		fontFamily: 'PoppinsSemiBold',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		top: 25,
		width: screenWidth,
		justifyContent: 'space-evenly',
		height: 100,
	},
	save: {
		width: 150,
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#B3BCF2',
	},
	savetext: {
		fontFamily: 'PoppinsSemiBold',
		fontSize: 14,
	},
	add: {
		width: 150,
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3F51B5',
	},
	addtext: {
		fontFamily: 'PoppinsSemiBold',
		fontSize: 14,
		color: '#ffffff',
	},
	questionscontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 5,
	},
	questions: {
		fontSize: 14,
		paddingHorizontal: 15,
		fontFamily: 'PoppinsSemiBold',
		marginBottom: 5,
	},
	viewall: {
		fontSize: 14,
		fontFamily: 'PoppinsSemiBold',
		color: '#3F51B5',
		paddingHorizontal: 30,
	},
	boxstyles: {
		borderColor: '#3F51B5',
		borderWidth: 0,
		borderBottomWidth: 1,
		marginTop: -10,
	},
	inputstyles: {
		color: 'grey',
		marginTop: 15,
	},
	create: {
		height: 60,
		width: 180,
		marginVertical: 20,
		borderRadius: 20,
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		fontFamily: 'PoppinsRegular',
		borderWidth: 2,
		borderColor: '#3F51B5',
		backgroundColor: '#FFFFFF',
	},
	createtext: {
		fontFamily: 'PoppinsBold',
		fontSize: 14,
		color: '#3F51B5',
	},
});
