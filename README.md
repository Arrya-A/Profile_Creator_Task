Profile Creator - Next.js Project

The application will allow users to input their profile details and validate the password based on specified policies

# Features

- Collects user profile data: Name, Email, Phone (optional), Password
- Validates fields:
    - Required: Name, Email, Password
    - Email must be a valid email address format
    - Phone must be numeric if provided
    - Password must:
        - Must be at least 8 characters long
        - Must contain at least one uppercase letter (A-Z)
        - Must contain at least one lowercase letter (a-z)
        - Must include at least one numeric digit (0-9)
        - Must include at least one special character (e.g., @, #, $, %, etc.)
- Validation and Error Messages
- Responsive UI
- Confirmation message on successful submission



# To run
navigate to project file using command,
    cd profile_creator

install using command,
    npm install

run using the command,
    npm run dev
    
navigate to http://localhost:3000 in your browser
