import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/UserStyle';
import { auth } from '../../firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const UserPage = ({ navigation }) => {
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('loginpage');
			})
			.catch((error) => console.log(error));
	};

	const auth = getAuth();
	const user = auth.currentUser;


	useEffect(() => {
		const fetchData = async () => {
			const userQuery = query(
				collection(db, 'users'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(userQuery);
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
				if (doc.data().is_admin == true) {
					navigation.replace('Userpageadmin');
				}else{
					
				}
			});
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Your Account</Text>

			<View style={styles.container}>
				<TouchableOpacity
					style={styles.btnBackToHome}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.appButtonContainer1}
					onPress={() => navigation.navigate('progresspage')}
				>
					<Text style={styles.YourAccountText1}>Progress</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.appButtonContainer3}
					onPress={() => navigation.navigate('changepasswordpage')}
				>
					<Text style={styles.YourAccountText1}>Change Password</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.appButtonContainer2}
					onPress={() => handleSignOut()}
				>
					<Text style={styles.YourAccountText2}>Sign Out</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default UserPage;