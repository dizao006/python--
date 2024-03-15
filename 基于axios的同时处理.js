const ins = axios.create({
    baseURL: 'https://study.duyiedu.com',
})
ins.interceptors.response.use(
    function (resp) {
        const token = resp.headers.Authorization
        if (token) {
            localStorage.setItem('token', token)
        }
        if (resp.data.code !== 0) {
            alert(resp.data.msg)
        }
    },
    function (tep) {
        return tep.data.data
    },
    function (error) {
        alert(error.message)
    }
)
ins.interceptors.request.use(function (s) {
     const token = localStorage.getItem('token') 
     if(token){
        s.headers.Authorization = 'Bearer ' + token
     }
     return s;
    },
)