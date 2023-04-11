const isAdminOrSameUser = function (adminRoleName, userRoleName, request) {
    let isAdmin = request.decodedToken.role == 'Admin'
    let isAuthorizedUser =
        request.decodedToken.role == userRoleName &&
        request.decodedToken.id == request.params.id
    let authorized = isAdmin || isAuthorizedUser
    return authorized
}

module.exports = { isAdminOrSameUser }
