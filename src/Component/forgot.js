import React from 'react';

const Forget = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <p>Enter your email address to receive a password reset link.</p>
            <form id="forgotPasswordForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};