export enum Message {
    // Author Messages
    AUTHOR_ADDED = 'Author has been added',
    AUTHOR_UPDATED = 'Author has been updated',
    AUTHOR_DELETED = 'Author has been deleted',

    // Book Messages
    BOOK_ADDED = 'Book has been added',
    BOOK_UPDATED = 'Book has been updated',
    BOOK_DELETED = 'Book has been deleted',

    // User Messages
    USER_ALREADY_EXISTS = 'This user already exists',
    USER_CREATED = 'Your user has been created successfully',

    // Session Messages
    SESSION_EXPIRED = 'Your session expired',

    // Action Messages
    CHANGE_SUCCESS = 'Your changes has been successfully',
    GENERAL_ERROR = 'Something went wrong!',
    ACTION_DELETE = 'Has been deleted.',
    LOGOUT = 'You has been logout successfully',
    OOPS = 'Oops...'

}