const GQL_PROCESS_ = {
    input: 128,
    result: "",
    user:  { id: 1},
}
export const GQL_PROCESS = {
    process: GQL_PROCESS_
}
export const GQL_PROCESSES = {
    processes: [ GQL_PROCESS_ ]
}
export const GQL_PROCESS_PAGINATION = {
    processPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        processes: [ GQL_PROCESS_ ]
    }
}

export const API_PROCESS = {
    input: 128,
    result: "",
    user_id:  1,
}
export const API_PROCESSES = [API_PROCESS]

const GQL_USER_ = {
    username: "email@test.com",
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    isActive: true,
}
export const GQL_USER = {
    user: GQL_USER_
}
export const GQL_USERS = {
    users: [ GQL_USER_ ]
}
export const GQL_USER_PAGINATION = {
    userPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        users: [ GQL_USER_ ]
    }
}

export const API_USER = {
    username: "email_1@test.com",
    first_name: "FirstName",
    last_name: "LastName",
    email: "email_1@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    is_active: false,
}
export const API_USERS = [API_USER]