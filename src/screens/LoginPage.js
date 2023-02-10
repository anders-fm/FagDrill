import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/LoginStyle';

const LoginPage = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Log In</Text>

			<View style={styles.inputViewEmail}>
				<Text>Email</Text>
			</View>
			<TextInput
				style={styles.TextInputEmail}
				onChangeText={(email) => setEmail(email)}
			/>

			<View style={styles.inputViewPassword}>
				<Text>Password</Text>
			</View>
			<TextInput
				style={styles.TextInputPassword}
				onChangeText={(password) => setPassword(password)}
			/>

			<View style={styles.loginBtn}>
				<Button
					title="Log In"
					color="white"
					fontWeight="bold"
					style={styles.loginBtn}
					onPress={() => navigation.navigate('homepage')}
				/>
			</View>

			<View style={styles.orText}>
				<Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
			</View>

			<View style={styles.signupBtn}>
				<Button
					title="SIGN UP"
					color="#2e216f"
					fontWeight="underline"
					style={styles.loginBtn}
					onPress={() => navigation.navigate('signuppage')}
				/>
			</View>
		</SafeAreaView>
	);
};

export default LoginPage;
