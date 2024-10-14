import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Layout = () => {
    const router = useRouter();

    useEffect(() => {
        // Navigate to the home screen after 3 seconds
        const timer = setTimeout(() => {
            router.replace('/home');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'none', // Disable slide animation for all screens
            }}
        >
            <Stack.Screen 
                name="index" 
                options={{
                    animation: 'none', // Disable animation for splash screen
                }}
            />
            <Stack.Screen 
                name="home" 
                options={{
                    animation: 'none', // Disable animation for home screen
                }}
            />
            <Stack.Screen 
                name="settings" 
                options={{
                    presentation: 'modal',
                    headerShown: true,
                    headerTitle: 'Settings',
                }} 
            />
            {/* Add other screens here with their specific options */}
        </Stack>
    );
}

export default Layout;