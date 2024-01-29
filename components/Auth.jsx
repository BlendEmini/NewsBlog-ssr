// components/Auth.js
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser();
                setUser(user);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        getUser();

        const authListener = supabase.auth.onAuthStateChange(
            (event, session) => {
                getUser();
            }
        );

        // No explicit unsubscribe

        return () => {
            // Cleanup logic, if needed
        };
    }, []);

    const signIn = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error(error);
                throw error;
            }

            setUser(user);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            await supabase.auth.signOut();
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return children({ user, signIn, signOut, loading });
};

export default Auth;
