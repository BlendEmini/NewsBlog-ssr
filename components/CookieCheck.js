// CookieCheck.js
import React, { useEffect, useState } from "react";

const CookieCheck = () => {
    const [cookiesEnabled, setCookiesEnabled] = useState(true);

    useEffect(() => {
        // Attempt to set a test cookie
        document.cookie = "testCookie=1";

        // Check if the test cookie was set
        const cookiesAreEnabled = document.cookie.indexOf("testCookie=") !== -1;

        // Clear the test cookie
        document.cookie = "testCookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        setCookiesEnabled(cookiesAreEnabled);
    }, []);

    return (
        <div>
            {!cookiesEnabled && (
                <div className="cookies-not-enabled">
                    <p>
                        Cookies are disabled in your browser. Please enable
                        cookies to use all features of this website.
                    </p>
                </div>
            )}
        </div>
    );
};

export default CookieCheck;
