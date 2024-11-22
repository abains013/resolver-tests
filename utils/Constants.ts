// Class to contain data to run various tests
export class Constants {
    public static readonly INVALID_EMAIL_PASSWORDS = [
        {
            EMAIL: '',
            PASSWORD: '',
            ERROR_MESSAGE: 'Email and password are required'
        },
        {
            EMAIL: 'invaliduser@example.com',
            PASSWORD: 'invalidpassword',
            ERROR_MESSAGE: 'Invalid credentials'
        },
        {
            EMAIL: '',
            PASSWORD: 'invalidpassword',
            ERROR_MESSAGE: 'Email is required'
        },
        {
            EMAIL: 'validuser@example.com',
            PASSWORD: '',
            ERROR_MESSAGE: 'Password is required'
        },
    ];

    public static readonly LIST_ITEMS = [
        {
            TEXT: 'List Item 1',
            BADGE: '3'
        },
        {
            TEXT: 'List Item 2',
            BADGE: '6'
        },
        {
            TEXT: 'List Item 3',
            BADGE: '9'
        },
    ]
}