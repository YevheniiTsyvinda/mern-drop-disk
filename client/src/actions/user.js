import ax from "./api"

export const registration = async (email,password)=>{
    try {
        const response = await ax.post(`api/auth/registration`,
        {
            email,
            password
        })
        return response.data;
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = async (email,password)=>{
    try {
        const response = await ax.post(`api/auth/login`,
        {
            email,
            password
        })
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const auth = async ()=>{
    try {
        const response = await ax.get(`api/auth/auth`,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (e) {
        localStorage.removeItem("token");
    }
}