
type signUpType = {
    id?: number
    name: string
    email: string
    password: string
}

export const userSignUp = async (body: signUpType) => {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            name:body.name,
            email: body.email,
            password: body.password
        })
    });

    const data = await response.json()
    return data

}