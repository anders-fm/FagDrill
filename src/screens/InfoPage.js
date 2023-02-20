import { useEffect, useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/InfoStyle';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { GoBack } from '../components/GoBack';

const InfoPage = ({ route, navigation }) => {
	// Contains data from the info field on a specified quiz in the database
	const [info, setInfo] = useState();

	// Update info state with information on specified quiz
	useEffect(() => {
		const fetchData = async () => {
			// Get data from firestore collection quizzes with specified quiz from route parameter
			const docRef = doc(db, 'quizzes', route.params.quiz);
			const docSnap = await getDoc(docRef);
			// If query is successful, update info state, otherwise log an error
			docSnap.exists()
				? setInfo(docSnap.data().info)
				: console.log('No such document');
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<GoBack destination={'homepage'} />
				<View style={styles.textWrapper}>
					<Text style={styles.levelText}>Level X</Text>
					<Text style={styles.Infotext}>
						Øving til sert nr {route.params.number}
					</Text>
					{info && <Text style={styles.descriptionText}>{info}</Text>}
				</View>
				<TouchableOpacity
					style={styles.startBtn}
					onPress={() =>
						navigation.navigate('playpage', {
							number: route.params.number,
							quiz: route.params.quiz,
						})
					}
				>
					<Text style={styles.btnText}>START</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default InfoPage;
