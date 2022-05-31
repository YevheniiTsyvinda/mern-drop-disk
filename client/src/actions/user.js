import ax from "./api"

export const registration = async (email,password)=>{
    try {
        const response = await ax.post(`api/auth/registration`,
        {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}